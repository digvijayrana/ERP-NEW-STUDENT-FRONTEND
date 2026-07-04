import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="pagination-bar" *ngIf="totalItems > 0">
      <span class="pagination-meta">
        Showing <strong>{{ startItem }}–{{ endItem }}</strong> of <strong>{{ totalItems }}</strong>
      </span>
      <div class="pagination-controls" *ngIf="totalPages > 1">
        <button type="button" class="ghost small" [disabled]="currentPage <= 1" (click)="changePage(1)" title="First">&laquo;</button>
        <button type="button" class="ghost small" [disabled]="currentPage <= 1" (click)="changePage(currentPage - 1)">Prev</button>
        <ng-container *ngFor="let p of visiblePages">
          <button type="button" class="ghost small page-num" [class.active-page]="p === currentPage" (click)="changePage(p)">{{ p }}</button>
        </ng-container>
        <button type="button" class="ghost small" [disabled]="currentPage >= totalPages" (click)="changePage(currentPage + 1)">Next</button>
        <button type="button" class="ghost small" [disabled]="currentPage >= totalPages" (click)="changePage(totalPages)" title="Last">&raquo;</button>
      </div>
    </footer>
  `
})
export class PaginationBarComponent {
  @Input({ required: true }) vm!: {
    pageSize: number;
    pages: Record<string, number>;
    pageCount: (items: unknown[]) => number;
    setPage: (key: string, page: number, items: unknown[]) => void;
  };
  @Input({ required: true }) listKey!: string;
  @Input({ required: true }) items: unknown[] = [];

  get pageSize(): number {
    return this.vm.pageSize;
  }

  get currentPage(): number {
    return this.vm.pages[this.listKey] || 1;
  }

  get totalItems(): number {
    return this.items.length;
  }

  get totalPages(): number {
    return this.vm.pageCount(this.items);
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
}
