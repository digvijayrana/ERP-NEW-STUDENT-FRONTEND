export type SortDirection = 'asc' | 'desc';

export interface StoredListState {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortDir?: SortDirection;
  filters?: Record<string, string>;
}

export const LIST_PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;

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

export const LIST_FILTER_KEYS: Record<string, string[]> = {
  students: ['studentSearch', 'studentClass', 'studentYear', 'studentSection', 'studentStatus', 'studentAdmissionFrom', 'studentAdmissionTo'],
  classes: ['classSearch', 'classYear', 'classStatus'],
  years: ['yearSearch', 'yearStatus'],
  teachers: ['teacherSearch', 'teacherStatus'],
  users: ['userSearch', 'userRole', 'userStatus']
};
