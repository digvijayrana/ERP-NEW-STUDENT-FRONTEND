import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmptyStateComponent } from '../../shared/empty-state.component';
import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { ActionBtnComponent } from '../../shared/action-btn.component';
import { ListingToolbarComponent } from '../../shared/listing-toolbar.component';
import { TableSkeletonComponent } from '../../shared/table-skeleton.component';

@Component({
  selector: 'app-transport-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, ActionBtnComponent, ListingToolbarComponent, TableSkeletonComponent],
  templateUrl: './transport-page.component.html'
})
export class TransportPageComponent {
  @Input({ required: true }) vm!: any;
}
