import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';

@Component({
  selector: 'app-student-profile-page',
  standalone: true,
  imports: [CommonModule, PaginationBarComponent, SpinnerComponent],
  templateUrl: './student-profile-page.component.html'
})
export class StudentProfilePageComponent {
  @Input({ required: true }) vm!: any;
}
