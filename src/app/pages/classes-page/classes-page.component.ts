import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';

@Component({
  selector: 'app-classes-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent],
  templateUrl: './classes-page.component.html'
})
export class ClassesPageComponent {
  @Input({ required: true }) vm!: any;
}
