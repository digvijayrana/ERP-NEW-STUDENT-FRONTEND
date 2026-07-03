import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { APP_CONSTANTS } from '../core/constants';
import {
  AcademicYear,
  AttendanceRecord,
  AuthResponse,
  ClassRoom,
  DashboardSummary,
  Exam,
  ExamClassReport,
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

  dashboard(rangeDays = APP_CONSTANTS.DEFAULT_FINANCE_RANGE_DAYS): Observable<DashboardSummary> {
    return this.http.get<DashboardSummary>(`${this.baseUrl}/dashboard?rangeDays=${rangeDays}`, this.options());
  }

  academicYears(): Observable<AcademicYear[]> {
    return this.http.get<AcademicYear[]>(`${this.baseUrl}/academic-years`, this.options());
  }

  createAcademicYear(payload: Partial<AcademicYear>): Observable<AcademicYear> {
    return this.http.post<AcademicYear>(`${this.baseUrl}/academic-years`, payload, this.options());
  }

  classes(): Observable<ClassRoom[]> {
    return this.http.get<ClassRoom[]>(`${this.baseUrl}/classes`, this.options());
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

  teachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}/teachers`, this.options());
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

  students(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`, this.options());
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

  listUsers(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.baseUrl}/auth/users`, this.options());
  }

  private options(): { headers: HttpHeaders } {
    const token = localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY) || '';
    return { headers: token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : new HttpHeaders() };
  }
}
