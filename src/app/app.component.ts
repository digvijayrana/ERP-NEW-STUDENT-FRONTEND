import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

import { AcademicYear, AttendanceRecord, AttendanceRegisterSheet, AttendanceReportRow, AuthUser, BusRegistration, BusReportRow, BusRoute, BusStop, ClassRoom, DashboardSummary, ErpRole, Exam, ExamClassReport, ExamSubmission, FeeHistoryRow, FeeInvoice, GlobalSearchResult, ParentSearchResult, PayrollRecord, PromotionBatch, PromotionEligibleRow, PromotionPreview, PromotionPreviewRow, ReportDomain, ReportRow, Student, StudentProfile, Teacher, TimetableRow, UserRole, WorkflowNotification } from './core/models';
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
import { TransportPageComponent } from './pages/transport-page/transport-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ToastContainerComponent } from './shared/toast-container.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog.component';
import { ErpApiService } from './services/erp-api.service';
import { ListingStateService } from './services/listing-state.service';
import { SessionContextService } from './services/session-context.service';
import { PermissionAction, PermissionService } from './services/permission.service';
import { ToastService } from './services/toast.service';
import { ConfirmDialogService } from './services/confirm-dialog.service';
import { exportRowsToCsv, exportRowsToPdf, LIST_FILTER_KEYS, applyDefaultListSort, sortItems, SortDirection } from './core/listing.util';

type TabKey = 'dashboard' | 'students' | 'classes' | 'teachers' | 'fees' | 'transport' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'profile' | 'users' | 'reports';
type ListKey = 'dashboardStudents' | 'dashboardAttendance' | 'dashboardTeachers' | 'dashboardPayroll' | 'dashboardTimetable' | 'dashboardActivities' | 'students' | 'classes' | 'years' | 'teachers' | 'invoices' | 'feeHistory' | 'busRoutes' | 'busRegistrations' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'examResults' | 'users' | 'profileExams' | 'profileFees';
type TabIcon = 'dashboard' | 'students' | 'classes' | 'teachers' | 'fees' | 'transport' | 'payroll' | 'promotion' | 'attendance' | 'timetable' | 'exams' | 'profile' | 'users' | 'reports';

type HolidayRow = { _id: string; date: string; name: string; description?: string };
type PermissionSchema = { modules: string[]; actions: string[] };
type AppUser = AuthUser & { _id?: string; isActive?: boolean };
type ForkJoinSources = Record<string, Observable<unknown>>;

type PortalShellPayload = {
  summary: DashboardSummary;
  students?: Student[];
};

type TeacherAttendancePayload = {
  attendance: AttendanceRecord[];
  classes?: ClassRoom[];
  students?: Student[];
};

type AdminRefreshPayload = {
  summary: DashboardSummary;
  years: AcademicYear[];
  classes: ClassRoom[];
  teachers: Teacher[];
  students: Student[];
  invoices: FeeInvoice[];
  feeHistory: FeeHistoryRow[];
  busRoutes: BusRoute[];
  busRegistrations: BusRegistration[];
  payrolls: PayrollRecord[];
  attendance: AttendanceRecord[];
  holidays: HolidayRow[];
  timetable: TimetableRow[];
  exams: Exam[];
  examResults: ExamSubmission[];
  users: AppUser[];
  roles: ErpRole[];
  permissionSchema: PermissionSchema;
};

interface PortalShellRequests {
  summary: Observable<DashboardSummary>;
  students?: Observable<Student[]>;
}

interface TeacherAttendanceRequests {
  attendance: Observable<AttendanceRecord[]>;
  classes?: Observable<ClassRoom[]>;
  students?: Observable<Student[]>;
}

interface AdminRefreshRequests {
  summary: Observable<DashboardSummary>;
  years: Observable<AcademicYear[]>;
  classes: Observable<ClassRoom[]>;
  teachers: Observable<Teacher[]>;
  students: Observable<Student[]>;
  invoices: Observable<FeeInvoice[]>;
  feeHistory: Observable<FeeHistoryRow[]>;
  busRoutes: Observable<BusRoute[]>;
  busRegistrations: Observable<BusRegistration[]>;
  payrolls: Observable<PayrollRecord[]>;
  attendance: Observable<AttendanceRecord[]>;
  holidays: Observable<HolidayRow[]>;
  timetable: Observable<TimetableRow[]>;
  exams: Observable<Exam[]>;
  examResults: Observable<ExamSubmission[]>;
  users: Observable<AppUser[]>;
  roles: Observable<ErpRole[]>;
  permissionSchema: Observable<PermissionSchema>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    TransportPageComponent,
    ReportsPageComponent,
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
  private readonly sessionContext = inject(SessionContextService);
  private readonly toast = inject(ToastService);
  private readonly confirmDialog = inject(ConfirmDialogService);

  activeTab: TabKey = 'dashboard';
  loading = false;
  submitting = false;
  private loginMessage = '';

  get message(): string {
    return this.loginMessage;
  }

  set message(value: string) {
    this.loginMessage = value;
    if (!value || !this.currentUser) return;
    const lower = value.toLowerCase();
    if (lower.includes('fail') || lower.includes('could not') || lower.includes('unable') || lower.includes('error')) {
      this.toast.error(value);
      return;
    }
    if (lower.includes('permission') || lower.includes('cannot') || lower.includes('read-only') || lower.includes('enter or generate')) {
      this.toast.warning(value);
      return;
    }
    if (lower.includes('editing') || lower.includes('found existing') || lower.includes('no existing')) {
      this.toast.info(value);
      return;
    }
    this.toast.success(value);
  }

