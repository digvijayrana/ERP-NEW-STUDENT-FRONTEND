import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmptyStateComponent } from '../../shared/empty-state.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { ActionBtnComponent } from '../../shared/action-btn.component';

@Component({
  selector: 'app-drivers-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SpinnerComponent, EmptyStateComponent, ActionBtnComponent],
  templateUrl: './drivers-page.component.html'
})
export class DriversPageComponent {
  @Input({ required: true }) vm!: any;
}
