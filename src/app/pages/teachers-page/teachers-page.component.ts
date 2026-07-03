import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';

@Component({
  selector: 'app-teachers-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent],
  templateUrl: './teachers-page.component.html'
})
export class TeachersPageComponent {
  @Input({ required: true }) vm!: any;
}
