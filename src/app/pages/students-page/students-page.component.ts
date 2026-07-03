import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';

@Component({
  selector: 'app-students-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent],
  templateUrl: './students-page.component.html'
})
export class StudentsPageComponent {
  @Input({ required: true }) vm!: any;
}
