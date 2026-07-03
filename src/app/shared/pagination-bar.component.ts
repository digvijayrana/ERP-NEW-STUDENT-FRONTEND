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
      <div class="pagination-controls" *ngIf="totalItems > pageSize">
        <button type="button" class="ghost small" [disabled]="currentPage <= 1" (click)="changePage(currentPage - 1)">Previous</button>
        <span class="pagination-pages">Page {{ currentPage }} / {{ totalPages }}</span>
        <button type="button" class="ghost small" [disabled]="currentPage >= totalPages" (click)="changePage(currentPage + 1)">Next</button>
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

  changePage(page: number): void {
    this.vm.setPage(this.listKey, page, this.items);
  }
}
