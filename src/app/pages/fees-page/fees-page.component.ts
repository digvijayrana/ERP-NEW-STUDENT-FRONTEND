import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';

@Component({
  selector: 'app-fees-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent],
  templateUrl: './fees-page.component.html'
})
export class FeesPageComponent {
  @Input({ required: true }) vm!: any;
}
