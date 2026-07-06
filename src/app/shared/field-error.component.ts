import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="field-error" *ngIf="showError">{{ message }}</span>
  `
})
export class FieldErrorComponent {
  @Input({ required: true }) control!: AbstractControl | null;
  @Input() label = 'This field';

  get showError(): boolean {
    return !!this.control && this.control.invalid && (this.control.touched || this.control.dirty);
  }

  get message(): string {
    if (!this.control?.errors) return '';
    if (this.control.errors['required']) return `${this.label} is required`;
    if (this.control.errors['email']) return 'Enter a valid email address';
    if (this.control.errors['pattern']) return `${this.label} format is invalid`;
    if (this.control.errors['min']) return `${this.label} must be at least ${this.control.errors['min'].min}`;
    return `${this.label} is invalid`;
  }
}
