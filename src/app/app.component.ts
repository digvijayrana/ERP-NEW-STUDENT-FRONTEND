import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, forkJoin, map, of } from 'rxjs';

import { AcademicYear, AttendanceRecord, AuthUser, ClassRoom, DashboardSummary, ErpRole, Exam, ExamClassReport, ExamSubmission, FeeInvoice, PayrollRecord, Student, StudentProfile, Teacher, TimetableRow, UserRole } from './core/models';
import { extractApiMessage, ListQueryParams } from './core/api-response';
import { APP_CONSTANTS, ROLES, EXAM_DIFFICULTY, ATTENDANCE_STATUS, FEE_STATUS, PAYMENT_MODES } from './core/constants';
import { AttendancePageComponent } from './pages/attendance-page/attendance-page.component';
import { ClassesPageComponent } from './pages/classes-page/classes-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ExamsPageComponent } from './pages/exams-page/exams-page.component';
import { FeesPageComponent } from './pages/fees-page/fees-page.component';
import { PayrollPageComponent } from './pages/payroll-page/payroll-page.component';
import { PromotionPageComponent } from './pages/promotion-page/promotion-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { TeachersPageComponent } from './pages/teachers-page/teachers-page.component';
import { TimetablePageComponent } from './pages/timetable-page/timetable-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ToastContainerComponent } from './shared/toast-container.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog.component';
import { ErpApiService } from './services/erp-api.service';
import { ListingStateService } from './services/listing-state.service';
import { PermissionAction, PermissionService } from './services/permission.service';
import { ToastService } from './services/toast.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { exportRowsToCsv, exportRowsToPdf, LIST_FILTER_KEYS, sortItems, SortDirection } from './core/listing.util';

