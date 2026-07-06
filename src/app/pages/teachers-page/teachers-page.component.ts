import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListingToolbarComponent } from '../../shared/listing-toolbar.component';
import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { FieldErrorComponent } from '../../shared/field-error.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { TableSkeletonComponent } from '../../shared/table-skeleton.component';
import { ActionBtnComponent } from '../../shared/action-btn.component';

@Component({
  selector: 'app-teachers-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ListingToolbarComponent, PaginationBarComponent, SpinnerComponent, FieldErrorComponent, EmptyStateComponent, TableSkeletonComponent, ActionBtnComponent],
  templateUrl: './teachers-page.component.html'
})
export class TeachersPageComponent {
  @Input({ required: true }) vm!: any;
}
