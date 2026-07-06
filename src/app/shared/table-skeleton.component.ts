import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-skeleton" [class.table-skeleton-embedded]="embedded" role="status" aria-label="Loading data">
      <div class="skeleton-row skeleton-header" *ngIf="showHeader" [style.grid-template-columns]="gridColumns">
        <div class="skeleton-cell" *ngFor="let _ of columnArray"></div>
      </div>
      <div class="skeleton-row" *ngFor="let _ of rowArray" [style.grid-template-columns]="gridColumns">
        <div class="skeleton-cell" *ngFor="let __ of columnArray"></div>
      </div>
    </div>
  `
})
export class TableSkeletonComponent {
  @Input() rows = 5;
  @Input() columns = 5;
  @Input() showHeader = true;
  @Input() embedded = false;

  get rowArray(): number[] {
    return Array.from({ length: Math.max(1, this.rows) }, (_, i) => i);
  }

  get columnArray(): number[] {
    return Array.from({ length: Math.max(1, this.columns) }, (_, i) => i);
  }

  get gridColumns(): string {
    return `repeat(${Math.max(1, this.columns)}, minmax(0, 1fr))`;
  }
}
