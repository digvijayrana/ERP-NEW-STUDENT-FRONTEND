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

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
] as const;
