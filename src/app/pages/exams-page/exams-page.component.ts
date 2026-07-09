import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';
import { CardSkeletonComponent } from '../../shared/card-skeleton.component';

@Component({
  selector: 'app-exams-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, CardSkeletonComponent],
  templateUrl: './exams-page.component.html'
})
export class ExamsPageComponent {
  @Input({ required: true }) vm!: any;
}
