export interface PaginationMeta {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
  pagination?: PaginationMeta;
}

export interface ApiFieldError {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  code?: string;
  errors?: ApiFieldError[];
  details?: Record<string, unknown>;
  requestId?: string;
}

export interface ListQueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  sortField?: string;
  sortDir?: 'asc' | 'desc';
  status?: string;
  classRoom?: string;
  academicYear?: string;
  section?: string;
  admissionFrom?: string;
  admissionTo?: string;
  role?: string;
  classYear?: string;
  classStatus?: string;
  yearStatus?: string;
  teacherStatus?: string;
  userRole?: string;
  userStatus?: string;
}

export function extractApiMessage(error: unknown, fallback = 'Something went wrong'): string {
  const body = (error as { error?: ApiErrorResponse })?.error;
  if (body?.errors?.length) return body.errors.map((e) => e.message).join('. ');
  return body?.message || fallback;
}

export function isPaginatedResponse<T>(value: unknown): value is ApiSuccessResponse<T[]> {
  return !!value && typeof value === 'object' && (value as ApiSuccessResponse<T[]>).success === true && 'data' in value;
}

export function unwrapListData<T>(value: T[] | ApiSuccessResponse<T[]>): T[] {
  if (Array.isArray(value)) return value;
  if (isPaginatedResponse<T>(value)) return value.data;
  return [];
}
