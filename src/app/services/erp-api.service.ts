import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { APP_CONSTANTS } from '../core/constants';
import { ApiSuccessResponse, ListQueryParams } from '../core/api-response';
import {
  AcademicYear,
  AttendanceRecord,
  AuthResponse,
  ClassRoom,
  DashboardSummary,
  Exam,
  ExamClassReport,
  ErpRole,
  ExamSubmission,
  FeeInvoice,
  PayrollRecord,
  Student,
  StudentProfile,
  Teacher,
  TimetableRow
} from '../core/models';

@Injectable({ providedIn: 'root' })
export class ErpApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, { email, password });
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

  teacherDocumentFileUrl(teacherId: string, docType: string, download = false): string {
    const suffix = download ? '?download=1' : '';
    return `${this.baseUrl}/teachers/${teacherId}/documents/${docType}/file${suffix}`;
  }

  getTeacherDocumentUrl(teacherId: string, docType: string): Observable<{ url: string }> {
    return this.http.get<{ url: string }>(`${this.baseUrl}/teachers/${teacherId}/documents/${docType}/url`, this.options());
  }

  students(params?: ListQueryParams): Observable<ApiSuccessResponse<Student[]>> {
    return this.http.get<ApiSuccessResponse<Student[]>>(`${this.baseUrl}/students`, this.listOptions(params));
  }

  studentDetails(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/${id}`, this.options());
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

  promote(payload: Record<string, unknown>): Observable<{ promoted: number }> {
    return this.http.post<{ promoted: number }>(`${this.baseUrl}/students/promotions`, payload, this.options());
  }

  invoices(): Observable<FeeInvoice[]> {
    return this.http.get<FeeInvoice[]>(`${this.baseUrl}/fees/invoices`, this.options());
  }

  createInvoice(payload: Record<string, unknown>): Observable<FeeInvoice> {
    return this.http.post<FeeInvoice>(`${this.baseUrl}/fees/invoices`, payload, this.options());
  }

  invoicePdfUrl(id: string): string {
    return `${this.baseUrl}/fees/invoices/${id}/pdf`;
  }

  addPayment(invoiceId: string, payload: Record<string, unknown>): Observable<FeeInvoice> {
    return this.http.post<FeeInvoice>(`${this.baseUrl}/fees/invoices/${invoiceId}/payments`, payload, this.options());
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

  payroll(): Observable<PayrollRecord[]> {
    return this.http.get<PayrollRecord[]>(`${this.baseUrl}/payroll`, this.options());
  }

  payrollPdfUrl(id: string): string {
    return `${this.baseUrl}/payroll/${id}/pdf`;
  }

  attendance(): Observable<AttendanceRecord[]> {
    return this.http.get<AttendanceRecord[]>(`${this.baseUrl}/attendance`, this.options());
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

  timetable(): Observable<TimetableRow[]> {
    return this.http.get<TimetableRow[]>(`${this.baseUrl}/timetable`, this.options());
  }

  saveTimetable(payload: Record<string, unknown>): Observable<TimetableRow> {
    return this.http.post<TimetableRow>(`${this.baseUrl}/timetable`, payload, this.options());
  }

  exams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${this.baseUrl}/exams`, this.options());
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
