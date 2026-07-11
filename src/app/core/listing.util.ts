export type SortDirection = 'asc' | 'desc';

export interface StoredListState {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortDir?: SortDirection;
  filters?: Record<string, string>;
}

export const LIST_PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;

export const LIST_FILTER_KEYS: Record<string, string[]> = {
  students: ['studentSearch', 'studentClass', 'studentYear', 'studentSection', 'studentStatus', 'studentAdmissionFrom', 'studentAdmissionTo'],
  classes: ['classSearch', 'classYear', 'classStatus'],
  years: ['yearSearch', 'yearStatus'],
  teachers: ['teacherSearch', 'teacherStatus'],
  users: ['userSearch', 'userRole', 'userStatus'],
  invoices: ['invoiceSearch', 'invoiceStatus', 'invoiceYear', 'invoiceClass', 'invoiceMonth'],
  feeHistory: ['feeHistorySearch', 'feeHistoryStatus'],
  payroll: ['payrollSearch', 'payrollStatus'],
  busRoutes: ['busRouteSearch', 'busRouteStatus'],
  busRegistrations: ['busRegYear', 'busRegRoute', 'busRegStatus', 'busRegSearch'],
  profileExams: ['profileExamSearch'],
  profileFees: ['profileFeeSearch', 'profileFeeStatus'],
  attendance: ['attendanceSearch', 'attendanceStatus', 'attendanceClass', 'attendanceYear'],
  exams: ['examSearch', 'examStatus'],
  examResults: ['examResultSearch', 'examResultGrade'],
  timetable: ['timetableSearch'],
  dashboardStudents: ['studentSearch', 'studentClass', 'studentYear', 'studentSection'],
  dashboardAttendance: ['attendanceSearch', 'attendanceStatus', 'attendanceClass', 'attendanceYear'],
  dashboardTeachers: ['teacherSearch', 'teacherStatus'],
  dashboardPayroll: ['payrollSearch', 'payrollStatus'],
  dashboardTimetable: ['timetableSearch'],
  dashboardActivities: []
};

export const DEFAULT_LIST_SORT: Record<string, { field: string; dir: SortDirection }> = {
  students: { field: 'admissionNumber', dir: 'asc' },
  classes: { field: 'class', dir: 'asc' },
  years: { field: 'name', dir: 'asc' },
  teachers: { field: 'name', dir: 'asc' },
  users: { field: 'name', dir: 'asc' },
  invoices: { field: 'dueDate', dir: 'desc' },
  feeHistory: { field: 'paymentDate', dir: 'desc' },
  payroll: { field: 'period', dir: 'desc' },
  busRoutes: { field: 'routeCode', dir: 'asc' },
  busRegistrations: { field: 'studentName', dir: 'asc' },
  attendance: { field: 'date', dir: 'desc' },
  profileExams: { field: 'submittedAt', dir: 'desc' },
  profileFees: { field: 'dueDate', dir: 'desc' },
  exams: { field: 'title', dir: 'asc' },
  examResults: { field: 'percentage', dir: 'desc' },
  timetable: { field: 'dayOfWeek', dir: 'asc' },
  dashboardStudents: { field: 'admissionNumber', dir: 'asc' },
  dashboardAttendance: { field: 'date', dir: 'desc' },
  dashboardTeachers: { field: 'firstName', dir: 'asc' },
  dashboardPayroll: { field: 'period', dir: 'desc' },
  dashboardTimetable: { field: 'dayOfWeek', dir: 'asc' },
  dashboardActivities: { field: 'performedAt', dir: 'desc' }
};

export function applyDefaultListSort(
  listSort: Partial<Record<string, { field: string; dir: SortDirection }>>,
  keys: string[]
): void {
  for (const key of keys) {
    if (!listSort[key] && DEFAULT_LIST_SORT[key]) {
      listSort[key] = { ...DEFAULT_LIST_SORT[key] };
    }
  }
}

export function compareValues(a: unknown, b: unknown): number {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  if (a instanceof Date && b instanceof Date) return a.getTime() - b.getTime();
  return String(a).localeCompare(String(b), undefined, { sensitivity: 'base', numeric: true });
}

export function sortItems<T>(
  items: T[],
  field: string | undefined,
  direction: SortDirection | undefined,
  accessors: Record<string, (item: T) => unknown>
): T[] {
  if (!field || !accessors[field]) return [...items];
  const dir = direction === 'desc' ? -1 : 1;
  return [...items].sort((left, right) => dir * compareValues(accessors[field](left), accessors[field](right)));
}

export function exportRowsToCsv(filename: string, headers: string[], rows: string[][]): void {
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    .join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

export function exportRowsToPdf(title: string, headers: string[], rows: string[][]): void {
  const bodyRows = rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
    .join('');
  const html = `<!DOCTYPE html><html><head><title>${title}</title>
    <style>body{font-family:Arial,sans-serif;padding:24px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px;text-align:left}th{background:#f5f5f5}</style>
    </head><body><h2>${title}</h2><p>Exported ${new Date().toLocaleString()}</p>
    <table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${bodyRows}</tbody></table></body></html>`;
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}
