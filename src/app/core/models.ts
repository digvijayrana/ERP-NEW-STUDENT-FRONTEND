export interface AcademicYear {
  _id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface Teacher {
  _id: string;
  employeeCode: string;
  firstName: string;
  lastName?: string;
  phone: string;
  email?: string;
  qualification?: string;
  baseSalary: number;
  status: 'active' | 'inactive';
}

export interface ClassRoom {
  _id: string;
  name: string;
  section: string;
  monthlyFee: number;
  academicYear: AcademicYear | string;
  classTeacher?: Teacher | string;
}

export interface Student {
  _id: string;
  admissionNumber: string;
  firstName: string;
  lastName?: string;
  gender: string;
  dateOfBirth: string;
  aadhaarNumber?: string;
  status: string;
  guardians: Array<{ name: string; relation: string; phone: string; isPrimary?: boolean }>;
  enrollments: Array<{ academicYear: AcademicYear | string; classRoom: ClassRoom | string; status: string; rollNumber?: string }>;
}

export interface FeeInvoice {
  _id: string;
  invoiceNumber: string;
  student: Student | string;
  dueDate: string;
  items: Array<{ label: string; amount: number }>;
  status: string;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
}

export interface DashboardSummary {
  students: number;
  teachers: number;
  feeCollected: number;
  feeDue: number;
  payrollDue: number;
  rangeDays?: number;
  activeYear?: AcademicYear;
  exams?: number;
  averageExamScore?: number;
  recentExamResults?: ExamSubmission[];
}

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  teacher?: string;
  student?: string;
  linkedStudent?: string;
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
  student: Student & { photoUrl?: string | null; address?: { line1: string; city: string; state: string; pincode: string } };
  academic: {
    className: string;
    rollNumber: string;
    classRank?: string | null;
    classTeacher?: Teacher | null;
    academicYear?: AcademicYear | string;
  };
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
