import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ActionBtnType = 'view' | 'edit' | 'deactivate' | 'delete' | 'activate' | 'profile' | 'docs' | 'close' | 'unlock';

const ACTION_META: Record<ActionBtnType, { label: string; icon: string; variant: string }> = {
  view: { label: 'View', icon: '👁', variant: 'ghost' },
  edit: { label: 'Edit', icon: '✎', variant: 'ghost' },
  profile: { label: 'Profile', icon: '👤', variant: 'ghost' },
  docs: { label: 'Docs', icon: '📄', variant: 'ghost' },
  deactivate: { label: 'Deactivate', icon: '⊘', variant: 'danger-btn' },
  delete: { label: 'Delete', icon: '🗑', variant: 'danger-btn' },
  activate: { label: 'Activate', icon: '✓', variant: 'ghost success-btn' },
  close: { label: 'Close', icon: '🔒', variant: 'ghost' },
  unlock: { label: 'Unlock', icon: '🔓', variant: 'ghost' }
};

@Component({
  selector: 'app-action-btn',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="action-btn small"
      [ngClass]="meta.variant"
      [disabled]="disabled"
      [title]="displayLabel"
      [attr.aria-label]="displayLabel"
      (click)="clicked.emit($event)">
      <span class="action-btn-icon" aria-hidden="true">{{ meta.icon }}</span>
      <span class="action-btn-label">{{ displayLabel }}</span>
    </button>
  `
})
export class ActionBtnComponent {
  @Input({ required: true }) type!: ActionBtnType;
  @Input() label = '';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<MouseEvent>();

  get meta() {
    return ACTION_META[this.type];
  }

  get displayLabel(): string {
    return this.label || this.meta.label;
  }
}
