import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spinner-overlay" *ngIf="show" [class.spinner-inline]="mode === 'inline'">
      <div class="spinner-ring"></div>
      <span class="spinner-text" *ngIf="label">{{ label }}</span>
    </div>
  `
})
export class SpinnerComponent {
  @Input() show = false;
  @Input() label = 'Loading...';
  @Input() mode: 'overlay' | 'inline' = 'overlay';
}
