import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, forkJoin, of } from 'rxjs';

import { AcademicYear, AttendanceRecord, AuthUser, ClassRoom, DashboardSummary, Exam, ExamClassReport, ExamSubmission, FeeInvoice, PayrollRecord, Student, StudentProfile, Teacher, TimetableRow, UserRole } from './core/models';
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
import { ErpApiService } from './services/erp-api.service';

type TabKey = 'dashboard' | 'students' | 'classes' | 'teachers' | 'fees' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'profile' | 'users';
type ListKey = 'dashboardStudents' | 'dashboardAttendance' | 'dashboardTeachers' | 'dashboardPayroll' | 'dashboardTimetable' | 'students' | 'classes' | 'teachers' | 'invoices' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'examResults' | 'users' | 'profileExams' | 'profileFees';
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
    SpinnerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private readonly api = inject(ErpApiService);
  private readonly fb = inject(FormBuilder);

  activeTab: TabKey = 'dashboard';
  loading = false;
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
  selectedStudentDocuments: Array<{ _id?: string; type: string; title: string; fileUrl: string; storageProvider: 'local' | 's3'; mimeType?: string; uploadedAt?: string; status?: string; rejectReason?: string }> = [];
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
  editingPayrollId = '';
  financeRangeDays = APP_CONSTANTS.DEFAULT_FINANCE_RANGE_DAYS;
  readonly financeRanges = APP_CONSTANTS.FINANCE_RANGES;
  readonly pageSize = APP_CONSTANTS.PAGE_SIZE;
  readonly filters = {
    studentSearch: '',
    studentClass: '',
    classSearch: '',
    teacherSearch: '',
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
    isActive: [true]
  });

  classForm = this.fb.group({
    name: ['', Validators.required],
    section: [APP_CONSTANTS.DEFAULT_SECTION, Validators.required],
    capacity: [APP_CONSTANTS.DEFAULT_CAPACITY, Validators.required],
    academicYear: ['', Validators.required],
    classTeacher: [''],
    monthlyFee: [0, Validators.required]
  });

  teacherForm = this.fb.group({
    employeeCode: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    phone: ['', [Validators.required, Validators.pattern(APP_CONSTANTS.PHONE_PATTERN)]],
    email: [''],
    qualification: [''],
    baseSalary: [0, Validators.required]
  });

  admissionForm = this.fb.group({
    admissionNumber: [''],
    firstName: ['', Validators.required],
    lastName: [''],
    gender: ['male', Validators.required],
    dateOfBirth: ['', Validators.required],
    aadhaarNumber: ['', Validators.pattern(APP_CONSTANTS.AADHAAR_PATTERN)],
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
    previousSchool: [''],
    previousSchoolAddress: [''],
    previousSchoolLastClass: [''],
    previousSchoolYearOfPassing: [''],
    previousSchoolReasonForLeaving: [''],
    previousSchoolTcNumber: ['']
  });

  feeForm = this.fb.group({
    student: ['', Validators.required],
    academicYear: ['', Validators.required],
    classRoom: ['', Validators.required],
    invoiceNumber: [''],
    dueDate: ['', Validators.required],
    label: [APP_CONSTANTS.DEFAULT_FEE_LABEL, Validators.required],
    amount: [0, Validators.required],
    discount: [0],
    fine: [0]
  });

  paymentForm = this.fb.group({
    invoiceId: ['', Validators.required],
    amount: [0, Validators.required],
    mode: [PAYMENT_MODES.CASH, Validators.required],
    referenceNumber: ['']
  });

  payrollForm = this.fb.group({
    teacher: ['', Validators.required],
    month: [new Date().getMonth() + 1, Validators.required],
    year: [new Date().getFullYear(), Validators.required],
    basicSalary: [0, Validators.required],
    allowances: [0],
    deductions: [0]
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
      this.activeTab = 'dashboard';
      if (this.currentUser.role === 'parent') {
        this.parentSelectedChild = this.currentUser.linkedStudents?.[0] || this.currentUser.linkedStudent || '';
      }
      this.refresh();
    }
  }

  get tabs(): Array<{ key: TabKey; label: string; icon: TabIcon }> {
    if (!this.currentUser) return [];
    return this.allTabs.filter((tab) => tab.roles.includes(this.currentUser!.role)).map(({ key, label, icon }) => ({ key, label, icon }));
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  get isTeacher(): boolean {
    return this.currentUser?.role === 'teacher';
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
        if (user.role !== this.selectedLoginRole) {
          this.message = `This account is registered as ${user.role}. Please select the correct role and try again.`;
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
      summary: this.api.dashboard(this.financeRangeDays),
      years: this.api.academicYears(),
      classes: this.isStudent ? of([] as ClassRoom[]) : this.api.classes(),
      teachers: this.isStudent ? of([] as Teacher[]) : this.api.teachers(),
      students: this.api.students(),
      invoices: this.isTeacher ? of([] as FeeInvoice[]) : this.api.invoices(),
      payrolls: this.isAdmin ? this.api.payroll() : of([] as PayrollRecord[]),
      attendance: this.api.attendance(),
      holidays: this.api.holidays(),
      timetable: this.api.timetable(),
      exams: this.api.exams(),
      examResults: this.api.examResults(),
      users: this.isAdmin ? this.api.listUsers() : of([])
    }).subscribe({
      next: (data) => {
        this.summary = data.summary;
        this.years = data.years;
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
        this.loading = false;
        this.loadSelfAttendanceStatus();
        if (this.isStudent && this.currentUser?.student && this.activeTab === 'profile') {
          this.loadStudentProfile(this.currentUser.student);
        } else if (this.isParent && this.effectiveChildId && this.activeTab === 'profile') {
          this.loadStudentProfile(this.effectiveChildId);
        }
      },
      error: () => {
        this.message = 'Could not load workspace data. Check backend, MongoDB, and your role permissions.';
        this.loading = false;
      }
    });
  }

  setTab(tab: TabKey): void {
    this.activeTab = tab;
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
    this.submit(this.api.createAcademicYear(this.academicYearForm.getRawValue() as Partial<AcademicYear>), 'Academic year saved', this.academicYearForm);
  }

  saveClass(): void {
    const request = this.editingClassId
      ? this.api.updateClass(this.editingClassId, this.classForm.getRawValue())
      : this.api.createClass(this.classForm.getRawValue());
    this.submit(request, this.editingClassId ? 'Class updated' : 'Class saved', this.classForm);
    this.editingClassId = '';
  }

  editClass(room: ClassRoom): void {
    this.editingClassId = room._id;
    this.classForm.patchValue({
      name: room.name,
      section: room.section,
      capacity: (room as any).capacity || 40,
      academicYear: typeof room.academicYear === 'string' ? room.academicYear : room.academicYear?._id,
      classTeacher: typeof room.classTeacher === 'string' ? room.classTeacher : room.classTeacher?._id || '',
      monthlyFee: room.monthlyFee
    });
    this.message = `Editing class ${room.name}-${room.section}`;
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
    this.submit(this.api.deleteClass(id), 'Class deleted');
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
    const teacher = this.viewingTeacher || this.myTeacherProfile;
    if (!teacher) return;
    const exp = [...(teacher.experience || [])];
    exp.splice(index, 1);
    const request = this.isTeacher
      ? this.api.selfUpdateTeacher({ experience: exp })
      : this.api.updateTeacher(teacher._id, { experience: exp });
    request.subscribe({
      next: () => { this.message = 'Experience removed'; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Could not remove experience'; }
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
    const teacher = this.viewingTeacher || this.myTeacherProfile;
    if (!teacher) return;
    const edu = [...(teacher.education || [])];
    edu.splice(index, 1);
    const request = this.isTeacher
      ? this.api.selfUpdateTeacher({ education: edu })
      : this.api.updateTeacher(teacher._id, { education: edu });
    request.subscribe({
      next: () => { this.message = 'Education removed'; this.refresh(); },
      error: (err) => { this.message = err.error?.message || 'Could not remove education'; }
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
        this.message = `Document ${action === 'approve' ? 'approved' : 'rejected — reupload requested'}`;
        this.verifyDocReason = '';
        this.loadStudentDocuments(this.selectedStudentId);
      },
      error: (err) => { this.message = err.error?.message || 'Verification failed'; }
    });
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

  deleteTeacher(id: string): void {
    this.submit(this.api.deleteTeacher(id), 'Teacher deleted');
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
        aadhaarNumber: value.aadhaarNumber,
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
        aadhaarNumber: value.aadhaarNumber,
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
      previousSchool: value.previousSchool,
      previousSchoolDetails: {
        schoolName: value.previousSchool,
        address: value.previousSchoolAddress,
        lastClass: value.previousSchoolLastClass,
        yearOfPassing: value.previousSchoolYearOfPassing ? Number(value.previousSchoolYearOfPassing) : undefined,
        reasonForLeaving: value.previousSchoolReasonForLeaving,
        tcNumber: value.previousSchoolTcNumber
      }
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
    this.editingStudentId = student._id;
    this.admissionForm.patchValue({
      admissionNumber: student.admissionNumber,
      firstName: student.firstName,
      lastName: student.lastName || '',
      gender: student.gender,
      dateOfBirth: student.dateOfBirth ? student.dateOfBirth.slice(0, 10) : '',
      aadhaarNumber: student.aadhaarNumber || '',
      line1: (student as any).address?.line1 || '',
      city: (student as any).address?.city || '',
      state: (student as any).address?.state || '',
      pincode: (student as any).address?.pincode || '',
      guardianName: guardian?.name || '',
      guardianRelation: guardian?.relation || 'Father',
      guardianPhone: guardian?.phone || '',
      academicYear: typeof latest?.academicYear === 'string' ? latest.academicYear : latest?.academicYear?._id || '',
      classRoom: typeof latest?.classRoom === 'string' ? latest.classRoom : latest?.classRoom?._id || '',
      rollNumber: latest?.rollNumber || ''
    });
    this.message = `Editing student ${this.studentName(student)}`;
  }

  deleteStudent(id: string): void {
    this.submit(this.api.deleteStudent(id), 'Student archived');
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
    const payload = { ...this.userForm.getRawValue() } as Record<string, unknown>;
    if (payload['role'] === 'parent' && this.parentLinkedStudentIds.size) {
      payload['linkedStudents'] = [...this.parentLinkedStudentIds];
      if (!payload['linkedStudent']) payload['linkedStudent'] = [...this.parentLinkedStudentIds][0];
    }
    this.submit(this.api.createUser(payload), 'User account created', this.userForm);
    this.parentLinkedStudentIds.clear();
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
      const matchesSearch = !search || `${student.admissionNumber} ${this.studentName(student)} ${student.status}`.toLowerCase().includes(search);
      const matchesClass = !this.filters.studentClass || student.enrollments?.some((enrollment) => {
        const classId = typeof enrollment.classRoom === 'string' ? enrollment.classRoom : enrollment.classRoom?._id;
        return classId === this.filters.studentClass;
      });
      return matchesSearch && matchesClass;
    });
  }

  get filteredClasses(): ClassRoom[] {
    const search = this.filters.classSearch.toLowerCase().trim();
    return this.classes.filter((room) => !search || `${room.name}-${room.section} ${this.teacherName(room.classTeacher)}`.toLowerCase().includes(search));
  }

  get filteredTeachers(): Teacher[] {
    const search = this.filters.teacherSearch.toLowerCase().trim();
    return this.teachers.filter((teacher) => !search || `${teacher.employeeCode} ${this.teacherName(teacher)} ${teacher.phone} ${teacher.email || ''}`.toLowerCase().includes(search));
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
      return matchesSearch && matchesRole;
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
    const page = Math.min(this.pages[key], this.pageCount(items));
    const start = (page - 1) * this.pageSize;
    return items.slice(start, start + this.pageSize);
  }

  pageCount(items: unknown[]): number {
    return Math.max(1, Math.ceil(items.length / this.pageSize));
  }

  setPage(key: ListKey, page: number, items: unknown[]): void {
    this.pages[key] = Math.min(Math.max(page, 1), this.pageCount(items));
  }

  resetPage(key: ListKey): void {
    this.pages[key] = 1;
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
    if (user.role === 'parent') {
      this.parentSelectedChild = user.linkedStudents?.[0] || user.linkedStudent || '';
    }
  }

  private clearSession(): void {
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
    this.token = null;
    this.currentUser = null;
  }

  private openProtectedPdf(url: string): void {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
    if (!token) return;
    fetch(url, { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => response.blob())
      .then((blob) => window.open(URL.createObjectURL(blob), '_blank'));
  }

  private submit(request: Observable<unknown>, successMessage: string, formToReset?: { reset: () => void }): void {
    this.message = '';
    this.loading = true;
    request.subscribe({
      next: () => {
        this.message = successMessage;
        if (formToReset) formToReset.reset();
        this.refresh();
      },
      error: (error) => {
        this.message = error.error?.message || 'Could not save record';
        this.loading = false;
      }
    });
  }
}
