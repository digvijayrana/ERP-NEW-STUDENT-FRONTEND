import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ConfirmOptions {
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  danger?: boolean;
}

interface ConfirmState extends ConfirmOptions {
  resolve: (confirmed: boolean) => void;
}

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly stateSubject = new BehaviorSubject<ConfirmState | null>(null);
  readonly state$ = this.stateSubject.asObservable();

  confirm(options: ConfirmOptions): Promise<boolean> {
    return new Promise((resolve) => {
      this.stateSubject.next({
        title: options.title || 'Confirm action',
        message: options.message,
        confirmLabel: options.confirmLabel || 'Confirm',
        cancelLabel: options.cancelLabel || 'Cancel',
        danger: options.danger ?? false,
        resolve
      });
    });
  }

  answer(confirmed: boolean): void {
    const state = this.stateSubject.value;
    if (!state) return;
    this.stateSubject.next(null);
    state.resolve(confirmed);
  }

  isOpen(): boolean {
    return this.stateSubject.value !== null;
  }
}
