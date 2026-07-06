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

export interface FeeInvoice {
  _id: string;
  invoiceNumber: string;
  student: Student | string;
  classRoom: ClassRoom | string;
  academicYear: AcademicYear | string;
  dueDate: string;
  items: Array<{ label: string; amount: number }>;
  discount: number;
  fine: number;
  payments: Array<{ amount: number; mode: string; date: string }>;
  status: string;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  createdAt?: string;
}

export interface DashboardActivity {
  type: 'student_admission' | 'teacher_registration' | 'class_creation' | 'student_status_change';
  description: string;
  performedBy?: string;
  performedAt: string;
  meta?: Record<string, unknown>;
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
  /** Scoped count for non-admin roles */
  students?: number;
  teachers?: number;
}

export type UserRole = 'super_admin' | 'admin' | 'teacher' | 'reception' | 'accountant' | 'student' | 'parent';

export interface ModulePermissions {
  view?: boolean;
  create?: boolean;
  edit?: boolean;
  deactivate?: boolean;
  export?: boolean;
  approve?: boolean;
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
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface AttendanceRecord {
  _id: string;
  student: Student | string;
  classRoom: ClassRoom | string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'half_day';
  remarks?: string;
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

export interface StudentAiInsights {
  performanceRating: string;
  ratingScore: number;
  summary: string;
  strengths: string[];
  needsWork: string[];
  recommendations: string[];
  focusSubjects: string[];
  parentAdvice: string;
  provider?: string;
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
  activityTimeline?: Array<{ action: string; description: string; performedBy?: string; performedAt: string }>;
  attendance: {
    percentage: number;
    present: number;
    absent: number;
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
    totalDue: number;
    totalPaid: number;
    invoices: Array<{ invoiceNumber: string; status: string; balanceAmount: number; totalAmount: number; dueDate: string }>;
  };
  transport: { route: string; busNumber: string; pickupPoint: string };
  behavior: { score: string; remarks: string };
  aiInsights: StudentAiInsights;
}
