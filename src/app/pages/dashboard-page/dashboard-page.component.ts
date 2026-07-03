import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, PaginationBarComponent, SpinnerComponent],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
  @Input({ required: true }) vm!: any;
  today = new Date();
}
