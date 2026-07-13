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
  feeHistory: ['feeHistorySearch', 'feeHistoryStatus', 'feeHistoryClass'],
  payroll: ['payrollSearch', 'payrollStatus'],
  busRoutes: ['busRouteSearch', 'busRouteStatus'],
  busRegistrations: ['busRegYear', 'busRegRoute', 'busRegClass', 'busRegStatus', 'busRegSearch'],
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
  // Pull the live theme tokens so the printed document matches the app (teal).
  const css = getComputedStyle(document.documentElement);
  const primary = (css.getPropertyValue('--primary') || '#0d9488').trim();
  const primaryStrong = (css.getPropertyValue('--primary-strong') || '#0f766e').trim();
  const primaryBright = (css.getPropertyValue('--primary-bright') || '#14b8a6').trim();
  const shellDeep = (css.getPropertyValue('--shell-dark-deep') || '#05191d').trim();
  const primarySoft = (css.getPropertyValue('--primary-soft') || '#f0fdfa').trim();
  const schoolName = (document.querySelector('meta[name="app-school-name"]') as HTMLMetaElement | null)?.content
    || document.title
    || 'School ERP';

  const bodyRows = rows
    .map(
      (row, i) =>
        `<tr${i % 2 ? ' class="alt"' : ''}>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
    )
    .join('');

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${title}</title>
    <style>
      *{box-sizing:border-box}
      body{font-family:'Segoe UI',Arial,sans-serif;color:#1e293b;margin:0;padding:0}
      .wrap{padding:28px}
      .doc-header{background:linear-gradient(135deg, ${shellDeep} 0%, ${primaryStrong} 55%, ${primaryBright} 100%);
        color:#fff;padding:20px 24px;border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:space-between}
      .doc-header .brand{font-size:20px;font-weight:800;letter-spacing:.4px;text-transform:uppercase}
      .doc-header .meta{font-size:11px;color:${primarySoft};text-align:right}
      .accent{height:4px;background:${primaryBright};border-radius:0}
      .title-bar{padding:14px 24px;background:${primarySoft};border-left:4px solid ${primary};
        margin:0;border-bottom:1px solid #e2e8f0}
      .title-bar h2{margin:0;font-size:15px;color:${primaryStrong};text-transform:uppercase;letter-spacing:.5px}
      .title-bar p{margin:2px 0 0;font-size:11px;color:#64748b}
      table{width:100%;border-collapse:collapse;margin:0}
      thead th{background:linear-gradient(135deg, ${primaryStrong}, ${primaryBright});color:#fff;
        padding:10px 12px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.4px}
      tbody td{border-bottom:1px solid #e2e8f0;padding:9px 12px;font-size:12px}
      tbody tr.alt td{background:${primarySoft}}
      .foot{margin-top:16px;padding-top:10px;border-top:2px solid ${primary};font-size:10px;color:#64748b;text-align:center}
      @media print{.wrap{padding:0}.doc-header{border-radius:0}}
    </style>
    </head><body><div class="wrap">
      <div class="doc-header">
        <span class="brand">${schoolName}</span>
        <span class="meta">${title}<br>Exported ${new Date().toLocaleString()}</span>
      </div>
      <div class="accent"></div>
      <div class="title-bar"><h2>${title}</h2><p>${rows.length} record(s)</p></div>
      <table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${bodyRows}</tbody></table>
      <p class="foot">${schoolName} &middot; System-generated report</p>
    </div></body></html>`;
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}
