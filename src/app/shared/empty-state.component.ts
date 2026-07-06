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
          <rect x="12" y="10" width="40" height="44" rx="6" stroke="currentColor" stroke-width="2.5"/>
          <path d="M22 22h20M22 32h14M22 42h18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>
      <h4 class="ui-empty-title" *ngIf="title">{{ title }}</h4>
      <p class="ui-empty-message">{{ message }}</p>
      <button *ngIf="actionLabel" type="button" class="ghost small ui-empty-action" (click)="action.emit()">{{ actionLabel }}</button>
    </div>
  `
})
export class EmptyStateComponent {
  @Input() title = '';
  @Input() message = 'No records to display.';
  @Input() actionLabel = '';
  @Output() action = new EventEmitter<void>();
}
