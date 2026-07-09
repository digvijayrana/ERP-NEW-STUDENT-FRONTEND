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
    { key: 'students', label: 'Students' },
    { key: 'fees', label: 'Fees' },
    { key: 'attendance', label: 'Attendance' },
    { key: 'payroll', label: 'Payroll' },
    { key: 'transport', label: 'Transport' }
  ];

  readonly typesByDomain: Record<ReportDomain, Array<{ id: string; label: string }>> = {
    students: [
      { id: 'register', label: 'Student Register' },
      { id: 'admission-register', label: 'Admission Register' },
      { id: 'class-wise', label: 'Class-wise Report' },
      { id: 'section-wise', label: 'Section-wise Report' },
      { id: 'status', label: 'Student Status Report' }
    ],
    fees: [
      { id: 'monthly-collection', label: 'Monthly Fee Collection' },
      { id: 'pending', label: 'Pending Fee Report' },
      { id: 'student-ledger', label: 'Student Fee Ledger' },
      { id: 'bus-fee-collection', label: 'Bus Fee Collection' }
    ],
    attendance: [
      { id: 'daily', label: 'Daily Attendance' },
      { id: 'monthly', label: 'Monthly Attendance' },
      { id: 'student-summary', label: 'Student Summary' },
      { id: 'class-summary', label: 'Class Summary' }
    ],
    payroll: [
      { id: 'summary', label: 'Payroll Summary' },
      { id: 'salary-summary', label: 'Salary Summary' },
      { id: 'payment-status', label: 'Payment Status' }
    ],
    transport: [
      { id: 'route-wise', label: 'Route-wise Students' },
      { id: 'stop-wise', label: 'Stop-wise Students' },
      { id: 'bus-strength', label: 'Bus Strength' },
      { id: 'fee-collection', label: 'Bus Fee Collection' }
    ]
  };

  reportTypes(): Array<{ id: string; label: string }> {
    const domain = this.vm.reportDomain as ReportDomain;
    return this.typesByDomain[domain] || [];
  }
}
