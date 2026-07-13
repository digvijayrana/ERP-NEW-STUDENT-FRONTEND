export const APP_CONSTANTS = {
  PAGE_SIZE: 10,
  LOCAL_STORAGE_TOKEN_KEY: 'erp_token',
  LOCAL_STORAGE_USER_KEY: 'erp_user',
  SESSION_ACTIVITY_KEY: 'erp_last_activity',
  DEFAULT_SESSION_IDLE_MINUTES: 30,
  FINANCE_RANGES: [
    { label: '7 days', value: 7 },
    { label: '30 days', value: 30 },
    { label: '1 year', value: 365 }
  ],
  DEFAULT_FINANCE_RANGE_DAYS: 30,
  DEFAULT_SECTION: 'A',
  DEFAULT_CAPACITY: 40,
  DEFAULT_FEE_LABEL: 'Tuition fee',
  DEFAULT_GUARDIAN_RELATION: 'Father',
  PHONE_PATTERN: /^\d{10}$/,
  AADHAAR_PATTERN: /^\d{12}$/,
  AADHAAR_MAX_LENGTH: 12,
  PHONE_MAX_LENGTH: 10,
  MIN_EXAM_QUESTIONS: 3,
  MAX_EXAM_QUESTIONS: 20,
  DEFAULT_EXAM_QUESTION_COUNT: 10,
  DEFAULT_EXAM_DURATION: 60,
  MIN_EXAM_DURATION: 5,
  PASS_PERCENTAGE: 40
};

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  PRINCIPAL: 'principal',
  TEACHER: 'teacher',
  ACCOUNTANT: 'accountant',
  TRANSPORT_MANAGER: 'transport_manager',
  RECEPTION: 'reception',
  RECEPTIONIST: 'receptionist',
  STUDENT: 'student',
  PARENT: 'parent'
} as const;

export const EXAM_DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  MIXED: 'mixed'
} as const;

export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  ABSENT: 'absent',
  LEAVE: 'leave',
  HOLIDAY: 'holiday',
  LATE: 'late',
  HALF_DAY: 'half_day'
} as const;

export const FEE_STATUS = {
  UNPAID: 'unpaid',
  PARTIAL: 'partial',
  PAID: 'paid',
  CANCELLED: 'cancelled'
} as const;

export const PAYROLL_STATUS = {
  PENDING: 'pending',
  PAID: 'paid'
} as const;

export const PAYMENT_MODES = {
  CASH: 'cash',
  UPI: 'upi',
  CARD: 'card',
  BANK_TRANSFER: 'bank_transfer',
  CHEQUE: 'cheque'
} as const;

// Fee structure component presets an admin can add to a class fee structure.
export const FEE_COMPONENT_PRESETS = [
  { key: 'admission', label: 'Admission Fee', frequency: 'one_time', newAdmissionOnly: true },
  { key: 'registration', label: 'Registration Fee', frequency: 'one_time', newAdmissionOnly: false },
  { key: 'tuition', label: 'Tuition Fee', frequency: 'monthly', newAdmissionOnly: false },
  { key: 'bus', label: 'Bus Fee', frequency: 'monthly', newAdmissionOnly: false },
  { key: 'lab', label: 'Lab Fee', frequency: 'monthly', newAdmissionOnly: false }
] as const;

// Billing cadence options for a fee component (also the parent submission frequency).
export const FEE_FREQUENCY_OPTIONS = [
  { value: 'one_time', label: 'One time' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'half_yearly', label: 'Half yearly' },
  { value: 'yearly', label: 'Yearly' }
] as const;

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;

// Selectable class levels and sections used across class configuration.
export const CLASS_NAME_OPTIONS = [
  'Nursery', 'LKG', 'UKG',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
] as const;

export const SECTION_OPTIONS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;

// Subjects a teacher can specialise in (used by the teacher create/edit form).
export const SUBJECT_OPTIONS = [
  'English', 'Hindi', 'Mathematics', 'Science', 'Physics', 'Chemistry',
  'Biology', 'Social Science', 'History', 'Geography', 'Civics', 'Economics',
  'Computer Science', 'Information Technology', 'Physical Education',
  'Environmental Studies', 'General Knowledge', 'Sanskrit', 'Drawing & Art',
  'Music', 'Accountancy', 'Business Studies'
] as const;
