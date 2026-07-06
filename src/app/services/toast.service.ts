import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: number;
  type: ToastType;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private seq = 0;
  private readonly itemsSubject = new BehaviorSubject<ToastMessage[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  show(type: ToastType, text: string, durationMs = 4000): void {
    const id = ++this.seq;
    const next = [...this.itemsSubject.value, { id, type, text }];
    this.itemsSubject.next(next.slice(-4));
    window.setTimeout(() => this.dismiss(id), durationMs);
  }

  success(text: string): void { this.show('success', text); }
  error(text: string): void { this.show('error', text, 6000); }
  warning(text: string): void { this.show('warning', text, 5000); }
  info(text: string): void { this.show('info', text); }

  dismiss(id: number): void {
    this.itemsSubject.next(this.itemsSubject.value.filter((item) => item.id !== id));
  }
}
