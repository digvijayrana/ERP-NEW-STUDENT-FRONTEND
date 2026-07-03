import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';

@Component({
  selector: 'app-attendance-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent],
  templateUrl: './attendance-page.component.html'
})
export class AttendancePageComponent {
  @Input({ required: true }) vm!: any;
}
