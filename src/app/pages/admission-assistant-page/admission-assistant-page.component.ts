import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmptyStateComponent } from '../../shared/empty-state.component';
import { SpinnerComponent } from '../../shared/spinner.component';

@Component({
  selector: 'app-admission-assistant-page',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent, EmptyStateComponent],
  templateUrl: './admission-assistant-page.component.html'
})
export class AdmissionAssistantPageComponent {
  @Input({ required: true }) vm!: any;
}
