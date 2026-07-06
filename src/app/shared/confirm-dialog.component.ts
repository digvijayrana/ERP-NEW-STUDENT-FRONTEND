import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ConfirmDialogService } from '../services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="confirm-overlay" *ngIf="confirmService.state$ | async as state" (click)="confirmService.answer(false)">
      <div class="confirm-dialog" role="alertdialog" aria-modal="true" (click)="$event.stopPropagation()">
        <h3>{{ state.title }}</h3>
        <p>{{ state.message }}</p>
        <div class="confirm-actions">
          <button type="button" class="ghost" (click)="confirmService.answer(false)">{{ state.cancelLabel }}</button>
          <button type="button" [class.danger-btn]="state.danger" [class.primary-btn]="!state.danger" (click)="confirmService.answer(true)">{{ state.confirmLabel }}</button>
        </div>
      </div>
    </div>
  `
})
export class ConfirmDialogComponent {
  readonly confirmService = inject(ConfirmDialogService);
}
