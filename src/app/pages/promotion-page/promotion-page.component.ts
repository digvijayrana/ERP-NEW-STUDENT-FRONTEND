import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EmptyStateComponent } from '../../shared/empty-state.component';
import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { TableSkeletonComponent } from '../../shared/table-skeleton.component';

@Component({
  selector: 'app-promotion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, TableSkeletonComponent],
  templateUrl: './promotion-page.component.html'
})
export class PromotionPageComponent {
  @Input({ required: true }) vm!: any;
}
