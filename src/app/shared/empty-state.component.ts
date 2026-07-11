import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ui-empty-state" role="status">
      <div class="ui-empty-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="44" height="36" rx="10" stroke="currentColor" stroke-width="2"/>
          <path d="M22 28h20M22 36h14M22 44h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <circle cx="46" cy="22" r="8" fill="currentColor" opacity="0.15"/>
          <path d="M43 22h6M46 19v6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
        </svg>
      </div>
      <h4 class="ui-empty-title" *ngIf="title">{{ title }}</h4>
      <p class="ui-empty-message">{{ message }}</p>
      <button *ngIf="actionLabel" type="button" class="primary-btn ui-empty-action" (click)="action.emit()">{{ actionLabel }}</button>
    </div>
  `
})
export class EmptyStateComponent {
  @Input() title = '';
  @Input() message = 'No records to display.';
  @Input() actionLabel = '';
  @Output() action = new EventEmitter<void>();
}
