import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, PaginationBarComponent],
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent {
  @Input({ required: true }) vm!: any;
}