  token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
  currentUser: AuthUser | null = this.readStoredUser();
  pageVm = this;
  isProfileMenuOpen = false;
  isNotificationMenuOpen = false;
  workflowNotifications: WorkflowNotification[] = [];
  workflowNotificationsLoading = false;
  globalSearchQuery = '';
  globalSearchResults: GlobalSearchResult[] = [];
  globalSearchOpen = false;
  globalSearchLoading = false;
  globalSearchActiveIndex = -1;
  private globalSearchTimer: ReturnType<typeof setTimeout> | null = null;
  bulkStatusTarget = '';
  bulkClassTarget = '';
  bulkBusRouteTarget = '';
  bulkBusStopSequence = '';
  bulkNotificationMessage = '';
  isSidebarCollapsed = false;
  summary?: DashboardSummary;
  years: AcademicYear[] = [];
  classes: ClassRoom[] = [];
  teachers: Teacher[] = [];
  students: Student[] = [];
  invoices: FeeInvoice[] = [];
  feeHistory: FeeHistoryRow[] = [];
  busRoutes: BusRoute[] = [];
  busRegistrations: BusRegistration[] = [];
  busReportRows: BusReportRow[] = [];
  busRouteStops: BusStop[] = [];
  editingBusRouteId = '';
  editingBusRegistrationId = '';
  transportReportType = 'route-wise';
  payrolls: PayrollRecord[] = [];
  attendance: AttendanceRecord[] = [];
  attendanceRegisterRows: Array<{ studentId: string; studentName: string; admissionNumber: string; status: string; remarks: string }> = [];
  attendanceRegisterWorkflow: 'draft' | 'submitted' | 'locked' = 'draft';
  attendanceRegisterSummary = { present: 0, absent: 0, leave: 0, holiday: 0, total: 0, percentage: 100 };
  attendanceRegisterHoliday: { name: string; date: string } | null = null;
  attendanceRegisterSunday = false;
  attendanceReportRows: AttendanceReportRow[] = [];
  attendanceReportType = 'daily';
  reportDomain: ReportDomain = 'students';
  reportType = 'register';
  reportRows: ReportRow[] = [];
  reportLoading = false;
  holidays: Array<{ _id: string; date: string; name: string; description?: string }> = [];
  private holidaysLoaded = false;
  private loadedTabs = new Set<TabKey>();
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
  promotionWizardStep = 1;
  promotionEligibleRows: PromotionEligibleRow[] = [];
  promotionPreview: PromotionPreview | null = null;
  promotionBatch: PromotionBatch | null = null;
  promotionExcludedIds = new Set<string>();
  promotionSelectedIds = new Set<string>();
  promotionRollMode: 'auto' | 'manual' = 'auto';
  promotionRollAssignments: Record<string, string> = {};
  promotionWarningsAcknowledged = false;
  promotionLoading = false;
  promotionReportType = 'promoted';
  promotionReportRows: ReportRow[] = [];
  promotionReportLoading = false;
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
  pickerStudents: Student[] = [];
  parentAccounts: AppUser[] = [];
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
  readonly operationalPagedKeys: ListKey[] = ['invoices', 'feeHistory', 'payroll', 'busRoutes', 'busRegistrations', 'attendance', 'exams'];
  collectableInvoiceOptions: FeeInvoice[] = [];
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
    attendanceYear: '',
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
    profileFeeStatus: '',
    feeHistorySearch: '',
    feeHistoryStatus: '',
    busRouteSearch: '',
    busRouteStatus: '',
    busRegYear: '',
    busRegRoute: '',
    busRegStatus: '',
    busRegSearch: '',
    busRegClass: '',
    busReportYear: '',
    attendanceReportMonth: String(new Date().getMonth() + 1),
    attendanceReportYear: String(new Date().getFullYear()),
    reportYear: '',
    reportClass: '',
    reportSection: '',
    reportStatus: '',
    reportAdmissionFrom: '',
    reportAdmissionTo: '',
    reportMonth: String(new Date().getMonth() + 1),
    reportYearNum: String(new Date().getFullYear()),
    reportDate: new Date().toISOString().slice(0, 10),
    reportPaymentStatus: '',
    reportStudent: '',
    reportDepartment: '',
    reportDesignation: '',
    reportPayrollStatus: '',
    reportRoute: '',
    reportStop: '',
    reportBusStatus: '',
    reportPerformanceCategory: '',
    reportTeacher: ''
  };
  pages: Record<ListKey, number> = {
    dashboardStudents: 1,
    dashboardAttendance: 1,
    dashboardTeachers: 1,
    dashboardPayroll: 1,
    dashboardTimetable: 1,
    dashboardActivities: 1,
    students: 1,
    classes: 1,
    years: 1,
    teachers: 1,
    invoices: 1,
    feeHistory: 1,
    busRoutes: 1,
    busRegistrations: 1,
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
    { key: 'transport', label: 'Bus', icon: 'transport', roles: ['admin'] },
    { key: 'payroll', label: 'Payroll', icon: 'payroll', roles: ['admin'] },
    { key: 'attendance', label: 'Attendance', icon: 'attendance', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'timetable', label: 'Timetable', icon: 'timetable', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'exams', label: 'AI Exams', icon: 'exams', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'profile', label: 'Student Profile', icon: 'profile', roles: ['admin', 'teacher', 'student', 'parent'] },
    { key: 'promotion', label: 'Promotions', icon: 'promotion', roles: ['admin'] },
    { key: 'reports', label: 'Reports', icon: 'reports', roles: ['admin', 'super_admin', 'accountant'] },
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
    linkedStudents: [[]],
    useTemporaryPassword: [false]
  });

  changePasswordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  showChangePasswordPanel = false;
  private lastActivityAt = Date.now();
  private sessionIdleMinutes = APP_CONSTANTS.DEFAULT_SESSION_IDLE_MINUTES;
  private sessionWatchHandle?: ReturnType<typeof setInterval>;

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
    parentUserId: [''],
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

  feeDemandForm = this.fb.group({
    academicYear: ['', Validators.required],
    classRoom: [''],
    month: [new Date().getMonth() + 1, Validators.required],
    year: [new Date().getFullYear(), Validators.required]
  });

  paymentForm = this.fb.group({
    invoiceId: ['', Validators.required],
    amount: [0, [Validators.required, Validators.min(1)]],
    mode: [PAYMENT_MODES.CASH, Validators.required],
    referenceNumber: [''],
    discount: [0, Validators.min(0)],
    fine: [0, Validators.min(0)],
    otherCharges: [0, Validators.min(0)]
  });

  busRouteForm = this.fb.group({
    routeName: ['', Validators.required],
    routeCode: ['', Validators.required],
    vehicleNumber: ['', Validators.required],
    driverName: ['', Validators.required],
    driverMobile: ['', Validators.required],
    capacity: [40, [Validators.required, Validators.min(1)]],
    feeType: ['stop_based', Validators.required],
    fixedMonthlyFee: [0, Validators.min(0)],
    status: ['active', Validators.required]
  });

  busRegistrationForm = this.fb.group({
    academicYear: ['', Validators.required],
    classRoom: [''],
    student: ['', Validators.required],
    route: ['', Validators.required],
    stopSequence: ['', Validators.required],
    monthlyFee: [0, [Validators.required, Validators.min(0)]],
    serviceStartDate: [new Date().toISOString().slice(0, 10), Validators.required],
    serviceEndDate: [''],
    busService: [true],
    status: ['active', Validators.required]
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
    fromClassRoom: ['', Validators.required],
    toClassRoom: ['', Validators.required]
  });

  attendanceForm = this.fb.group({
    academicYear: ['', Validators.required],
    classRoom: ['', Validators.required],
    date: [new Date().toISOString().slice(0, 10), Validators.required]
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
    applyDefaultListSort(this.listSort, [
      ...this.serverPagedKeys,
      ...this.operationalPagedKeys,
      'timetable',
      'examResults',
      'dashboardStudents',
      'dashboardAttendance',
      'dashboardTeachers',
      'dashboardPayroll',
      'dashboardTimetable',
      'dashboardActivities',
      'profileExams',
      'profileFees'
    ]);
    if (this.currentUser) {
      this.permissionService.setPermissions(this.currentUser.permissions);
      this.activeTab = 'dashboard';
      if (this.token) {
        this.startSessionWatch();
        if (this.currentUser.mustChangePassword) {
          this.showChangePasswordPanel = true;
        }
      }
      if (this.currentUser.role === 'parent') {
        this.parentSelectedChild = this.currentUser.linkedStudents?.[0] || this.currentUser.linkedStudent || '';
      }
      this.refresh();
      this.restoreWorkspaceContext();
      this.restoreAllListingStates();
      this.api.me().subscribe({
        next: (user) => {
          this.currentUser = user;
          this.permissionService.setPermissions(user.permissions);
          localStorage.setItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
          if (user.mustChangePassword) {
            this.showChangePasswordPanel = true;
          }
        }
      });
    }
  }

  get tabs(): Array<{ key: TabKey; label: string; icon: TabIcon }> {
    if (!this.currentUser) return [];
    const role = this.currentUser.role;
    return this.allTabs
      .filter((tab) => this.permissionService.canViewTab(tab.key, role))
      .map(({ key, label, icon }) => ({ key, label, icon }));
  }

  get isPortalUser(): boolean {
    return this.isStudent || this.isParent;
  }

  get portalStudentId(): string | undefined {
    if (this.isStudent) return this.currentUser?.student;
    if (this.isParent) return this.effectiveChildId || undefined;
    return undefined;
  }

  get isAdmin(): boolean {
    return this.currentUser?.role === 'admin' || this.currentUser?.role === 'super_admin';
  }

  get showOperationalDashboard(): boolean {
    const role = this.currentUser?.role;
    return role === 'admin' || role === 'super_admin' || role === 'accountant' || role === 'principal';
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
    return this.years.find((y) => y.status === 'active' || y.isActive) || this.summary?.activeYear;
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
    if (!this.feeDemandForm.get('academicYear')?.value) {
      this.feeDemandForm.patchValue({ academicYear: active._id });
    }
    if (!this.busRegistrationForm.get('academicYear')?.value) {
      this.busRegistrationForm.patchValue({ academicYear: active._id });
    }
    if (!this.filters.busRegYear) this.filters.busRegYear = active._id;
    if (!this.filters.busReportYear) this.filters.busReportYear = active._id;
    if (!this.filters.attendanceYear) this.filters.attendanceYear = active._id;
    if (!this.filters.reportYear) this.filters.reportYear = active._id;
    if (!this.filters.invoiceYear) this.filters.invoiceYear = active._id;
    if (!this.filters.invoiceMonth) this.filters.invoiceMonth = String(new Date().getMonth() + 1);
    if (!this.promotionForm.get('fromAcademicYear')?.value) {
      this.promotionForm.patchValue({ fromAcademicYear: active._id });
    }
    if (!this.attendanceForm.get('academicYear')?.value) {
      this.attendanceForm.patchValue({ academicYear: active._id });
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
      transport: 'Bus management',
      payroll: 'Payroll processing',
      promotion: 'Student promotions',
      attendance: 'Attendance tracking',
      timetable: 'Class schedules',
      exams: 'AI-powered unit tests',
      profile: 'Student profile & AI insights',
      users: 'Users & access control',
      reports: 'Reports & analytics'
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
    if (!this.isParent) return;
    this.filters.attendanceStudent = childId;
    if (this.loadedTabs.has('attendance')) this.ensurePortalTabData('attendance', true);
    if (this.loadedTabs.has('fees')) this.ensurePortalTabData('fees', true);
    if (this.activeTab === 'profile') this.loadStudentProfile(childId);
  }

  get activeTabLabel(): string {
    return this.allTabs.find((tab) => tab.key === this.activeTab)?.label || 'Workspace';
  }

  login(): void {
    const { email, password } = this.loginForm.getRawValue();
    this.api.login(email || '', password || '').subscribe({
      next: ({ token, user }) => {
        if (!this.isLoginRoleCompatible(user.role, this.selectedLoginRole)) {
          this.message = `This account is registered as ${this.roleLabelFor(user.role)}. Please select the correct role and try again.`;
          return;
        }
        this.persistSession(token, user);
        this.activeTab = 'dashboard';
        this.message = '';
        if (user.mustChangePassword || user.passwordExpired) {
          this.showChangePasswordPanel = true;
          this.toast.warning('You must change your password before continuing.');
        }
        this.refresh();
      },
      error: (error) => (this.message = error.error?.message || 'Login failed. Check email and password.')
    });
  }

  logout(options: { force?: boolean } = {}): void {
    if (!options.force && this.currentUser) {
      void this.confirmLogout();
      return;
    }
    this.performLogout();
  }

  async confirmLogout(): Promise<void> {
    const confirmed = await this.confirmAction({
      title: 'Logout',
      message: 'Are you sure you want to sign out of CampusFlow ERP?',
      confirmLabel: 'Logout',
      danger: true
    });
    if (!confirmed) return;
    this.performLogout();
  }

  private performLogout(): void {
    if (this.token) {
      this.api.logout().subscribe({ error: () => undefined });
    }
    this.stopSessionWatch();
    this.clearSession();
    this.isProfileMenuOpen = false;
    this.showChangePasswordPanel = false;
    this.message = '';
    this.sessionContext.clear();
    this.listingState.clearAll(Object.keys(LIST_FILTER_KEYS));
  }

  private isLoginRoleCompatible(actual: string, selected: UserRole): boolean {
    if (actual === selected) return true;
    if (selected === 'admin') {
      return ['super_admin', 'admin', 'principal', 'accountant', 'reception', 'receptionist', 'transport_manager'].includes(actual);
    }
    return false;
  }

  changePassword(): void {
    const { currentPassword, newPassword, confirmPassword } = this.changePasswordForm.getRawValue();
    if (newPassword !== confirmPassword) {
      this.toast.error('New passwords do not match');
      return;
    }
    this.api.changePassword(currentPassword || '', newPassword || '').subscribe({
      next: (response) => {
        this.persistSession(response.token, response.user);
        this.showChangePasswordPanel = false;
        this.toast.success('Password updated');
        this.changePasswordForm.reset();
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Password change failed'))
    });
  }

  issueTemporaryPassword(userId: string): void {
    if (!this.can('users', 'edit')) return;
    this.api.issueTemporaryPassword(userId).subscribe({
      next: (result) => {
        this.toast.success(`Temporary password issued: ${result.temporaryPassword}`);
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Failed to issue temporary password'))
    });
  }

  unlockUserAccount(userId: string): void {
    if (!this.can('users', 'unlock')) return;
    this.api.unlockUserAccount(userId).subscribe({
      next: () => {
        this.toast.success('User account unlocked');
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Failed to unlock account'))
    });
  }

  @HostListener('document:mousemove')
  @HostListener('document:keydown')
  @HostListener('document:click')
  onUserActivity(): void {
    if (!this.currentUser) return;
    this.lastActivityAt = Date.now();
    sessionStorage.setItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY, String(this.lastActivityAt));
  }

  private startSessionWatch(): void {
    this.stopSessionWatch();
    const stored = Number(sessionStorage.getItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY) || Date.now());
    this.lastActivityAt = stored;
    this.sessionWatchHandle = setInterval(() => {
      const idleMs = Date.now() - this.lastActivityAt;
      if (idleMs > this.sessionIdleMinutes * 60 * 1000) {
        this.toast.warning('Session expired due to inactivity');
        this.logout({ force: true });
      }
    }, 60_000);
  }

  private stopSessionWatch(): void {
    if (this.sessionWatchHandle) {
      clearInterval(this.sessionWatchHandle);
      this.sessionWatchHandle = undefined;
    }
    sessionStorage.removeItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY);
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
    if (this.isNotificationMenuOpen && !target.closest('.notification-menu-wrap')) {
      this.isNotificationMenuOpen = false;
    }
    if (this.globalSearchOpen && !target.closest('.global-search-wrap')) {
      this.globalSearchOpen = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onGlobalSearchShortcut(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      const input = document.querySelector<HTMLInputElement>('.global-search-input');
      input?.focus();
      return;
    }
    if (!this.globalSearchOpen || !this.globalSearchResults.length) {
      if (event.key === 'Escape' && this.globalSearchOpen) {
        this.clearGlobalSearch();
      }
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.globalSearchActiveIndex = Math.min(this.globalSearchActiveIndex + 1, this.globalSearchResults.length - 1);
      return;
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.globalSearchActiveIndex = Math.max(this.globalSearchActiveIndex - 1, 0);
      return;
    }
    if (event.key === 'Enter' && this.globalSearchActiveIndex >= 0) {
      event.preventDefault();
      const result = this.globalSearchResults[this.globalSearchActiveIndex];
      if (result) this.openGlobalSearchResult(result);
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.clearGlobalSearch();
    }
  }

  refresh(): void {
    if (!this.currentUser) return;
    this.loadWorkflowNotifications();
    if (this.isPortalUser) {
      this.loadPortalShell();
      if (this.activeTab !== 'dashboard') this.ensurePortalTabData(this.activeTab, true);
      return;
    }
    if (this.isTeacher) {
      this.loadTeacherShell();
      if (this.activeTab !== 'dashboard') this.ensureTeacherTabData(this.activeTab, true);
      return;
    }
    this.refreshAdminWorkspace();
  }

  private applyDashboardPayload(summary: DashboardSummary): void {
    this.summary = summary;
    if (summary?.activeYear) {
      this.years = [summary.activeYear];
      this.applyActiveYearDefaults();
    }
  }

  private loadPortalShell(): void {
    this.loading = true;
    const requests: PortalShellRequests = {
      summary: this.safeRefresh(this.api.dashboard(), {} as DashboardSummary)
    };
    if (this.isParent) {
      requests.students = this.safeRefresh(
        this.api.students({ page: 1, pageSize: 20 }).pipe(map((r) => r.data)),
        [] as Student[]
      );
    }
    this.forkJoinMap<PortalShellPayload>(requests as unknown as ForkJoinSources).subscribe({
      next: (data) => {
        this.applyDashboardPayload(data.summary);
        if (data.students) this.students = data.students;
        this.loading = false;
        this.submitting = false;
        this.loadedTabs.add('dashboard');
      },
      error: () => {
        this.toast.error('Could not load dashboard. Check backend and your permissions.');
        this.loading = false;
      }
    });
  }

  private loadTeacherShell(): void {
    this.loading = true;
    this.safeRefresh(this.api.dashboard(), {} as DashboardSummary).subscribe({
      next: (summary) => {
        this.applyDashboardPayload(summary);
        this.loading = false;
        this.submitting = false;
        this.loadedTabs.add('dashboard');
      },
      error: () => {
        this.toast.error('Could not load dashboard. Check backend and your permissions.');
        this.loading = false;
      }
    });
  }

  private ensurePortalTabData(tab: TabKey, force = false): void {
    if (!force && this.loadedTabs.has(tab)) return;

    switch (tab) {
      case 'dashboard':
        if (!this.summary) this.loadPortalShell();
        else this.loadedTabs.add('dashboard');
        return;
      case 'fees':
        this.loading = true;
        forkJoin({
          invoices: this.safeRefresh(this.api.invoices({ page: 1, pageSize: 50 }).pipe(map((r) => r.data)), [] as FeeInvoice[]),
          feeHistory: this.safeRefresh(this.api.feeHistory({ page: 1, pageSize: 50 }).pipe(map((r) => r.data)), [] as FeeHistoryRow[])
        }).subscribe({
          next: (data) => {
            this.invoices = data.invoices;
            this.feeHistory = data.feeHistory;
            this.loadedTabs.add('fees');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'attendance':
        if (this.portalStudentId) this.filters.attendanceStudent = this.portalStudentId;
        this.loading = true;
        this.safeRefresh(this.api.attendance({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as AttendanceRecord[]).subscribe({
          next: (rows) => {
            this.attendance = rows;
            this.loadedTabs.add('attendance');
            this.loading = false;
            this.loadHolidays();
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'timetable':
        this.loading = true;
        this.safeRefresh(this.api.timetable(), [] as TimetableRow[]).subscribe({
          next: (rows) => {
            this.timetable = rows;
            this.loadedTabs.add('timetable');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'exams':
        this.loading = true;
        forkJoin({
          exams: this.safeRefresh(this.api.exams({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as Exam[]),
          examResults: this.safeRefresh(this.api.examResults(), [] as ExamSubmission[])
        }).subscribe({
          next: (data) => {
            this.exams = data.exams;
            this.examResults = data.examResults;
            this.loadedTabs.add('exams');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'profile':
        this.loadedTabs.add('profile');
        if (this.isStudent && this.currentUser?.student) this.loadStudentProfile(this.currentUser.student);
        else if (this.isParent && this.effectiveChildId) this.loadStudentProfile(this.effectiveChildId);
        return;
    }
  }

  private ensureTeacherTabData(tab: TabKey, force = false): void {
    if (!force && this.loadedTabs.has(tab)) return;

    switch (tab) {
      case 'dashboard':
        if (!this.summary) this.loadTeacherShell();
        else this.loadedTabs.add('dashboard');
        return;
      case 'students':
        this.loading = true;
        forkJoin({
          students: this.safeRefresh(this.api.students({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), [] as Student[]),
          classes: this.safeRefresh(this.api.classes({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), [] as ClassRoom[])
        }).subscribe({
          next: (data) => {
            this.students = data.students;
            this.classes = data.classes;
            this.loadedTabs.add('students');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'teachers':
        this.loading = true;
        this.safeRefresh(this.api.teachers({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), [] as Teacher[]).subscribe({
          next: (rows) => {
            this.teachers = rows;
            this.loadedTabs.add('teachers');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'attendance': {
        const requests: TeacherAttendanceRequests = {
          attendance: this.safeRefresh(this.api.attendance({ page: 1, pageSize: 200 }).pipe(map((r) => r.data)), [] as AttendanceRecord[])
        };
        if (!this.classes.length) {
          requests.classes = this.safeRefresh(this.api.classes({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), [] as ClassRoom[]);
        }
        if (!this.students.length) {
          requests.students = this.safeRefresh(this.api.students({ page: 1, pageSize: 500 }).pipe(map((r) => r.data)), [] as Student[]);
        }
        this.loading = true;
        this.forkJoinMap<TeacherAttendancePayload>(requests as unknown as ForkJoinSources).subscribe({
          next: (data) => {
            this.attendance = data.attendance;
            if (data.classes) this.classes = data.classes;
            if (data.students) this.students = data.students;
            this.applyActiveYearDefaults();
            this.loadedTabs.add('attendance');
            this.loading = false;
            this.loadSelfAttendanceStatus();
            this.loadHolidays();
          },
          error: () => { this.loading = false; }
        });
        return;
      }
      case 'timetable':
        this.loading = true;
        this.safeRefresh(this.api.timetable(), [] as TimetableRow[]).subscribe({
          next: (rows) => {
            this.timetable = rows;
            this.loadedTabs.add('timetable');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'exams':
        this.loading = true;
        forkJoin({
          exams: this.safeRefresh(this.api.exams({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as Exam[]),
          examResults: this.safeRefresh(this.api.examResults(), [] as ExamSubmission[])
        }).subscribe({
          next: (data) => {
            this.exams = data.exams;
            this.examResults = data.examResults;
            this.loadedTabs.add('exams');
            this.loading = false;
          },
          error: () => { this.loading = false; }
        });
        return;
      case 'profile':
        this.loadedTabs.add('profile');
        return;
    }
  }

  private forkJoinMap<T extends Record<string, unknown>>(sources: ForkJoinSources): Observable<T> {
    return forkJoin(sources) as Observable<T>;
  }

  private safeRefresh<T>(request: Observable<T>, fallback: T): Observable<T> {
    return request.pipe(catchError(() => of(fallback)));
  }

  private refreshAdminWorkspace(): void {
    this.loading = true;
    this.forkJoinMap<AdminRefreshPayload>(this.buildAdminRefreshRequests() as unknown as ForkJoinSources).subscribe({
      next: (data) => {
        this.summary = data.summary;
        this.years = data.years.length ? data.years : (this.summary?.activeYear ? [this.summary.activeYear] : []);
        this.applyActiveYearDefaults();
        this.classes = data.classes;
        this.teachers = data.teachers;
        this.students = data.students;
        this.invoices = data.invoices;
        this.feeHistory = data.feeHistory;
        this.busRoutes = data.busRoutes;
        this.busRegistrations = data.busRegistrations;
        this.payrolls = data.payrolls;
        this.attendance = data.attendance;
        this.holidays = data.holidays;
        this.holidaysLoaded = true;
        this.timetable = data.timetable;
        this.exams = data.exams;
        this.examResults = data.examResults;
        this.users = data.users;
        this.roles = data.roles;
        this.permissionSchema = data.permissionSchema;
        if (this.roles.length && !this.selectedRoleSlug) {
          this.selectRoleForEdit(this.roles[0].slug);
        }
        this.loading = false;
        this.submitting = false;
        this.loadReferenceData();
        this.loadAssignmentPickers();
        this.loadServerListings();
        this.loadSelfAttendanceStatus();
        this.loadWorkflowNotifications();
        if (this.can('transport', 'view')) this.loadBusReport();
        if (this.can('attendance', 'view')) this.loadAttendanceReport();
      },
      error: () => {
        this.toast.error('Could not load workspace data. Check backend, MongoDB, and your role permissions.');
        this.loading = false;
      }
    });
  }

  private buildAdminRefreshRequests(): AdminRefreshRequests {
    const empty = {
      years: [] as AcademicYear[],
      classes: [] as ClassRoom[],
      teachers: [] as Teacher[],
      students: [] as Student[],
      invoices: [] as FeeInvoice[],
      feeHistory: [] as FeeHistoryRow[],
      busRoutes: [] as BusRoute[],
      busRegistrations: [] as BusRegistration[],
      payrolls: [] as PayrollRecord[],
      attendance: [] as AttendanceRecord[],
      holidays: [] as HolidayRow[],
      timetable: [] as TimetableRow[],
      exams: [] as Exam[],
      examResults: [] as ExamSubmission[],
      users: [] as AppUser[],
      roles: [] as ErpRole[],
      permissionSchema: { modules: [], actions: [] } as PermissionSchema
    };

    const requests: AdminRefreshRequests = {
      summary: this.safeRefresh(this.api.dashboard(), {} as DashboardSummary),
      years: of(empty.years),
      classes: of(empty.classes),
      teachers: of(empty.teachers),
      students: of(empty.students),
      invoices: of(empty.invoices),
      feeHistory: of(empty.feeHistory),
      busRoutes: of(empty.busRoutes),
      busRegistrations: of(empty.busRegistrations),
      payrolls: of(empty.payrolls),
      attendance: of(empty.attendance),
      holidays: of(empty.holidays),
      timetable: of(empty.timetable),
      exams: of(empty.exams),
      examResults: of(empty.examResults),
      users: of(empty.users),
      roles: of(empty.roles),
      permissionSchema: of(empty.permissionSchema)
    };

    if (this.can('academic_year', 'view')) {
      requests.years = of(empty.years);
    } else {
      requests.years = of(empty.years);
    }

    if (this.can('classes', 'view')) {
      requests.classes = of(empty.classes);
    } else {
      requests.classes = of(empty.classes);
    }

    if (this.can('teachers', 'view')) {
      requests.teachers = of(empty.teachers);
    } else {
      requests.teachers = of(empty.teachers);
    }

    if (this.can('students', 'view')) {
      requests.students = of(empty.students);
    } else {
      requests.students = of(empty.students);
    }

    if (this.can('fees', 'view')) {
      requests.invoices = of(empty.invoices);
      requests.feeHistory = of(empty.feeHistory);
    } else {
      requests.invoices = of(empty.invoices);
      requests.feeHistory = of(empty.feeHistory);
    }

    if (this.can('transport', 'view')) {
      requests.busRoutes = of(empty.busRoutes);
      requests.busRegistrations = of(empty.busRegistrations);
    } else {
      requests.busRoutes = of(empty.busRoutes);
      requests.busRegistrations = of(empty.busRegistrations);
    }

    if (this.can('payroll', 'view')) {
      requests.payrolls = of(empty.payrolls);
    } else {
      requests.payrolls = of(empty.payrolls);
    }

    if (this.can('attendance', 'view')) {
      requests.attendance = of(empty.attendance);
      requests.holidays = this.safeRefresh(this.api.holidays(), empty.holidays);
    } else {
      requests.attendance = of(empty.attendance);
      requests.holidays = of(empty.holidays);
    }

    if (this.can('timetable', 'view')) {
      requests.timetable = this.safeRefresh(this.api.timetable(), empty.timetable);
    } else {
      requests.timetable = of(empty.timetable);
    }

    if (this.can('exams', 'view')) {
      requests.exams = of(empty.exams);
      requests.examResults = this.safeRefresh(this.api.examResults(), empty.examResults);
    } else {
      requests.exams = of(empty.exams);
      requests.examResults = of(empty.examResults);
    }

    if (this.can('users', 'view')) {
      requests.users = of(empty.users);
    } else {
      requests.users = of(empty.users);
    }

    if (this.can('roles', 'view')) {
      requests.roles = this.safeRefresh(this.api.roles(), empty.roles);
      requests.permissionSchema = this.safeRefresh(this.api.rolePermissionSchema(), empty.permissionSchema);
    } else {
      requests.roles = of(empty.roles);
      requests.permissionSchema = of(empty.permissionSchema);
    }

    return requests;
  }

  private loadReferenceData(): void {
    if (this.can('academic_year', 'view')) {
      this.safeRefresh(this.api.academicYears({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as AcademicYear[]).subscribe((rows) => {
        this.years = rows.length ? rows : (this.summary?.activeYear ? [this.summary.activeYear] : []);
        this.applyActiveYearDefaults();
      });
    }
    if (this.can('classes', 'view')) {
      this.safeRefresh(this.api.classes({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as ClassRoom[]).subscribe((rows) => {
        this.classes = rows;
      });
    }
    if (this.can('teachers', 'view')) {
      this.safeRefresh(this.api.teachers({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as Teacher[]).subscribe((rows) => {
        this.teachers = rows;
      });
    }
    if (this.can('transport', 'view')) {
      this.safeRefresh(this.api.busRoutes({ page: 1, pageSize: 100 }).pipe(map((r) => r.data)), [] as BusRoute[]).subscribe((rows) => {
        if (!this.isServerPaged('busRoutes')) this.busRoutes = rows;
      });
    }
  }

  loadAssignmentPickers(): void {
    if (this.can('students', 'view')) {
      this.safeRefresh(
        this.api.students({ page: 1, pageSize: 500, status: 'active', sortField: 'admissionNumber', sortDir: 'asc' }).pipe(map((r) => r.data)),
        [] as Student[]
      ).subscribe((rows) => {
        this.pickerStudents = rows;
        if (this.isAdmin) this.students = rows;
      });
    }
    if (this.can('users', 'view')) {
      this.safeRefresh(
        this.api.listUsers({ page: 1, pageSize: 200, role: 'parent' }).pipe(map((r) => r.data as AppUser[])),
        [] as AppUser[]
      ).subscribe((rows) => {
        this.parentAccounts = rows;
      });
    }
    if (this.isAdmin && this.can('attendance', 'view') && !this.attendance.length) {
      this.safeRefresh(
        this.api.attendance({ page: 1, pageSize: 200, sortField: 'date', sortDir: 'desc' }).pipe(map((r) => r.data)),
        [] as AttendanceRecord[]
      ).subscribe((rows) => {
        this.attendance = rows;
      });
    }
  }

  get studentPickerOptions(): Student[] {
    if (this.pickerStudents.length) return this.pickerStudents;
    const listed = (this.listingRows.students as Student[] | undefined) ?? [];
    if (listed.length) return listed;
    return this.students;
  }

  get guardianSuggestions(): string[] {
    const names = new Set<string>();
    for (const parent of this.parentAccounts) {
      const name = (parent?.name || '').trim();
      if (name) names.add(name);
    }
    for (const student of this.studentPickerOptions) {
      const guardian = student?.guardians?.find((g) => (g?.name || '').trim());
      const name = (guardian?.name || '').trim();
      if (name) names.add(name);
    }
    return Array.from(names).sort((a, b) => a.localeCompare(b));
  }

  parentPickerTerm = '';
  parentPickerResults: ParentSearchResult[] = [];
  parentPickerOpen = false;
  parentPickerLoading = false;
  private parentPickerTimer: ReturnType<typeof setTimeout> | null = null;

  onParentPickerFocus(): void {
    this.parentPickerOpen = true;
  }

  onParentPickerBlur(): void {
    setTimeout(() => { this.parentPickerOpen = false; }, 180);
  }

  onParentPickerInput(term: string): void {
    this.parentPickerTerm = term;
    this.parentPickerOpen = true;
    if (this.parentPickerTimer) clearTimeout(this.parentPickerTimer);
    const search = (term || '').trim();
    if (search.length < 2) {
      this.parentPickerResults = [];
      this.parentPickerLoading = false;
      return;
    }
    this.parentPickerLoading = true;
    this.parentPickerTimer = setTimeout(() => this.searchParentAccounts(search), 300);
  }

  searchParentAccounts(term: string): void {
    const search = (term || '').trim();
    if (search.length < 2) {
      this.parentPickerResults = [];
      this.parentPickerLoading = false;
      return;
    }
    this.parentPickerLoading = true;
    this.api
      .searchParents(search)
      .pipe(map((response) => response.data ?? []))
      .subscribe({
        next: (rows) => {
          this.parentPickerResults = rows;
          this.parentPickerLoading = false;
        },
        error: () => {
          this.parentPickerResults = [];
          this.parentPickerLoading = false;
        }
      });
  }

  selectParentAccount(result: ParentSearchResult): void {
    const patch: Record<string, unknown> = {};
    if (result.name) patch['guardianName'] = result.name;
    if (result.relation) patch['guardianRelation'] = result.relation;
    if (result.phone) patch['guardianPhone'] = result.phone;
    if (result.parentUserId && !this.editingStudentId) patch['parentUserId'] = result.parentUserId;
    this.admissionForm.patchValue(patch);
    this.parentPickerTerm = result.phone ? `${result.name} · ${result.phone}` : result.name;
    this.parentPickerResults = [];
    this.parentPickerOpen = false;
  }

  clearParentSelection(): void {
    this.admissionForm.patchValue({ parentUserId: '' });
    this.parentPickerTerm = '';
    this.parentPickerResults = [];
    this.parentPickerOpen = false;
  }

  parentInitials(result: ParentSearchResult | null | undefined): string {
    return (result?.name || '?').trim().charAt(0).toUpperCase();
  }

  showAdmissionModal = false;

  openAdmissionModal(): void {
    this.editingStudentId = '';
    this.resetAdmissionForm();
    this.files = {};
    this.clearParentSelection();
    this.loadAssignmentPickers();
    this.message = '';
    this.showAdmissionModal = true;
  }

  closeAdmissionModal(): void {
    this.showAdmissionModal = false;
    this.editingStudentId = '';
    this.resetAdmissionForm();
    this.files = {};
    this.clearParentSelection();
  }

  resetAdmissionForm(): void {
    this.admissionForm.reset({
      admissionNumber: '',
      firstName: '',
      lastName: '',
      gender: 'male',
      dateOfBirth: '',
      bloodGroup: '',
      category: '',
      nationality: 'Indian',
      motherName: '',
      aadhaarNumber: '',
      udisePenId: '',
      line1: '',
      city: '',
      state: '',
      pincode: '',
      guardianName: '',
      guardianRelation: APP_CONSTANTS.DEFAULT_GUARDIAN_RELATION,
      guardianPhone: '',
      parentUserId: '',
      academicYear: '',
      classRoom: '',
      rollNumber: '',
      studentStatus: 'active',
      hasPreviousSchool: 'no',
      previousSchool: '',
      previousSchoolBoard: '',
      previousSchoolPercentage: '',
      previousSchoolRollNumber: '',
      previousSchoolAddress: '',
      previousSchoolLastClass: '',
      previousSchoolYearOfPassing: '',
      previousSchoolReasonForLeaving: '',
      previousSchoolTcNumber: '',
      previousSchoolTcDate: ''
    });
    const active = this.activeAcademicYear;
    if (active?._id) this.admissionForm.patchValue({ academicYear: active._id });
  }

  closeStudentDocuments(): void {
    this.selectedStudentId = '';
    this.selectedStudentDocuments = [];
  }

  setTab(tab: TabKey): void {
    if (!this.tabs.some((item) => item.key === tab)) return;
    this.activeTab = tab;

    if (this.isPortalUser) {
      this.ensurePortalTabData(tab);
      return;
    }

    if (this.isTeacher) {
      this.ensureTeacherTabData(tab);
      return;
    }

    const tabListKey: Partial<Record<TabKey, ListKey>> = {
      students: 'students',
      classes: 'classes',
      teachers: 'teachers',
      users: 'users'
    };
    const listKey = tabListKey[tab];
    if (listKey) this.loadListing(listKey);
    if (tab === 'students' || tab === 'users') this.loadAssignmentPickers();
    if (tab === 'reports' && this.can('reports', 'view')) this.loadReport();
    if (tab === 'fees' && this.can('fees', 'view')) {
      if (!this.isPortalUser) {
        this.loadListing('invoices');
        this.loadListing('feeHistory');
        this.loadCollectableInvoices();
      }
    }
    if (tab === 'payroll' && this.can('payroll', 'view')) this.loadListing('payroll');
    if (tab === 'transport' && this.can('transport', 'view')) {
      this.loadListing('busRoutes');
      this.loadListing('busRegistrations');
      this.loadBusReport();
    }
    if (tab === 'attendance' && this.can('attendance', 'view')) {
      if (!this.isPortalUser) this.loadListing('attendance');
      else this.ensurePortalTabData('attendance');
      if (!this.holidaysLoaded) this.loadHolidays();
      if (!this.isPortalUser) this.loadAttendanceReport();
    }
    if (tab === 'exams' && this.can('exams', 'view') && !this.isPortalUser) {
      this.loadListing('exams');
    }
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

  trendLabel(trend: string): string {
    const labels: Record<string, string> = {
      improved: 'Improved',
      declined: 'Declined',
      stable: 'Stable'
    };
    return labels[trend] || trend;
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
      this.submit(this.api.updateStudent(this.editingStudentId, payload), 'Student updated', undefined, () => this.closeAdmissionModal());
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
      ...(value.parentUserId ? { parentUserId: value.parentUserId } : {}),
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

    this.submit(this.api.createAdmission(formData), 'Student admission saved', undefined, () => this.closeAdmissionModal());
  }

  editStudent(student: Student): void {
    const latest = student.enrollments?.[student.enrollments.length - 1];
    const guardian = student.guardians?.[0];
    const prev = student.previousSchoolDetails;
    const hasPrev = !!(prev?.schoolName);
    this.editingStudentId = student._id;
    this.admissionForm.patchValue({
      admissionNumber: student.admissionNumber,
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
    this.files = {};
    this.clearParentSelection();
    this.message = `Editing student ${this.studentName(student)}`;
    this.showAdmissionModal = true;
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

  profileTimelineLabel(action: string): string {
    const labels: Record<string, string> = {
      admission: 'Admission',
      bus_assignment: 'Bus assignment',
      bus_deactivate: 'Bus update',
      fee_payment: 'Fee payment',
      fee_collection: 'Fee payment',
      attendance_update: 'Attendance',
      attendance_entry: 'Attendance',
      attendance_submit: 'Attendance',
      status_change: 'Status change',
      profile_update: 'Profile update',
      document_upload: 'Document',
      document_replace: 'Document',
      document_delete: 'Document'
    };
    return labels[action] || action.replace(/_/g, ' ');
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
    if (this.isPortalUser) return false;
    return this.serverPagedKeys.includes(key) || this.operationalPagedKeys.includes(key);
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
    if (this.isPortalUser) return;
    const keys = [...this.listingKeysForRole()];
    if (!this.isPortalUser) {
      this.operationalPagedKeys.forEach((key) => {
        if (this.canAccessOperationalList(key)) keys.push(key);
      });
    }
    [...new Set(keys)].forEach((key) => this.loadListing(key));
  }

  private canAccessOperationalList(key: ListKey): boolean {
    const map: Partial<Record<ListKey, [string, string]>> = {
      invoices: ['fees', 'view'],
      feeHistory: ['fees', 'view'],
      payroll: ['payroll', 'view'],
      busRoutes: ['transport', 'view'],
      busRegistrations: ['transport', 'view'],
      attendance: ['attendance', 'view'],
      exams: ['exams', 'view']
    };
    const entry = map[key];
    return entry ? this.can(entry[0], entry[1] as PermissionAction) : false;
  }

  loadCollectableInvoices(): void {
    if (!this.can('fees', 'view')) return;
    forkJoin([
      this.api.invoices({ status: 'unpaid', page: 1, pageSize: 100 }),
      this.api.invoices({ status: 'partial', page: 1, pageSize: 100 })
    ]).subscribe({
      next: ([unpaid, partial]) => {
        const merged = [...unpaid.data, ...partial.data];
        this.collectableInvoiceOptions = merged.filter(
          (invoice) => invoice.status !== 'cancelled' && invoice.balanceAmount > 0
        );
      },
      error: () => { this.collectableInvoiceOptions = []; }
    });
  }

  private listingKeysForRole(): ListKey[] {
    if (this.isAdmin) return this.serverPagedKeys;
    if (this.currentUser?.role === 'accountant') {
      return this.operationalPagedKeys.filter((key) => this.canAccessOperationalList(key));
    }
    if (this.isTeacher) return ['students', 'classes'];
    return [];
  }

  private withFilteredExportRows<T>(key: ListKey, fallbackRows: T[], exporter: (rows: T[]) => void): void {
    if (!this.isServerPaged(key)) {
      exporter(fallbackRows);
      return;
    }
    const total = this.listingTotals[key] ?? fallbackRows.length;
    const query: ListQueryParams = {
      ...this.buildListQuery(key),
      page: 1,
      pageSize: Math.min(Math.max(total, 1), 10000)
    };
    const request = this.getListRequest(key, query);
    if (!request) {
      exporter(fallbackRows);
      return;
    }
    request.subscribe({
      next: (response) => exporter(response.data as T[]),
      error: (error) => this.toast.error(extractApiMessage(error))
    });
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
        if (key === 'invoices') this.invoices = response.data as FeeInvoice[];
        if (key === 'feeHistory') this.feeHistory = response.data as FeeHistoryRow[];
        if (key === 'payroll') this.payrolls = response.data as PayrollRecord[];
        if (key === 'busRoutes') this.busRoutes = response.data as BusRoute[];
        if (key === 'busRegistrations') this.busRegistrations = response.data as BusRegistration[];
        if (key === 'attendance') this.attendance = response.data as AttendanceRecord[];
        if (key === 'exams') this.exams = response.data as Exam[];
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
      case 'years': return this.can('academic_year', 'view') ? this.api.academicYears(query) : null;
      case 'teachers': return this.can('teachers', 'view') ? this.api.teachers(query) : null;
      case 'users': return this.can('users', 'view') ? this.api.listUsers(query) : null;
      case 'invoices': return this.can('fees', 'view') ? this.api.invoices(query) : null;
      case 'feeHistory': return this.can('fees', 'view') ? this.api.feeHistory(query) : null;
      case 'payroll': return this.can('payroll', 'view') ? this.api.payroll(query) : null;
      case 'busRoutes': return this.can('transport', 'view') ? this.api.busRoutes(query) : null;
      case 'busRegistrations': return this.can('transport', 'view') ? this.api.busRegistrations(query) : null;
      case 'attendance': return this.can('attendance', 'view') ? this.api.attendance(query) : null;
      case 'exams': return this.can('exams', 'view') ? this.api.exams(query) : null;
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
    if (key === 'invoices') {
      if (this.filters.invoiceSearch) query.search = this.filters.invoiceSearch;
      if (this.filters.invoiceStatus) query.status = this.filters.invoiceStatus;
      if (this.filters.invoiceYear) query.academicYear = this.filters.invoiceYear;
      if (this.filters.invoiceClass) query.classRoom = this.filters.invoiceClass;
      if (this.filters.invoiceMonth) query.feeMonth = this.filters.invoiceMonth;
    }
    if (key === 'feeHistory') {
      if (this.filters.feeHistorySearch) query.search = this.filters.feeHistorySearch;
      if (this.filters.feeHistoryStatus) query.paymentStatus = this.filters.feeHistoryStatus;
    }
    if (key === 'payroll') {
      if (this.filters.payrollSearch) query.search = this.filters.payrollSearch;
      if (this.filters.payrollStatus) query.status = this.filters.payrollStatus;
    }
    if (key === 'busRoutes') {
      if (this.filters.busRouteSearch) query.search = this.filters.busRouteSearch;
      if (this.filters.busRouteStatus) query.status = this.filters.busRouteStatus;
    }
    if (key === 'busRegistrations') {
      if (this.filters.busRegYear) query.academicYear = this.filters.busRegYear;
      if (this.filters.busRegRoute) query.route = this.filters.busRegRoute;
      if (this.filters.busRegStatus) query.status = this.filters.busRegStatus;
      if (this.filters.busRegSearch) query.search = this.filters.busRegSearch;
    }
    if (key === 'attendance') {
      if (this.filters.attendanceSearch) query.search = this.filters.attendanceSearch;
      if (this.filters.attendanceStatus) query.status = this.filters.attendanceStatus;
      if (this.filters.attendanceClass) query.classRoom = this.filters.attendanceClass;
      if (this.filters.attendanceYear) query.academicYear = this.filters.attendanceYear;
    }
    if (key === 'exams') {
      if (this.filters.examSearch) query.search = this.filters.examSearch;
      if (this.filters.examStatus) query.status = this.filters.examStatus;
    }
    return query;
  }

  private mapSortField(key: ListKey, field: string): string {
    const maps: Partial<Record<ListKey, Record<string, string>>> = {
      students: { name: 'firstName', class: 'firstName' },
      teachers: { name: 'firstName' },
      classes: { class: 'name', academicYear: 'name', teacher: 'name' },
      users: { status: 'createdAt' },
      invoices: { studentName: 'dueDate', period: 'feeYear' },
      feeHistory: { studentName: 'paymentDate', period: 'paymentDate' },
      payroll: { teacherName: 'year', period: 'year' },
      busRoutes: { route: 'routeName' },
      busRegistrations: { studentName: 'updatedAt' },
      attendance: { studentName: 'date', className: 'date' },
      exams: { title: 'title', subject: 'subject', status: 'status' }
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
    this.persistWorkspaceContext();
  }

  private persistWorkspaceContext(): void {
    this.sessionContext.patch({
      academicYearId: this.filters.studentYear || this.filters.attendanceYear || this.filters.invoiceYear || this.filters.busRegYear || undefined,
      classId: this.filters.studentClass || this.filters.attendanceClass || undefined,
      section: this.filters.studentSection || undefined,
      promotionWizardStep: this.promotionWizardStep,
      promotionFromYear: this.promotionForm.get('fromAcademicYear')?.value || undefined,
      promotionToYear: this.promotionForm.get('toAcademicYear')?.value || undefined,
      promotionFromClass: this.promotionForm.get('fromClassRoom')?.value || undefined,
      promotionToClass: this.promotionForm.get('toClassRoom')?.value || undefined,
      promotionRollMode: this.promotionRollMode
    });
  }

  private restoreWorkspaceContext(): void {
    const ctx = this.sessionContext.load();
    const yearId = ctx.academicYearId;
    if (yearId) {
      if (!this.filters.studentYear) this.filters.studentYear = yearId;
      if (!this.filters.attendanceYear) this.filters.attendanceYear = yearId;
      if (!this.filters.invoiceYear) this.filters.invoiceYear = yearId;
      if (!this.filters.busRegYear) this.filters.busRegYear = yearId;
      if (!this.filters.reportYear) this.filters.reportYear = yearId;
    }
    if (ctx.classId) {
      if (!this.filters.studentClass) this.filters.studentClass = ctx.classId;
      if (!this.filters.attendanceClass) this.filters.attendanceClass = ctx.classId;
    }
    if (ctx.section && !this.filters.studentSection) {
      this.filters.studentSection = ctx.section;
    }
    if (ctx.promotionWizardStep) this.promotionWizardStep = ctx.promotionWizardStep;
    if (ctx.promotionRollMode) this.promotionRollMode = ctx.promotionRollMode as typeof this.promotionRollMode;
    const promotionPatch: {
      fromAcademicYear?: string;
      toAcademicYear?: string;
      fromClassRoom?: string;
      toClassRoom?: string;
    } = {};
    if (ctx.promotionFromYear) promotionPatch.fromAcademicYear = ctx.promotionFromYear;
    if (ctx.promotionToYear) promotionPatch.toAcademicYear = ctx.promotionToYear;
    if (ctx.promotionFromClass) promotionPatch.fromClassRoom = ctx.promotionFromClass;
    if (ctx.promotionToClass) promotionPatch.toClassRoom = ctx.promotionToClass;
    if (Object.keys(promotionPatch).length) this.promotionForm.patchValue(promotionPatch);
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
    // retained for compatibility; fee structure is resolved server-side during demand generation
  }

  get selectedCollectionInvoice(): FeeInvoice | undefined {
    const id = this.paymentForm.get('invoiceId')?.value;
    return this.invoices.find((invoice) => invoice._id === id);
  }

  onPaymentInvoiceChange(): void {
    const invoice = this.selectedCollectionInvoice;
    if (!invoice) return;
    this.paymentForm.patchValue({
      amount: invoice.balanceAmount || 0,
      discount: invoice.discount || 0,
      fine: invoice.fine || 0,
      otherCharges: invoice.otherCharges || 0
    });
  }

  generateFeeDemands(): void {
    if (!this.can('fees', 'create')) {
      this.message = 'You do not have permission to generate fee demands';
      return;
    }
    const value = this.feeDemandForm.getRawValue();
    const payload: Record<string, unknown> = {
      academicYear: value.academicYear,
      month: value.month,
      year: value.year
    };
    if (value.classRoom) payload['classRoom'] = value.classRoom;
    this.submit(this.api.generateFeeDemands(payload), 'Monthly fee demands generated', undefined);
  }

  savePayment(): void {
    if (!this.can('fees', 'edit')) {
      this.message = 'You do not have permission to collect fees';
      return;
    }
    const value = this.paymentForm.getRawValue();
    this.submit(
      this.api.addPayment(value.invoiceId || '', {
        amount: value.amount,
        mode: value.mode,
        referenceNumber: value.referenceNumber,
        discount: value.discount,
        fine: value.fine,
        otherCharges: value.otherCharges
      }),
      'Payment recorded and receipt generated',
      this.paymentForm
    );
  }

  openReceiptPdf(invoiceId: string, paymentId: string): void {
    this.openProtectedPdf(this.api.receiptPdfUrl(invoiceId, paymentId));
  }

  voidFeeReceipt(invoiceId: string, paymentId: string, receiptNumber?: string): void {
    if (!this.can('fees', 'edit')) return;
    void this.confirmAction({
      title: 'Void receipt',
      message: `Void receipt ${receiptNumber || ''}? This will restore the pending balance for the fee month.`,
      danger: true,
      confirmLabel: 'Void receipt'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.submit(this.api.voidFeePayment(invoiceId, paymentId), 'Receipt voided');
    });
  }

  unlockFeeReceipt(invoiceId: string, paymentId: string, receiptNumber?: string): void {
    if (!this.can('fees', 'unlock')) return;
    void this.confirmAction({
      title: 'Unlock receipt',
      message: `Unlock finalized receipt ${receiptNumber || ''}? Only use this when a correction is required.`,
      confirmLabel: 'Unlock'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.submit(this.api.unlockFeePayment(invoiceId, paymentId), 'Receipt unlocked');
    });
  }

  feePeriodLabel(month?: number, year?: number): string {
    if (!month || !year) return '';
    return `${this.getMonthName(month)} ${year}`;
  }

  collectableInvoices(): FeeInvoice[] {
    if (this.collectableInvoiceOptions.length) return this.collectableInvoiceOptions;
    return this.invoices.filter((invoice) => invoice.status !== 'paid' && invoice.status !== 'cancelled' && invoice.balanceAmount > 0);
  }

  addBusRouteStop(): void {
    this.busRouteStops = [
      ...this.busRouteStops,
      { name: '', sequence: this.busRouteStops.length + 1, distance: 0, monthlyFee: 0 }
    ];
  }

  removeBusRouteStop(index: number): void {
    this.busRouteStops = this.busRouteStops.filter((_, i) => i !== index);
  }

  resetBusRouteForm(): void {
    this.editingBusRouteId = '';
    this.busRouteStops = [];
    this.busRouteForm.reset({
      capacity: 40,
      feeType: 'stop_based',
      fixedMonthlyFee: 0,
      status: 'active'
    });
  }

  saveBusRoute(): void {
    if (!this.can('transport', 'create') && !this.can('transport', 'edit')) return;
    const value = this.busRouteForm.getRawValue();
    const payload = {
      ...value,
      stops: this.busRouteStops.map((stop, index) => ({
        ...stop,
        sequence: stop.sequence || index + 1
      }))
    };
    const request = this.editingBusRouteId
      ? this.api.updateBusRoute(this.editingBusRouteId, payload)
      : this.api.createBusRoute(payload);
    this.submit(request, this.editingBusRouteId ? 'Bus route updated' : 'Bus route created');
  }

  editBusRoute(route: BusRoute): void {
    this.editingBusRouteId = route._id;
    this.busRouteStops = route.stops?.map((stop) => ({ ...stop })) || [];
    this.busRouteForm.patchValue({
      routeName: route.routeName,
      routeCode: route.routeCode,
      vehicleNumber: route.vehicleNumber,
      driverName: route.driverName,
      driverMobile: route.driverMobile,
      capacity: route.capacity,
      feeType: route.feeType,
      fixedMonthlyFee: route.fixedMonthlyFee,
      status: route.status
    });
  }

  toggleBusRouteStatus(id: string): void {
    if (!this.can('transport', 'edit')) return;
    this.submit(this.api.toggleBusRouteStatus(id), 'Route status updated');
  }

  resetBusRegistrationForm(): void {
    this.editingBusRegistrationId = '';
    this.busRegistrationForm.reset({
      academicYear: this.activeAcademicYear?._id || '',
      serviceStartDate: new Date().toISOString().slice(0, 10),
      busService: true,
      status: 'active',
      monthlyFee: 0
    });
  }

  activeBusRoutes(): BusRoute[] {
    return this.busRoutes.filter((route) => route.status === 'active');
  }

  selectedBusRouteStops(): BusStop[] {
    const routeId = this.busRegistrationForm.get('route')?.value;
    const route = this.busRoutes.find((item) => item._id === routeId);
    return route?.stops || [];
  }

  onBusRegRouteChange(): void {
    this.busRegistrationForm.patchValue({ stopSequence: '', monthlyFee: 0 });
  }

  onBusRegStopChange(): void {
    const routeId = this.busRegistrationForm.get('route')?.value;
    const sequence = Number(this.busRegistrationForm.get('stopSequence')?.value);
    const route = this.busRoutes.find((item) => item._id === routeId);
    if (!route) return;
    const stop = route.stops.find((item) => item.sequence === sequence);
    const fee = route.feeType === 'fixed' ? route.fixedMonthlyFee : stop?.monthlyFee || 0;
    this.busRegistrationForm.patchValue({ monthlyFee: fee });
  }

  onBusRegClassChange(): void {
    this.busRegistrationForm.patchValue({ student: '' });
  }

  filteredActiveStudentsForBus(): Student[] {
    const yearId = this.busRegistrationForm.get('academicYear')?.value || this.filters.busRegYear;
    const classId = this.busRegistrationForm.get('classRoom')?.value;
    return this.students.filter((student) => {
      if (student.status !== 'active') return false;
      const enrollment = student.enrollments?.find(
        (item) =>
          (typeof item.academicYear === 'string' ? item.academicYear : item.academicYear?._id) === yearId &&
          item.status === 'studying'
      );
      if (!enrollment) return false;
      if (!classId) return true;
      const roomId = typeof enrollment.classRoom === 'string' ? enrollment.classRoom : enrollment.classRoom?._id;
      return roomId === classId;
    });
  }

  saveBusRegistration(): void {
    if (!this.can('transport', 'create') && !this.can('transport', 'edit')) return;
    const value = this.busRegistrationForm.getRawValue();
    const route = this.busRoutes.find((item) => item._id === value.route);
    const stop = route?.stops.find((item) => item.sequence === Number(value.stopSequence));
    const payload: Record<string, unknown> = {
      student: value.student,
      academicYear: value.academicYear,
      route: value.route,
      stopName: stop?.name,
      stopSequence: Number(value.stopSequence),
      monthlyFee: value.monthlyFee,
      busService: value.busService,
      serviceStartDate: value.serviceStartDate,
      serviceEndDate: value.serviceEndDate || undefined,
      status: value.status
    };
    const request = this.editingBusRegistrationId
      ? this.api.updateBusRegistration(this.editingBusRegistrationId, payload)
      : this.api.createBusRegistration(payload);
    this.submit(request, this.editingBusRegistrationId ? 'Bus registration updated' : 'Student registered for bus service');
  }

  editBusRegistration(reg: BusRegistration): void {
    this.editingBusRegistrationId = reg._id;
    const studentId = typeof reg.student === 'string' ? reg.student : reg.student?._id;
    const yearId = typeof reg.academicYear === 'string' ? reg.academicYear : reg.academicYear?._id;
    const routeId = typeof reg.route === 'string' ? reg.route : reg.route?._id;
    this.busRegistrationForm.patchValue({
      academicYear: yearId,
      student: studentId,
      route: routeId,
      stopSequence: String(reg.stopSequence),
      monthlyFee: reg.monthlyFee,
      serviceStartDate: reg.serviceStartDate ? new Date(reg.serviceStartDate).toISOString().slice(0, 10) : '',
      serviceEndDate: reg.serviceEndDate ? new Date(reg.serviceEndDate).toISOString().slice(0, 10) : '',
      busService: reg.busService,
      status: reg.status
    });
  }

  deactivateBusRegistration(id: string): void {
    if (!this.can('transport', 'edit')) return;
    void this.confirmAction({
      title: 'Deactivate bus service',
      message: 'Deactivate this bus registration? Bus fee will be removed from open fee demands automatically.',
      danger: true,
      confirmLabel: 'Deactivate'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.submit(this.api.deactivateBusRegistration(id), 'Bus service deactivated');
    });
  }

  busRouteLabel(route: BusRoute | string | undefined): string {
    if (!route) return '—';
    if (typeof route === 'string') {
      const found = this.busRoutes.find((item) => item._id === route);
      return found ? `${found.routeCode} — ${found.routeName}` : route;
    }
    return `${route.routeCode} — ${route.routeName}`;
  }

  studentAdmission(student: Student | string | undefined): string {
    if (!student || typeof student === 'string') return '';
    return student.admissionNumber || '';
  }

  loadBusReport(): void {
    if (!this.can('transport', 'view')) return;
    const params: Record<string, string> = {};
    if (this.filters.busReportYear) params['academicYear'] = this.filters.busReportYear;
    this.api.busReport(this.transportReportType, params).subscribe({
      next: (response) => { this.busReportRows = response.rows || []; },
      error: () => { this.busReportRows = []; }
    });
  }

  exportBusReportCsv(): void {
    const rows = this.busReportRows;
    if (this.transportReportType === 'fee-collection') {
      exportRowsToCsv(`bus-fee-collection-${new Date().toISOString().slice(0, 10)}.csv`, ['Student', 'Month', 'Bus Fee', 'Paid', 'Receipt'], rows.map((row) => [
        row.studentName || '',
        row.feeMonth || '',
        String(row.busFee || 0),
        String(row.paidAmount || 0),
        row.receiptNumber || ''
      ]));
      return;
    }
    exportRowsToCsv(`bus-report-${this.transportReportType}.csv`, ['Student', 'Class', 'Route', 'Stop', 'Fee', 'Status'], rows.map((row) => [
      row.studentName || '',
      row.className || '',
      row.routeName || '',
      row.stopName || '',
      String(row.monthlyFee || 0),
      row.busService && row.status === 'active' ? 'active' : 'inactive'
    ]));
  }

  exportBusReportPdf(): void {
    const rows = this.busReportRows;
    if (this.transportReportType === 'fee-collection') {
      exportRowsToPdf('Bus Fee Collection', ['Student', 'Month', 'Bus Fee', 'Paid', 'Receipt'], rows.map((row) => [
        row.studentName || '',
        row.feeMonth || '',
        String(row.busFee || 0),
        String(row.paidAmount || 0),
        row.receiptNumber || '—'
      ]));
      return;
    }
    exportRowsToPdf(`Bus Report — ${this.transportReportType}`, ['Student', 'Class', 'Route', 'Stop', 'Fee', 'Status'], rows.map((row) => [
      row.studentName || '',
      row.className || '',
      row.routeName || '',
      row.stopName || '',
      String(row.monthlyFee || 0),
      row.busService && row.status === 'active' ? 'active' : 'inactive'
    ]));
  }

  openBusReportServerPdf(): void {
    const params: Record<string, string> = {};
    if (this.filters.busReportYear) params['academicYear'] = this.filters.busReportYear;
    this.openProtectedPdf(this.api.busReportPdfUrl(this.transportReportType, params));
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
    if (payload['useTemporaryPassword']) {
      delete payload['password'];
    }
    if (payload['role'] === 'parent' && this.parentLinkedStudentIds.size) {
      payload['linkedStudents'] = [...this.parentLinkedStudentIds];
      if (!payload['linkedStudent']) payload['linkedStudent'] = [...this.parentLinkedStudentIds][0];
    }
    this.api.createUser(payload).subscribe({
      next: (response) => {
        const result = response as Record<string, unknown>;
        if (result['temporaryPassword']) {
          this.toast.success(`Temporary password: ${result['temporaryPassword']}`);
        } else {
          this.toast.success('User account created');
        }
        this.userForm.reset({ role: 'teacher', useTemporaryPassword: false });
        this.parentLinkedStudentIds.clear();
        this.refresh();
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Could not create user'))
    });
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
      principal: 'Principal',
      teacher: 'Teacher',
      reception: 'Reception',
      receptionist: 'Receptionist',
      accountant: 'Accountant',
      transport_manager: 'Transport Manager',
      parent: 'Parent',
      student: 'Student'
    };
    return labels[role] || this.roles.find((item) => item.slug === role)?.name || role;
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
    this.saveAttendanceRegisterDraft();
  }

  loadAttendanceRegister(): void {
    if (!this.can('attendance', 'view')) return;
    const value = this.attendanceForm.getRawValue();
    if (!value.academicYear || !value.classRoom || !value.date) return;
    if (value.date > new Date().toISOString().slice(0, 10)) {
      this.toast.error('Attendance cannot be entered for future dates');
      return;
    }
    this.api.attendanceRegister({
      academicYear: value.academicYear,
      classRoom: value.classRoom,
      date: value.date
    }).subscribe({
      next: (sheet) => {
        this.attendanceRegisterWorkflow = sheet.register.workflowStatus || 'draft';
        this.attendanceRegisterSummary = sheet.summary;
        this.attendanceRegisterHoliday = sheet.holiday || null;
        this.attendanceRegisterSunday = !!sheet.isSunday;
        this.attendanceRegisterRows = sheet.rows.map((row) => ({
          studentId: row.student._id,
          studentName: this.studentName(row.student),
          admissionNumber: row.student.admissionNumber,
          status: row.status,
          remarks: row.remarks || ''
        }));
      },
      error: (err) => this.toast.error(extractApiMessage(err, 'Could not load attendance register'))
    });
  }

  setAttendanceRegisterRowStatus(studentId: string, status: string): void {
    const row = this.attendanceRegisterRows.find((item) => item.studentId === studentId);
    if (row) row.status = status;
  }

  markAllAttendancePresent(): void {
    const defaultStatus = this.attendanceRegisterHoliday ? ATTENDANCE_STATUS.HOLIDAY : ATTENDANCE_STATUS.PRESENT;
    this.attendanceRegisterRows = this.attendanceRegisterRows.map((row) => ({ ...row, status: defaultStatus }));
  }

  get attendanceRegisterEditable(): boolean {
    return this.attendanceRegisterWorkflow === 'draft';
  }

  private attendanceRegisterPayload(): Record<string, unknown> | null {
    const value = this.attendanceForm.getRawValue();
    if (!value.academicYear || !value.classRoom || !value.date) return null;
    return {
      academicYear: value.academicYear,
      classRoom: value.classRoom,
      date: value.date,
      records: this.attendanceRegisterRows.map((row) => ({
        student: row.studentId,
        status: row.status,
        remarks: row.remarks
      }))
    };
  }

  saveAttendanceRegisterDraft(): void {
    if (!this.can('attendance', 'create')) return;
    const payload = this.attendanceRegisterPayload();
    if (!payload) return;
    if (!this.attendanceRegisterEditable) {
      this.toast.error('Attendance can only be edited while in draft status');
      return;
    }
    this.submit(this.api.saveAttendanceRegister(payload), 'Attendance draft saved');
  }

  submitAttendanceRegister(): void {
    if (!this.can('attendance', 'edit')) return;
    const payload = this.attendanceRegisterPayload();
    if (!payload) return;
    void this.confirmAction({
      title: 'Submit attendance',
      message: 'Submit attendance for review? You will not be able to edit it afterwards unless an administrator unlocks it.',
      confirmLabel: 'Submit'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.api.saveAttendanceRegister(payload).subscribe({
        next: () => {
          this.api.submitAttendanceRegister({
            academicYear: payload['academicYear'],
            classRoom: payload['classRoom'],
            date: payload['date']
          }).subscribe({
            next: () => {
              this.toast.success('Attendance submitted');
              this.loadAttendanceRegister();
              this.refresh();
            },
            error: (err) => this.toast.error(extractApiMessage(err, 'Submit failed'))
          });
        },
        error: (err) => this.toast.error(extractApiMessage(err, 'Save failed'))
      });
    });
  }

  lockAttendanceRegister(): void {
    if (!this.isAdmin) return;
    const payload = this.attendanceRegisterPayload();
    if (!payload) return;
    this.submit(this.api.lockAttendanceRegister({
      academicYear: payload['academicYear'],
      classRoom: payload['classRoom'],
      date: payload['date']
    }), 'Attendance locked');
  }

  unlockAttendanceRegister(): void {
    if (!this.can('attendance', 'unlock')) return;
    const payload = this.attendanceRegisterPayload();
    if (!payload) return;
    void this.confirmAction({
      title: 'Unlock attendance',
      message: 'Unlock this attendance register for editing?',
      confirmLabel: 'Unlock'
    }).then((confirmed) => {
      if (!confirmed) return;
      this.submit(this.api.unlockAttendanceRegister({
        academicYear: payload['academicYear'],
        classRoom: payload['classRoom'],
        date: payload['date']
      }), 'Attendance unlocked');
    });
  }

  loadAttendanceReport(): void {
    if (!this.can('attendance', 'view')) return;
    const params: Record<string, string> = {};
    if (this.filters.attendanceYear) params['academicYear'] = this.filters.attendanceYear;
    if (this.filters.attendanceClass) params['classRoom'] = this.filters.attendanceClass;
    if (this.attendanceReportType === 'daily' && this.attendanceForm.get('date')?.value) {
      params['date'] = this.attendanceForm.get('date')?.value || '';
    }
    if (this.attendanceReportType === 'monthly') {
      params['month'] = this.filters.attendanceReportMonth;
      params['year'] = this.filters.attendanceReportYear;
    }
    this.api.attendanceReport(this.attendanceReportType, params).subscribe({
      next: (response) => { this.attendanceReportRows = response.rows || []; },
      error: () => { this.attendanceReportRows = []; }
    });
  }

  exportAttendanceReportCsv(): void {
    const rows = this.attendanceReportRows;
    if (this.attendanceReportType === 'daily') {
      exportRowsToCsv(`attendance-daily.csv`, ['Date', 'Student', 'Class', 'Status'], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : '',
        row.studentName || '',
        row.className || '',
        row.status || ''
      ]));
      return;
    }
    if (this.attendanceReportType === 'class-summary') {
      exportRowsToCsv(`attendance-class-summary.csv`, ['Class', 'Students', 'Present', 'Absent', 'Leave', '%'], rows.map((row) => [
        row.className || '',
        String(row.studentCount || 0),
        String(row.present || 0),
        String(row.absent || 0),
        String(row.leave || 0),
        String(row.percentage || 0)
      ]));
      return;
    }
    exportRowsToCsv(`attendance-report.csv`, ['Student', 'Class', 'Month', 'Present', 'Absent', 'Leave', '%'], rows.map((row) => [
      row.studentName || '',
      row.className || '',
      row.month || '',
      String(row.present || 0),
      String(row.absent || 0),
      String(row.leave || 0),
      String(row.percentage || 0)
    ]));
  }

  exportAttendanceReportPdf(): void {
    const rows = this.attendanceReportRows;
    if (this.attendanceReportType === 'daily') {
      exportRowsToPdf('Daily Attendance', ['Date', 'Student', 'Class', 'Status'], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : '',
        row.studentName || '',
        row.className || '',
        row.status || ''
      ]));
      return;
    }
    exportRowsToPdf(`Attendance Report`, ['Student', 'Class', 'Present', 'Absent', 'Leave', '%'], rows.map((row) => [
      row.studentName || row.className || '',
      row.className || '',
      String(row.present || 0),
      String(row.absent || 0),
      String(row.leave || 0),
      String(row.percentage || 0)
    ]));
  }

  openAttendanceReportServerPdf(): void {
    const params: Record<string, string> = {};
    if (this.filters.attendanceYear) params['academicYear'] = this.filters.attendanceYear;
    if (this.filters.attendanceClass) params['classRoom'] = this.filters.attendanceClass;
    if (this.attendanceReportType === 'monthly') {
      params['month'] = this.filters.attendanceReportMonth;
      params['year'] = this.filters.attendanceReportYear;
    }
    this.openProtectedPdf(this.api.attendanceReportPdfUrl(this.attendanceReportType, params));
  }

  private readonly reportColumnMap: Record<ReportDomain, Record<string, Array<{ key: string; label: string }>>> = {
    students: {
      register: [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'className', label: 'Class' },
        { key: 'section', label: 'Section' },
        { key: 'status', label: 'Status' },
        { key: 'admissionDate', label: 'Admission Date' }
      ],
      'admission-register': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'classSection', label: 'Class' },
        { key: 'admissionDate', label: 'Admission Date' },
        { key: 'status', label: 'Status' }
      ],
      'class-wise': [
        { key: 'className', label: 'Class' },
        { key: 'totalStudents', label: 'Total' },
        { key: 'activeStudents', label: 'Active' },
        { key: 'inactiveStudents', label: 'Inactive' }
      ],
      'section-wise': [
        { key: 'classSection', label: 'Class-Section' },
        { key: 'totalStudents', label: 'Total' },
        { key: 'activeStudents', label: 'Active' }
      ],
      status: [
        { key: 'status', label: 'Status' },
        { key: 'totalStudents', label: 'Total Students' }
      ],
      'class-register': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'classSection', label: 'Class' },
        { key: 'rollNumber', label: 'Roll' },
        { key: 'status', label: 'Status' }
      ],
      'inactive-students': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'classSection', label: 'Class' },
        { key: 'status', label: 'Status' },
        { key: 'admissionDate', label: 'Admission Date' }
      ]
    },
    academic: {
      'student-progress': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'attempts', label: 'Attempts' },
        { key: 'averageScore', label: 'Average' },
        { key: 'latestScore', label: 'Latest Score' },
        { key: 'latestSubject', label: 'Latest Subject' }
      ],
      'performance-summary': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'performanceScore', label: 'Score' },
        { key: 'performanceCategory', label: 'Band' },
        { key: 'riskLevel', label: 'Risk' },
        { key: 'attendancePercentage', label: 'Attendance %' },
        { key: 'examAverage', label: 'Exam Avg' }
      ],
      'top-performers': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'performanceScore', label: 'Score' },
        { key: 'performanceCategory', label: 'Band' }
      ],
      'weak-students': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'performanceScore', label: 'Score' },
        { key: 'riskLevel', label: 'Risk' },
        { key: 'examAverage', label: 'Exam Avg' }
      ]
    },
    fees: {
      'monthly-collection': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'paidAmount', label: 'Paid' },
        { key: 'receiptNumber', label: 'Receipt' },
        { key: 'status', label: 'Status' }
      ],
      pending: [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'dueDate', label: 'Due Date' },
        { key: 'pendingAmount', label: 'Pending' },
        { key: 'status', label: 'Status' }
      ],
      'student-ledger': [
        { key: 'date', label: 'Date' },
        { key: 'studentName', label: 'Student' },
        { key: 'entryType', label: 'Type' },
        { key: 'description', label: 'Description' },
        { key: 'debit', label: 'Debit' },
        { key: 'credit', label: 'Credit' }
      ],
      'bus-fee-collection': [
        { key: 'studentName', label: 'Student' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'busFee', label: 'Bus Fee' },
        { key: 'paidAmount', label: 'Paid' },
        { key: 'receiptNumber', label: 'Receipt' },
        { key: 'paymentDate', label: 'Date' }
      ],
      outstanding: [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'pendingAmount', label: 'Outstanding' },
        { key: 'status', label: 'Status' }
      ],
      'discount-report': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'discountAmount', label: 'Discount' },
        { key: 'totalAmount', label: 'Total' }
      ],
      'fine-collection': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'fineAmount', label: 'Fine' },
        { key: 'totalAmount', label: 'Total' }
      ]
    },
    attendance: {
      daily: [
        { key: 'date', label: 'Date' },
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'status', label: 'Status' },
        { key: 'remarks', label: 'Remarks' }
      ],
      monthly: [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'month', label: 'Month' },
        { key: 'present', label: 'Present' },
        { key: 'absent', label: 'Absent' },
        { key: 'leave', label: 'Leave' },
        { key: 'percentage', label: '%' }
      ],
      'student-summary': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'present', label: 'Present' },
        { key: 'absent', label: 'Absent' },
        { key: 'leave', label: 'Leave' },
        { key: 'percentage', label: '%' }
      ],
      'class-summary': [
        { key: 'className', label: 'Class' },
        { key: 'studentCount', label: 'Students' },
        { key: 'present', label: 'Present' },
        { key: 'absent', label: 'Absent' },
        { key: 'leave', label: 'Leave' },
        { key: 'percentage', label: '%' }
      ],
      yearly: [
        { key: 'month', label: 'Month' },
        { key: 'present', label: 'Present' },
        { key: 'absent', label: 'Absent' },
        { key: 'leave', label: 'Leave' },
        { key: 'percentage', label: '%' }
      ],
      'teacher-wise': [
        { key: 'teacherName', label: 'Teacher' },
        { key: 'employeeCode', label: 'Code' },
        { key: 'classes', label: 'Classes' },
        { key: 'present', label: 'Present' },
        { key: 'absent', label: 'Absent' },
        { key: 'percentage', label: '%' }
      ]
    },
    payroll: {
      summary: [
        { key: 'payrollMonth', label: 'Month' },
        { key: 'employeeCount', label: 'Employees' },
        { key: 'paidCount', label: 'Paid' },
        { key: 'pendingCount', label: 'Pending' },
        { key: 'totalNet', label: 'Net Total' }
      ],
      'salary-summary': [
        { key: 'teacherName', label: 'Employee' },
        { key: 'designation', label: 'Designation' },
        { key: 'basicSalary', label: 'Basic' },
        { key: 'allowances', label: 'Allowances' },
        { key: 'deductions', label: 'Deductions' },
        { key: 'netSalary', label: 'Net' },
        { key: 'status', label: 'Status' }
      ],
      'payment-status': [
        { key: 'teacherName', label: 'Employee' },
        { key: 'payrollMonth', label: 'Month' },
        { key: 'netSalary', label: 'Net Salary' },
        { key: 'status', label: 'Status' },
        { key: 'paidAt', label: 'Paid On' }
      ]
    },
    transport: {
      'route-wise': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'routeName', label: 'Route' },
        { key: 'stopName', label: 'Stop' },
        { key: 'monthlyFee', label: 'Fee' },
        { key: 'status', label: 'Status' }
      ],
      'stop-wise': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'routeName', label: 'Route' },
        { key: 'stopName', label: 'Stop' },
        { key: 'monthlyFee', label: 'Fee' },
        { key: 'status', label: 'Status' }
      ],
      'bus-strength': [
        { key: 'routeName', label: 'Route' },
        { key: 'vehicleNumber', label: 'Vehicle' },
        { key: 'capacity', label: 'Capacity' },
        { key: 'activeStudents', label: 'Students' },
        { key: 'availableSeats', label: 'Available' },
        { key: 'occupancy', label: 'Occupancy %' }
      ],
      'fee-collection': [
        { key: 'studentName', label: 'Student' },
        { key: 'feeMonth', label: 'Month' },
        { key: 'busFee', label: 'Bus Fee' },
        { key: 'paidAmount', label: 'Paid' },
        { key: 'receiptNumber', label: 'Receipt' },
        { key: 'paymentDate', label: 'Date' }
      ]
    },
    promotions: {
      'promotion-report': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'fromYear', label: 'From Year' },
        { key: 'toYear', label: 'To Year' },
        { key: 'fromClass', label: 'From Class' },
        { key: 'toClass', label: 'To Class' }
      ],
      promoted: [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'fromYear', label: 'From Year' },
        { key: 'toYear', label: 'To Year' },
        { key: 'fromClass', label: 'From Class' },
        { key: 'toClass', label: 'To Class' },
        { key: 'rollNumber', label: 'Roll No' },
        { key: 'monthlyFee', label: 'Fee' }
      ],
      detained: [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'classSection', label: 'Class' },
        { key: 'rollNumber', label: 'Roll No' },
        { key: 'status', label: 'Status' }
      ],
      'left-school': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'status', label: 'Status' },
        { key: 'admissionDate', label: 'Admission Date' }
      ],
      'tc-issued': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'status', label: 'Status' },
        { key: 'admissionDate', label: 'Admission Date' }
      ],
      'class-strength-comparison': [
        { key: 'classSection', label: 'Class' },
        { key: 'fromYearCount', label: 'From Year' },
        { key: 'toYearCount', label: 'To Year' },
        { key: 'difference', label: 'Difference' }
      ]
    },
    operations: {
      'teacher-register': [
        { key: 'employeeCode', label: 'Code' },
        { key: 'teacherName', label: 'Name' },
        { key: 'phone', label: 'Phone' },
        { key: 'designation', label: 'Designation' },
        { key: 'status', label: 'Status' }
      ],
      'bus-allocation': [
        { key: 'studentName', label: 'Student' },
        { key: 'className', label: 'Class' },
        { key: 'routeName', label: 'Route' },
        { key: 'stopName', label: 'Stop' },
        { key: 'status', label: 'Status' }
      ],
      'route-strength': [
        { key: 'routeName', label: 'Route' },
        { key: 'vehicleNumber', label: 'Vehicle' },
        { key: 'capacity', label: 'Capacity' },
        { key: 'activeStudents', label: 'Students' },
        { key: 'occupancy', label: 'Occupancy %' }
      ],
      'inactive-students': [
        { key: 'admissionNumber', label: 'Adm No' },
        { key: 'studentName', label: 'Name' },
        { key: 'classSection', label: 'Class' },
        { key: 'status', label: 'Status' }
      ],
      'user-activity': [
        { key: 'performedAt', label: 'When' },
        { key: 'module', label: 'Module' },
        { key: 'action', label: 'Action' },
        { key: 'description', label: 'Description' },
        { key: 'performedBy', label: 'User' }
      ],
      'audit-summary': [
        { key: 'module', label: 'Module' },
        { key: 'action', label: 'Action' },
        { key: 'count', label: 'Count' }
      ]
    }
  };

  setReportDomain(domain: ReportDomain): void {
    this.reportDomain = domain;
    const types = this.reportColumnMap[domain];
    this.reportType = Object.keys(types)[0] || 'register';
    this.loadReport();
  }

  setReportType(type: string): void {
    this.reportType = type;
    this.loadReport();
  }

  reportColumns(): Array<{ key: string; label: string }> {
    return this.reportColumnMap[this.reportDomain]?.[this.reportType] || [];
  }

  reportCell(row: ReportRow, key: string): string {
    const value = row[key];
    if (value == null || value === '') return '—';
    if (key === 'status' && typeof value === 'string') return this.studentStatusLabel(value) || value;
    if (typeof value === 'number' && ['paidAmount', 'pendingAmount', 'totalAmount', 'debit', 'credit', 'busFee', 'basicSalary', 'allowances', 'deductions', 'netSalary', 'totalNet', 'monthlyFee', 'paidAmount'].includes(key)) {
      return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
    }
    if (value instanceof Date || (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value) && ['date', 'admissionDate', 'dueDate', 'paidAt', 'paymentDate'].includes(key))) {
      return new Date(value as string).toLocaleDateString();
    }
    return String(value);
  }

  buildReportParams(): Record<string, string> {
    const params: Record<string, string> = {};
    if (this.filters.reportYear) params['academicYear'] = this.filters.reportYear;
    if (this.filters.reportClass) params['classRoom'] = this.filters.reportClass;
    if (this.filters.reportSection) params['section'] = this.filters.reportSection;
    if (this.filters.reportStatus) params['status'] = this.filters.reportStatus;
    if (this.filters.reportAdmissionFrom) params['admissionFrom'] = this.filters.reportAdmissionFrom;
    if (this.filters.reportAdmissionTo) params['admissionTo'] = this.filters.reportAdmissionTo;
    if (this.filters.reportMonth) params['month'] = this.filters.reportMonth;
    if (this.filters.reportYearNum) params['year'] = this.filters.reportYearNum;
    if (this.filters.reportDate) params['date'] = this.filters.reportDate;
    if (this.filters.reportPaymentStatus) params['paymentStatus'] = this.filters.reportPaymentStatus;
    if (this.filters.reportStudent) params['student'] = this.filters.reportStudent;
    if (this.filters.reportDepartment) params['department'] = this.filters.reportDepartment;
    if (this.filters.reportDesignation) params['designation'] = this.filters.reportDesignation;
    if (this.filters.reportPayrollStatus) params['payrollStatus'] = this.filters.reportPayrollStatus;
    if (this.filters.reportRoute) params['route'] = this.filters.reportRoute;
    if (this.filters.reportStop) params['stop'] = this.filters.reportStop;
    if (this.filters.reportBusStatus) params['busServiceStatus'] = this.filters.reportBusStatus;
    if (this.filters.reportPerformanceCategory) params['performanceCategory'] = this.filters.reportPerformanceCategory;
    if (this.filters.reportTeacher) params['teacher'] = this.filters.reportTeacher;
    return params;
  }

  loadReport(): void {
    if (!this.can('reports', 'view')) return;
    this.reportLoading = true;
    this.api.report(this.reportDomain, this.reportType, this.buildReportParams()).subscribe({
      next: (response) => {
        this.reportRows = response.rows || [];
        this.reportLoading = false;
      },
      error: () => {
        this.reportRows = [];
        this.reportLoading = false;
      }
    });
  }

  exportReportCsv(): void {
    const columns = this.reportColumns();
    if (!columns.length || !this.reportRows.length) return;
    exportRowsToCsv(
      `${this.reportDomain}-${this.reportType}.csv`,
      columns.map((col) => col.label),
      this.reportRows.map((row) => columns.map((col) => this.reportCell(row, col.key)))
    );
  }

  exportReportPdf(): void {
    const columns = this.reportColumns();
    if (!columns.length || !this.reportRows.length) return;
    exportRowsToPdf(
      `${this.reportDomain} ${this.reportType}`,
      columns.map((col) => col.label),
      this.reportRows.map((row) => columns.map((col) => this.reportCell(row, col.key)))
    );
  }

  printReport(): void {
    if (!this.can('reports', 'print')) return;
    this.exportReportPdf();
  }

  openReportServerPdf(): void {
    this.openProtectedPdf(this.api.reportPdfUrl(this.reportDomain, this.reportType, this.buildReportParams()));
  }

  loadSelfAttendanceStatus(): void {
    if (!this.isTeacher) return;
    this.api.selfAttendanceStatus().subscribe({
      next: (res) => {
        this.selfAttendanceMarked = res.marked;
        this.selfAttendanceStatus = res.status;
      },
      error: () => {}
    });
  }

  loadHolidays(): void {
    if (!this.can('attendance', 'view') || this.holidaysLoaded) return;
    this.api.holidays().subscribe({
      next: (rows) => {
        this.holidays = rows;
        this.holidaysLoaded = true;
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

  get selectedStudentCount(): number {
    return this.selectedStudentIds.size;
  }

  allStudentsSelectedOnPage(): boolean {
    const page = this.paged('students', this.sortedStudents);
    return page.length > 0 && page.every((student) => this.selectedStudentIds.has(student._id));
  }

  toggleAllStudentsOnPage(checked: boolean): void {
    const page = this.paged('students', this.sortedStudents);
    page.forEach((student) => this.toggleStudent(student._id, checked));
  }

  clearStudentSelection(): void {
    this.selectedStudentIds.clear();
  }

  bulkBusStops(): BusStop[] {
    const route = this.busRoutes.find((entry) => entry._id === this.bulkBusRouteTarget);
    return route?.stops || [];
  }

  loadWorkflowNotifications(): void {
    if (!this.currentUser || !this.can('dashboard', 'view')) return;
    this.workflowNotificationsLoading = true;
    this.api.workflowNotifications().subscribe({
      next: (response) => {
        this.workflowNotifications = response.items || [];
        this.workflowNotificationsLoading = false;
      },
      error: () => {
        this.workflowNotifications = [];
        this.workflowNotificationsLoading = false;
      }
    });
  }

  get workflowNotificationCount(): number {
    return this.workflowNotifications.length;
  }

  canViewSensitivePii(module: 'students' | 'teachers'): boolean {
    return this.permissionService.canViewSensitivePii(module, this.currentUser?.role);
  }

  toggleNotificationMenu(): void {
    this.isNotificationMenuOpen = !this.isNotificationMenuOpen;
    if (this.isNotificationMenuOpen) {
      this.globalSearchOpen = false;
      this.loadWorkflowNotifications();
    }
  }

  closeNotificationMenu(): void {
    this.isNotificationMenuOpen = false;
  }

  dismissWorkflowNotification(key: string, event?: Event): void {
    event?.stopPropagation();
    this.api.dismissWorkflowNotification(key).subscribe({
      next: () => {
        this.workflowNotifications = this.workflowNotifications.filter((entry) => entry.key !== key);
      }
    });
  }

  openWorkflowNotification(notification: WorkflowNotification): void {
    this.isNotificationMenuOpen = false;
    const tab = notification.tab as TabKey;
    if (this.tabs.some((item) => item.key === tab)) {
      this.setTab(tab);
    }
  }

  onGlobalSearchInput(): void {
    if (this.globalSearchTimer) clearTimeout(this.globalSearchTimer);
    const query = this.globalSearchQuery.trim();
    this.globalSearchActiveIndex = -1;
    if (query.length < 2) {
      this.globalSearchResults = [];
      this.globalSearchOpen = false;
      this.globalSearchLoading = false;
      return;
    }
    this.globalSearchOpen = true;
    this.globalSearchLoading = true;
    this.globalSearchTimer = setTimeout(() => {
      this.api.globalSearch(query).subscribe({
        next: (response) => {
          this.globalSearchResults = response.results || [];
          this.globalSearchLoading = false;
          this.globalSearchActiveIndex = this.globalSearchResults.length ? 0 : -1;
        },
        error: () => {
          this.globalSearchResults = [];
          this.globalSearchLoading = false;
          this.globalSearchActiveIndex = -1;
        }
      });
    }, 300);
  }

  openGlobalSearchResult(result: GlobalSearchResult): void {
    this.globalSearchOpen = false;
    this.globalSearchQuery = '';
    this.globalSearchResults = [];
    const tab = result.tab as TabKey;
    if (this.tabs.some((item) => item.key === tab)) {
      this.setTab(tab);
    }
    if (result.type === 'student') {
      this.openStudentProfile(result.id);
      return;
    }
    if (result.type === 'receipt') {
      this.filters.invoiceSearch = result.label;
      this.updateListSearch('invoices', 'invoiceSearch', result.label);
      return;
    }
    if (result.type === 'teacher') {
      this.filters.teacherSearch = result.subtitle || result.label;
      this.updateListSearch('teachers', 'teacherSearch', this.filters.teacherSearch);
      return;
    }
    if (result.type === 'payroll') {
      this.filters.payrollSearch = result.subtitle || result.label;
      this.updateListSearch('payroll', 'payrollSearch', this.filters.payrollSearch);
      return;
    }
    if (result.type === 'route') {
      this.filters.busRouteSearch = result.label;
      this.updateListSearch('busRoutes', 'busRouteSearch', result.label);
      return;
    }
    if (result.type === 'user') {
      this.filters.userSearch = result.label;
      this.updateListSearch('users', 'userSearch', result.label);
    }
  }

  clearGlobalSearch(): void {
    this.globalSearchQuery = '';
    this.globalSearchResults = [];
    this.globalSearchOpen = false;
    this.globalSearchActiveIndex = -1;
  }

  async executeBulkStatusUpdate(): Promise<void> {
    if (!this.can('students', 'edit') || !this.bulkStatusTarget || !this.selectedStudentIds.size) return;
    const confirmed = await this.confirmAction({
      title: 'Bulk status update',
      message: `Update status to "${this.bulkStatusTarget}" for ${this.selectedStudentIds.size} selected student(s)?`,
      confirmLabel: 'Update'
    });
    if (!confirmed) return;
    this.api.workflowBulk('status-update', {
      entity: 'students',
      ids: [...this.selectedStudentIds],
      status: this.bulkStatusTarget
    }).subscribe({
      next: () => {
        this.toast.success('Student statuses updated');
        this.clearStudentSelection();
        this.refresh();
      },
      error: (error) => this.toast.error(extractApiMessage(error, 'Bulk status update failed'))
    });
  }

  async executeBulkClassAssignment(): Promise<void> {
    const activeYear = this.activeAcademicYear?._id;
    if (!this.can('students', 'edit') || !this.bulkClassTarget || !activeYear || !this.selectedStudentIds.size) return;
    const confirmed = await this.confirmAction({
      title: 'Bulk class assignment',
      message: `Assign ${this.selectedStudentIds.size} student(s) to the selected class?`,
      confirmLabel: 'Assign'
    });
    if (!confirmed) return;
    this.api.workflowBulk('student-assignment', {
      studentIds: [...this.selectedStudentIds],
      classRoomId: this.bulkClassTarget,
      academicYearId: activeYear
    }).subscribe({
      next: () => {
        this.toast.success('Students assigned to class');
        this.clearStudentSelection();
        this.refresh();
      },
      error: (error) => this.toast.error(extractApiMessage(error, 'Bulk class assignment failed'))
    });
  }

  async executeBulkBusAssignment(): Promise<void> {
    const activeYear = this.activeAcademicYear?._id;
    const route = this.busRoutes.find((entry) => entry._id === this.bulkBusRouteTarget);
    const stop = route?.stops?.find((entry) => String(entry.sequence) === this.bulkBusStopSequence);
    if (!this.can('transport', 'edit') || !route || !stop || !activeYear || !this.selectedStudentIds.size) return;
    const confirmed = await this.confirmAction({
      title: 'Bulk bus assignment',
      message: `Assign ${this.selectedStudentIds.size} student(s) to ${route.routeName} · ${stop.name}?`,
      confirmLabel: 'Assign'
    });
    if (!confirmed) return;
    this.api.workflowBulk('bus-assignment', {
      studentIds: [...this.selectedStudentIds],
      routeId: route._id,
      stopName: stop.name,
      stopSequence: stop.sequence,
      academicYearId: activeYear,
      monthlyFee: stop.monthlyFee
    }).subscribe({
      next: () => {
        this.toast.success('Bus assignments updated');
        this.clearStudentSelection();
        this.refresh();
      },
      error: (error) => this.toast.error(extractApiMessage(error, 'Bulk bus assignment failed'))
    });
  }

  async executeBulkNotification(): Promise<void> {
    if (!this.can('students', 'edit') || !this.bulkNotificationMessage.trim() || !this.selectedStudentIds.size) return;
    const confirmed = await this.confirmAction({
      title: 'Bulk notification',
      message: `Queue notification for ${this.selectedStudentIds.size} selected student(s)?`,
      confirmLabel: 'Send'
    });
    if (!confirmed) return;
    this.api.workflowBulk('notifications', {
      studentIds: [...this.selectedStudentIds],
      message: this.bulkNotificationMessage.trim(),
      channel: 'in_app'
    }).subscribe({
      next: () => {
        this.toast.success('Bulk notification queued');
        this.bulkNotificationMessage = '';
        this.clearStudentSelection();
      },
      error: (error) => this.toast.error(extractApiMessage(error, 'Bulk notification failed'))
    });
  }

  unlockPayroll(id: string): void {
    if (!this.can('payroll', 'unlock')) return;
    this.api.unlockPayroll(id).subscribe({
      next: () => {
        this.message = 'Payroll record unlocked';
        this.refresh();
      },
      error: (err) => { this.message = err.error?.message || 'Could not unlock payroll'; }
    });
  }

  promotionClassesForYear(yearId: string): ClassRoom[] {
    if (!yearId) return this.classes;
    return this.classes.filter((room) => {
      const roomYear = typeof room.academicYear === 'string' ? room.academicYear : room.academicYear?._id;
      return roomYear === yearId;
    });
  }

  get promotionEligibleSelectedRows(): PromotionEligibleRow[] {
    return this.promotionEligibleRows.filter((row) => row.eligible && !this.promotionExcludedIds.has(row.studentId));
  }

  canPromotionStepContinue(step = this.promotionWizardStep): boolean {
    const value = this.promotionForm.getRawValue();
    if (step === 1) return !!(value.fromAcademicYear && value.toAcademicYear && value.fromAcademicYear !== value.toAcademicYear);
    if (step === 2) return !!value.fromClassRoom;
    if (step === 3) return !!value.toClassRoom;
    if (step === 4) return this.promotionEligibleSelectedRows.length > 0;
    return true;
  }

  nextPromotionStep(): void {
    if (!this.canPromotionStepContinue()) return;
    if (this.promotionWizardStep === 3) {
      this.loadPromotionEligible();
    }
    if (this.promotionWizardStep === 4) {
      this.loadPromotionPreview();
      this.promotionWizardStep = 5;
      return;
    }
    this.promotionWizardStep = Math.min(this.promotionWizardStep + 1, 5);
  }

  prevPromotionStep(): void {
    this.promotionWizardStep = Math.max(this.promotionWizardStep - 1, 1);
  }

  resetPromotionWizard(): void {
    this.promotionWizardStep = 1;
    this.promotionEligibleRows = [];
    this.promotionPreview = null;
    this.promotionBatch = null;
    this.promotionExcludedIds.clear();
    this.promotionSelectedIds.clear();
    this.promotionRollAssignments = {};
    this.promotionWarningsAcknowledged = false;
    this.promotionForm.reset();
  }

  loadPromotionEligible(): void {
    const value = this.promotionForm.getRawValue();
    this.promotionLoading = true;
    this.api.promotionEligible({
      fromAcademicYear: value.fromAcademicYear || '',
      toAcademicYear: value.toAcademicYear || '',
      fromClassRoom: value.fromClassRoom || ''
    }).subscribe({
      next: (response) => {
        this.promotionEligibleRows = response.rows;
        this.promotionSelectedIds = new Set(response.rows.filter((row) => row.eligible).map((row) => row.studentId));
        this.promotionExcludedIds.clear();
        this.promotionLoading = false;
      },
      error: (error) => {
        this.promotionLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  togglePromotionExclude(studentId: string, excluded: boolean): void {
    if (excluded) this.promotionExcludedIds.add(studentId);
    else this.promotionExcludedIds.delete(studentId);
  }

  togglePromotionStudent(studentId: string, checked: boolean): void {
    if (checked) {
      this.promotionSelectedIds.add(studentId);
      this.promotionExcludedIds.delete(studentId);
    } else {
      this.promotionSelectedIds.delete(studentId);
      this.promotionExcludedIds.add(studentId);
    }
  }

  selectAllPromotionStudents(checked: boolean): void {
    const eligibleIds = this.promotionEligibleRows.filter((row) => row.eligible).map((row) => row.studentId);
    if (checked) {
      eligibleIds.forEach((id) => this.promotionSelectedIds.add(id));
      this.promotionExcludedIds.clear();
    } else {
      eligibleIds.forEach((id) => {
        this.promotionSelectedIds.delete(id);
        this.promotionExcludedIds.add(id);
      });
    }
  }

  isPromotionStudentSelected(studentId: string): boolean {
    return this.promotionSelectedIds.has(studentId) && !this.promotionExcludedIds.has(studentId);
  }

  promotionWarningSummary(row: PromotionEligibleRow | PromotionPreviewRow): string {
    return row.warnings?.map((warning) => warning.message).join('; ') || '';
  }

  loadPromotionPreview(): void {
    const value = this.promotionForm.getRawValue();
    const studentIds = this.promotionEligibleRows
      .filter((row) => row.eligible && this.isPromotionStudentSelected(row.studentId))
      .map((row) => row.studentId);
    const excludedStudentIds = [...this.promotionExcludedIds];

    this.promotionLoading = true;
    this.api.promotionPreview({
      ...value,
      studentIds,
      excludedStudentIds,
      rollMode: this.promotionRollMode,
      rollAssignments: this.promotionRollAssignments
    }).subscribe({
      next: (preview) => {
        this.promotionPreview = preview;
        this.promotionLoading = false;
      },
      error: (error) => {
        this.promotionLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  executePromotionBatch(): void {
    if (!this.promotionPreview) {
      this.loadPromotionPreview();
      return;
    }
    const value = this.promotionForm.getRawValue();
    const studentIds = this.promotionPreview.rows
      .filter((row) => row.included && row.eligible)
      .map((row) => row.studentId);

    this.submitting = true;
    this.api.promotionExecute({
      ...value,
      studentIds,
      excludedStudentIds: [...this.promotionExcludedIds],
      rollMode: this.promotionRollMode,
      rollAssignments: this.promotionRollAssignments,
      warningsAcknowledged: this.promotionWarningsAcknowledged
    }).subscribe({
      next: (batch) => {
        this.promotionBatch = batch;
        this.submitting = false;
        this.toast.success(`Promotion draft created for ${batch.promotedCount} student(s). Review and finalize or rollback.`);
        this.refresh();
      },
      error: (error) => {
        this.submitting = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  rollbackPromotionBatch(): void {
    if (!this.promotionBatch?._id) return;
    this.submitting = true;
    this.api.promotionRollback(this.promotionBatch._id).subscribe({
      next: (batch) => {
        this.promotionBatch = batch;
        this.submitting = false;
        this.toast.warning('Promotion rolled back. Enrollment history restored.');
        this.refresh();
      },
      error: (error) => {
        this.submitting = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  finalizePromotionBatch(): void {
    if (!this.can('students', 'approve')) {
      this.toast.warning('You do not have permission to finalize promotions');
      return;
    }
    if (!this.promotionBatch?._id) return;
    this.submitting = true;
    this.api.promotionFinalize(this.promotionBatch._id).subscribe({
      next: (batch) => {
        this.promotionBatch = batch;
        this.submitting = false;
        this.toast.success(`Promotion finalized and locked (${batch.promotedCount} student(s)).`);
        this.refresh();
      },
      error: (error) => {
        this.submitting = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  loadPromotionReport(): void {
    const value = this.promotionForm.getRawValue();
    this.promotionReportLoading = true;
    this.api.promotionReport(this.promotionReportType, {
      fromAcademicYear: value.fromAcademicYear || '',
      toAcademicYear: value.toAcademicYear || '',
      classRoom: value.fromClassRoom || ''
    }).subscribe({
      next: (response) => {
        this.promotionReportRows = response.rows;
        this.promotionReportLoading = false;
      },
      error: (error) => {
        this.promotionReportLoading = false;
        this.toast.error(extractApiMessage(error));
      }
    });
  }

  exportPromotionReportCsv(): void {
    const rows = this.promotionReportRows;
    if (!rows.length) return;
    const headers = Object.keys(rows[0] as object);
    exportRowsToCsv(
      `promotion-${this.promotionReportType}.csv`,
      headers,
      rows.map((row) => headers.map((key) => String((row as Record<string, unknown>)[key] ?? '')))
    );
  }

  exportPromotionReportPdf(): void {
    const rows = this.promotionReportRows;
    if (!rows.length) return;
    const headers = Object.keys(rows[0] as object);
    exportRowsToPdf(
      `Promotion Report — ${this.promotionReportType}`,
      headers,
      rows.map((row) => headers.map((key) => String((row as Record<string, unknown>)[key] ?? '')))
    );
  }

  promoteStudents(): void {
    this.executePromotionBatch();
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

  entityRefId(value?: string | { _id?: string }): string {
    if (!value) return '';
    return typeof value === 'string' ? value : value._id || '';
  }

  matchesPortalStudent(student?: Student | string | { _id?: string }): boolean {
    if (!this.isPortalUser) return true;
    const portalId = this.portalStudentId;
    if (!portalId) return false;
    return this.entityRefId(student) === portalId;
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

  get sortedInvoices(): FeeInvoice[] {
    if (this.isServerPaged('invoices')) return (this.listingRows.invoices as FeeInvoice[]) || [];
    return sortItems(this.filteredInvoices, this.listSort.invoices?.field, this.listSort.invoices?.dir, {
      invoiceNumber: (invoice) => invoice.invoiceNumber,
      studentName: (invoice) => this.studentName(invoice.student),
      dueDate: (invoice) => invoice.dueDate,
      status: (invoice) => invoice.status,
      totalAmount: (invoice) => invoice.totalAmount
    });
  }

  get sortedFeeHistory(): FeeHistoryRow[] {
    if (this.isServerPaged('feeHistory')) return (this.listingRows.feeHistory as FeeHistoryRow[]) || [];
    return sortItems(this.filteredFeeHistory, this.listSort.feeHistory?.field, this.listSort.feeHistory?.dir, {
      paymentDate: (row) => row.paymentDate,
      studentName: (row) => this.studentName(row.student),
      receiptNumber: (row) => row.receiptNumber || '',
      paidAmount: (row) => row.paidAmount
    });
  }

  get sortedPayrolls(): PayrollRecord[] {
    if (this.isServerPaged('payroll')) return (this.listingRows.payroll as PayrollRecord[]) || [];
    return sortItems(this.filteredPayrolls, this.listSort.payroll?.field, this.listSort.payroll?.dir, {
      teacherName: (payroll) => this.payrollTeacherName(payroll.teacher),
      period: (payroll) => `${payroll.year}-${String(payroll.month).padStart(2, '0')}`,
      netSalary: (payroll) => payroll.basicSalary + payroll.allowances - payroll.deductions,
      status: (payroll) => payroll.status
    });
  }

  get sortedBusRoutes(): BusRoute[] {
    if (this.isServerPaged('busRoutes')) return (this.listingRows.busRoutes as BusRoute[]) || [];
    return sortItems(this.filteredBusRoutes, this.listSort.busRoutes?.field, this.listSort.busRoutes?.dir, {
      routeCode: (route) => route.routeCode,
      routeName: (route) => route.routeName,
      vehicleNumber: (route) => route.vehicleNumber,
      status: (route) => route.status
    });
  }

  get sortedBusRegistrations(): BusRegistration[] {
    if (this.isServerPaged('busRegistrations')) return (this.listingRows.busRegistrations as BusRegistration[]) || [];
    return sortItems(this.filteredBusRegistrations, this.listSort.busRegistrations?.field, this.listSort.busRegistrations?.dir, {
      studentName: (reg) => this.studentName(reg.student),
      routeName: (reg) => this.busRouteLabel(reg.route),
      stopName: (reg) => reg.stopName,
      status: (reg) => reg.status
    });
  }

  get sortedAttendance(): AttendanceRecord[] {
    if (this.isServerPaged('attendance')) return (this.listingRows.attendance as AttendanceRecord[]) || [];
    return sortItems(this.filteredAttendance, this.listSort.attendance?.field, this.listSort.attendance?.dir, {
      date: (row) => row.date,
      studentName: (row) => this.studentName(row.student),
      className: (row) => this.className(row.classRoom),
      status: (row) => row.status
    });
  }

  get sortedDashboardAttendance(): AttendanceRecord[] {
    return sortItems(this.filteredAttendance, this.listSort.attendance?.field || 'date', this.listSort.attendance?.dir || 'desc', {
      date: (row) => row.date,
      studentName: (row) => this.studentName(row.student),
      className: (row) => this.className(row.classRoom),
      status: (row) => row.status
    });
  }

  exportInvoicesCsv(): void {
    this.withFilteredExportRows('invoices', this.sortedInvoices, (rows) => {
      exportRowsToCsv('fee-demands.csv', ['Invoice', 'Student', 'Period', 'Total', 'Paid', 'Balance', 'Status'], rows.map((invoice) => [
        invoice.invoiceNumber,
        this.studentName(invoice.student),
        this.feePeriodLabel(invoice.feeMonth, invoice.feeYear),
        String(invoice.totalAmount),
        String(invoice.paidAmount),
        String(invoice.balanceAmount),
        invoice.status
      ]));
    });
  }

  exportInvoicesPdf(): void {
    this.withFilteredExportRows('invoices', this.sortedInvoices, (rows) => {
      exportRowsToPdf('Fee Demands', ['Invoice', 'Student', 'Period', 'Total', 'Balance', 'Status'], rows.map((invoice) => [
        invoice.invoiceNumber,
        this.studentName(invoice.student),
        this.feePeriodLabel(invoice.feeMonth, invoice.feeYear),
        String(invoice.totalAmount),
        String(invoice.balanceAmount),
        invoice.status
      ]));
    });
  }

  exportFeeHistoryCsv(): void {
    this.withFilteredExportRows('feeHistory', this.sortedFeeHistory, (rows) => {
      exportRowsToCsv('fee-history.csv', ['Month', 'Student', 'Receipt', 'Paid', 'Pending', 'Status'], rows.map((row) => [
        this.feePeriodLabel(row.feeMonth, row.feeYear),
        this.studentName(row.student),
        row.receiptNumber || '—',
        String(row.paidAmount),
        String(row.pendingAmount),
        row.paymentStatus
      ]));
    });
  }

  exportFeeHistoryPdf(): void {
    this.withFilteredExportRows('feeHistory', this.sortedFeeHistory, (rows) => {
      exportRowsToPdf('Fee Payment History', ['Month', 'Student', 'Receipt', 'Paid', 'Pending', 'Status'], rows.map((row) => [
        this.feePeriodLabel(row.feeMonth, row.feeYear),
        this.studentName(row.student),
        row.receiptNumber || '—',
        String(row.paidAmount),
        String(row.pendingAmount),
        row.paymentStatus
      ]));
    });
  }

  exportPayrollsCsv(): void {
    this.withFilteredExportRows('payroll', this.sortedPayrolls, (rows) => {
      exportRowsToCsv('payroll.csv', ['Teacher', 'Period', 'Basic', 'Allowances', 'Deductions', 'Net', 'Status'], rows.map((payroll) => [
        this.payrollTeacherName(payroll.teacher),
        `${this.getMonthName(payroll.month)} ${payroll.year}`,
        String(payroll.basicSalary),
        String(payroll.allowances),
        String(payroll.deductions),
        String(payroll.basicSalary + payroll.allowances - payroll.deductions),
        payroll.status
      ]));
    });
  }

  exportPayrollsPdf(): void {
    this.withFilteredExportRows('payroll', this.sortedPayrolls, (rows) => {
      exportRowsToPdf('Payroll Records', ['Teacher', 'Period', 'Net', 'Status'], rows.map((payroll) => [
        this.payrollTeacherName(payroll.teacher),
        `${this.getMonthName(payroll.month)} ${payroll.year}`,
        String(payroll.basicSalary + payroll.allowances - payroll.deductions),
        payroll.status
      ]));
    });
  }

  exportBusRoutesCsv(): void {
    this.withFilteredExportRows('busRoutes', this.sortedBusRoutes, (rows) => {
      exportRowsToCsv('bus-routes.csv', ['Code', 'Route', 'Vehicle', 'Driver', 'Stops', 'Assigned', 'Status'], rows.map((route) => [
        route.routeCode,
        route.routeName,
        route.vehicleNumber,
        route.driverName,
        String(route.stops?.length || 0),
        String(route.assignedCount || 0),
        route.status
      ]));
    });
  }

  exportBusRoutesPdf(): void {
    this.withFilteredExportRows('busRoutes', this.sortedBusRoutes, (rows) => {
      exportRowsToPdf('Bus Routes', ['Code', 'Route', 'Vehicle', 'Stops', 'Status'], rows.map((route) => [
        route.routeCode,
        route.routeName,
        route.vehicleNumber,
        String(route.stops?.length || 0),
        route.status
      ]));
    });
  }

  exportBusRegistrationsCsv(): void {
    this.withFilteredExportRows('busRegistrations', this.sortedBusRegistrations, (rows) => {
      exportRowsToCsv('bus-registrations.csv', ['Student', 'Route', 'Stop', 'Fee', 'Status'], rows.map((reg) => [
        this.studentName(reg.student),
        this.busRouteLabel(reg.route),
        reg.stopName,
        String(reg.monthlyFee),
        reg.status
      ]));
    });
  }

  exportBusRegistrationsPdf(): void {
    this.withFilteredExportRows('busRegistrations', this.sortedBusRegistrations, (rows) => {
      exportRowsToPdf('Bus Registrations', ['Student', 'Route', 'Stop', 'Fee', 'Status'], rows.map((reg) => [
        this.studentName(reg.student),
        this.busRouteLabel(reg.route),
        reg.stopName,
        String(reg.monthlyFee),
        reg.status
      ]));
    });
  }

  exportAttendanceListCsv(): void {
    this.withFilteredExportRows('attendance', this.sortedAttendance, (rows) => {
      exportRowsToCsv('attendance.csv', ['Date', 'Student', 'Class', 'Status'], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : '',
        this.studentName(row.student),
        this.className(row.classRoom),
        row.status
      ]));
    });
  }

  exportAttendanceListPdf(): void {
    this.withFilteredExportRows('attendance', this.sortedAttendance, (rows) => {
      exportRowsToPdf('Attendance Records', ['Date', 'Student', 'Class', 'Status'], rows.map((row) => [
        row.date ? new Date(row.date).toLocaleDateString() : '',
        this.studentName(row.student),
        this.className(row.classRoom),
        row.status
      ]));
    });
  }

  get filteredInvoices(): FeeInvoice[] {
    const search = this.filters.invoiceSearch.toLowerCase().trim();
    return this.invoices.filter((invoice) => {
      if (this.isPortalUser && !this.matchesPortalStudent(invoice.student)) return false;
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
        invoice.feeMonth
          ? invoice.feeMonth === Number(this.filters.invoiceMonth)
          : invoice.dueDate && (new Date(invoice.dueDate).getMonth() + 1) === Number(this.filters.invoiceMonth)
      );
      return matchesSearch && matchesStatus && matchesYear && matchesClass && matchesMonth;
    });
  }

  get filteredFeeHistory(): FeeHistoryRow[] {
    const search = this.filters.feeHistorySearch.toLowerCase().trim();
    return this.feeHistory.filter((row) => {
      if (this.isPortalUser && !this.matchesPortalStudent(row.student)) return false;
      const studentLabel = this.studentName(row.student).toLowerCase();
      const matchesSearch = !search || `${row.receiptNumber || ''} ${row.invoiceNumber} ${studentLabel}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.feeHistoryStatus || row.paymentStatus === this.filters.feeHistoryStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get filteredBusRoutes(): BusRoute[] {
    const search = this.filters.busRouteSearch.toLowerCase().trim();
    return this.busRoutes.filter((route) => {
      const matchesSearch = !search || `${route.routeName} ${route.routeCode} ${route.vehicleNumber} ${route.driverName}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.busRouteStatus || route.status === this.filters.busRouteStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get filteredBusRegistrations(): BusRegistration[] {
    const search = (this.filters.busRegSearch || '').toLowerCase().trim();
    return this.busRegistrations.filter((reg) => {
      const yearId = typeof reg.academicYear === 'string' ? reg.academicYear : reg.academicYear?._id;
      const routeId = typeof reg.route === 'string' ? reg.route : reg.route?._id;
      const matchesYear = !this.filters.busRegYear || yearId === this.filters.busRegYear;
      const matchesRoute = !this.filters.busRegRoute || routeId === this.filters.busRegRoute;
      const matchesStatus = !this.filters.busRegStatus || reg.status === this.filters.busRegStatus;
      const matchesSearch = !search || `${this.studentName(reg.student)} ${this.busRouteLabel(reg.route)} ${reg.stopName}`.toLowerCase().includes(search);
      return matchesYear && matchesRoute && matchesStatus && matchesSearch;
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
      if (this.isPortalUser && !this.matchesPortalStudent(row.student)) return false;
      const matchesSearch = !search || `${this.studentName(row.student)} ${this.className(row.classRoom)} ${row.status}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.attendanceStatus || row.status === this.filters.attendanceStatus;
      const matchesClass = !this.filters.attendanceClass || (typeof row.classRoom === 'string' ? row.classRoom : row.classRoom?._id) === this.filters.attendanceClass;
      const matchesYear = !this.filters.attendanceYear || (typeof row.academicYear === 'string' ? row.academicYear : (row.academicYear as AcademicYear)?._id) === this.filters.attendanceYear;
      const matchesStudent = !this.filters.attendanceStudent || (typeof row.student === 'string' ? row.student : (row.student as Student)?._id) === this.filters.attendanceStudent;
      return matchesSearch && matchesStatus && matchesClass && matchesYear && matchesStudent;
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
    return this.timetable.filter((row) => !search || `${row.dayOfWeek} ${this.className(row.classRoom)} ${(row.periods ?? []).map((period) => period.subject).join(' ')}`.toLowerCase().includes(search));
  }

  get filteredExams(): Exam[] {
    if (this.isServerPaged('exams')) return (this.listingRows.exams as Exam[]) || [];
    const search = this.filters.examSearch.toLowerCase().trim();
    return this.exams.filter((exam) => {
      const matchesSearch = !search || `${exam.title} ${exam.subject} ${exam.chapter}`.toLowerCase().includes(search);
      const matchesStatus = !this.filters.examStatus || exam.status === this.filters.examStatus;
      return matchesSearch && matchesStatus;
    });
  }

  get sortedExams(): Exam[] {
    if (this.isServerPaged('exams')) return this.filteredExams;
    return sortItems(this.filteredExams, this.listSort.exams?.field, this.listSort.exams?.dir, {
      title: (exam) => exam.title,
      subject: (exam) => exam.subject,
      status: (exam) => exam.status,
      createdAt: (exam) => exam.createdAt || ''
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

  get sortedProfileExams(): StudentProfile['academics']['examResults'] {
    return sortItems(this.filteredProfileExams, this.listSort.profileExams?.field, this.listSort.profileExams?.dir, {
      title: (exam) => exam.title,
      subject: (exam) => exam.subject,
      submittedAt: (exam) => exam.submittedAt,
      percentage: (exam) => exam.percentage
    });
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

  get sortedProfileFees(): StudentProfile['fees']['invoices'] {
    return sortItems(this.filteredProfileFees, this.listSort.profileFees?.field, this.listSort.profileFees?.dir, {
      invoiceNumber: (inv) => inv.invoiceNumber,
      dueDate: (inv) => inv.dueDate,
      totalAmount: (inv) => inv.totalAmount,
      balanceAmount: (inv) => inv.balanceAmount,
      status: (inv) => inv.status
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
    if (this.isServerPaged(key)) this.reloadListing(key);
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
    this.sessionIdleMinutes = user.securityPolicy?.session?.idleTimeoutMinutes || APP_CONSTANTS.DEFAULT_SESSION_IDLE_MINUTES;
    this.loadedTabs.clear();
    this.holidaysLoaded = false;
    this.lastActivityAt = Date.now();
    sessionStorage.setItem(APP_CONSTANTS.SESSION_ACTIVITY_KEY, String(this.lastActivityAt));
    this.startSessionWatch();
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
    this.loadedTabs.clear();
    this.holidaysLoaded = false;
    this.stopSessionWatch();
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

  private submit(request: Observable<unknown>, successMessage: string, formToReset?: { reset: () => void }, onSuccess?: () => void): void {
    if (this.submitting) return;
    this.message = '';
    this.submitting = true;
    this.loading = true;
    request.subscribe({
      next: () => {
        this.toast.success(successMessage);
        if (formToReset) formToReset.reset();
        if (onSuccess) onSuccess();
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