type TabKey = 'dashboard' | 'students' | 'classes' | 'teachers' | 'fees' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'profile' | 'users';
type ListKey = 'dashboardStudents' | 'dashboardAttendance' | 'dashboardTeachers' | 'dashboardPayroll' | 'dashboardTimetable' | 'students' | 'classes' | 'years' | 'teachers' | 'invoices' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'examResults' | 'users' | 'profileExams' | 'profileFees';
type TabIcon = 'dashboard' | 'students' | 'classes' | 'teachers' | 'fees' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'profile' | 'users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashboardPageComponent,
    StudentsPageComponent,
    ClassesPageComponent,
    TeachersPageComponent,
    FeesPageComponent,
    PayrollPageComponent,
    PromotionPageComponent,
    AttendancePageComponent,
    TimetablePageComponent,
    ExamsPageComponent,
    StudentProfilePageComponent,
    UsersPageComponent,
    SpinnerComponent,
    ToastContainerComponent,
    ConfirmDialogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private readonly api = inject(ErpApiService);
  private readonly fb = inject(FormBuilder);
  readonly permissionService = inject(PermissionService);
  private readonly listingState = inject(ListingStateService);
  private readonly toast = inject(ToastService);
  private readonly confirmDialog = inject(ConfirmDialogService);

  activeTab: TabKey = 'dashboard';
  loading = false;
  submitting = false;
  message = '';
  token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
  currentUser: AuthUser | null = this.readStoredUser();
  pageVm = this;
  isProfileMenuOpen = false;
  isSidebarCollapsed = false;
  summary?: DashboardSummary;
  years: AcademicYear[] = [];
  classes: ClassRoom[] = [];
  teachers: Teacher[] = [];
  students: Student[] = [];
  invoices: FeeInvoice[] = [];
  payrolls: PayrollRecord[] = [];
  attendance: AttendanceRecord[] = [];
  holidays: Array<{ _id: string; date: string; name: string; description?: string }> = [];
  timetable: TimetableRow[] = [];
  exams: Exam[] = [];
  examResults: ExamSubmission[] = [];
  examReport: ExamClassReport | null = null;
  activeExamAttempt: { exam: Exam; submission: ExamSubmission } | null = null;
  generatingExam = false;
  examPdfFile: File | null = null;
  selectedLoginRole: UserRole = 'admin';
  users: Array<AuthUser & { _id?: string; isActive?: boolean }> = [];
  roles: ErpRole[] = [];
  permissionSchema: { modules: string[]; actions: string[] } = { modules: [], actions: [] };
  selectedRoleSlug = '';
  editablePermissions: Record<string, Record<string, boolean>> = {};
  roleForm = this.fb.group({
    slug: ['', Validators.required],
    name: ['', Validators.required],
    description: ['']
  });
  studentProfile: StudentProfile | null = null;
  profileStudentId = '';
  profileLoading = false;
  showMyProfile = false;
  selfAttendanceMarked = false;
  selfAttendanceStatus: string | null = null;
  selfAttendanceLoading = false;
  viewingExamResult: ExamSubmission | null = null;
  parentSelectedChild = '';
  parentLinkedStudentIds = new Set<string>();
  selectedStudentIds = new Set<string>();
  selectedStudentId = '';
  selectedStudentDocuments: Array<{ _id?: string; type: string; title: string; fileUrl: string; storageKey?: string; storageProvider: 'local' | 's3'; mimeType?: string; uploadedAt?: string; status?: string; rejectReason?: string }> = [];
  files: Record<string, File | FileList | null> = {};

  private readonly documentShape = {
    type: '',
    title: '',
    fileUrl: '',
    storageProvider: 'local' as const,
    mimeType: '',
    uploadedAt: ''
  };
  editingStudentId = '';
  editingTeacherId = '';
  viewingTeacher: Teacher | null = null;
  editingClassId = '';
  editingAcademicYearId = '';
  editingPayrollId = '';
  financeRangeDays = APP_CONSTANTS.DEFAULT_FINANCE_RANGE_DAYS;
  readonly financeRanges = APP_CONSTANTS.FINANCE_RANGES;
  readonly pageSize = APP_CONSTANTS.PAGE_SIZE;
  pageSizes: Partial<Record<ListKey, number>> = {};
  listSort: Partial<Record<ListKey, { field: string; dir: SortDirection }>> = {};
  readonly serverPagedKeys: ListKey[] = ['students', 'classes', 'years', 'teachers', 'users'];
  listingRows: Partial<Record<ListKey, unknown[]>> = {};
  listingTotals: Partial<Record<ListKey, number>> = {};
  listingLoading: Partial<Record<ListKey, boolean>> = {};
  readonly filters = {
    studentSearch: '',
    studentClass: '',
    studentYear: '',
    studentSection: '',
    studentStatus: '',
    studentAdmissionFrom: '',
    studentAdmissionTo: '',
    classSearch: '',
    classYear: '',
    classStatus: '',
    yearSearch: '',
    yearStatus: '',
    teacherSearch: '',
    teacherStatus: '',
    invoiceSearch: '',
    invoiceStatus: '',
    invoiceYear: '',
    invoiceClass: '',
    invoiceMonth: '',
    payrollSearch: '',
    payrollStatus: '',
    attendanceSearch: '',
    attendanceClass: '',
    attendanceStudent: '',
    timetableSearch: '',
    examSearch: '',
    examStatus: '',
    attendanceStatus: '',
    userSearch: '',
    userRole: '',
    userStatus: '',
    examResultSearch: '',
    examResultGrade: '',
    profileSearch: '',
    profileClass: '',
    profileExamSearch: '',
    profileFeeSearch: '',
    profileFeeStatus: ''
  };
  pages: Record<ListKey, number> = {
    dashboardStudents: 1,
    dashboardAttendance: 1,
    dashboardTeachers: 1,
    dashboardPayroll: 1,
    dashboardTimetable: 1,
    students: 1,
    classes: 1,
    years: 1,
    teachers: 1,
    invoices: 1,
    payroll: 1,
    promotion: 1,
    attendance: 1,
    timetable: 1,
    exams: 1,
    examResults: 1,
    users: 1,
    profileExams: 1,
    profileFees: 1
  };

  readonly loginRoles: Array<{ key: UserRole; label: string; description: string; placeholder: string; hint: string }> = [
    { key: 'admin', label: 'Administrator', description: 'Full school control', placeholder: 'admin@schoolerp.local', hint: 'Manage admissions, finance, payroll, and users.' },
    { key: 'teacher', label: 'Teacher', description: 'Classes & AI exams', placeholder: 'teacher@schoolerp.local', hint: 'Mark attendance, build timetables, and publish unit tests.' },
    { key: 'student', label: 'Student', description: 'Learning portal', placeholder: 'student@schoolerp.local', hint: 'View fees, timetable, and attempt AI-generated exams.' },
    { key: 'parent', label: 'Parent', description: 'Child progress', placeholder: 'parent@schoolerp.local', hint: 'Track your child attendance, fees, and exam results.' }
  ];

  readonly allTabs: Array<{ key: TabKey; label: string; icon: TabIcon; roles: UserRole[] }> = [
    { key: 'dashboard', label: 'Dashboard', icon: 'dashboard', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'students', label: 'Students', icon: 'students', roles: ['admin', 'teacher'] },
    { key: 'classes', label: 'Classes & Sections', icon: 'classes', roles: ['admin', 'teacher'] },
    { key: 'teachers', label: 'Teachers', icon: 'teachers', roles: ['admin', 'teacher'] },
    { key: 'fees', label: 'Fees', icon: 'fees', roles: ['admin', 'student', 'parent'] },
    { key: 'payroll', label: 'Payroll', icon: 'payroll', roles: ['admin'] },
    { key: 'attendance', label: 'Attendance', icon: 'attendance', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'timetable', label: 'Timetable', icon: 'timetable', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'exams', label: 'AI Exams', icon: 'exams', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'profile', label: 'Student Profile', icon: 'profile', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'promotion', label: 'Promotions', icon: 'promotion', roles: ['admin'] },
    { key: 'users', label: 'Users & Roles', icon: 'users', roles: ['admin'] }
  ];

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['teacher', Validators.required],
    teacher: [''],
    student: [''],
    linkedStudent: [''],
    linkedStudents: [[]]
  });

  academicYearForm = this.fb.group({
    name: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    isActive: [false]
  });

  classForm = this.fb.group({
    name: ['', Validators.required],
    section: [APP_CONSTANTS.DEFAULT_SECTION, Validators.required],
    capacity: [APP_CONSTANTS.DEFAULT_CAPACITY, Validators.required],
    academicYear: ['', Validators.required],
    classTeacher: [''],
    monthlyFee: [0, [Validators.required, Validators.min(0)]],
    status: ['active' as 'active' | 'inactive', Validators.required]
  });

  teacherForm = this.fb.group({
    employeeCode: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    phone: ['', [Validators.required, Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)]],
    email: [''],
    aadhaarNumber: ['', Validators.pattern(APP_CONSTANTS.AADHAAR_PATTERN)],
    qualification: [''],
    baseSalary: [0, [Validators.required, Validators.min(0)]]
  });

  admissionForm = this.fb.group({
    admissionNumber: [''],
    admissionDate: [{ value: new Date().toISOString().slice(0, 10), disabled: true }],
    firstName: ['', Validators.required],
    lastName: [''],
    gender: ['male', Validators.required],
    dateOfBirth: ['', Validators.required],
    bloodGroup: [''],
    category: [''],
    nationality: ['Indian'],
    motherName: [''],
    aadhaarNumber: ['', Validators.pattern(APP_CONSTANTS.AADHAAR_PATTERN)],
    udisePenId: [''],
    line1: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    guardianName: ['', Validators.required],
    guardianRelation: [APP_CONSTANTS.DEFAULT_GUARDIAN_RELATION, Validators.required],
    guardianPhone: ['', [Validators.required, Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)]],
    academicYear: ['', Validators.required],
    classRoom: ['', Validators.required],
    rollNumber: [''],
    studentStatus: [{ value: 'active', disabled: true }],
    hasPreviousSchool: ['no' as 'yes' | 'no'],
    previousSchool: [''],
    previousSchoolBoard: [''],
    previousSchoolPercentage: [''],
    previousSchoolRollNumber: [''],
    previousSchoolAddress: [''],
    previousSchoolLastClass: [''],
    previousSchoolYearOfPassing: [''],
    previousSchoolReasonForLeaving: [''],
    previousSchoolTcNumber: [''],
    previousSchoolTcDate: ['']
  });

  feeForm = this.fb.group({
    student: ['', Validators.required],
    academicYear: ['', Validators.required],
    classRoom: ['', Validators.required],
    invoiceNumber: [''],
    dueDate: ['', Validators.required],
    label: [APP_CONSTANTS.DEFAULT_FEE_LABEL, Validators.required],
    amount: [0, [Validators.required, Validators.min(0)]],
    discount: [0, Validators.min(0)],
    fine: [0, Validators.min(0)]
  });

  paymentForm = this.fb.group({
    invoiceId: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(1)]],
    mode: [PAYMENT_MODES.CASH, Validators.required],
    referenceNumber: ['']
  });

  payrollForm = this.fb.group({
    teacher: ['', Validators.required],
    month: [new Date().getMonth() + 1, Validators.required],
    year: [new Date().getFullYear(), Validators.required],
    basicSalary: [0, [Validators.required, Validators.min(0)]],
    allowances: [0, Validators.min(0)],
    deductions: [0, Validators.min(0)]
  });

  promotionForm = this.fb.group({
    fromAcademicYear: ['', Validators.required],
    toAcademicYear: ['', Validators.required],
    toClassRoom: ['', Validators.required]
  });

  attendanceForm = this.fb.group({
    student: ['', Validators.required],
    classRoom: ['', Validators.required],
    academicYear: ['', Validators.required],
    date: [new Date().toISOString().slice(0, 10), Validators.required],
    status: [ATTENDANCE_STATUS.PRESENT, Validators.required],
    remarks: ['']
  });

  timetableForm = this.fb.group({
    classRoom: ['', Validators.required],
    academicYear: ['', Validators.required],
    dayOfWeek: ['monday', Validators.required],
    startTime: ['09:00', Validators.required],
    endTime: ['09:45', Validators.required],
    subject: ['', Validators.required],
    teacher: ['', Validators.required],
    room: ['']
  });

  examForm = this.fb.group({
    title: ['', Validators.required],
    subject: ['', Validators.required],
    chapter: ['', Validators.required],
    bookReference: [''],
    additionalContext: [''],
    academicYear: ['', Validators.required],
    classRoom: ['', Validators.required],
    difficulty: [EXAM_DIFFICULTY.MEDIUM, Validators.required],
    questionCount: [APP_CONSTANTS.DEFAULT_EXAM_QUESTION_COUNT, Validators.required],
    durationMinutes: [APP_CONSTANTS.DEFAULT_EXAM_DURATION, Validators.required]
  });

  examAttemptForm = this.fb.group({});

  ngOnInit(): void {
    if (this.currentUser) {
      this.permissionService.setPermissions(this.currentUser.permissions);
      this.activeTab = 'dashboard';
      if (this.currentUser.role === 'parent') {
        this.parentSelectedChild = this.currentUser.linkedStudents?.[0] || this.currentUser.linkedStudent || '';
      }
      this.refresh();
      this.restoreAllListingStates();
      this.api.me().subscribe({
        next: (user) => {
          this.currentUser = user;
          this.permissionService.setPermissions(user.permissions);
          localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
        }
      });
    }
  }

  get tabs(): Array<{ key: TabKey; label: string; icon: TabIcon }> {
    if (!this.currentUser) return [];
    return this.allTabs
      .filter((tab) => this.permissionService.canViewTab(tab.key, this.currentUser!.role))
      .map(({ key, label, icon }) => ({ key, label, icon }));
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'admin' || this.currentUser?.role === 'super_admin';
  }

  get isSuperAdmin(): boolean {
    return this.currentUser?.role === 'super_admin';
  }

  can(module: string, action: PermissionAction): boolean {
    return this.permissionService.can(module, action, this.currentUser?.role);
  }

  get isTeacher(): boolean {
    return this.currentUser?.role === 'teacher';
  }

  get activeAcademicYear(): AcademicYear | undefined {
    return this.years.find((y) => y.status === 'active' || y.isActive);
  }

  yearStatus(year: AcademicYear): 'draft' | 'active' | 'closed' {
    if (year.status) return year.status;
    return year.isActive ? 'active' : 'draft';
  }

  applyActiveYearDefaults(): void {
    const active = this.activeAcademicYear;
    if (!active) return;

    if (!this.admissionForm.get('academicYear')?.value && !this.editingStudentId) {
      this.admissionForm.patchValue({ academicYear: active._id });
    }
    if (!this.filters.studentYear) {
      this.filters.studentYear = active._id;
    }
    if (!this.classForm.get('academicYear')?.value && !this.editingClassId) {
      this.classForm.patchValue({ academicYear: active._id });
    }
  }

  get isStudent(): boolean {
    return this.currentUser?.role === 'student';
  }

  get isParent(): boolean {
    return this.currentUser?.role === 'parent';
  }

  get selectedRoleLabel(): string {
    return this.loginRoles.find((role) => role.key === this.selectedLoginRole)?.label || 'User';
  }

  get selectedRolePlaceholder(): string {
    return this.loginRoles.find((role) => role.key === this.selectedLoginRole)?.placeholder || 'email@schoolerp.local';
  }

  get selectedRoleHint(): string {
    return this.loginRoles.find((role) => role.key === this.selectedLoginRole)?.hint || '';
  }

  get workspaceTitle(): string {
    const titles: Record<TabKey, string> = {
      dashboard: 'Overview & insights',
      students: 'Student admissions',
      classes: 'Classes & academic years',
      teachers: 'Teacher management',
      fees: 'Fee collection',
      payroll: 'Payroll processing',
      promotion: 'Student promotions',
      attendance: 'Attendance tracking',
      timetable: 'Class schedules',
      exams: 'AI-powered unit tests',
      profile: 'Student profile & AI insights',
      users: 'Users & access control'
    };
    return titles[this.activeTab] || 'Operations workspace';
  }

  selectLoginRole(role: UserRole): void {
    this.selectedLoginRole = role;
    this.message = '';
  }

  get roleLabel(): string {
    return this.currentUser?.role ? this.currentUser.role.replace(/\b\w/g, (char) => char.toUpperCase()) : 'User';
  }

  get parentChildIds(): string[] {
    if (!this.isParent || !this.currentUser) return [];
    return this.currentUser.linkedStudents?.length
      ? this.currentUser.linkedStudents
      : this.currentUser.linkedStudent ? [this.currentUser.linkedStudent] : [];
  }

  get parentChildren(): Student[] {
    return this.students.filter((s) => this.parentChildIds.includes(s._id));
  }

  get effectiveChildId(): string {
    if (this.parentSelectedChild && this.parentChildIds.includes(this.parentSelectedChild)) return this.parentSelectedChild;
    return this.parentChildIds[0] || '';
  }

  selectParentChild(childId: string): void {
    this.parentSelectedChild = childId;
    this.message = '';
  }

  get activeTabLabel(): string {
    return this.allTabs.find((tab) => tab.key === this.activeTab)?.label || 'Workspace';
  }

  login(): void {
    const { email, password } = this.loginForm.getRawValue();
    this.api.login(email || '', password || '').subscribe({
      next: ({ token, user }) => {
        const roleMatches = user.role === this.selectedLoginRole
          || (this.selectedLoginRole === 'admin' && user.role === 'super_admin');
        if (!roleMatches) {
          this.message = `This account is registered as ${this.roleLabelFor(user.role)}. Please select the correct role and try again.`;
          return;
        }
        this.persistSession(token, user);
        this.activeTab = 'dashboard';
        this.message = '';
        this.refresh();
      },
      error: (error) => (this.message = error.error?.message || 'Login failed. Check email and password.')
    });
  }

  logout(): void {
    this.clearSession();
    this.isProfileMenuOpen = false;
    this.message = '';
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.isProfileMenuOpen && !target.closest('.profile-menu-wrap')) {
      this.isProfileMenuOpen = false;
    }
  }

  refresh(): void {
    if (!this.currentUser) return;
    this.loading = true;
    forkJoin({
      summary: this.api.dashboard(),
      years: this.api.academicYears({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)),
      classes: this.isStudent ? of([] as ClassRoom[]) : this.api.classes({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)),
      teachers: this.isStudent ? of([] as Teacher[]) : this.api.teachers({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)),
      students: this.api.students({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)),
      invoices: this.can('fees', 'view') ? this.api.invoices() : of([] as FeeInvoice[]),
      payrolls: this.can('payroll', 'view') ? this.api.payroll() : of([] as PayrollRecord[]),
      attendance: this.api.attendance(),
      holidays: this.api.holidays(),
      timetable: this.api.timetable(),
      exams: this.api.exams(),
      examResults: this.api.examResults(),
      users: this.can('users', 'view') ? this.api.listUsers({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)) : of([]),
      roles: this.can('roles', 'view') ? this.api.roles() : of([] as ErpRole[]),
      permissionSchema: this.can('roles', 'view') ? this.api.rolePermissionSchema() : of({ modules: [], actions: [] })
    }).subscribe({
      next: (data) => {
        this.summary = data.summary;
        this.years = data.years;
        this.applyActiveYearDefaults();
        this.classes = data.classes;
        this.teachers = data.teachers;
        this.students = data.students;
        this.invoices = data.invoices;
        this.payrolls = data.payrolls;
        this.attendance = data.attendance;
        this.holidays = data.holidays;
        this.timetable = data.timetable;
        this.exams = data.exams;
        this.examResults = data.examResults;
        this.users = data.users as Array<AuthUser & { _id?: string; isActive?: boolean }>;
        this.roles = data.roles;
        this.permissionSchema = data.permissionSchema;
        if (this.roles.length && !this.selectedRoleSlug) {
          this.selectRoleForEdit(this.roles[0].slug);
        }
        this.loading = false;
        this.submitting = false;
        this.loadServerListings();
        this.loadSelfAttendanceStatus();
        if (this.isStudent && this.currentUser?.student && this.activeTab === 'profile') {
          this.loadStudentProfile(this.currentUser.student);
        } else if (this.isParent && this.effectiveChildId && this.activeTab === 'profile') {
          this.loadStudentProfile(this.effectiveChildId);
        }
      },
      error: () => {
        this.toast.error('Could not load workspace data. Check backend, MongoDB, and your role permissions.');
        this.loading = false;
      }
    });
  }

  setTab(tab: TabKey): void {
    this.activeTab = tab;
    const tabListKey: Partial<Record<TabKey, ListKey>> = {
      students: 'students',
      classes: 'classes',
      teachers: 'teachers',
      users: 'users'
    };
    const listKey = tabListKey[tab];
    if (listKey) this.loadListing(listKey);
    if (tab === 'profile') {
      if (this.isStudent && this.currentUser?.student) this.loadStudentProfile(this.currentUser.student);
      else if (this.isParent && this.effectiveChildId) this.loadStudentProfile(this.effectiveChildId);
    }
  }

  loadStudentProfile(studentId: string): void {
    if (!studentId) {
      this.profileStudentId = '';
      this.studentProfile = null;
      return;
    }
    this.profileStudentId = studentId;
    this.profileLoading = true;
    this.api.studentProfile(studentId).subscribe({
      next: (profile) => {
        this.studentProfile = profile;
        this.profileLoading = false;
        this.activeTab = 'profile';
      },
      error: () => {
        this.message = 'Could not load student profile.';
        this.profileLoading = false;
      }
    });
  }

  openStudentProfile(studentId: string): void {
    this.loadStudentProfile(studentId);
  }

  openMyProfile(): void {
    this.showMyProfile = true;
  }

  closeMyProfile(): void {
    this.showMyProfile = false;
  }

  get myTeacherProfile(): Teacher | undefined {
    if (!this.currentUser?.teacher) return undefined;
    return this.teachers.find((t) => t._id === this.currentUser!.teacher);
  }

  get myStudentProfile(): Student | undefined {
    if (!this.currentUser?.student) return undefined;
    return this.students.find((s) => s._id === this.currentUser!.student);
  }

  get myLinkedStudentProfile(): Student | undefined {
    if (!this.currentUser?.linkedStudent) return undefined;
    return this.students.find((s) => s._id === this.currentUser!.linkedStudent);
  }

  setFinanceRange(days: number): void {
    this.financeRangeDays = days;
    this.refresh();
  }

  dashboardActivityLabel(type: string): string {
    const labels: Record<string, string> = {
      student_admission: 'Admission',
      teacher_registration: 'Teacher',
      class_creation: 'Class',
      student_status_change: 'Status change'
    };
    return labels[type] || type;
  }

  loadStudentDocuments(studentId: string): void {
    this.selectedStudentId = studentId;
    if (!studentId) {
      this.selectedStudentDocuments = [];
      return;
    }

    this.api.studentDetails(studentId).subscribe({
      next: (student) => {
        const documents = (student as Student & { documents?: Array<Record<string, unknown>> }).documents || [];
        this.selectedStudentDocuments = documents.map((document: Record<string, unknown>) => ({
          _id: document['_id'] ? String(document['_id']) : undefined,
          type: String(document['type'] || ''),
          title: String(document['title'] || ''),
          fileUrl: String(document['fileUrl'] || ''),
          storageKey: document['storageKey'] ? String(document['storageKey']) : undefined,
          storageProvider: (document['storageProvider'] === 's3' ? 's3' : 'local') as 'local' | 's3',
          mimeType: document['mimeType'] ? String(document['mimeType']) : undefined,
          uploadedAt: document['uploadedAt'] ? String(document['uploadedAt']) : undefined,
          status: document['status'] ? String(document['status']) : 'pending',
          rejectReason: document['rejectReason'] ? String(document['rejectReason']) : undefined
        }));
      },
      error: () => {
        this.message = 'Unable to load document vault for this student.';
      }
    });
  }

  onFile(name: string, event: Event, multiple = false): void {
    const input = event.target as HTMLInputElement;
    this.files[name] = multiple ? input.files : input.files?.item(0) || null;
  }

  saveAcademicYear(): void {
    const value = this.academicYearForm.getRawValue();
    const payload: Partial<AcademicYear> = {
      name: value.name || undefined,
      startDate: value.startDate || undefined,
      endDate: value.endDate || undefined,
      isActive: !!value.isActive
    };

    if (this.editingAcademicYearId) {
      this.submit(
        this.api.updateAcademicYear(this.editingAcademicYearId, {
          name: payload.name,
          startDate: payload.startDate,
          endDate: payload.endDate
        }),
        'Academic year updated',
        this.academicYearForm
      );
      this.editingAcademicYearId = '';
      return;
    }

    this.submit(this.api.createAcademicYear(payload), 'Academic year created', this.academicYearForm);
  }

  editAcademicYear(year: AcademicYear): void {
    if (this.yearStatus(year) === 'closed') {
      this.message = 'Closed academic years cannot be edited';
      return;
    }
    this.editingAcademicYearId = year._id;
    this.academicYearForm.patchValue({
      name: year.name,
      startDate: year.startDate ? year.startDate.slice(0, 10) : '',
      endDate: year.endDate ? year.endDate.slice(0, 10) : '',
      isActive: false
    });
    this.message = `Editing ${year.name}`;
  }

  activateAcademicYear(id: string): void {
    void this.confirmAction({
      title: 'Activate academic year',
      message: 'Activate this academic year? The current active year will be deactivated.',
      confirmLabel: 'Activate'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.api.activateAcademicYear(id).subscribe({
        next: () => {
          this.toast.success('Academic year activated');
          this.editingAcademicYearId = '';
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Could not activate academic year'))
      });
    });
  }

  closeAcademicYear(id: string): void {
    void this.confirmAction({
      title: 'Close academic year',
      message: 'Close this academic year? Linked classes become read-only.',
      danger: true,
      confirmLabel: 'Close year'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.api.closeAcademicYear(id).subscribe({
        next: () => {
          this.toast.success('Academic year closed');
          this.editingAcademicYearId = '';
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Could not close academic year'))
      });
    });
  }

  deleteAcademicYear(id: string): void {
    void this.confirmAction({
      title: 'Delete academic year',
      message: 'Delete this academic year? This is only allowed when no dependent records exist.',
      danger: true,
      confirmLabel: 'Delete'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.api.deleteAcademicYear(id).subscribe({
        next: () => {
          this.toast.success('Academic year deleted');
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Could not delete academic year'))
      });
    });
  }

  saveClass(): void {
    if (this.editingClassId) {
      const room = this.classes.find((c) => c._id === this.editingClassId);
      if (room && this.isClassYearClosed(room)) {
        this.message = 'Classes linked to a closed academic year are read-only';
        return;
      }
    }
    const request = this.editingClassId
      ? this.api.updateClass(this.editingClassId, this.classForm.getRawValue())
      : this.api.createClass(this.classForm.getRawValue());
    this.submit(request, this.editingClassId ? 'Class updated' : 'Class saved', this.classForm);
    this.editingClassId = '';
  }

  editClass(room: ClassRoom): void {
    if (this.isClassYearClosed(room)) {
      this.message = 'Classes linked to a closed academic year are read-only';
      return;
    }
    this.editingClassId = room._id;
    this.classForm.patchValue({
      name: room.name,
      section: room.section,
      capacity: room.capacity || APP_CONSTANTS.DEFAULT_CAPACITY,
      academicYear: typeof room.academicYear === 'string' ? room.academicYear : room.academicYear?._id,
      classTeacher: typeof room.classTeacher === 'string' ? room.classTeacher : room.classTeacher?._id || '',
      monthlyFee: room.monthlyFee,
      status: room.status || 'active'
    });
    this.message = `Editing class ${room.name}-${room.section}`;
  }

  isClassYearClosed(room: ClassRoom): boolean {
    const year = typeof room.academicYear === 'string'
      ? this.years.find((y) => y._id === room.academicYear)
      : room.academicYear;
    return year ? this.yearStatus(year) === 'closed' : false;
  }

  getClassStudentCount(classId: string, academicYearId?: string): number {
    const yearId = academicYearId || this.admissionForm.get('academicYear')?.value || this.activeAcademicYear?._id;
    const room = this.classes.find((c) => c._id === classId);
    if (room?.studentCount !== undefined && (!yearId || (typeof room.academicYear === 'string' ? room.academicYear : room.academicYear?._id) === yearId)) {
      return room.studentCount;
    }
    return this.students.filter((student) => {
      if (student.status !== 'active') return false;
      return student.enrollments?.some((enrollment) => {
        const eYear = typeof enrollment.academicYear === 'string' ? enrollment.academicYear : enrollment.academicYear?._id;
        const eClass = typeof enrollment.classRoom === 'string' ? enrollment.classRoom : enrollment.classRoom?._id;
        return eYear === yearId && eClass === classId && enrollment.status === 'studying';
      });
    }).length;
  }

  getClassAvailableCapacity(room: ClassRoom): number {
    if (room.availableCapacity !== undefined) return room.availableCapacity;
    const yearId = typeof room.academicYear === 'string' ? room.academicYear : room.academicYear?._id;
    const count = this.getClassStudentCount(room._id, yearId);
    return Math.max((room.capacity || 0) - count, 0);
  }

  get admissionClassOptions(): ClassRoom[] {
    const yearId = this.admissionForm.get('academicYear')?.value || this.activeAcademicYear?._id;
    const selectedClassId = this.admissionForm.get('classRoom')?.value;
    return this.classes.filter((room) => {
      if ((room.status || 'active') !== 'active') return false;
      const roomYearId = typeof room.academicYear === 'string' ? room.academicYear : room.academicYear?._id;
      if (yearId && roomYearId !== yearId) return false;
      const hasCapacity = this.getClassAvailableCapacity(room) > 0;
      if (!hasCapacity && this.editingStudentId && room._id === selectedClassId) return true;
      return hasCapacity;
    });
  }

  toggleClassStatus(id: string): void {
    void this.confirmAction({
      title: 'Change class status',
      message: 'Change the status of this class?',
      confirmLabel: 'Confirm'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.api.toggleClassStatus(id).subscribe({
        next: () => {
          this.toast.success('Class status updated');
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Could not update class status'))
      });
    });
  }

  teacherAssignedClass(teacherId: string): ClassRoom | undefined {
    return this.classes.find((room) => {
      if (room._id === this.editingClassId) return false;
      const assignedTeacherId = typeof room.classTeacher === 'string' ? room.classTeacher : room.classTeacher?._id;
      return assignedTeacherId === teacherId;
    });
  }

  isTeacherAssignedToAnotherClass(teacherId: string): boolean {
    return Boolean(this.teacherAssignedClass(teacherId));
  }

  classTeacherOptionLabel(teacher: Teacher): string {
    const assignedClass = this.teacherAssignedClass(teacher._id);
    const name = this.teacherName(teacher);
    return assignedClass ? `${name} - assigned to ${assignedClass.name}-${assignedClass.section}` : name;
  }

  deleteClass(id: string): void {
    void this.confirmAction({
      title: 'Delete class',
      message: 'Delete this class? This action is only allowed when no students are enrolled.',
      danger: true,
      confirmLabel: 'Delete'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.submit(this.api.deleteClass(id), 'Class deleted');
    });
  }

  saveTeacher(): void {
    const request = this.editingTeacherId
      ? this.api.updateTeacher(this.editingTeacherId, this.teacherForm.getRawValue())
      : this.api.createTeacher(this.teacherForm.getRawValue());
    this.submit(request, this.editingTeacherId ? 'Teacher updated' : 'Teacher saved', this.teacherForm);
    this.editingTeacherId = '';
  }

  editTeacher(teacher: Teacher): void {
    this.editingTeacherId = teacher._id;
    this.teacherForm.patchValue({
      employeeCode: teacher.employeeCode,
      firstName: teacher.firstName,
      lastName: teacher.lastName || '',
      phone: teacher.phone,
      email: teacher.email || '',
      aadhaarNumber: teacher.aadhaarNumber || '',
      baseSalary: teacher.baseSalary
    });
    this.message = `Editing ${teacher.firstName}`;
  }

  viewTeacherProfile(teacher: Teacher): void {
    this.viewingTeacher = teacher;
  }

  closeTeacherProfile(): void {
    this.viewingTeacher = null;
  }

  teacherExpForm = { instituteName: '', designation: '', fromDate: '', toDate: '', description: '' };
  teacherExpFile: File | null = null;
  teacherEduForm = { instituteName: '', degree: '', fieldOfStudy: '', fromDate: '', toDate: '', grade: '' };
  teacherEduFile: File | null = null;

  onExpFileChange(event: Event): void {
    this.teacherExpFile = (event.target as HTMLInputElement).files?.[0] || null;
  }

  onEduFileChange(event: Event): void {
    this.teacherEduFile = (event.target as HTMLInputElement).files?.[0] || null;
  }

  addTeacherExperience(): void {
    const teacher = this.viewingTeacher || this.myTeacherProfile;
    if (!teacher || !this.teacherExpForm.instituteName) return;

    const saveEntry = (doc?: { url: string; originalName: string; uploadedAt: string }) => {
      const entry: Record<string, unknown> = { ...this.teacherExpForm };
      if (doc) entry['document'] = doc;
      const exp = [...(teacher.experience || []), entry];
      const request = this.isTeacher
        ? this.api.selfUpdateTeacher({ experience: exp })
        : this.api.updateTeacher(teacher._id, { experience: exp });
      request.subscribe({
        next: () => {
          this.message = 'Experience added';
          this.teacherExpForm = { instituteName: '', designation: '', fromDate: '', toDate: '', description: '' };
          this.teacherExpFile = null;
          this.refresh();
        },
        error: (err) => { this.message = err.error?.message || 'Could not save experience'; }
      });
    };

    if (this.teacherExpFile) {
      const upload$ = this.isTeacher
        ? this.api.selfUploadTeacherDocument(this.teacherExpFile, 'certificate')
        : this.api.uploadTeacherDocument(teacher._id, this.teacherExpFile, 'certificate');
      upload$.subscribe({
        next: (res: any) => {
          const certs = res?.certificates || [];
          const last = certs[certs.length - 1];
          saveEntry(last ? { url: last.url, originalName: last.originalName, uploadedAt: last.uploadedAt } : undefined);
        },
        error: () => saveEntry()
      });
    } else {
      saveEntry();
    }
  }

  removeTeacherExperience(index: number): void {
    void this.confirmAction({
      title: 'Remove experience',
      message: 'Remove this work experience entry from the teacher profile?',
      danger: true,
      confirmLabel: 'Remove'
    }).then((confirmed) => {
      if (!confirmed) return;
      const teacher = this.viewingTeacher || this.myTeacherProfile;
      if (!teacher) return;
      const exp = [...(teacher.experience || [])];
      exp.splice(index, 1);
      const request = this.isTeacher
        ? this.api.selfUpdateTeacher({ experience: exp })
        : this.api.updateTeacher(teacher._id, { experience: exp });
      request.subscribe({
        next: () => {
          this.toast.success('Experience removed');
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Could not remove experience'))
      });
    });
  }

  addTeacherEducation(): void {
    const teacher = this.viewingTeacher || this.myTeacherProfile;
    if (!teacher || !this.teacherEduForm.instituteName) return;

    const saveEntry = (doc?: { url: string; originalName: string; uploadedAt: string }) => {
      const entry: Record<string, unknown> = { ...this.teacherEduForm };
      if (doc) entry['document'] = doc;
      const edu = [...(teacher.education || []), entry];
      const request = this.isTeacher
        ? this.api.selfUpdateTeacher({ education: edu })
        : this.api.updateTeacher(teacher._id, { education: edu });
      request.subscribe({
        next: () => {
          this.message = 'Education added';
          this.teacherEduForm = { instituteName: '', degree: '', fieldOfStudy: '', fromDate: '', toDate: '', grade: '' };
          this.teacherEduFile = null;
          this.refresh();
        },
        error: (err) => { this.message = err.error?.message || 'Could not save education'; }
      });
    };

    if (this.teacherEduFile) {
      const upload$ = this.isTeacher
        ? this.api.selfUploadTeacherDocument(this.teacherEduFile, 'certificate')
        : this.api.uploadTeacherDocument(teacher._id, this.teacherEduFile, 'certificate');
      upload$.subscribe({
        next: (res: any) => {
          const certs = res?.certificates || [];
          const last = certs[certs.length - 1];
          saveEntry(last ? { url: last.url, originalName: last.originalName, uploadedAt: last.uploadedAt } : undefined);
        },
        error: () => saveEntry()
      });
    } else {
      saveEntry();
    }
  }

  removeTeacherEducation(index: number): void {
    void this.confirmAction({
      title: 'Remove education',
      message: 'Remove this education entry from the teacher profile?',
      danger: true,
      confirmLabel: 'Remove'
    }).then((confirmed) => {
      if (!confirmed) return;
      const teacher = this.viewingTeacher || this.myTeacherProfile;
      if (!teacher) return;
      const edu = [...(teacher.education || [])];
      edu.splice(index, 1);
      const request = this.isTeacher
        ? this.api.selfUpdateTeacher({ education: edu })
        : this.api.updateTeacher(teacher._id, { education: edu });
      request.subscribe({
        next: () => {
          this.toast.success('Education removed');
          this.refresh();
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Could not remove education'))
      });
    });
  }

  uploadTeacherDoc(event: Event, type: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file || !this.viewingTeacher) return;
    this.api.uploadTeacherDocument(this.viewingTeacher._id, file, type).subscribe({
      next: () => { this.message = `Document uploaded`; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Upload failed'; }
    });
  }

  selfUploadTeacherDoc(event: Event, type: string): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.api.selfUploadTeacherDocument(file, type).subscribe({
      next: () => { this.message = 'Document uploaded for review'; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Upload failed'; }
    });
  }

  selfUpdateTeacher(field: string, value: unknown): void {
    this.api.selfUpdateTeacher({ [field]: value }).subscribe({
      next: () => { this.message = 'Profile updated'; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Could not update profile'; }
    });
  }

  verifyDocReason = '';

  verifyTeacherDoc(docType: string, action: 'approve' | 'reject'): void {
    if (!this.viewingTeacher) return;
    this.api.verifyTeacherDocument(this.viewingTeacher._id, docType, action, this.verifyDocReason).subscribe({
      next: () => {
        this.message = `Document ${action === 'approve' ? 'approved' : 'rejected — reupload requested'}`;
        this.verifyDocReason = '';
        this.refresh();
      },
      error: (err) => { this.message = err.error?.message || 'Verification failed'; }
    });
  }

  verifyStudentDoc(documentId: string, action: 'approve' | 'reject'): void {
    if (!this.selectedStudentId || !documentId) return;
    this.api.verifyStudentDocument(this.selectedStudentId, documentId, action, this.verifyDocReason).subscribe({
      next: () => {
        this.toast.success(action === 'approve' ? 'Document approved' : 'Document rejected — reupload requested');
        this.verifyDocReason = '';
        this.loadStudentDocuments(this.selectedStudentId);
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Verification failed'))
    });
  }

  openStudentDocument(document: { _id?: string; title?: string }): void {
    if (!this.selectedStudentId || !document._id) return;
    this.openProtectedFile(this.api.studentDocumentFileUrl(this.selectedStudentId, document._id));
  }

  openTeacherDocument(teacherId: string, docType: string): void {
    if (!teacherId || !docType) return;
    this.openProtectedFile(this.api.teacherDocumentFileUrl(teacherId, docType));
  }

  get showPreviousSchoolDetails(): boolean {
    return this.admissionForm.get('hasPreviousSchool')?.value === 'yes';
  }

  getTeacherClasses(teacherId: string): ClassRoom[] {
    return this.classes.filter((c) => {
      const ct = c.classTeacher;
      const ctId = typeof ct === 'string' ? ct : ct?._id;
      return ctId === teacherId;
    });
  }

  getTeacherSubjects(teacherId: string): { className: string; subjectName: string }[] {
    const results: { className: string; subjectName: string }[] = [];
    for (const cls of this.classes) {
      for (const subj of cls.subjects || []) {
        const tid = typeof subj.teacher === 'string' ? subj.teacher : subj.teacher?._id;
        if (tid === teacherId) {
          results.push({ className: `${cls.name}-${cls.section}`, subjectName: subj.name });
        }
      }
    }
    return results;
  }

  async deleteTeacher(id: string): Promise<void> {
    const confirmed = await this.confirmAction({
      title: 'Deactivate teacher',
      message: 'Deactivate this teacher? The record will be retained with inactive status.',
      danger: true,
      confirmLabel: 'Deactivate'
    });
    if (!confirmed) return;
    this.submit(this.api.deleteTeacher(id), 'Teacher deactivated');
  }

  saveAdmission(): void {
    if (this.editingStudentId) {
      const value = this.admissionForm.getRawValue();
      const payload = {
        admissionNumber: value.admissionNumber,
        firstName: value.firstName,
        lastName: value.lastName,
        gender: value.gender,
        dateOfBirth: value.dateOfBirth,
        bloodGroup: value.bloodGroup,
        category: value.category,
        nationality: value.nationality,
        motherName: value.motherName,
        aadhaarNumber: value.aadhaarNumber || undefined,
        udisePenId: value.udisePenId || undefined,
        address: {
          line1: value.line1,
          city: value.city,
          state: value.state,
          pincode: value.pincode
        },
        guardians: [
          {
            name: value.guardianName,
            relation: value.guardianRelation,
            phone: value.guardianPhone,
            isPrimary: true
          }
        ],
        previousSchoolDetails: value.hasPreviousSchool === 'yes'
          ? {
              schoolName: value.previousSchool,
              board: value.previousSchoolBoard,
              percentage: value.previousSchoolPercentage ? Number(value.previousSchoolPercentage) : undefined,
              rollNumber: value.previousSchoolRollNumber,
              address: value.previousSchoolAddress,
              lastClass: value.previousSchoolLastClass,
              yearOfPassing: value.previousSchoolYearOfPassing ? Number(value.previousSchoolYearOfPassing) : undefined,
              reasonForLeaving: value.previousSchoolReasonForLeaving,
              tcNumber: value.previousSchoolTcNumber,
              tcDate: value.previousSchoolTcDate || undefined
            }
          : undefined,
        enrollments: value.academicYear && value.classRoom
          ? [
              {
                academicYear: value.academicYear,
                classRoom: value.classRoom,
                rollNumber: value.rollNumber,
                status: 'studying'
              }
            ]
          : undefined
      };
      this.submit(this.api.updateStudent(this.editingStudentId, payload), 'Student updated', this.admissionForm);
      this.editingStudentId = '';
      return;
    }

    const value = this.admissionForm.getRawValue();
    const payload = {
      student: {
        firstName: value.firstName,
        lastName: value.lastName,
        gender: value.gender,
        dateOfBirth: value.dateOfBirth,
        bloodGroup: value.bloodGroup,
        category: value.category,
        nationality: value.nationality,
        motherName: value.motherName,
        aadhaarNumber: value.aadhaarNumber || undefined,
        udisePenId: value.udisePenId || undefined,
        address: {
          line1: value.line1,
          city: value.city,
          state: value.state,
          pincode: value.pincode
        }
      },
      guardians: [
        {
          name: value.guardianName,
          relation: value.guardianRelation,
          phone: value.guardianPhone,
          isPrimary: true
        }
      ],
      academicYear: value.academicYear,
      classRoom: value.classRoom,
      rollNumber: value.rollNumber,
      ...(value.hasPreviousSchool === 'yes'
        ? {
            previousSchool: value.previousSchool,
            previousSchoolDetails: {
              schoolName: value.previousSchool,
              board: value.previousSchoolBoard,
              percentage: value.previousSchoolPercentage ? Number(value.previousSchoolPercentage) : undefined,
              rollNumber: value.previousSchoolRollNumber,
              address: value.previousSchoolAddress,
              lastClass: value.previousSchoolLastClass,
              yearOfPassing: value.previousSchoolYearOfPassing ? Number(value.previousSchoolYearOfPassing) : undefined,
              reasonForLeaving: value.previousSchoolReasonForLeaving,
              tcNumber: value.previousSchoolTcNumber,
              tcDate: value.previousSchoolTcDate || undefined
            }
          }
        : {})
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(payload));
    for (const field of ['photo', 'aadhaar', 'birthCertificate']) {
      const file = this.files[field] as File | null;
      if (file) formData.append(field, file);
    }
    const otherDocuments = this.files['otherDocuments'] as FileList | null;
    if (otherDocuments) {
      Array.from(otherDocuments).forEach((file) => formData.append('otherDocuments', file));
    }

    this.submit(this.api.createAdmission(formData), 'Student admission saved', this.admissionForm);
    this.files = {};
  }

  editStudent(student: Student): void {
    const latest = student.enrollments?.[student.enrollments.length - 1];
    const guardian = student.guardians?.[0];
    const prev = student.previousSchoolDetails;
    const hasPrev = !!(prev?.schoolName);
    this.editingStudentId = student._id;
    this.admissionForm.patchValue({
      admissionNumber: student.admissionNumber,
      admissionDate: student.admissionDate ? student.admissionDate.slice(0, 10) : '',
      firstName: student.firstName,
      lastName: student.lastName || '',
      gender: student.gender,
      dateOfBirth: student.dateOfBirth ? student.dateOfBirth.slice(0, 10) : '',
      bloodGroup: student.bloodGroup || '',
      category: student.category || '',
      nationality: student.nationality || 'Indian',
      motherName: student.motherName || '',
      aadhaarNumber: student.aadhaarNumber || '',
      udisePenId: student.udisePenId || '',
      line1: student.address?.line1 || '',
      city: student.address?.city || '',
      state: student.address?.state || '',
      pincode: student.address?.pincode || '',
      guardianName: guardian?.name || '',
      guardianRelation: guardian?.relation || 'Father',
      guardianPhone: guardian?.phone || '',
      academicYear: typeof latest?.academicYear === 'string' ? latest.academicYear : latest?.academicYear?._id || '',
      classRoom: typeof latest?.classRoom === 'string' ? latest.classRoom : latest?.classRoom?._id || '',
      rollNumber: latest?.rollNumber || '',
      studentStatus: student.status || 'active',
      hasPreviousSchool: hasPrev ? 'yes' : 'no',
      previousSchool: prev?.schoolName || '',
      previousSchoolBoard: prev?.board || '',
      previousSchoolPercentage: prev?.percentage != null ? String(prev.percentage) : '',
      previousSchoolRollNumber: prev?.rollNumber || '',
      previousSchoolAddress: prev?.address || '',
      previousSchoolLastClass: prev?.lastClass || '',
      previousSchoolYearOfPassing: prev?.yearOfPassing ? String(prev.yearOfPassing) : '',
      previousSchoolReasonForLeaving: prev?.reasonForLeaving || '',
      previousSchoolTcNumber: prev?.tcNumber || '',
      previousSchoolTcDate: prev?.tcDate ? String(prev.tcDate).slice(0, 10) : ''
    });
    this.message = `Editing student ${this.studentName(student)}`;
  }

  async deactivateStudent(id: string): Promise<void> {
    const confirmed = await this.confirmAction({
      title: 'Deactivate student',
      message: 'Deactivate this student? Records are retained; status will be set to Inactive.',
      danger: true,
      confirmLabel: 'Deactivate'
    });
    if (!confirmed) return;
    this.submit(this.api.deleteStudent(id), 'Student deactivated');
  }

  changeStudentStatus(id: string, status: string): void {
    const reason = status === 'left_school' || status === 'tc_issued' ? prompt('Reason (optional):') || '' : '';
    this.api.updateStudentStatus(id, status, reason || undefined).subscribe({
      next: () => {
        this.message = `Student status updated to ${this.studentStatusLabel(status)}`;
        this.refresh();
      },
      error: (err) => { this.message = err.error?.message || 'Status update failed'; }
    });
  }

  generateUdisePenId(): void {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    this.admissionForm.patchValue({ udisePenId: `UDISE-${year}-${random}` });
  }

  searchByUdise(): void {
    const udise = this.admissionForm.get('udisePenId')?.value?.trim();
    if (!udise) {
      this.message = 'Enter or generate a UDISE+/PEN ID first';
      return;
    }
    const match = this.students.find((s) => s.udisePenId === udise);
    if (match) {
      this.message = `Found existing student: ${this.studentName(match)} (${match.admissionNumber})`;
      this.editStudent(match);
    } else {
      this.message = 'No existing student with this UDISE+/PEN ID';
    }
  }

  studentStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      active: 'Active',
      inactive: 'Inactive',
      left_school: 'Left School',
      passed_out: 'Passed Out',
      tc_issued: 'TC Issued',
      alumni: 'Passed Out'
    };
    return labels[status] || status;
  }

  studentDocumentStatus(student: Student): 'uploaded' | 'pending' {
    const docs = student.documents || [];
    const hasPhoto = docs.some((d) => d.type === 'photo' && d.fileUrl);
    const hasBirth = docs.some((d) => d.type === 'birth_certificate' && d.fileUrl);
    return hasPhoto && hasBirth ? 'uploaded' : 'pending';
  }

  studentPhotoUrl(student: Student): string | null {
    const photo = student.documents?.find((d) => d.type === 'photo');
    return photo?.fileUrl || null;
  }

  get studentSectionOptions(): string[] {
    return [...new Set(this.classes.map((c) => c.section).filter(Boolean))].sort();
  }

  exportStudentsCsv(): void {
    const items = this.sortedStudents;
    exportRowsToCsv(`students-${new Date().toISOString().slice(0, 10)}.csv`, ['Admission No', 'Name', 'Class', 'Roll No', 'Admission Date', 'Status', 'Documents'], items.map((s) => {
      const latest = s.enrollments?.[s.enrollments.length - 1];
      return [
        s.admissionNumber,
        this.studentName(s),
        this.enrollmentClassName(s),
        latest?.rollNumber || '',
        s.admissionDate ? new Date(s.admissionDate).toLocaleDateString() : '',
        this.studentStatusLabel(s.status),
        this.studentDocumentStatus(s)
      ];
    }));
  }

  exportStudentsPdf(): void {
    const items = this.sortedStudents;
    exportRowsToPdf('Student Directory', ['Adm No', 'Name', 'Class', 'Admission Date', 'Status'], items.map((s) => [
      s.admissionNumber,
      this.studentName(s),
      this.enrollmentClassName(s),
      s.admissionDate ? new Date(s.admissionDate).toLocaleDateString() : '—',
      this.studentStatusLabel(s.status)
    ]));
  }

  exportClassesCsv(): void {
    const items = this.sortedClasses;
    exportRowsToCsv(`classes-${new Date().toISOString().slice(0, 10)}.csv`, ['Class', 'Academic Year', 'Teacher', 'Students', 'Available', 'Fee', 'Status'], items.map((room) => [
      `${room.name}-${room.section}`,
      this.classYearName(room),
      this.teacherName(room.classTeacher),
      String(room.studentCount ?? this.getClassStudentCount(room._id)),
      String(this.getClassAvailableCapacity(room)),
      String(room.monthlyFee ?? 0),
      room.status || 'active'
    ]));
  }

  exportClassesPdf(): void {
    const items = this.sortedClasses;
    exportRowsToPdf('Classes & Sections', ['Class', 'Year', 'Teacher', 'Status'], items.map((room) => [
      `${room.name}-${room.section}`,
      this.classYearName(room),
      this.teacherName(room.classTeacher),
      room.status || 'active'
    ]));
  }

  exportTeachersCsv(): void {
    const items = this.sortedTeachers;
    exportRowsToCsv(`teachers-${new Date().toISOString().slice(0, 10)}.csv`, ['Name', 'Employee Code', 'Phone', 'Email', 'Salary', 'Status'], items.map((t) => [
      this.teacherName(t),
      t.employeeCode,
      t.phone,
      t.email || '',
      String(t.baseSalary),
      t.status
    ]));
  }

  exportTeachersPdf(): void {
    const items = this.sortedTeachers;
    exportRowsToPdf('Teacher Roster', ['Name', 'Code', 'Phone', 'Status'], items.map((t) => [
      this.teacherName(t),
      t.employeeCode,
      t.phone,
      t.status
    ]));
  }

  exportUsersCsv(): void {
    const items = this.sortedUsers;
    exportRowsToCsv(`users-${new Date().toISOString().slice(0, 10)}.csv`, ['Name', 'Email', 'Role', 'Status'], items.map((u) => [
      u.name,
      u.email,
      this.roleLabelFor(u.role),
      u.isActive === false ? 'inactive' : 'active'
    ]));
  }

  exportUsersPdf(): void {
    const items = this.sortedUsers;
    exportRowsToPdf('User Directory', ['Name', 'Email', 'Role', 'Status'], items.map((u) => [
      u.name,
      u.email,
      this.roleLabelFor(u.role),
      u.isActive === false ? 'inactive' : 'active'
    ]));
  }

  exportYearsCsv(): void {
    const items = this.sortedYears;
    exportRowsToCsv(`academic-years-${new Date().toISOString().slice(0, 10)}.csv`, ['Name', 'Start', 'End', 'Status'], items.map((y) => [
      y.name,
      new Date(y.startDate).toLocaleDateString(),
      new Date(y.endDate).toLocaleDateString(),
      this.yearStatus(y)
    ]));
  }

  exportYearsPdf(): void {
    const items = this.sortedYears;
    exportRowsToPdf('Academic Years', ['Name', 'Period', 'Status'], items.map((y) => [
      y.name,
      `${new Date(y.startDate).toLocaleDateString()} — ${new Date(y.endDate).toLocaleDateString()}`,
      this.yearStatus(y)
    ]));
  }

  refreshListing(_key?: ListKey): void {
    this.refresh();
    if (_key) this.loadListing(_key);
  }

  isServerPaged(key: ListKey): boolean {
    return this.serverPagedKeys.includes(key);
  }

  getListTotalItems(key: ListKey): number {
    if (this.isServerPaged(key)) return this.listingTotals[key] ?? 0;
    return 0;
  }

  isListingLoading(key: ListKey): boolean {
    return !!this.listingLoading[key];
  }

  saveButtonLabel(idleLabel: string, busyLabel = 'Saving...'): string {
    return this.submitting ? busyLabel : idleLabel;
  }

  loadServerListings(): void {
    this.serverPagedKeys.forEach((key) => this.loadListing(key));
  }

  loadListing(key: ListKey): void {
    if (!this.currentUser || !this.isServerPaged(key)) return;
    const query = this.buildListQuery(key);
    const request = this.getListRequest(key, query);
    if (!request) return;

    this.listingLoading[key] = true;
    request.subscribe({
      next: (response) => {
        this.listingRows[key] = response.data;
        this.listingTotals[key] = response.pagination?.totalItems ?? response.data.length;
        this.listingLoading[key] = false;
      },
      error: (error) => {
        this.listingLoading[key] = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  private getListRequest(key: ListKey, query: ListQueryParams) {
    switch (key) {
      case 'students': return this.can('students', 'view') ? this.api.students(query) : null;
      case 'classes': return this.can('classes', 'view') ? this.api.classes(query) : null;
      case 'years': return this.can('classes', 'view') ? this.api.academicYears(query) : null;
      case 'teachers': return this.can('teachers', 'view') ? this.api.teachers(query) : null;
      case 'users': return this.can('users', 'view') ? this.api.listUsers(query) : null;
      default: return null;
    }
  }

  private buildListQuery(key: ListKey): ListQueryParams {
    const query: ListQueryParams = {
      page: this.pages[key] || 1,
      pageSize: this.getListPageSize(key)
    };
    const sort = this.listSort[key];
    if (sort?.field) {
      query.sortField = this.mapSortField(key, sort.field);
      query.sortDir = sort.dir || 'asc';
    }

    if (key === 'students') {
      if (this.filters.studentSearch) query.search = this.filters.studentSearch;
      if (this.filters.studentClass) query.classRoom = this.filters.studentClass;
      if (this.filters.studentYear) query.academicYear = this.filters.studentYear;
      if (this.filters.studentSection) query.section = this.filters.studentSection;
      if (this.filters.studentStatus) query.status = this.filters.studentStatus;
      if (this.filters.studentAdmissionFrom) query.admissionFrom = this.filters.studentAdmissionFrom;
      if (this.filters.studentAdmissionTo) query.admissionTo = this.filters.studentAdmissionTo;
    }
    if (key === 'classes') {
      if (this.filters.classSearch) query.search = this.filters.classSearch;
      if (this.filters.classYear) query.academicYear = this.filters.classYear;
      if (this.filters.classStatus) query.status = this.filters.classStatus;
    }
    if (key === 'years') {
      if (this.filters.yearSearch) query.search = this.filters.yearSearch;
      if (this.filters.yearStatus) query.status = this.filters.yearStatus;
    }
    if (key === 'teachers') {
      if (this.filters.teacherSearch) query.search = this.filters.teacherSearch;
      if (this.filters.teacherStatus) query.status = this.filters.teacherStatus;
    }
    if (key === 'users') {
      if (this.filters.userSearch) query.search = this.filters.userSearch;
      if (this.filters.userRole) query.role = this.filters.userRole;
      if (this.filters.userStatus) query.status = this.filters.userStatus;
    }
    return query;
  }

  private mapSortField(key: ListKey, field: string): string {
    const maps: Partial<Record<ListKey, Record<string, string>>> = {
      students: { name: 'firstName', class: 'firstName' },
      teachers: { name: 'firstName' },
      classes: { class: 'name', academicYear: 'name', teacher: 'name' },
      users: { status: 'createdAt' }
    };
    return maps[key]?.[field] || field;
  }

  private reloadListing(key: ListKey): void {
    if (this.isServerPaged(key)) this.loadListing(key);
  }

  getListPageSize(key: ListKey): number {
    return this.pageSizes[key] ?? this.pageSize;
  }

  setListPageSize(key: ListKey, size: number): void {
    this.pageSizes[key] = size;
    this.pages[key] = 1;
    this.persistListState(key);
    this.reloadListing(key);
  }

  toggleListSort(key: ListKey, field: string): void {
    const current = this.listSort[key];
    this.listSort[key] = current?.field === field
      ? { field, dir: current.dir === 'asc' ? 'desc' : 'asc' }
      : { field, dir: 'asc' };
    this.pages[key] = 1;
    this.persistListState(key);
    this.reloadListing(key);
  }

  listSortIndicator(key: ListKey, field: string): string {
    const sort = this.listSort[key];
    if (sort?.field !== field) return '';
    return sort.dir === 'asc' ? ' ↑' : ' ↓';
  }

  updateListSearch(key: ListKey, filterKey: keyof typeof this.filters, value: string): void {
    this.filters[filterKey] = value as never;
    this.resetPage(key);
    this.persistListState(key);
    this.reloadListing(key);
  }

  updateListFilter(key: ListKey, filterKey: keyof typeof this.filters, value: string): void {
    this.filters[filterKey] = value as never;
    this.resetPage(key);
    this.persistListState(key);
    this.reloadListing(key);
  }

  private persistListState(key: ListKey): void {
    const filterKeys = LIST_FILTER_KEYS[key];
    const filters: Record<string, string> = {};
    if (filterKeys) {
      for (const filterKey of filterKeys) {
        filters[filterKey] = String(this.filters[filterKey as keyof typeof this.filters] || '');
      }
    }
    this.listingState.save(key, {
      page: this.pages[key],
      pageSize: this.getListPageSize(key),
      sortField: this.listSort[key]?.field,
      sortDir: this.listSort[key]?.dir,
      filters
    });
  }

  private restoreAllListingStates(): void {
    (Object.keys(LIST_FILTER_KEYS) as ListKey[]).forEach((key) => this.restoreListState(key));
  }

  private restoreListState(key: ListKey): void {
    const stored = this.listingState.load(key);
    if (!stored) return;
    if (stored.page) this.pages[key] = stored.page;
    if (stored.pageSize) this.pageSizes[key] = stored.pageSize;
    if (stored.sortField) {
      this.listSort[key] = { field: stored.sortField, dir: stored.sortDir || 'asc' };
    }
    if (stored.filters) {
      for (const [filterKey, value] of Object.entries(stored.filters)) {
        if (filterKey in this.filters) {
          (this.filters as Record<string, string>)[filterKey] = value;
        }
      }
    }
  }

  downloadStudentDocument(doc: { _id?: string; title?: string }): void {
    if (!this.selectedStudentId || !doc._id) return;
    this.openProtectedFile(
      this.api.studentDocumentFileUrl(this.selectedStudentId, doc._id, true),
      { download: true, fileName: doc.title || 'document' }
    );
  }

  replaceStudentDocument(documentId: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.item(0);
    if (!this.selectedStudentId || !file || !documentId) return;
    const formData = new FormData();
    formData.append('document', file);
    this.api.replaceStudentDocument(this.selectedStudentId, documentId, formData).subscribe({
      next: () => {
        this.message = 'Document replaced';
        this.loadStudentDocuments(this.selectedStudentId);
      },
      error: (err) => { this.message = err.error?.message || 'Replace failed'; }
    });
  }

  async deleteStudentDocument(documentId: string): Promise<void> {
    if (!this.selectedStudentId || !documentId) return;
    const confirmed = await this.confirmAction({
      title: 'Remove document',
      message: 'Remove this document from the vault?',
      danger: true,
      confirmLabel: 'Remove'
    });
    if (!confirmed) return;
    this.api.deleteStudentDocument(this.selectedStudentId, documentId).subscribe({
      next: () => {
        this.toast.success('Document removed');
        this.loadStudentDocuments(this.selectedStudentId);
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Delete failed'))
    });
  }

  deleteStudent(id: string): void {
    this.deactivateStudent(id);
  }

  onFeeClassChange(): void {
    const classId = this.feeForm.get('classRoom')?.value;
    const room = this.classes.find((c) => c._id === classId);
    if (room) {
      this.feeForm.patchValue({ amount: room.monthlyFee || 0 });
    }
  }

  saveFeeInvoice(): void {
    const value = this.feeForm.getRawValue();
    this.submit(
      this.api.createInvoice({
        student: value.student,
        academicYear: value.academicYear,
        classRoom: value.classRoom,
        dueDate: value.dueDate,
        discount: value.discount,
        fine: value.fine,
        items: [{ label: value.label, amount: value.amount }]
      }),
      'Fee invoice created',
      this.feeForm
    );
  }

  savePayment(): void {
    const value = this.paymentForm.getRawValue();
    this.submit(
      this.api.addPayment(value.invoiceId || '', {
        amount: value.amount,
        mode: value.mode,
        referenceNumber: value.referenceNumber
      }),
      'Payment recorded',
      this.paymentForm
    );
  }

  savePayroll(): void {
    const request = this.editingPayrollId
      ? this.api.updatePayroll(this.editingPayrollId, this.payrollForm.getRawValue())
      : this.api.createPayroll(this.payrollForm.getRawValue());
    this.submit(request, this.editingPayrollId ? 'Payroll updated' : 'Payroll record created', this.payrollForm);
    this.editingPayrollId = '';
  }

  editPayroll(payroll: PayrollRecord): void {
    this.editingPayrollId = payroll._id;
    this.payrollForm.patchValue({
      teacher: typeof payroll.teacher === 'string' ? payroll.teacher : payroll.teacher?._id || '',
      month: payroll.month,
      year: payroll.year,
      basicSalary: payroll.basicSalary,
      allowances: payroll.allowances,
      deductions: payroll.deductions
    });
    this.message = `Editing payroll for ${this.payrollTeacherName(payroll.teacher)}`;
  }

  deletePayroll(id: string): void {
    this.submit(this.api.deletePayroll(id), 'Payroll deleted');
  }

  markPayrollPaid(id: string): void {
    this.api.markPayrollPaid(id).subscribe({
      next: () => { this.message = 'Payroll marked as paid'; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Could not mark payroll as paid'; }
    });
  }

  viewRecord(label: string): void {
    this.message = label;
  }

  openInvoicePdf(invoiceId: string): void {
    this.openProtectedPdf(this.api.invoicePdfUrl(invoiceId));
  }

  openPayrollPdf(payrollId: string): void {
    this.openProtectedPdf(this.api.payrollPdfUrl(payrollId));
  }

  toggleParentChild(studentId: string): void {
    if (this.parentLinkedStudentIds.has(studentId)) {
      this.parentLinkedStudentIds.delete(studentId);
    } else {
      this.parentLinkedStudentIds.add(studentId);
    }
  }

  saveUser(): void {
    if (!this.can('users', 'create')) {
      this.message = 'You do not have permission to create user accounts';
      return;
    }
    const payload = { ...this.userForm.getRawValue() } as Record<string, unknown>;
    if (payload['role'] === 'parent' && this.parentLinkedStudentIds.size) {
      payload['linkedStudents'] = [...this.parentLinkedStudentIds];
      if (!payload['linkedStudent']) payload['linkedStudent'] = [...this.parentLinkedStudentIds][0];
    }
    this.submit(this.api.createUser(payload), 'User account created', this.userForm);
    this.parentLinkedStudentIds.clear();
  }

  deactivateUserAccount(id: string): void {
    if (!this.can('users', 'deactivate')) return;
    void this.confirmAction({
      title: 'Deactivate user',
      message: 'Deactivate this user account? The user will no longer be able to sign in.',
      danger: true,
      confirmLabel: 'Deactivate'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.submit(this.api.deactivateUser(id), 'User account deactivated');
    });
  }

  async deleteUserAccount(id: string): Promise<void> {
    if (!this.isSuperAdmin) {
      this.toast.warning('Only Super Admin can permanently delete users');
      return;
    }
    const confirmed = await this.confirmAction({
      title: 'Delete user account',
      message: 'Permanently delete this user account? This cannot be undone.',
      danger: true,
      confirmLabel: 'Delete permanently'
    });
    if (!confirmed) return;
    this.api.deleteUser(id).subscribe({
      next: () => {
        this.toast.success('User permanently deleted');
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Delete failed'))
    });
  }

  roleLabelFor(role: string): string {
    const labels: Record<string, string> = {
      super_admin: 'Super Admin',
      admin: 'Admin',
      teacher: 'Teacher',
      reception: 'Reception',
      accountant: 'Accountant',
      parent: 'Parent',
      student: 'Student'
    };
    return labels[role] || role;
  }

  selectRoleForEdit(slug: string): void {
    this.selectedRoleSlug = slug;
    const role = this.roles.find((r) => r.slug === slug);
    this.editablePermissions = JSON.parse(JSON.stringify(role?.permissions || {}));
  }

  toggleRolePermission(module: string, action: string): void {
    if (!this.isSuperAdmin) return;
    if (!this.editablePermissions[module]) this.editablePermissions[module] = {};
    this.editablePermissions[module][action] = !this.editablePermissions[module][action];
  }

  saveRolePermissions(): void {
    if (!this.isSuperAdmin || !this.selectedRoleSlug) return;
    this.api.updateRolePermissions(this.selectedRoleSlug, this.editablePermissions).subscribe({
      next: () => {
        this.message = 'Role permissions updated';
        this.api.me().subscribe({
          next: (user) => {
            this.currentUser = user;
            this.permissionService.setPermissions(user.permissions);
            localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
          }
        });
        this.refresh();
      },
      error: (err) => { this.message = err.error?.message || 'Permission update failed'; }
    });
  }

  createRole(): void {
    if (!this.isSuperAdmin) return;
    const value = this.roleForm.getRawValue();
    this.api.createRole(value).subscribe({
      next: () => {
        this.message = 'Role created';
        this.roleForm.reset();
        this.refresh();
      },
      error: (err) => { this.message = err.error?.message || 'Role creation failed'; }
    });
  }

  async deleteRole(slug: string): Promise<void> {
    if (!this.isSuperAdmin) return;
    if (this.isSystemRole(slug)) {
      this.toast.warning('System roles cannot be deleted');
      return;
    }
    const confirmed = await this.confirmAction({
      title: 'Delete role',
      message: `Delete role ${slug}?`,
      danger: true,
      confirmLabel: 'Delete role'
    });
    if (!confirmed) return;
    this.api.deleteRole(slug).subscribe({
      next: () => {
        this.toast.success('Role deleted');
        this.selectedRoleSlug = '';
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Role delete failed'))
    });
  }

  isSystemRole(slug: string): boolean {
    return !!this.roles.find((r) => r.slug === slug)?.isSystem;
  }

  saveAttendance(): void {
    const value = this.attendanceForm.getRawValue();
    const dateVal = value.date || '';
    if (this.isSunday(dateVal)) { this.message = 'Cannot mark attendance on Sunday'; return; }
    const hCheck = this.isHoliday(dateVal);
    if (hCheck.is) { this.message = `Cannot mark attendance on holiday: ${hCheck.name}`; return; }
    this.submit(
      this.api.markAttendance({
        records: [
          {
            student: value.student,
            classRoom: value.classRoom,
            academicYear: value.academicYear,
            date: value.date,
            status: value.status,
            remarks: value.remarks
          }
        ]
      }),
      'Attendance saved',
      this.attendanceForm
    );
  }

  loadSelfAttendanceStatus(): void {
    if (!this.isStudent && !this.isTeacher) return;
    this.api.selfAttendanceStatus().subscribe({
      next: (res) => {
        this.selfAttendanceMarked = res.marked;
        this.selfAttendanceStatus = res.status;
      },
      error: () => {}
    });
  }

  markSelfAttendance(): void {
    this.selfAttendanceLoading = true;
    this.api.selfMarkAttendance('present').subscribe({
      next: () => {
        this.selfAttendanceMarked = true;
        this.selfAttendanceStatus = 'present';
        this.selfAttendanceLoading = false;
        this.message = 'Your attendance has been marked for today!';
        this.refresh();
      },
      error: (err) => {
        this.selfAttendanceLoading = false;
        this.message = err.error?.message || 'Could not mark attendance';
      }
    });
  }

  holidayForm = { date: '', name: '', description: '' };

  saveHoliday(): void {
    if (!this.holidayForm.date || !this.holidayForm.name) return;
    this.api.createHoliday(this.holidayForm).subscribe({
      next: () => {
        this.message = `Holiday "${this.holidayForm.name}" added`;
        this.holidayForm = { date: '', name: '', description: '' };
        this.refresh();
      },
      error: (err) => { this.message = err.error?.message || 'Could not add holiday'; }
    });
  }

  deleteHoliday(id: string): void {
    this.api.deleteHoliday(id).subscribe({
      next: () => { this.message = 'Holiday removed'; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Could not remove holiday'; }
    });
  }

  isHoliday(dateStr: string): { is: boolean; name?: string } {
    const d = new Date(dateStr);
    d.setHours(0, 0, 0, 0);
    const match = this.holidays.find((h) => {
      const hd = new Date(h.date);
      hd.setHours(0, 0, 0, 0);
      return hd.getTime() === d.getTime();
    });
    return match ? { is: true, name: match.name } : { is: false };
  }

  isSunday(dateStr: string): boolean {
    return new Date(dateStr).getDay() === 0;
  }

  viewStudentExamResult(result: ExamSubmission): void {
    this.viewingExamResult = result;
  }

  closeExamResultView(): void {
    this.viewingExamResult = null;
  }

  getExamResultForChild(examId: string): ExamSubmission | undefined {
    const childId = this.isStudent ? this.currentUser?.student : this.effectiveChildId;
    if (!childId) return undefined;
    return this.examResults.find((r) => {
      const eid = typeof r.exam === 'string' ? r.exam : r.exam._id;
      const sid = typeof r.student === 'string' ? r.student : r.student._id;
      return eid === examId && sid === childId;
    });
  }

  saveTimetable(): void {
    const value = this.timetableForm.getRawValue();
    this.submit(
      this.api.saveTimetable({
        classRoom: value.classRoom,
        academicYear: value.academicYear,
        dayOfWeek: value.dayOfWeek,
        periods: [
          {
            startTime: value.startTime,
            endTime: value.endTime,
            subject: value.subject,
            teacher: value.teacher,
            room: value.room
          }
        ]
      }),
      'Timetable saved',
      this.timetableForm
    );
  }

  generateExamPaper(): void {
    this.generatingExam = true;
    this.message = '';
    this.api.generateExam(this.examForm.getRawValue()).subscribe({
      next: (exam) => {
        this.generatingExam = false;
        this.message = `AI exam "${exam.title}" created with ${exam.questions.length} questions`;
        this.examForm.reset({ difficulty: 'medium', questionCount: APP_CONSTANTS.DEFAULT_EXAM_QUESTION_COUNT, durationMinutes: APP_CONSTANTS.DEFAULT_EXAM_DURATION });
        this.refresh();
      },
      error: (error) => {
        this.generatingExam = false;
        this.message = error.error?.message || 'Could not generate exam';
      }
    });
  }

  onExamPdfFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.examPdfFile = input.files?.item(0) || null;
  }

  generateExamFromPdf(): void {
    if (!this.examPdfFile) return;
    this.generatingExam = true;
    this.message = '';

    const formData = new FormData();
    formData.append('chapterPdf', this.examPdfFile);
    const values = this.examForm.getRawValue();
    for (const [key, value] of Object.entries(values)) {
      if (value != null && value !== '') formData.append(key, String(value));
    }

    this.api.generateExamFromPdf(formData).subscribe({
      next: (exam) => {
        this.generatingExam = false;
        this.message = `AI exam "${exam.title}" created from PDF with ${exam.questions.length} questions`;
        this.examForm.reset({ difficulty: 'medium', questionCount: APP_CONSTANTS.DEFAULT_EXAM_QUESTION_COUNT, durationMinutes: APP_CONSTANTS.DEFAULT_EXAM_DURATION });
        this.examPdfFile = null;
        this.refresh();
      },
      error: (error) => {
        this.generatingExam = false;
        this.message = error.error?.message || 'Could not generate exam from PDF';
      }
    });
  }

  publishExamPaper(examId: string): void {
    this.submit(this.api.publishExam(examId), 'Exam published for students');
  }

  closeExamPaper(examId: string): void {
    this.submit(this.api.closeExam(examId), 'Exam closed');
  }

  deleteExamPaper(examId: string): void {
    this.submit(this.api.deleteExam(examId), 'Exam deleted');
  }

  viewExamReport(examId: string): void {
    this.api.examClassReport(examId).subscribe({
      next: (report) => {
        this.examReport = report;
        this.message = `Report loaded for ${report.exam.title}`;
      },
      error: (error) => {
        this.message = error.error?.message || 'Could not load exam report';
      }
    });
  }

  startExam(examId: string): void {
    this.api.startExamAttempt(examId).subscribe({
      next: ({ exam, submission }) => {
        this.activeExamAttempt = { exam, submission };
        const controls: Record<string, unknown> = {};
        exam.questions.forEach((question) => {
          if (question._id) controls[`q_${question._id}`] = [''];
        });
        this.examAttemptForm = this.fb.group(controls);
        this.message = `Exam started: ${exam.title}`;
      },
      error: (error) => {
        this.message = error.error?.message || 'Could not start exam';
      }
    });
  }

  submitExam(): void {
    if (!this.activeExamAttempt) return;
    const answers = this.activeExamAttempt.exam.questions
      .filter((q) => q._id)
      .map((q) => ({
        questionId: q._id as string,
        answer: String(this.examAttemptForm.get(`q_${q._id}`)?.value || '')
      }));
    this.api.submitExamAttempt(this.activeExamAttempt.exam._id, answers).subscribe({
      next: (submission) => {
        this.message = `Exam submitted. Score: ${submission.score}/${submission.maxScore} (${submission.percentage}%) — Grade ${submission.grade}`;
        this.activeExamAttempt = null;
        this.refresh();
      },
      error: (error) => {
        this.message = error.error?.message || 'Could not submit exam';
      }
    });
  }

  examTitle(exam?: Exam | string): string {
    if (!exam || typeof exam === 'string') return '';
    return exam.title;
  }

  toggleStudent(studentId: string, checked: boolean): void {
    if (checked) this.selectedStudentIds.add(studentId);
    else this.selectedStudentIds.delete(studentId);
  }

  promoteStudents(): void {
    const value = this.promotionForm.getRawValue();
    this.submit(
      this.api.promote({
        studentIds: Array.from(this.selectedStudentIds),
        fromAcademicYear: value.fromAcademicYear,
        toAcademicYear: value.toAcademicYear,
        toClassRoom: value.toClassRoom
      }),
      'Students promoted',
      this.promotionForm
    );
    this.selectedStudentIds.clear();
  }

  teacherName(teacher?: Teacher | string): string {
    if (!teacher || typeof teacher === 'string') return 'Not assigned';
    return `${teacher.firstName} ${teacher.lastName || ''}`.trim();
  }

  className(classRoom?: ClassRoom | string): string {
    if (!classRoom || typeof classRoom === 'string') return '';
    return `${classRoom.name}-${classRoom.section}`;
  }

  classYearName(classRoom: ClassRoom): string {
    if (typeof classRoom.academicYear === 'string') {
      return this.years.find((y) => y._id === classRoom.academicYear)?.name || '';
    }
    return classRoom.academicYear?.name || '';
  }

  enrollmentClassName(student?: Student): string {
    const latest = student?.enrollments?.[student.enrollments.length - 1];
    if (!latest) return 'Unassigned';
    return this.className(latest.classRoom as ClassRoom);
  }

  studentName(student?: Student | string): string {
    if (!student || typeof student === 'string') return '';
    return `${student.firstName} ${student.lastName || ''}`.trim();
  }

  payrollTeacherName(teacher?: Teacher | string): string {
    return this.teacherName(teacher);
  }

  getMonthName(month: number): string {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1] || '';
  }

  firstPeriod(row: TimetableRow): TimetableRow['periods'][number] | undefined {
    return row.periods[0];
  }

  get filteredStudents(): Student[] {
    const search = this.filters.studentSearch.toLowerCase().trim();
    return this.students.filter((student) => {
      const guardian = student.guardians?.[0];
      const latest = student.enrollments?.[student.enrollments.length - 1];
      const rollNumber = latest?.rollNumber || '';
      const searchBlob = [
        student.admissionNumber,
        this.studentName(student),
        student.status,
        rollNumber,
        guardian?.name,
        guardian?.phone,
        student.aadhaarNumber,
        student.udisePenId
      ].filter(Boolean).join(' ').toLowerCase();
      const matchesSearch = !search || searchBlob.includes(search);

      const matchesClass = !this.filters.studentClass || student.enrollments?.some((enrollment) => {
        const classId = typeof enrollment.classRoom === 'string' ? enrollment.classRoom : enrollment.classRoom?._id;
        return classId === this.filters.studentClass;
      });

      const matchesYear = !this.filters.studentYear || student.enrollments?.some((enrollment) => {
        const yearId = typeof enrollment.academicYear === 'string' ? enrollment.academicYear : enrollment.academicYear?._id;
        return yearId === this.filters.studentYear;
      });

      const matchesSection = !this.filters.studentSection || student.enrollments?.some((enrollment) => {
        const room = enrollment.classRoom;
        const section = typeof room === 'string'
          ? this.classes.find((c) => c._id === room)?.section
          : room?.section;
        return section === this.filters.studentSection;
      });

      const matchesStatus = !this.filters.studentStatus || student.status === this.filters.studentStatus;

      const admissionDate = student.admissionDate ? new Date(student.admissionDate) : null;
      const matchesAdmissionFrom = !this.filters.studentAdmissionFrom || (admissionDate && admissionDate >= new Date(this.filters.studentAdmissionFrom));
      const matchesAdmissionTo = !this.filters.studentAdmissionTo || (admissionDate && admissionDate <= new Date(this.filters.studentAdmissionTo + 'T23:59:59'));

      return matchesSearch && matchesClass && matchesYear && matchesSection && matchesStatus && matchesAdmissionFrom && matchesAdmissionTo;
    });
  }

  get sortedStudents(): Student[] {
    if (this.isServerPaged('students')) return (this.listingRows.students as Student[]) || [];
    return sortItems(this.filteredStudents, this.listSort.students?.field, this.listSort.students?.dir, {
      admissionNumber: (student) => student.admissionNumber,
      name: (student) => this.studentName(student),
      class: (student) => this.enrollmentClassName(student),
      admissionDate: (student) => student.admissionDate || '',
      status: (student) => student.status
    });
  }

  get filteredClasses(): ClassRoom[] {
    const search = this.filters.classSearch.toLowerCase().trim();
    return this.classes.filter((room) => {
      const matchesSearch = !search || `${room.name}-${room.section} ${this.teacherName(room.classTeacher)}`.toLowerCase().includes(search);
      const matchesYear = !this.filters.classYear || String(room.academicYear) === this.filters.classYear
        || (typeof room.academicYear === 'object' && room.academicYear?._id === this.filters.classYear);
      const matchesStatus = !this.filters.classStatus || (room.status || 'active') === this.filters.classStatus;
      return matchesSearch && matchesYear && matchesStatus;
    });
  }

  get sortedClasses(): ClassRoom[] {
    if (this.isServerPaged('classes')) return (this.listingRows.classes as ClassRoom[]) || [];
    return sortItems(this.filteredClasses, this.listSort.classes?.field, this.listSort.classes?.dir, {
      class: (room) => `${room.name}-${room.section}`,
      academicYear: (room) => this.classYearName(room),
      teacher: (room) => this.teacherName(room.classTeacher),
      status: (room) => room.status || 'active',
      monthlyFee: (room) => room.monthlyFee || 0
    });
  }

  get filteredYears(): AcademicYear[] {
    const search = this.filters.yearSearch.toLowerCase().trim();
    return this.years.filter((year) => {
      const matchesSearch = !search || year.name.toLowerCase().includes(search);
      const matchesStatus = !this.filters.yearStatus || this.yearStatus(year) === this.filters.yearStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get sortedYears(): AcademicYear[] {
    if (this.isServerPaged('years')) return (this.listingRows.years as AcademicYear[]) || [];
    return sortItems(this.filteredYears, this.listSort.years?.field, this.listSort.years?.dir, {
      name: (year) => year.name,
      startDate: (year) => year.startDate,
      endDate: (year) => year.endDate,
      status: (year) => this.yearStatus(year)
    });
  }

  get filteredTeachers(): Teacher[] {
    const search = this.filters.teacherSearch.toLowerCase().trim();
    return this.teachers.filter((teacher) => {
      const matchesSearch = !search || `${teacher.employeeCode} ${this.teacherName(teacher)} ${teacher.phone} ${teacher.email || ''}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.teacherStatus || teacher.status === this.filters.teacherStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get sortedTeachers(): Teacher[] {
    if (this.isServerPaged('teachers')) return (this.listingRows.teachers as Teacher[]) || [];
    return sortItems(this.filteredTeachers, this.listSort.teachers?.field, this.listSort.teachers?.dir, {
      name: (teacher) => this.teacherName(teacher),
      employeeCode: (teacher) => teacher.employeeCode,
      phone: (teacher) => teacher.phone,
      baseSalary: (teacher) => teacher.baseSalary,
      status: (teacher) => teacher.status
    });
  }

  get filteredInvoices(): FeeInvoice[] {
    const search = this.filters.invoiceSearch.toLowerCase().trim();
    return this.invoices.filter((invoice) => {
      const matchesSearch = !search || `${invoice.invoiceNumber} ${this.studentName(invoice.student)}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.invoiceStatus || invoice.status === this.filters.invoiceStatus;
      const matchesYear = !this.filters.invoiceYear || (
        typeof invoice.academicYear === 'string'
          ? invoice.academicYear === this.filters.invoiceYear
          : invoice.academicYear?._id === this.filters.invoiceYear
      );
      const matchesClass = !this.filters.invoiceClass || (
        typeof invoice.classRoom === 'string'
          ? invoice.classRoom === this.filters.invoiceClass
          : invoice.classRoom?._id === this.filters.invoiceClass
      );
      const matchesMonth = !this.filters.invoiceMonth || (
        invoice.dueDate && (new Date(invoice.dueDate).getMonth() + 1) === Number(this.filters.invoiceMonth)
      );
      return matchesSearch && matchesStatus && matchesYear && matchesClass && matchesMonth;
    });
  }

  get filteredPayrolls(): PayrollRecord[] {
    const search = this.filters.payrollSearch.toLowerCase().trim();
    return this.payrolls.filter((payroll) => {
      const matchesSearch = !search || `${this.payrollTeacherName(payroll.teacher)} ${this.getMonthName(payroll.month)} ${payroll.year}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.payrollStatus || payroll.status === this.filters.payrollStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get filteredAttendance(): AttendanceRecord[] {
    const search = this.filters.attendanceSearch.toLowerCase().trim();
    return this.attendance.filter((row) => {
      const matchesSearch = !search || `${this.studentName(row.student)} ${this.className(row.classRoom)} ${row.status}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.attendanceStatus || row.status === this.filters.attendanceStatus;
      const matchesClass = !this.filters.attendanceClass || (typeof row.classRoom === 'string' ? row.classRoom : row.classRoom?._id) === this.filters.attendanceClass;
      const matchesStudent = !this.filters.attendanceStudent || (typeof row.student === 'string' ? row.student : (row.student as any)?._id) === this.filters.attendanceStudent;
      return matchesSearch && matchesStatus && matchesClass && matchesStudent;
    });
  }

  get attendanceStudentOptions(): Student[] {
    if (!this.filters.attendanceClass) return this.students;
    return this.students.filter((s) =>
      s.enrollments?.some((e) => {
        const classId = typeof e.classRoom === 'string' ? e.classRoom : e.classRoom?._id;
        return classId === this.filters.attendanceClass;
      })
    );
  }

  get filteredTimetable(): TimetableRow[] {
    const search = this.filters.timetableSearch.toLowerCase().trim();
    return this.timetable.filter((row) => !search || `${row.dayOfWeek} ${this.className(row.classRoom)} ${row.periods.map((period) => period.subject).join(' ')}`.toLowerCase().includes(search));
  }

  get filteredExams(): Exam[] {
    const search = this.filters.examSearch.toLowerCase().trim();
    return this.exams.filter((exam) => {
      const matchesSearch = !search || `${exam.title} ${exam.subject} ${exam.chapter}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.examStatus || exam.status === this.filters.examStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get filteredUsers(): Array<AuthUser & { _id?: string; isActive?: boolean }> {
    const search = this.filters.userSearch.toLowerCase().trim();
    return this.users.filter((user) => {
      const matchesSearch = !search || `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(search);
      const matchesRole = !this.filters.userRole || user.role === this.filters.userRole;
      const status = user.isActive === false ? 'inactive' : 'active';
      const matchesStatus = !this.filters.userStatus || status === this.filters.userStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  get sortedUsers(): Array<AuthUser & { _id?: string; isActive?: boolean }> {
    if (this.isServerPaged('users')) return (this.listingRows.users as Array<AuthUser & { _id?: string; isActive?: boolean }>) || [];
    return sortItems(this.filteredUsers, this.listSort.users?.field, this.listSort.users?.dir, {
      name: (user) => user.name,
      email: (user) => user.email,
      role: (user) => user.role,
      status: (user) => (user.isActive === false ? 'inactive' : 'active')
    });
  }

  get filteredExamResults(): ExamSubmission[] {
    const search = this.filters.examResultSearch.toLowerCase().trim();
    return this.examResults.filter((result) => {
      const studentLabel = this.studentName(result.student).toLowerCase();
      const examLabel = this.examTitle(result.exam).toLowerCase();
      const matchesSearch = !search || `${studentLabel} ${examLabel} ${result.grade || ''}`.toLowerCase().includes(search);
      const matchesGrade = !this.filters.examResultGrade || result.grade === this.filters.examResultGrade;
      return matchesSearch && matchesGrade;
    });
  }

  get profileStudentOptions(): Student[] {
    const search = this.filters.profileSearch.toLowerCase().trim();
    return this.students.filter((s) => {
      const matchesSearch = !search || `${s.admissionNumber} ${this.studentName(s)}`.toLowerCase().includes(search);
      const matchesClass = !this.filters.profileClass || s.enrollments?.some((e) => {
        const classId = typeof e.classRoom === 'string' ? e.classRoom : e.classRoom?._id;
        return classId === this.filters.profileClass;
      });
      return matchesSearch && matchesClass;
    });
  }

  get filteredProfileExams(): StudentProfile['academics']['examResults'] {
    if (!this.studentProfile) return [];
    const search = this.filters.profileExamSearch.toLowerCase().trim();
    return this.studentProfile.academics.examResults.filter((e) =>
      !search || `${e.title} ${e.subject} ${e.chapter}`.toLowerCase().includes(search)
    );
  }

  get filteredProfileFees(): StudentProfile['fees']['invoices'] {
    if (!this.studentProfile) return [];
    const search = this.filters.profileFeeSearch.toLowerCase().trim();
    return this.studentProfile.fees.invoices.filter((inv) => {
      const matchesSearch = !search || inv.invoiceNumber.toLowerCase().includes(search);
      const matchesStatus = !this.filters.profileFeeStatus || inv.status === this.filters.profileFeeStatus;
      return matchesSearch && matchesStatus;
    });
  }

  paged<T>(key: ListKey, items: T[]): T[] {
    if (this.isServerPaged(key)) return items;
    const size = this.getListPageSize(key);
    const page = Math.min(this.pages[key], this.pageCount(items, key));
    const start = (page - 1) * size;
    return items.slice(start, start + size);
  }

  pageCount(items: unknown[], key: ListKey): number {
    const size = this.getListPageSize(key);
    const total = this.isServerPaged(key) ? (this.listingTotals[key] ?? 0) : items.length;
    return Math.max(1, Math.ceil(total / size));
  }

  setPage(key: ListKey, page: number, items: unknown[]): void {
    const nextPage = Math.min(Math.max(page, 1), this.pageCount(items, key));
    this.pages[key] = nextPage;
    this.persistListState(key);
    this.reloadListing(key);
  }

  resetPage(key: ListKey): void {
    this.pages[key] = 1;
    this.persistListState(key);
  }

  private readStoredUser(): AuthUser | null {
    try {
      return JSON.parse(localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY) || 'null');
    } catch {
      localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
      return null;
    }
  }

  private persistSession(token: string, user: AuthUser): void {
    localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY, token);
    localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
    this.token = token;
    this.currentUser = user;
    this.permissionService.setPermissions(user.permissions);
    if (user.role === 'parent') {
      this.parentSelectedChild = user.linkedStudents?.[0] || user.linkedStudent || '';
    }
  }

  private clearSession(): void {
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
    this.token = null;
    this.currentUser = null;
    this.permissionService.clear();
  }

  private openProtectedPdf(url: string): void {
    this.openProtectedFile(url);
  }

  private openProtectedFile(url: string, options?: { download?: boolean; fileName?: string }): void {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
    if (!token) {
      this.toast.error('Please sign in again');
      return;
    }

    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then(async (response) => {
        if (!response.ok) {
          const body = await response.json().catch(() => ({} as { message?: string }));
          throw new Error(body.message || 'Unable to open document');
        }
        return response.blob();
      })
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        if (options?.download) {
          const anchor = document.createElement('a');
          anchor.href = blobUrl;
          anchor.download = options.fileName || 'document';
          anchor.click();
          setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
          return;
        }
        window.open(blobUrl, '_blank', 'noopener,noreferrer');
      })
      .catch((error: Error) => this.toast.error(error.message || 'Document unavailable'));
  }

  private submit(request: Observable<unknown>, successMessage: string, formToReset?: { reset: () => void }): void {
    if (this.submitting) return;
    this.message = '';
    this.submitting = true;
    this.loading = true;
    request.subscribe({
      next: () => {
        this.toast.success(successMessage);
        if (formToReset) formToReset.reset();
        this.refresh();
      },
      error: (error) => {
        this.toast.error(extractApiMessage(error, 'Could not save record'));
        this.submitting = false;
        this.loading = false;
      }
    });
  }

  private async confirmAction(options: { message: string; title?: string; danger?: boolean; confirmLabel?: string }): Promise<boolean> {
    return this.confirmDialog.confirm(options);
  }
}
