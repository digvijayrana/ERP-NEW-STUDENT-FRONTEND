import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from '../../shared/spinner.component';
import { EmptyStateComponent } from '../../shared/empty-state.component';

@Component({
  selector: 'app-timetable-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SpinnerComponent, EmptyStateComponent],
  templateUrl: './timetable-page.component.html'
})
export class TimetablePageComponent {
  @Input({ required: true }) vm!: any;
}
