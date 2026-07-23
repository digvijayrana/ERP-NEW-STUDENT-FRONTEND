import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { APP_CONSTANTS } from '../core/constants';
import { ApiSuccessResponse, ListQueryParams } from '../core/api-response';
import {
  AcademicYear,
  AttendanceRecord,
  AttendanceRegisterSheet,
  AttendanceReportRow,
  AuthResponse,
  AuthUser,
  ClassRoom,
  DashboardSummary,
  Exam,
  ExamClassReport,
  ErpRole,
  ExamSubmission,
  FeeInvoice,
  FeeHistoryRow,
  FeeStructure,
  BusRoute,
  Vehicle,
  DriverSalaryPayment,
  DriverSalaryRegister,
  BusRegistration,
  BusReportRow,
  PayrollRecord,
  PayrollPreview,
  GlobalSearchResult,
  WorkflowNotification,
  ReportDomain,
  ReportRow,
  ParentSearchResult,
  Student,
  StudentProfile,
  Teacher,
  TimetableRow
} from '../core/models';

/** Resolve API base URL — same-origin /api when UI is served with API proxy; else environment.apiBaseUrl */
export function resolveApiBaseUrl(): string {
  if (typeof window === 'undefined') return environment.apiBaseUrl;
  const host = window.location.hostname.toLowerCase();
  const port = window.location.port;
  const root = (environment as { rootDomain?: string }).rootDomain || 'localhost';

  // Angular `ng serve` (any host / tenant subdomain) → call backend directly.
  // Same-origin `/api/*` has no proxy on the Vite/Webpack dev server and returns HTTP 405 on POST/PATCH.
  if (port === '4200' || port === '4201') {
    return environment.apiBaseUrl.includes('localhost')
      ? environment.apiBaseUrl
      : 'http://localhost:5000/api';
  }

  // Vercel static hosting — use absolute API from environment.prod (or /api rewrite after deploy)
  if (host.endsWith('.vercel.app')) {
    return environment.apiBaseUrl;
  }

  // Docker SPA ports (UI nginx proxies /api → erp-api)
  if (port === '8081' || host === 'admin.localhost' || host === 'admin.schoolerp.local' || host.startsWith('admin.')) {
    return '/api/admin';
  }
  if (
    port === '8080' ||
    host === root ||
    host.endsWith(`.${root}`) ||
    host.endsWith('.schoolerp.local') ||
    host.endsWith('.localhost') ||
    host.endsWith('.myerp.com')
  ) {
    return '/api/erp';
  }
  return environment.apiBaseUrl;
}

@Injectable({ providedIn: 'root' })
export class ErpApiService {
  constructor(private readonly http: HttpClient) {}

  private get baseUrl(): string {
    return resolveApiBaseUrl();
  }

