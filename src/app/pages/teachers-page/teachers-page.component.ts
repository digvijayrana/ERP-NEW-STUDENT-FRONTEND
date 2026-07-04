import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';

@Component({
  selector: 'app-teachers-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent],
  templateUrl: './teachers-page.component.html'
})
export class TeachersPageComponent {
  @Input({ required: true }) vm!: any;
}
