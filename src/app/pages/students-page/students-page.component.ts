import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FieldErrorComponent } from '../../shared/field-error.component';
import { ListingToolbarComponent } from '../../shared/listing-toolbar.component';
import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { TableSkeletonComponent } from '../../shared/table-skeleton.component';
import { ActionBtnComponent } from '../../shared/action-btn.component';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FieldErrorComponent, ListingToolbarComponent, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, TableSkeletonComponent, ActionBtnComponent],
  templateUrl: './students-page.component.html'
})
export class StudentsPageComponent {
  @Input({ required: true }) vm!: any;
}
