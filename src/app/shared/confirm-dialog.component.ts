import { CommonModule } from '@angular/common';

import { Component, HostListener, inject } from '@angular/core';



import { ConfirmDialogService } from '../services/confirm-dialog.service';



@Component({

  selector: 'app-confirm-dialog',

  standalone: true,

  imports: [CommonModule],

  template: `

    <div

      class="confirm-overlay"

      *ngIf="confirmService.state$ | async as state"

      (click)="confirmService.answer(false)"

    >

      <div

        class="confirm-dialog"

        role="alertdialog"

        aria-modal="true"

        [attr.aria-labelledby]="dialogTitleId"

        [attr.aria-describedby]="dialogMessageId"

        (click)="$event.stopPropagation()"

      >

        <h3 [id]="dialogTitleId">{{ state.title }}</h3>

        <p [id]="dialogMessageId">{{ state.message }}</p>

        <div class="confirm-actions">

          <button type="button" class="ghost" (click)="confirmService.answer(false)">{{ state.cancelLabel }}</button>

          <button

            #confirmBtn

            type="button"

            [class.danger-btn]="state.danger"

            [class.primary-btn]="!state.danger"

            [class.btn-destructive]="state.danger"

            [class.btn-primary]="!state.danger"

            (click)="confirmService.answer(true)"

          >{{ state.confirmLabel }}</button>

        </div>

      </div>

    </div>

  `

})

export class ConfirmDialogComponent {

  readonly confirmService = inject(ConfirmDialogService);

  readonly dialogTitleId = 'confirm-dialog-title';

  readonly dialogMessageId = 'confirm-dialog-message';



  @HostListener('document:keydown', ['$event'])

  onKeydown(event: KeyboardEvent): void {

    if (!this.confirmService.isOpen()) return;

    if (event.key === 'Escape') {

      event.preventDefault();

      this.confirmService.answer(false);

    }

  }

}

