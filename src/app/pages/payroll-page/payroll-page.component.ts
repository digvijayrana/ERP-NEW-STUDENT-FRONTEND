import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { ListingToolbarComponent } from '../../shared/listing-toolbar.component';
import { TableSkeletonComponent } from '../../shared/table-skeleton.component';

@Component({
  selector: 'app-payroll-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, ListingToolbarComponent, TableSkeletonComponent],
  templateUrl: './payroll-page.component.html'
})
export class PayrollPageComponent {
  @Input({ required: true }) vm!: any;
}
