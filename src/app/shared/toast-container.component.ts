import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-stack" aria-live="polite">
      <div
        *ngFor="let toast of toastService.items$ | async"
        class="toast"
        [class.success]="toast.type === 'success'"
        [class.error]="toast.type === 'error'"
        [class.warning]="toast.type === 'warning'"
        [class.info]="toast.type === 'info'">
        <span>{{ toast.text }}</span>
        <button type="button" class="toast-close" (click)="toastService.dismiss(toast.id)" aria-label="Dismiss">&times;</button>
      </div>
    </div>
  `
})
export class ToastContainerComponent {
  readonly toastService = inject(ToastService);
}
