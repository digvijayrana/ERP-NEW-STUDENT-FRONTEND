import { Injectable } from '@angular/core';

import { StoredListState } from '../core/listing.util';

@Injectable({ providedIn: 'root' })
export class ListingStateService {
  private readonly prefix = 'erp_list_';

  load(listKey: string): StoredListState | null {
    try {
      const raw = sessionStorage.getItem(`${this.prefix}${listKey}`);
      return raw ? JSON.parse(raw) as StoredListState : null;
    } catch {
      return null;
    }
  }

  save(listKey: string, state: StoredListState): void {
    sessionStorage.setItem(`${this.prefix}${listKey}`, JSON.stringify(state));
  }

  clear(listKey: string): void {
    sessionStorage.removeItem(`${this.prefix}${listKey}`);
  }
}
