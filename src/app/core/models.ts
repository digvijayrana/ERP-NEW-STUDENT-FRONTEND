export interface AcademicYear {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  status?: 'draft' | 'active' | 'closed';
  closedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Teacher {
  _id: string;
  employeeCode: string;
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  aadhaarNumber?: string;
  qualification?: string;
  baseSalary: number;
  status: 'active' | 'inactive';
  experience?: Array<{ instituteName: string; designation: string; fromDate: string; toDate: string; description?: string; document?: { url: string; originalName: string; uploadedAt: string } }>;
  education?: Array<{ instituteName: string; degree: string; fieldOfStudy: string; fromDate: string; toDate: string; grade?: string; document?: { url: string; originalName: string; uploadedAt: string } }>;
  documents?: {
    idProof?: { url: string; originalName: string; uploadedAt: string; status?: string; rejectReason?: string };
    resume?: { url: string; originalName: string; uploadedAt: string; status?: string; rejectReason?: string };
    certificates?: Array<{ url: string; originalName: string; uploadedAt: string; status?: string; rejectReason?: string }>;
  };
}

export interface ClassRoom {
  _id: string;
  name: string;
  section: string;
  monthlyFee: number;
  capacity?: number;
  academicYear: AcademicYear | string;
  classTeacher?: Teacher | string;
  subjects?: Array<{ name: string; teacher: Teacher | string }>;
  status?: 'active' | 'inactive';
  studentCount?: number;
  availableCapacity?: number;
}

export interface Student {
  _id: string;
  admissionNumber: string;
  admissionDate?: string;
  firstName: string;
  lastName?: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup?: string;
  category?: string;
  nationality?: string;
  motherName?: string;
  aadhaarNumber?: string;
  udisePenId?: string;
  status: string;
  address?: { line1: string; city: string; state: string; pincode: string };
  guardians: Array<{ name: string; relation: string; phone: string; isPrimary?: boolean }>;
  documents?: Array<{ _id?: string; type: string; title: string; fileUrl?: string; status?: string; uploadedAt?: string }>;
  previousSchoolDetails?: {
    schoolName?: string;
    board?: string;
    percentage?: number;
    rollNumber?: string;
    address?: string;
    lastClass?: string;
    yearOfPassing?: number;
    reasonForLeaving?: string;
    tcNumber?: string;
    tcDate?: string;
  };
  enrollments: Array<{ academicYear: AcademicYear | string; classRoom: ClassRoom | string; status: string; rollNumber?: string }>;
  updatedAt?: string;
}

export interface FeePayment {
  _id?: string;
  receiptNumber: string;
  amount: number;
  mode: string;
  paidAt?: string;
  referenceNumber?: string;
  remarks?: string;
  status?: 'active' | 'void';
  locked?: boolean;
}

export interface FeeInvoice {
  _id: string;
  invoiceNumber: string;
  student: Student | string;
  classRoom: ClassRoom | string;
  academicYear: AcademicYear | string;
  dueDate: string;
  feeMonth?: number;
  feeYear?: number;
  tuitionFee?: number;
  busFee?: number;
  otherCharges?: number;
  previousPending?: number;
  items: Array<{ label: string; amount: number }>;
  discount: number;
  fine: number;
  payments: FeePayment[];
  status: string;
  locked?: boolean;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  createdAt?: string;
}

export interface FeeHistoryRow {
  invoiceId: string;
  paymentId?: string | null;
  invoiceNumber: string;
  receiptNumber?: string | null;
  student: Student | string;
  academicYear: AcademicYear | string;
  classRoom: ClassRoom | string;
  feeMonth: number;
  feeYear: number;
  tuitionFee?: number;
  busFee?: number;
  paidAmount: number;
  pendingAmount: number;
  paymentDate?: string | null;
  paymentStatus: string;
  mode?: string | null;
  locked?: boolean;
}

export interface BusStop {
  name: string;
  sequence: number;
  distance: number;
  monthlyFee: number;
}

export interface BusRoute {
  _id: string;
  routeName: string;
  routeCode: string;
  vehicleNumber: string;
  driverName: string;
  driverMobile: string;
  status: 'active' | 'inactive';
  capacity: number;
  feeType: 'stop_based' | 'fixed';
  fixedMonthlyFee: number;
  stops: BusStop[];
  assignedCount?: number;
  availableCapacity?: number;
}

export interface BusRegistration {
  _id: string;
  student: Student | string;
  academicYear: AcademicYear | string;
  route: BusRoute | string;
  stopName: string;
  stopSequence: number;
  monthlyFee: number;
  busService: boolean;
  serviceStartDate: string;
  serviceEndDate?: string;
  status: 'active' | 'inactive';
  createdAt?: string;
}

export interface BusReportRow {
  studentName?: string;
  admissionNumber?: string;
  academicYear?: string;
  className?: string;
  routeName?: string;
  routeCode?: string;
  vehicleNumber?: string;
  stopName?: string;
  monthlyFee?: number;
  busFee?: number;
  paidAmount?: number;
  pendingAmount?: number;
  feeMonth?: string;
  paymentDate?: string | null;
  receiptNumber?: string | null;
  status?: string;
  busService?: boolean;
  serviceStartDate?: string;
  serviceEndDate?: string;
}

export interface DashboardActivity {
  type: 'student_admission' | 'teacher_registration' | 'class_creation' | 'student_status_change' | string;
  description: string;
  performedBy?: string;
  performedAt: string;
  meta?: Record<string, unknown>;
}

export interface DashboardOperationalAnalytics {
  todaysAttendance?: { present: number; absent: number; leave: number; total: number };
  todaysFeeCollection?: number;
  pendingFees?: number;
  busStudents?: number;
  payrollStatus?: {
    month: number;
    year: number;
    total: number;
    paid: number;
    pending: number;
    paidAmount: number;
    pendingAmount: number;
  };
  recentFeeCollections?: Array<{
    studentName: string;
    admissionNumber: string;
    amount: number;
    receiptNumber: string;
    paidAt: string;
    mode: string;
    feeMonth: string;
  }>;
}

export interface DashboardTrendPoint {
  label: string;
  value: number;
}

export interface DashboardTrendSeries {
  metric: string;
  points: DashboardTrendPoint[];
  currentValue: number;
  previousValue: number;
  trend: 'improved' | 'declined' | 'stable';
}

export interface DashboardTrends {
  generatedAt?: string;
  admissions?: DashboardTrendSeries;
  attendance?: DashboardTrendSeries;
  feeCollection?: DashboardTrendSeries;
  payroll?: DashboardTrendSeries;
  promotions?: DashboardTrendSeries;
  busUtilization?: DashboardTrendSeries;
}

export interface DashboardSummary {
  activeYear?: AcademicYear;
  totalStudents?: number;
  activeStudents?: number;
  totalTeachers?: number;
  activeTeachers?: number;
  totalClasses?: number;
  totalSections?: number;
  todaysAdmissions?: number;
  pendingDocuments?: number;
  recentActivities?: DashboardActivity[];
  operational?: DashboardOperationalAnalytics;
  trends?: DashboardTrends;
  /** Scoped count for non-admin roles */
  students?: number;
  teachers?: number;
}

export type ReportDomain = 'students' | 'academic' | 'fees' | 'attendance' | 'payroll' | 'transport' | 'promotions' | 'operations';

export interface PromotionWarning {
  code: string;
  message: string;
}

export interface PromotionEligibleRow {
  studentId: string;
  admissionNumber: string;
  studentName: string;
  eligible: boolean;
  ineligibleReason?: string;
  warnings: PromotionWarning[];
  currentRollNumber?: string;
  currentClass?: string;
}

export interface PromotionPreviewRow {
  studentId: string;
  admissionNumber: string;
  studentName: string;
  included: boolean;
  eligible: boolean;
  ineligibleReason?: string;
  warnings: PromotionWarning[];
  current: {
    academicYear: string;
    classSection: string;
    rollNumber: string;
    monthlyFee: number;
    busAssignment: string;
  };
  proposed: {
    academicYear: string;
    classSection: string;
    rollNumber: string;
    monthlyFee: number;
    busAssignment: string;
  } | null;
}

export interface PromotionPreview {
  fromAcademicYear: string;
  toAcademicYear: string;
  fromClassRoom: string;
  toClassRoom: string;
  rollMode: 'auto' | 'manual';
  rows: PromotionPreviewRow[];
  promotableCount: number;
  warningCount: number;
}

export interface PromotionBatch {
  _id: string;
  status: 'draft' | 'finalized' | 'rolled_back';
  locked: boolean;
  promotedCount: number;
  excludedCount: number;
  rollMode: 'auto' | 'manual';
  fromAcademicYear?: AcademicYear | string;
  toAcademicYear?: AcademicYear | string;
  fromClassRoom?: ClassRoom | string;
  toClassRoom?: ClassRoom | string;
  finalizedAt?: string;
  rolledBackAt?: string;
}
export type ReportRow = Record<string, unknown>;

export type UserRole =
  | 'super_admin'
  | 'admin'
  | 'principal'
  | 'teacher'
  | 'accountant'
  | 'transport_manager'
  | 'reception'
  | 'receptionist'
  | 'student'
  | 'parent'
  | (string & {});

export interface ModulePermissions {
  view?: boolean;
  create?: boolean;
  edit?: boolean;
  delete?: boolean;
  deactivate?: boolean;
  export?: boolean;
  print?: boolean;
  approve?: boolean;
  unlock?: boolean;
}

export interface ErpRole {
  _id: string;
  slug: string;
  name: string;
  description?: string;
  isSystem: boolean;
  permissions: Record<string, ModulePermissions>;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  teacher?: string;
  student?: string;
  linkedStudent?: string;
  linkedStudents?: string[];
  isActive?: boolean;
  permissions?: Record<string, ModulePermissions>;
  mustChangePassword?: boolean;
  isTemporaryPassword?: boolean;
  passwordExpiresAt?: string;
  lockedUntil?: string;
  passwordExpired?: boolean;
  securityPolicy?: {
    session?: { idleTimeoutMinutes?: number };
    password?: { minLength?: number };
  };
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface AttendanceRecord {
  _id: string;
  student: Student | string;
  classRoom: ClassRoom | string;
  academicYear?: AcademicYear | string;
  date: string;
  status: 'present' | 'absent' | 'leave' | 'holiday' | 'late' | 'half_day';
  remarks?: string;
  register?: { workflowStatus?: 'draft' | 'submitted' | 'locked' } | string;
}

export interface AttendanceRegisterSheet {
  register: {
    _id?: string;
    academicYear: string;
    classRoom: string;
    date: string;
    workflowStatus: 'draft' | 'submitted' | 'locked';
  };
  classRoom?: ClassRoom;
  holiday?: { name: string; date: string } | null;
  isSunday?: boolean;
  rows: Array<{
    student: Student;
    status: string;
    remarks?: string;
    recordId?: string | null;
  }>;
  summary: {
    present: number;
    absent: number;
    leave: number;
    holiday: number;
    total: number;
    percentage: number;
  };
}

export interface AttendanceReportRow {
  date?: string;
  studentName?: string;
  admissionNumber?: string;
  className?: string;
  month?: string;
  status?: string;
  remarks?: string;
  present?: number;
  absent?: number;
  leave?: number;
  holiday?: number;
  total?: number;
  percentage?: number;
  studentCount?: number;
}

export interface TimetableRow {
  _id: string;
  classRoom: ClassRoom | string;
  dayOfWeek: string;
  periods: Array<{
    startTime: string;
    endTime: string;
    subject: string;
    teacher: Teacher | string;
    room?: string;
  }>;
}

export interface PayrollRecord {
  _id: string;
  teacher: Teacher | string;
  month: number;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: 'pending' | 'paid';
  paidAt?: string;
  locked?: boolean;
}

export interface WorkflowNotification {
  key: string;
  title: string;
  message: string;
  count: number;
  severity: 'info' | 'warning' | 'danger';
  tab: string;
  action?: string;
}

export interface GlobalSearchResult {
  type: 'student' | 'teacher' | 'receipt' | 'payroll' | 'route' | 'user';
  id: string;
  label: string;
  subtitle: string;
  tab: string;
  meta?: Record<string, string>;
}

export interface ExamQuestion {
  _id?: string;
  text: string;
  type: 'mcq' | 'true_false' | 'short_answer';
  options: string[];
  correctAnswer?: string;
  marks: number;
  difficulty: 'easy' | 'medium' | 'hard';
  chapter?: string;
  explanation?: string;
}

export interface Exam {
  _id: string;
  title: string;
  subject: string;
  chapter: string;
  bookReference?: string;
  additionalContext?: string;
  classRoom: ClassRoom | string;
  academicYear: AcademicYear | string;
  createdBy?: Teacher | string;
  difficulty: 'easy' | 'medium' | 'hard' | 'mixed';
  status: 'draft' | 'published' | 'closed';
  durationMinutes: number;
  totalMarks: number;
  questions: ExamQuestion[];
  scheduledAt?: string;
  closesAt?: string;
  aiGenerated?: boolean;
  questionCount?: number;
  createdAt?: string;
}

export interface ExamSubmission {
  _id: string;
  exam: Exam | string;
  student: Student | string;
  answers: Array<{
    questionId: string;
    answer: string;
    isCorrect?: boolean;
    marksAwarded?: number;
  }>;
  score: number;
  maxScore: number;
  percentage: number;
  grade?: string;
  status: 'in_progress' | 'submitted' | 'graded';
  startedAt?: string;
  submittedAt?: string;
}

export interface ExamClassReport {
  exam: Exam;
  summary: {
    attempted: number;
    averageScore: number;
    passRate: number;
    highestScore: number;
    lowestScore: number;
  };
  submissions: ExamSubmission[];
}

export interface StudentProfile {
  student: Student & { photoUrl?: string | null; admissionDate?: string; updatedAt?: string };
  academic: {
    className: string;
    rollNumber: string;
    classRank?: string | null;
    classTeacher?: Teacher | null;
    academicYear?: AcademicYear | string;
    admissionDate?: string;
    lastUpdated?: string;
  };
  documents?: {
    items: Array<{ _id?: string; type: string; title: string; status: string; verificationStatus?: string; uploadedAt?: string }>;
    mandatoryStatus: { photo: string; birthCertificate: string; overall: string };
  };
  profileCompletion?: number;
  activityTimeline?: Array<{
    action: string;
    description: string;
    performedBy?: string;
    performedAt: string;
    previousStatus?: string;
    newStatus?: string;
    remarks?: string;
    source?: string;
  }>;
  attendance: {
    percentage: number;
    present: number;
    absent: number;
    leave?: number;
    holiday?: number;
    total: number;
    recent: Array<{ date: string; status: string }>;
  };
  academics: {
    averageScore: number;
    examCount: number;
    examResults: Array<{
      title?: string;
      subject?: string;
      chapter?: string;
      score: number;
      maxScore: number;
      percentage: number;
      grade?: string;
      submittedAt?: string;
    }>;
    subjectBreakdown: Array<{ subject: string; average: number; attempts: number }>;
    performanceTrend: Array<{ label: string; score: number }>;
  };
  fees: {
    status: string;
    monthlyFee?: number;
    busFee?: number;
    totalDue: number;
    totalPaid: number;
    pendingAmount?: number;
    lastReceipt?: {
      receiptNumber: string;
      amount: number;
      paidAt: string;
      mode?: string;
      invoiceNumber?: string;
    } | null;
    invoices: Array<{
      invoiceNumber: string;
      status: string;
      balanceAmount: number;
      totalAmount: number;
      tuitionFee?: number;
      busFee?: number;
      dueDate: string;
      feeMonth?: number;
      feeYear?: number;
    }>;
  };
  transport: {
    route: string;
    busStop?: string;
    busNumber: string;
    pickupPoint: string;
    monthlyFee?: number;
    status?: string;
    assigned?: boolean;
    serviceStartDate?: string;
    serviceEndDate?: string;
    driverName?: string;
    driverMobile?: string;
  };
  behavior: { score: string; remarks: string };
}
