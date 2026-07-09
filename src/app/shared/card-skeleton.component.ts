import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card-skeleton-grid" role="status" aria-label="Loading content">
      <article class="card-skeleton-item" *ngFor="let _ of cardArray">
        <div class="skeleton-line skeleton-title"></div>
        <div class="skeleton-line skeleton-meta"></div>
        <div class="skeleton-line skeleton-meta short"></div>
        <div class="skeleton-actions">
          <div class="skeleton-pill" *ngFor="let __ of actionArray"></div>
        </div>
      </article>
    </div>
  `
})
export class CardSkeletonComponent {
  @Input() cards = 4;
  @Input() actions = 2;

  get cardArray(): number[] {
    return Array.from({ length: Math.max(1, this.cards) }, (_, i) => i);
  }

  get actionArray(): number[] {
    return Array.from({ length: Math.max(1, this.actions) }, (_, i) => i);
  }
}
