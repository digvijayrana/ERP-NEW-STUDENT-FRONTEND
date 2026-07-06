import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { LIST_PAGE_SIZE_OPTIONS } from '../core/listing.util';

@Component({
  selector: 'app-pagination-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="pagination-bar" *ngIf="totalItems > 0">
      <span class="pagination-meta">
        Showing <strong>{{ startItem }}–{{ endItem }}</strong> of <strong>{{ totalItems }}</strong>
        · Page <strong>{{ currentPage }}</strong> of <strong>{{ totalPages }}</strong>
      </span>
      <div class="pagination-controls">
        <label class="page-size-select">
          Rows
          <select [value]="pageSize" (change)="onPageSizeChange($event)">
            <option *ngFor="let size of pageSizeOptions" [value]="size">{{ size }}</option>
          </select>
        </label>
        <ng-container *ngIf="totalPages > 1">
          <button type="button" class="ghost small" [disabled]="currentPage <= 1" (click)="changePage(1)" title="First">&laquo;</button>
          <button type="button" class="ghost small" [disabled]="currentPage <= 1" (click)="changePage(currentPage - 1)">Prev</button>
          <ng-container *ngFor="let p of visiblePages">
            <button type="button" class="ghost small page-num" [class.active-page]="p === currentPage" (click)="changePage(p)">{{ p }}</button>
          </ng-container>
          <button type="button" class="ghost small" [disabled]="currentPage >= totalPages" (click)="changePage(currentPage + 1)">Next</button>
          <button type="button" class="ghost small" [disabled]="currentPage >= totalPages" (click)="changePage(totalPages)" title="Last">&raquo;</button>
        </ng-container>
      </div>
    </footer>
  `
})
export class PaginationBarComponent {
  @Input({ required: true }) vm!: {
    getListPageSize: (key: string) => number;
    getListTotalItems?: (key: string) => number;
    isServerPaged?: (key: string) => boolean;
    pages: Record<string, number>;
    pageCount: (items: unknown[], key: string) => number;
    setPage: (key: string, page: number, items: unknown[]) => void;
    setListPageSize: (key: string, size: number) => void;
  };
  @Input({ required: true }) listKey!: string;
  @Input({ required: true }) items: unknown[] = [];

  readonly pageSizeOptions = LIST_PAGE_SIZE_OPTIONS;

  get pageSize(): number {
    return this.vm.getListPageSize(this.listKey);
  }

  get currentPage(): number {
    return this.vm.pages[this.listKey] || 1;
  }

  get totalItems(): number {
    if (this.vm.isServerPaged?.(this.listKey)) {
      return this.vm.getListTotalItems?.(this.listKey) ?? 0;
    }
    return this.items.length;
  }

  get totalPages(): number {
    return this.vm.pageCount(this.items, this.listKey);
  }

  get startItem(): number {
    if (!this.totalItems) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }

  get visiblePages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages: number[] = [];
    const maxVisible = 5;

    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = Math.min(total, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    this.vm.setPage(this.listKey, page, this.items);
  }

  onPageSizeChange(event: Event): void {
    const size = Number((event.target as HTMLSelectElement).value);
    this.vm.setListPageSize(this.listKey, size);
  }
}
