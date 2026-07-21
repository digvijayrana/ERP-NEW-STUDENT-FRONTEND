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
  middleName?: string;
  lastName?: string;
  phone: string;
  email?: string;
  aadhaarNumber?: string;
  qualification?: string;
  subjects?: string[];
  baseSalary: number;
  status: 'active' | 'inactive';
  experience?: Array<{ instituteName: string; designation: string; fromDate: string; toDate: string; description?: string; document?: { url: string; originalName: string; uploadedAt: string } }>;
  education?: Array<{ instituteName: string; degree: string; fieldOfStudy: string; fromDate: string; toDate: string; grade?: string; document?: { url: string; originalName: string; uploadedAt: string } }>;
  documents?: {
    photo?: { url: string; originalName: string; uploadedAt: string };
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
  feeStructure?: FeeStructure | string;
  status?: 'active' | 'inactive';
  studentCount?: number;
  availableCapacity?: number;
}

export interface Student {
  _id: string;
  admissionNumber: string;
  admissionDate?: string;
  firstName: string;
  middleName?: string;
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
  guardians: Array<{ name: string; relation: string; phone: string; email?: string; isPrimary?: boolean }>;
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
  billingCycle?: string;
  tuitionFee?: number;
  busFee?: number;
  otherCharges?: number;
  previousPending?: number;
  items: Array<{ label: string; amount: number }>;
  feeComponents?: Array<{ key: string; label: string; amount: number }>;
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

export interface FeeSummary {
  totalDemands: number;
  totalCollection: number;
  pendingAmount: number;
  overdueAmount: number;
  todayCollection: number;
  defaultersCount: number;
  totalStudents: number;
  demandsGenerated: number;
  pendingGeneration: number;
  lastGeneratedDate?: string | null;
}

export type FeeRiskCategory = 'low' | 'medium' | 'high' | 'critical';

export interface FeePredictionContact {
  phone?: string;
  email?: string;
  name?: string;
}

export interface FeePredictionRow {
  studentId: string;
  studentName: string;
  admissionNumber?: string;
  classLabel?: string;
  pendingAmount: number;
  overdueAmount: number;
  collectedAmount?: number;
  overdueInvoices: number;
  openInvoices?: number;
  latePaymentProbability: number;
  defaultProbability: number;
  expectedCollection: number;
  riskCategory: FeeRiskCategory;
  avgPaymentLatencyDays?: number;
  maxOverdueDays?: number;
  factors?: string[];
  contact?: FeePredictionContact;
  reminder?: {
    subject: string;
    body: string;
    emailReady: boolean;
    whatsappReady: boolean;
    whatsappUrl?: string | null;
    channels: string[];
  };
}

export interface FeePaymentTrendPoint {
  year: number;
  month: number;
  label: string;
  billed: number;
  collected: number;
  pending: number;
  overdueCount: number;
  collectionRate: number;
}

export interface FeePredictionDashboard {
  generatedAt: string;
  summary: {
    studentsAnalyzed: number;
    studentsWithPending: number;
    latePaymentRiskCount: number;
    defaulterRiskCount: number;
    totalPending: number;
    expectedCollection: number;
    monthlyRevenueForecast: number;
    avgLatePaymentProbability: number;
    avgDefaultProbability: number;
    lastMonthCollected: number;
    lastMonthBilled: number;
    lastMonthCollectionRate: number;
  };
  riskBreakdown: Record<FeeRiskCategory, number>;
  paymentTrend: FeePaymentTrendPoint[];
  highRiskStudents: FeePredictionRow[];
  predictions: FeePredictionRow[];
}

export type FeeFrequency = 'one_time' | 'monthly' | 'quarterly' | 'half_yearly' | 'yearly';

export interface FeeStructureComponent {
  key: string;
  label: string;
  amount: number;
  frequency: FeeFrequency;
  newAdmissionOnly?: boolean;
}

export interface FeeStructure {
  _id?: string;
  academicYear: AcademicYear | string;
  /** Class-level structures are keyed by class name (applies to all sections). */
  className?: string;
  /** Legacy per-section structures (kept for backward compatibility). */
  classRoom?: ClassRoom | string;
  components: FeeStructureComponent[];
  status?: string;
  updatedAt?: string;
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
  vehicle?: Vehicle | string;
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

export interface Vehicle {
  _id: string;
  vehicleNumber: string;
  model?: string;
  type?: 'bus' | 'van' | 'car' | 'other';
  capacity?: number;
  registrationExpiry?: string;
  insuranceExpiry?: string;
  pollutionExpiry?: string;
  fitnessExpiry?: string;
  driverName?: string;
  driverMobile?: string;
  driverAddress?: string;
  licenseNumber?: string;
  licenseExpiry?: string;
  driverSalary?: number;
  joiningDate?: string;
  notes?: string;
  documents?: {
    driverPhoto?: VehicleDocument;
    driverAadhaar?: VehicleDocument;
    driverLicensePhoto?: VehicleDocument;
  };
  status: 'active' | 'inactive';
  createdAt?: string;
  updatedAt?: string;
}

export interface VehicleDocument {
  url?: string;
  storageKey?: string;
  originalName?: string;
  uploadedAt?: string;
}

export interface DriverSalaryPayment {
  _id: string;
  vehicle: Vehicle | string;
  driverName?: string;
  month: number;
  year: number;
  amount: number;
  mode?: string;
  referenceNumber?: string;
  paidOn?: string;
  notes?: string;
  status?: string;
}

export interface DriverSalaryRegisterRow {
  vehicle: string;
  vehicleNumber: string;
  driverName: string;
  driverMobile: string;
  salaryAmount: number;
  status: 'paid' | 'unpaid';
  payment: DriverSalaryPayment | null;
}

export interface DriverSalaryRegister {
  month: number;
  year: number;
  totals: {
    month: number;
    year: number;
    drivers: number;
    paidCount: number;
    unpaidCount: number;
    paidAmount: number;
    pendingAmount: number;
  };
  rows: DriverSalaryRegisterRow[];
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

export interface ParentSearchResult {
  name: string;
  relation?: string;
  phone?: string;
  email?: string;
  parentUserId?: string;
  studentName?: string;
  admissionNumber?: string;
  source?: 'guardian' | 'account';
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
    _id?: string;
    startTime: string;
    endTime: string;
    subject: string;
    teacher: Teacher | string;
    room?: string;
  }>;
  academicYear?: AcademicYear | string;
}

export type TimetableSlotType = 'subject' | 'lab' | 'sports' | 'library' | 'break' | 'free';
export type TimetableFacilityType = 'classroom' | 'lab' | 'sports' | 'library';

export interface TimetablePeriodDef {
  index: number;
  label: string;
  startTime: string;
  endTime: string;
  type: 'teaching' | 'break' | 'assembly';
}

export interface TimetableFacility {
  _id?: string;
  name: string;
  type: TimetableFacilityType;
  capacity?: number;
  availableDays?: string[];
  unavailablePeriods?: number[];
}

export interface TimetablePlanSlot {
  _id: string;
  classRoom: ClassRoom | string;
  classLabel?: string;
  dayOfWeek: string;
  periodIndex: number;
  subject: string;
  teacher?: Teacher | string;
  teacherLabel?: string;
  room?: string;
  facility?: string;
  slotType: TimetableSlotType;
  locked?: boolean;
}

export interface TimetablePlanConflict {
  type: string;
  severity: 'error' | 'warning';
  message: string;
  slotIds?: string[];
  dayOfWeek?: string;
  periodIndex?: number;
}

export interface TimetablePlan {
  _id: string;
  name: string;
  status: 'draft' | 'applied';
  academicYear?: AcademicYear | string;
  workingDays: string[];
  periods: TimetablePeriodDef[];
  facilities: TimetableFacility[];
  teacherAvailability?: Array<{
    teacher: Teacher | string;
    dayOfWeek: string;
    unavailablePeriods: number[];
  }>;
  classroomAvailability?: Array<{
    classRoom: ClassRoom | string;
    dayOfWeek: string;
    unavailablePeriods: number[];
  }>;
  constraints: {
    maxPeriodsPerTeacherPerDay?: number;
    sportsPeriodsPerWeek?: number;
    libraryPeriodsPerWeek?: number;
    defaultSubjectPeriodsPerWeek?: number;
    labPeriodsPerWeek?: number;
    protectBreaks?: boolean;
  };
  slots: TimetablePlanSlot[];
  conflicts: TimetablePlanConflict[];
  unplaced?: Array<{
    classRoom?: ClassRoom | string;
    subject?: string;
    teacher?: Teacher | string;
    slotType?: string;
    reason?: string;
  }>;
  stats?: {
    placed?: number;
    unplaced?: number;
    conflictCount?: number;
    teachingSlots?: number;
    score?: number;
  };
  generatedAt?: string;
  appliedAt?: string;
}

export interface TimetableGeneratorDashboard {
  plan: TimetablePlan | null;
  summary: {
    placed: number;
    unplaced: number;
    conflictCount: number;
    score: number;
    teachingSlots: number;
    facilities: number;
    teachingPeriods: number;
    breakPeriods: number;
    status?: string;
    generatedAt?: string;
    appliedAt?: string;
  };
  conflictsByType: Record<string, number>;
  calendar: {
    days: string[];
    periods: TimetablePeriodDef[];
    cells: TimetablePlanSlot[];
  };
  teachers?: Array<{ _id: string; firstName: string; lastName: string; employeeCode?: string; subjects?: string[] }>;
  classes?: Array<{ _id: string; name: string; section?: string }>;
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
  student: Student & { photoUrl?: string | null; photoDocumentId?: string | null; admissionDate?: string; updatedAt?: string };
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