  schoolBranding(): Observable<{
    slug: string;
    name: string;
    logoUrl?: string;
    website?: string;
    host?: string;
    isAdmin?: boolean;
    status?: string;
  }> {
    return this.http.get<{
      slug: string;
      name: string;
      logoUrl?: string;
      website?: string;
      host?: string;
      isAdmin?: boolean;
      status?: string;
    }>(`${this.baseUrl}/public/branding`);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, { email, password });
  }

  logout(): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/auth/logout`, {}, this.options());
  }

  securityPolicy(): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/auth/security-policy`);
  }

  changePassword(currentPassword: string, newPassword: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/change-password`, { currentPassword, newPassword }, this.options());
  }

  verifyEmail(token: string, password?: string): Observable<{ verified: boolean; passwordSet: boolean; email: string }> {
    return this.http.post<{ verified: boolean; passwordSet: boolean; email: string }>(
      `${this.baseUrl}/auth/verify-email`, { token, password });
  }

  resendVerification(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/auth/resend-verification`, { email });
  }

  forgotPassword(email: string): Observable<{ message: string; expiresInMinutes?: number; emailSent?: boolean; devOtp?: string }> {
    return this.http.post<{ message: string; expiresInMinutes?: number; emailSent?: boolean; devOtp?: string }>(
      `${this.baseUrl}/auth/forgot-password`, { email });
  }

  verifyResetOtp(email: string, otp: string): Observable<{ valid: boolean; message?: string }> {
    return this.http.post<{ valid: boolean; message?: string }>(`${this.baseUrl}/auth/verify-reset-otp`, { email, otp });
  }

  resetPassword(email: string, otp: string, password: string): Observable<{ reset: boolean }> {
    return this.http.post<{ reset: boolean }>(`${this.baseUrl}/auth/reset-password`, { email, otp, password });
  }

  assignableRoles(): Observable<Array<{ slug: string; name: string }>> {
    return this.http.get<Array<{ slug: string; name: string }>>(`${this.baseUrl}/auth/assignable-roles`, this.options());
  }

  createUser(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/auth/users`, payload, this.options());
  }

  dashboard(): Observable<DashboardSummary> {
    return this.http.get<DashboardSummary>(`${this.baseUrl}/dashboard`, this.options());
  }

  academicYears(params?: ListQueryParams): Observable<ApiSuccessResponse<AcademicYear[]>> {
    return this.http.get<ApiSuccessResponse<AcademicYear[]>>(`${this.baseUrl}/academic-years`, this.listOptions(params));
  }

  createAcademicYear(payload: Partial<AcademicYear>): Observable<AcademicYear> {
    return this.http.post<AcademicYear>(`${this.baseUrl}/academic-years`, payload, this.options());
  }

  updateAcademicYear(id: string, payload: Partial<AcademicYear>): Observable<AcademicYear> {
    return this.http.patch<AcademicYear>(`${this.baseUrl}/academic-years/${id}`, payload, this.options());
  }

  activateAcademicYear(id: string): Observable<AcademicYear> {
    return this.http.post<AcademicYear>(`${this.baseUrl}/academic-years/${id}/activate`, {}, this.options());
  }

  closeAcademicYear(id: string): Observable<AcademicYear> {
    return this.http.post<AcademicYear>(`${this.baseUrl}/academic-years/${id}/close`, {}, this.options());
  }

  deleteAcademicYear(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/academic-years/${id}`, this.options());
  }

  classes(params?: ListQueryParams): Observable<ApiSuccessResponse<ClassRoom[]>> {
    return this.http.get<ApiSuccessResponse<ClassRoom[]>>(`${this.baseUrl}/classes`, this.listOptions(params));
  }

  createClass(payload: Record<string, unknown>): Observable<ClassRoom> {
    return this.http.post<ClassRoom>(`${this.baseUrl}/classes`, payload, this.options());
  }

  updateClass(id: string, payload: Record<string, unknown>): Observable<ClassRoom> {
    return this.http.patch<ClassRoom>(`${this.baseUrl}/classes/${id}`, payload, this.options());
  }

  deleteClass(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/classes/${id}`, this.options());
  }

  toggleClassStatus(id: string): Observable<ClassRoom> {
    return this.http.post<ClassRoom>(`${this.baseUrl}/classes/${id}/toggle-status`, {}, this.options());
  }

  teachers(params?: ListQueryParams): Observable<ApiSuccessResponse<Teacher[]>> {
    return this.http.get<ApiSuccessResponse<Teacher[]>>(`${this.baseUrl}/teachers`, this.listOptions(params));
  }

  createTeacher(payload: Record<string, unknown>): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.baseUrl}/teachers`, payload, this.options());
  }

  updateTeacher(id: string, payload: Record<string, unknown>): Observable<Teacher> {
    return this.http.patch<Teacher>(`${this.baseUrl}/teachers/${id}`, payload, this.options());
  }

  deleteTeacher(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/teachers/${id}`, this.options());
  }

  uploadTeacherDocument(teacherId: string, file: File, type: string): Observable<unknown> {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('type', type);
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return this.http.post(`${this.baseUrl}/teachers/${teacherId}/documents`, formData, {
      headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders()
    });
  }

  selfUpdateTeacher(payload: Record<string, unknown>): Observable<Teacher> {
    return this.http.patch<Teacher>(`${this.baseUrl}/teachers/self`, payload, this.options());
  }

  selfUploadTeacherDocument(file: File, type: string): Observable<unknown> {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('type', type);
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return this.http.post(`${this.baseUrl}/teachers/self/documents`, formData, {
      headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders()
    });
  }

  verifyTeacherDocument(teacherId: string, docType: string, action: string, reason?: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/teachers/${teacherId}/verify-document`, { docType, action, reason }, this.options());
  }

  verifyStudentDocument(studentId: string, documentId: string, action: string, reason?: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/students/${studentId}/verify-document`, { documentId, action, reason }, this.options());
  }

  getStudentDocumentUrl(studentId: string, documentId: string): Observable<{ url: string; fileName?: string; mimeType?: string }> {
    return this.http.get<{ url: string; fileName?: string; mimeType?: string }>(`${this.baseUrl}/students/${studentId}/documents/${documentId}/url`, this.options());
  }

  studentDocumentFileUrl(studentId: string, documentId: string, download = false): string {
    const suffix = download ? '?download=1' : '';
    return `${this.baseUrl}/students/${studentId}/documents/${documentId}/file${suffix}`;
  }

  // Authenticated image URL usable directly in <img src> (token via query param).
  studentDocumentImageUrl(studentId: string, documentId: string): string {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return `${this.baseUrl}/students/${studentId}/documents/${documentId}/file?access_token=${encodeURIComponent(token)}`;
  }

  teacherDocumentFileUrl(teacherId: string, docType: string, download = false): string {
    const suffix = download ? '?download=1' : '';
    return `${this.baseUrl}/teachers/${teacherId}/documents/${docType}/file${suffix}`;
  }

  // Authenticated image URL usable directly in <img src> (token via query param).
  teacherDocumentImageUrl(teacherId: string, docType: string): string {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return `${this.baseUrl}/teachers/${teacherId}/documents/${docType}/file?access_token=${encodeURIComponent(token)}`;
  }

  getTeacherDocumentUrl(teacherId: string, docType: string): Observable<{ url: string }> {
    return this.http.get<{ url: string }>(`${this.baseUrl}/teachers/${teacherId}/documents/${docType}/url`, this.options());
  }

  teacherEntryDocumentFileUrl(teacherId: string, section: 'experience' | 'education', index: number, download = false): string {
    const suffix = download ? '?download=1' : '';
    return `${this.baseUrl}/teachers/${teacherId}/entries/${section}/${index}/file${suffix}`;
  }

  students(params?: ListQueryParams): Observable<ApiSuccessResponse<Student[]>> {
    return this.http.get<ApiSuccessResponse<Student[]>>(`${this.baseUrl}/students`, this.listOptions(params));
  }

  studentDetails(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/${id}`, this.options());
  }

  searchParents(term: string): Observable<ApiSuccessResponse<ParentSearchResult[]>> {
    const params = new HttpParams().set('q', term || '');
    return this.http.get<ApiSuccessResponse<ParentSearchResult[]>>(
      `${this.baseUrl}/students/parents/search`,
      { ...this.options(), params }
    );
  }

  studentProfile(id: string): Observable<StudentProfile> {
    return this.http.get<StudentProfile>(`${this.baseUrl}/students/${id}/profile`, this.options());
  }

  createAdmission(formData: FormData): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students/admissions`, formData, this.options());
  }

  updateStudent(id: string, payload: Record<string, unknown>): Observable<Student> {
    return this.http.patch<Student>(`${this.baseUrl}/students/${id}`, payload, this.options());
  }

  updateStudentStatus(id: string, status: string, reason?: string): Observable<Student> {
    return this.http.patch<Student>(`${this.baseUrl}/students/${id}/status`, { status, reason }, this.options());
  }

  replaceStudentDocument(studentId: string, documentId: string, formData: FormData): Observable<unknown> {
    return this.http.put(`${this.baseUrl}/students/${studentId}/documents/${documentId}`, formData, this.options());
  }

  deleteStudentDocument(studentId: string, documentId: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/students/${studentId}/documents/${documentId}`, this.options());
  }

  deleteStudent(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/students/${id}`, this.options());
  }

  promote(payload: Record<string, unknown>): Observable<{ promoted: number; batchId?: string }> {
    return this.http.post<{ promoted: number; batchId?: string }>(`${this.baseUrl}/students/promotions`, payload, this.options());
  }

  promotionEligible(params: Record<string, string>): Observable<{ rows: import('../core/models').PromotionEligibleRow[]; total: number }> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<{ rows: import('../core/models').PromotionEligibleRow[]; total: number }>(
      `${this.baseUrl}/promotions/eligible`,
      { ...this.options(), params: httpParams }
    );
  }

  promotionPreview(payload: Record<string, unknown>): Observable<import('../core/models').PromotionPreview> {
    return this.http.post<import('../core/models').PromotionPreview>(`${this.baseUrl}/promotions/preview`, payload, this.options());
  }

  promotionExecute(payload: Record<string, unknown>): Observable<import('../core/models').PromotionBatch> {
    return this.http.post<import('../core/models').PromotionBatch>(`${this.baseUrl}/promotions/execute`, payload, this.options());
  }

  promotionRollback(batchId: string): Observable<import('../core/models').PromotionBatch> {
    return this.http.post<import('../core/models').PromotionBatch>(`${this.baseUrl}/promotions/batches/${batchId}/rollback`, {}, this.options());
  }

  promotionFinalize(batchId: string): Observable<import('../core/models').PromotionBatch> {
    return this.http.post<import('../core/models').PromotionBatch>(`${this.baseUrl}/promotions/batches/${batchId}/finalize`, {}, this.options());
  }

  promotionReport(type: string, params?: Record<string, string>): Observable<{ type: string; rows: ReportRow[]; total: number }> {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value) httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get<{ type: string; rows: ReportRow[]; total: number }>(
      `${this.baseUrl}/promotions/reports/${type}`,
      { ...this.options(), params: httpParams }
    );
  }

  invoices(params?: ListQueryParams): Observable<ApiSuccessResponse<FeeInvoice[]>> {
    return this.http.get<ApiSuccessResponse<FeeInvoice[]>>(`${this.baseUrl}/fees/invoices`, this.listOptions(params));
  }

  feeSummary(params?: Record<string, string>): Observable<import('../core/models').FeeSummary> {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value) httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get<import('../core/models').FeeSummary>(`${this.baseUrl}/fees/summary`, { ...this.options(), params: httpParams });
  }

  feePredictionDashboard(params?: Record<string, string>): Observable<import('../core/models').FeePredictionDashboard> {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value) httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get<import('../core/models').FeePredictionDashboard>(`${this.baseUrl}/fee-predictions/dashboard`, {
      ...this.options(),
      params: httpParams
    });
  }

  prepareFeeReminders(studentIds: string[]): Observable<{ count: number; reminders: import('../core/models').FeePredictionRow[] }> {
    return this.http.post<{ count: number; reminders: import('../core/models').FeePredictionRow[] }>(
      `${this.baseUrl}/fee-predictions/reminders/prepare`,
      { studentIds },
      this.options()
    );
  }

  sendFeeReminders(
    studentIds: string[],
    channel: 'email' | 'whatsapp' | 'all' = 'all'
  ): Observable<{ channel: string; sent: number; whatsappReady: number; results: Array<Record<string, unknown>> }> {
    return this.http.post<{ channel: string; sent: number; whatsappReady: number; results: Array<Record<string, unknown>> }>(
      `${this.baseUrl}/fee-predictions/reminders/send`,
      { studentIds, channel },
      this.options()
    );
  }

  timetableGeneratorDashboard(params?: Record<string, string>): Observable<import('../core/models').TimetableGeneratorDashboard> {
    let httpParams = new HttpParams();
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value) httpParams = httpParams.set(key, value);
      }
    }
    return this.http.get<import('../core/models').TimetableGeneratorDashboard>(`${this.baseUrl}/timetable-generator/dashboard`, {
      ...this.options(),
      params: httpParams
    });
  }

  generateTimetable(body?: {
    academicYear?: string;
    classRoomIds?: string[];
    planId?: string;
  }): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/generate`,
      body || {},
      this.options()
    );
  }

  updateTimetablePlanConfig(
    planId: string,
    body: Partial<import('../core/models').TimetablePlan>
  ): Observable<import('../core/models').TimetablePlan> {
    return this.http.put<import('../core/models').TimetablePlan>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/config`,
      body,
      this.options()
    );
  }

  validateTimetablePlan(planId: string): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/validate`,
      {},
      this.options()
    );
  }

  moveTimetableSlot(
    planId: string,
    body: { slotId: string; targetDay: string; targetPeriodIndex: number; swap?: boolean }
  ): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/move`,
      body,
      this.options()
    );
  }

  updateTimetableSlot(
    planId: string,
    slotId: string,
    body: { subject?: string; teacher?: string | null; room?: string; slotType?: string }
  ): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.patch<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/slots/${slotId}`,
      body,
      this.options()
    );
  }

  assignTimetableSlot(
    planId: string,
    body: {
      classRoom: string;
      dayOfWeek: string;
      periodIndex: number;
      subject: string;
      teacher: string;
      room?: string;
      slotType?: string;
    }
  ): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/slots`,
      body,
      this.options()
    );
  }

  reopenTimetablePlanForEdit(planId: string): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/reopen`,
      {},
      this.options()
    );
  }

  resetTimetablePlan(
    planId: string,
    classRoom: string
  ): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/reset`,
      { classRoom },
      this.options()
    );
  }

  applyTimetablePlan(planId: string): Observable<import('../core/models').TimetableGeneratorDashboard> {
    return this.http.post<import('../core/models').TimetableGeneratorDashboard>(
      `${this.baseUrl}/timetable-generator/plans/${planId}/apply`,
      {},
      this.options()
    );
  }

  timetablePlanPdfUrl(planId: string, classRoom?: string): string {
    const q = classRoom ? `?classRoom=${encodeURIComponent(classRoom)}` : '';
    return `${this.baseUrl}/timetable-generator/plans/${planId}/pdf${q}`;
  }

  generateFeeDemands(payload: Record<string, unknown>): Observable<{ created: number; skipped: number }> {
    return this.http.post<{ created: number; skipped: number }>(`${this.baseUrl}/fees/demands/generate`, payload, this.options());
  }

  feeStructureForClass(
    academicYear: string,
    target: { className?: string; classRoom?: string } | string
  ): Observable<FeeStructure | null> {
    // Backward compatible: a bare string is treated as a classRoom id.
    const params = typeof target === 'string' ? { classRoom: target } : target;
    let httpParams = new HttpParams().set('academicYear', academicYear);
    if (params.className) httpParams = httpParams.set('className', params.className);
    if (params.classRoom) httpParams = httpParams.set('classRoom', params.classRoom);
    return this.http.get<FeeStructure | null>(`${this.baseUrl}/fees/structures/for-class`, { ...this.options(), params: httpParams });
  }

  listFeeStructures(params?: { academicYear?: string; className?: string }): Observable<FeeStructure[]> {
    let httpParams = new HttpParams();
    if (params?.academicYear) httpParams = httpParams.set('academicYear', params.academicYear);
    if (params?.className) httpParams = httpParams.set('className', params.className);
    return this.http.get<FeeStructure[]>(`${this.baseUrl}/fees/structures`, { ...this.options(), params: httpParams });
  }

  saveFeeStructure(payload: Record<string, unknown>): Observable<FeeStructure> {
    return this.http.put<FeeStructure>(`${this.baseUrl}/fees/structures`, payload, this.options());
  }

  deleteFeeStructure(id: string): Observable<{ deleted: boolean }> {
    return this.http.delete<{ deleted: boolean }>(`${this.baseUrl}/fees/structures/${id}`, this.options());
  }

  previewFeeDemand(params: Record<string, string>): Observable<Record<string, unknown>> {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value) httpParams = httpParams.set(key, value);
    }
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/fees/invoices/preview`, { ...this.options(), params: httpParams });
  }

  feeHistory(params?: ListQueryParams): Observable<ApiSuccessResponse<FeeHistoryRow[]>> {
    return this.http.get<ApiSuccessResponse<FeeHistoryRow[]>>(`${this.baseUrl}/fees/history`, this.listOptions(params));
  }

  createInvoice(payload: Record<string, unknown>): Observable<FeeInvoice> {
    return this.http.post<FeeInvoice>(`${this.baseUrl}/fees/invoices`, payload, this.options());
  }

  updateInvoice(id: string, payload: Record<string, unknown>): Observable<FeeInvoice> {
    return this.http.patch<FeeInvoice>(`${this.baseUrl}/fees/invoices/${id}`, payload, this.options());
  }

  invoicePdfUrl(id: string): string {
    return `${this.baseUrl}/fees/invoices/${id}/pdf`;
  }

  receiptPdfUrl(invoiceId: string, paymentId: string): string {
    return `${this.baseUrl}/fees/invoices/${invoiceId}/receipts/${paymentId}/pdf`;
  }

  addPayment(invoiceId: string, payload: Record<string, unknown>): Observable<FeeInvoice> {
    return this.http.post<FeeInvoice>(`${this.baseUrl}/fees/invoices/${invoiceId}/payments`, payload, this.options());
  }

  voidFeePayment(invoiceId: string, paymentId: string, reason?: string): Observable<FeeInvoice> {
    return this.http.post<FeeInvoice>(`${this.baseUrl}/fees/invoices/${invoiceId}/payments/${paymentId}/void`, { reason }, this.options());
  }

  unlockFeePayment(invoiceId: string, paymentId: string): Observable<FeeInvoice> {
    return this.http.post<FeeInvoice>(`${this.baseUrl}/fees/invoices/${invoiceId}/payments/${paymentId}/unlock`, {}, this.options());
  }

  previewPayroll(teacher: string, month: number, year: number): Observable<PayrollPreview> {
    return this.http.post<PayrollPreview>(
      `${this.baseUrl}/payroll/preview`,
      { teacher, month, year },
      this.options()
    );
  }

  createPayroll(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/payroll`, payload, this.options());
  }

  updatePayroll(id: string, payload: Record<string, unknown>): Observable<PayrollRecord> {
    return this.http.patch<PayrollRecord>(`${this.baseUrl}/payroll/${id}`, payload, this.options());
  }

  deletePayroll(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/payroll/${id}`, this.options());
  }

  markPayrollPaid(id: string): Observable<PayrollRecord> {
    return this.http.post<PayrollRecord>(`${this.baseUrl}/payroll/${id}/mark-paid`, {}, this.options());
  }

  payroll(params?: ListQueryParams): Observable<ApiSuccessResponse<PayrollRecord[]>> {
    return this.http.get<ApiSuccessResponse<PayrollRecord[]>>(`${this.baseUrl}/payroll`, this.listOptions(params));
  }

  payrollPdfUrl(id: string): string {
    return `${this.baseUrl}/payroll/${id}/pdf`;
  }

  attendance(params?: ListQueryParams): Observable<ApiSuccessResponse<AttendanceRecord[]>> {
    return this.http.get<ApiSuccessResponse<AttendanceRecord[]>>(`${this.baseUrl}/attendance`, this.listOptions(params));
  }

  markAttendance(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/attendance/mark`, payload, this.options());
  }

  selfAttendanceStatus(): Observable<{ marked: boolean; status: string | null }> {
    return this.http.get<{ marked: boolean; status: string | null }>(`${this.baseUrl}/attendance/self-status`, this.options());
  }

  selfMarkAttendance(status = 'present'): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/attendance/self-mark`, { status }, this.options());
  }

  attendanceRegister(params: Record<string, string>): Observable<AttendanceRegisterSheet> {
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value) httpParams = httpParams.set(key, value);
    });
    return this.http.get<AttendanceRegisterSheet>(`${this.baseUrl}/attendance/register`, { ...this.options(), params: httpParams });
  }

  saveAttendanceRegister(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/attendance/register/save`, payload, this.options());
  }

  submitAttendanceRegister(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/attendance/register/submit`, payload, this.options());
  }

  lockAttendanceRegister(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/attendance/register/lock`, payload, this.options());
  }

  unlockAttendanceRegister(payload: Record<string, unknown>): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/attendance/register/unlock`, payload, this.options());
  }

  attendanceReport(type: string, params?: Record<string, string>): Observable<{ type: string; rows: AttendanceReportRow[]; total: number }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) httpParams = httpParams.set(key, value);
      });
    }
    return this.http.get<{ type: string; rows: AttendanceReportRow[]; total: number }>(`${this.baseUrl}/attendance/reports/${type}`, { ...this.options(), params: httpParams });
  }

  attendanceReportPdfUrl(type: string, params?: Record<string, string>): string {
    const query = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}/attendance/reports/${type}/pdf${query ? `?${query}` : ''}`;
  }

  timetable(): Observable<TimetableRow[]> {
    return this.http.get<TimetableRow[]>(`${this.baseUrl}/timetable`, this.options());
  }

  saveTimetable(payload: Record<string, unknown>): Observable<TimetableRow> {
    return this.http.post<TimetableRow>(`${this.baseUrl}/timetable`, payload, this.options());
  }

  deleteTimetablePeriod(timetableId: string, periodId: string): Observable<TimetableRow> {
    return this.http.delete<TimetableRow>(`${this.baseUrl}/timetable/${timetableId}/periods/${periodId}`, this.options());
  }

  exams(params?: ListQueryParams): Observable<ApiSuccessResponse<Exam[]>> {
    return this.http.get<ApiSuccessResponse<Exam[]>>(`${this.baseUrl}/exams`, this.listOptions(params));
  }

  examDetails(id: string): Observable<Exam> {
    return this.http.get<Exam>(`${this.baseUrl}/exams/${id}`, this.options());
  }

  generateExam(payload: Record<string, unknown>): Observable<Exam> {
    return this.http.post<Exam>(`${this.baseUrl}/exams/generate`, payload, this.options());
  }

  generateExamFromPdf(formData: FormData): Observable<Exam> {
    return this.http.post<Exam>(`${this.baseUrl}/exams/generate-from-pdf`, formData, this.options());
  }

  updateExam(id: string, payload: Record<string, unknown>): Observable<Exam> {
    return this.http.patch<Exam>(`${this.baseUrl}/exams/${id}`, payload, this.options());
  }

  publishExam(id: string, payload: Record<string, unknown> = {}): Observable<Exam> {
    return this.http.post<Exam>(`${this.baseUrl}/exams/${id}/publish`, payload, this.options());
  }

  closeExam(id: string): Observable<Exam> {
    return this.http.post<Exam>(`${this.baseUrl}/exams/${id}/close`, {}, this.options());
  }

  deleteExam(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/exams/${id}`, this.options());
  }

  startExamAttempt(id: string): Observable<{ submission: ExamSubmission; exam: Exam }> {
    return this.http.post<{ submission: ExamSubmission; exam: Exam }>(`${this.baseUrl}/exams/${id}/start`, {}, this.options());
  }

  submitExamAttempt(id: string, answers: Array<{ questionId: string; answer: string }>): Observable<ExamSubmission> {
    return this.http.post<ExamSubmission>(`${this.baseUrl}/exams/${id}/submit`, { answers }, this.options());
  }

  examResults(examId?: string): Observable<ExamSubmission[]> {
    const query = examId ? `?exam=${examId}` : '';
    return this.http.get<ExamSubmission[]>(`${this.baseUrl}/exams/results${query}`, this.options());
  }

  examClassReport(id: string): Observable<ExamClassReport> {
    return this.http.get<ExamClassReport>(`${this.baseUrl}/exams/${id}/report`, this.options());
  }

  listUsers(params?: ListQueryParams): Observable<ApiSuccessResponse<unknown[]>> {
    return this.http.get<ApiSuccessResponse<unknown[]>>(`${this.baseUrl}/auth/users`, this.listOptions(params));
  }

  deactivateUser(id: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/auth/users/${id}/deactivate`, {}, this.options());
  }

  issueTemporaryPassword(id: string): Observable<{ temporaryPassword: string; user: AuthUser }> {
    return this.http.post<{ temporaryPassword: string; user: AuthUser }>(`${this.baseUrl}/auth/users/${id}/temporary-password`, {}, this.options());
  }

  unlockUserAccount(id: string): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.baseUrl}/auth/users/${id}/unlock`, {}, this.options());
  }

  deleteUser(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/auth/users/${id}`, this.options());
  }

  roles(): Observable<ErpRole[]> {
    return this.http.get<ErpRole[]>(`${this.baseUrl}/roles`, this.options());
  }

  rolePermissionSchema(): Observable<{ modules: string[]; actions: string[] }> {
    return this.http.get<{ modules: string[]; actions: string[] }>(`${this.baseUrl}/roles/schema`, this.options());
  }

  createRole(payload: Record<string, unknown>): Observable<ErpRole> {
    return this.http.post<ErpRole>(`${this.baseUrl}/roles`, payload, this.options());
  }

  updateRolePermissions(slug: string, permissions: Record<string, unknown>): Observable<ErpRole> {
    return this.http.patch<ErpRole>(`${this.baseUrl}/roles/${slug}/permissions`, { permissions }, this.options());
  }

  deleteRole(slug: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/roles/${slug}`, this.options());
  }

  me(): Observable<import('../core/models').AuthUser> {
    return this.http.get<import('../core/models').AuthUser>(`${this.baseUrl}/auth/me`, this.options());
  }

  holidays(): Observable<Array<{ _id: string; date: string; name: string; description?: string }>> {
    return this.http.get<Array<{ _id: string; date: string; name: string; description?: string }>>(`${this.baseUrl}/holidays`, this.options());
  }

  createHoliday(payload: { date: string; name: string; description?: string }): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/holidays`, payload, this.options());
  }

  deleteHoliday(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/holidays/${id}`, this.options());
  }

  busRoutes(params?: ListQueryParams): Observable<ApiSuccessResponse<BusRoute[]>> {
    return this.http.get<ApiSuccessResponse<BusRoute[]>>(`${this.baseUrl}/transport/routes`, this.listOptions(params));
  }

  createBusRoute(payload: Record<string, unknown>): Observable<BusRoute> {
    return this.http.post<BusRoute>(`${this.baseUrl}/transport/routes`, payload, this.options());
  }

  updateBusRoute(id: string, payload: Record<string, unknown>): Observable<BusRoute> {
    return this.http.patch<BusRoute>(`${this.baseUrl}/transport/routes/${id}`, payload, this.options());
  }

  toggleBusRouteStatus(id: string): Observable<BusRoute> {
    return this.http.post<BusRoute>(`${this.baseUrl}/transport/routes/${id}/toggle-status`, {}, this.options());
  }

  deleteBusRoute(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/transport/routes/${id}`, this.options());
  }

  vehicles(params?: ListQueryParams): Observable<ApiSuccessResponse<Vehicle[]>> {
    return this.http.get<ApiSuccessResponse<Vehicle[]>>(`${this.baseUrl}/drivers/vehicles`, this.listOptions(params));
  }

  createVehicle(payload: FormData): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.baseUrl}/drivers/vehicles`, payload, this.options());
  }

  updateVehicle(id: string, payload: FormData): Observable<Vehicle> {
    return this.http.patch<Vehicle>(`${this.baseUrl}/drivers/vehicles/${id}`, payload, this.options());
  }

  vehicleDocumentImageUrl(vehicleId: string, docType: string): string {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return `${this.baseUrl}/drivers/vehicles/${vehicleId}/documents/${docType}/file?access_token=${encodeURIComponent(token)}`;
  }

  vehicleDocumentFileUrl(vehicleId: string, docType: string, download = false): string {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    const dl = download ? '&download=1' : '';
    return `${this.baseUrl}/drivers/vehicles/${vehicleId}/documents/${docType}/file?access_token=${encodeURIComponent(token)}${dl}`;
  }

  toggleVehicleStatus(id: string): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.baseUrl}/drivers/vehicles/${id}/toggle-status`, {}, this.options());
  }

  deleteVehicle(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/drivers/vehicles/${id}`, this.options());
  }

  driverSalaryRegister(month: number, year: number): Observable<DriverSalaryRegister> {
    return this.http.get<DriverSalaryRegister>(`${this.baseUrl}/drivers/driver-salaries/register?month=${month}&year=${year}`, this.options());
  }

  payDriverSalary(payload: Record<string, unknown>): Observable<DriverSalaryPayment> {
    return this.http.post<DriverSalaryPayment>(`${this.baseUrl}/drivers/driver-salaries`, payload, this.options());
  }

  revertDriverSalary(id: string): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/drivers/driver-salaries/${id}`, this.options());
  }

  busRegistrations(params?: ListQueryParams): Observable<ApiSuccessResponse<BusRegistration[]>> {
    return this.http.get<ApiSuccessResponse<BusRegistration[]>>(`${this.baseUrl}/transport/registrations`, this.listOptions(params));
  }

  createBusRegistration(payload: Record<string, unknown>): Observable<BusRegistration> {
    return this.http.post<BusRegistration>(`${this.baseUrl}/transport/registrations`, payload, this.options());
  }

  updateBusRegistration(id: string, payload: Record<string, unknown>): Observable<BusRegistration> {
    return this.http.patch<BusRegistration>(`${this.baseUrl}/transport/registrations/${id}`, payload, this.options());
  }

  deactivateBusRegistration(id: string): Observable<BusRegistration> {
    return this.http.post<BusRegistration>(`${this.baseUrl}/transport/registrations/${id}/deactivate`, {}, this.options());
  }

  busReport(type: string, params?: Record<string, string>): Observable<{ type: string; rows: BusReportRow[]; total: number }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) httpParams = httpParams.set(key, value);
      });
    }
    return this.http.get<{ type: string; rows: BusReportRow[]; total: number }>(`${this.baseUrl}/transport/reports/${type}`, { ...this.options(), params: httpParams });
  }

  busReportPdfUrl(type: string, params?: Record<string, string>): string {
    const query = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}/transport/reports/${type}/pdf${query ? `?${query}` : ''}`;
  }

  report(domain: ReportDomain | string, type: string, params?: Record<string, string>): Observable<{ domain: string; type: string; rows: ReportRow[]; total: number }> {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) httpParams = httpParams.set(key, value);
      });
    }
    return this.http.get<{ domain: string; type: string; rows: ReportRow[]; total: number }>(`${this.baseUrl}/reports/${domain}/${type}`, { ...this.options(), params: httpParams });
  }

  reportPdfUrl(domain: ReportDomain | string, type: string, params?: Record<string, string>): string {
    const query = new URLSearchParams(params || {}).toString();
    return `${this.baseUrl}/reports/${domain}/${type}/pdf${query ? `?${query}` : ''}`;
  }

  workflowNotifications(): Observable<{ items: WorkflowNotification[]; total: number }> {
    return this.http.get<{ items: WorkflowNotification[]; total: number }>(`${this.baseUrl}/workflow/notifications`, this.options());
  }

  dismissWorkflowNotification(key: string): Observable<unknown> {
    return this.http.post(`${this.baseUrl}/workflow/notifications/dismiss`, { key }, this.options());
  }

  globalSearch(query: string): Observable<{ results: GlobalSearchResult[]; query: string }> {
    const params = new HttpParams().set('q', query);
    return this.http.get<{ results: GlobalSearchResult[]; query: string }>(`${this.baseUrl}/workflow/search`, { ...this.options(), params });
  }

  workflowBulk(operation: string, payload: Record<string, unknown>): Observable<{ operation: string; result: Record<string, unknown> }> {
    return this.http.post<{ operation: string; result: Record<string, unknown> }>(
      `${this.baseUrl}/workflow/bulk`,
      { operation, payload, confirmed: true },
      this.options()
    );
  }

  unlockPayroll(id: string): Observable<PayrollRecord> {
    return this.http.post<PayrollRecord>(`${this.baseUrl}/payroll/${id}/unlock`, {}, this.options());
  }

  workflowDefaults(): Observable<Record<string, unknown>> {
    return this.http.get<Record<string, unknown>>(`${this.baseUrl}/workflow/defaults`, this.options());
  }

  private listOptions(params?: ListQueryParams): { headers: HttpHeaders; params?: HttpParams } {
    const base = this.options();
    if (!params) return base;
    let httpParams = new HttpParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        httpParams = httpParams.set(key, String(value));
      }
    });
    return { ...base, params: httpParams };
  }

  private options(): { headers: HttpHeaders } {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return { headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders() };
  }
}
