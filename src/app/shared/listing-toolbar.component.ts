import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LIST_PAGE_SIZE_OPTIONS } from '../core/listing.util';

@Component({
  selector: 'app-listing-toolbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="listing-toolbar">
      <div class="search-box listing-search">
        <input
          [placeholder]="searchPlaceholder"
          [value]="searchValue"
          [disabled]="loading"
          (input)="searchChange.emit($any($event.target).value)">
      </div>
      <div class="listing-filter-slot">
        <ng-content select="[listing-filters]"></ng-content>
      </div>
      <div class="listing-toolbar-actions">
        <button type="button" class="ghost small" [disabled]="loading" (click)="refresh.emit()" title="Refresh listing">
          <span class="btn-spinner" *ngIf="loading"></span>
          {{ loading ? 'Refreshing...' : 'Refresh' }}
        </button>
        <button type="button" class="ghost small" *ngIf="showExport" [disabled]="loading" (click)="exportCsv.emit()">Export Excel</button>
        <button type="button" class="ghost small" *ngIf="showExport" [disabled]="loading" (click)="exportPdf.emit()">Export PDF</button>
      </div>
    </div>
  `
})
export class ListingToolbarComponent {
  @Input() searchPlaceholder = 'Search...';
  @Input() searchValue = '';
  @Input() showExport = true;
  @Input() loading = false;
  @Output() searchChange = new EventEmitter<string>();
  @Output() refresh = new EventEmitter<void>();
  @Output() exportCsv = new EventEmitter<void>();
  @Output() exportPdf = new EventEmitter<void>();
  readonly pageSizeOptions = LIST_PAGE_SIZE_OPTIONS;
}
