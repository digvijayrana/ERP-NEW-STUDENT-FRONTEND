import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ReportDomain } from '../../core/models';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { TableSkeletonComponent } from '../../shared/table-skeleton.component';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [CommonModule, EmptyStateComponent, TableSkeletonComponent],
  templateUrl: './reports-page.component.html'
})
export class ReportsPageComponent {
  @Input({ required: true }) vm!: any;

  readonly domains: Array<{ key: ReportDomain; label: string }> = [
    { key: 'students', label: 'Academic — Students' },
    { key: 'academic', label: 'Academic — Performance' },
    { key: 'promotions', label: 'Academic — Promotions' },
    { key: 'attendance', label: 'Attendance' },
    { key: 'fees', label: 'Financial — Fees' },
    { key: 'payroll', label: 'Financial — Payroll' },
    { key: 'transport', label: 'Transport' },
    { key: 'operations', label: 'Operational' }
  ];

  readonly typesByDomain: Record<ReportDomain, Array<{ id: string; label: string }>> = {
    students: [
      { id: 'register', label: 'Student Register' },
      { id: 'class-register', label: 'Class Register' },
      { id: 'admission-register', label: 'Admission Register' },
      { id: 'class-wise', label: 'Class-wise Report' },
      { id: 'section-wise', label: 'Section-wise Report' },
      { id: 'status', label: 'Student Status Report' },
      { id: 'inactive-students', label: 'Inactive Students' }
    ],
    academic: [
      { id: 'student-progress', label: 'Student Progress Report' },
      { id: 'performance-summary', label: 'Student Performance Summary' },
      { id: 'top-performers', label: 'Top Performers Report' },
      { id: 'weak-students', label: 'Weak Students Report' }
    ],
    fees: [
      { id: 'monthly-collection', label: 'Fee Collection Report' },
      { id: 'pending', label: 'Outstanding Fee Report' },
      { id: 'outstanding', label: 'Outstanding Fees' },
      { id: 'student-ledger', label: 'Student Fee Ledger' },
      { id: 'discount-report', label: 'Discount Report' },
      { id: 'fine-collection', label: 'Fine Collection Report' },
      { id: 'bus-fee-collection', label: 'Bus Fee Collection' }
    ],
    attendance: [
      { id: 'daily', label: 'Daily Attendance Report' },
      { id: 'monthly', label: 'Monthly Attendance Report' },
      { id: 'yearly', label: 'Yearly Attendance Report' },
      { id: 'student-summary', label: 'Student-wise Attendance' },
      { id: 'class-summary', label: 'Class-wise Attendance' },
      { id: 'teacher-wise', label: 'Teacher-wise Attendance' }
    ],
    payroll: [
      { id: 'summary', label: 'Payroll Summary Report' },
      { id: 'salary-summary', label: 'Salary Summary' },
      { id: 'payment-status', label: 'Payment Status' }
    ],
    transport: [
      { id: 'route-wise', label: 'Route-wise Students' },
      { id: 'stop-wise', label: 'Stop-wise Students' },
      { id: 'bus-strength', label: 'Route Strength Report' },
      { id: 'fee-collection', label: 'Bus Fee Collection' }
    ],
    promotions: [
      { id: 'promotion-report', label: 'Student Promotion Report' },
      { id: 'promoted', label: 'Promoted Students' },
      { id: 'detained', label: 'Detained Students' },
      { id: 'left-school', label: 'Left School' },
      { id: 'tc-issued', label: 'TC Issued' },
      { id: 'class-strength-comparison', label: 'Class Strength Comparison' }
    ],
    operations: [
      { id: 'teacher-register', label: 'Teacher Register' },
      { id: 'bus-allocation', label: 'Bus Allocation Report' },
      { id: 'route-strength', label: 'Route Strength Report' },
      { id: 'inactive-students', label: 'Inactive Students Report' },
      { id: 'user-activity', label: 'User Activity Report' },
      { id: 'audit-summary', label: 'Audit Summary Report' }
    ]
  };

  reportTypes(): Array<{ id: string; label: string }> {
    const domain = this.vm.reportDomain as ReportDomain;
    return this.typesByDomain[domain] || [];
  }
}
