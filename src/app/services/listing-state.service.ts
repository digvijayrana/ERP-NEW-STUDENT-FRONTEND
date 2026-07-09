import { Injectable } from '@angular/core';

import { StoredListState } from '../core/listing.util';

@Injectable({ providedIn: 'root' })
export class ListingStateService {
  private readonly prefix = 'erp_list_';
  private readonly persistentPrefix = 'erp_list_persist_';

  load(listKey: string): StoredListState | null {
    return this.read(`${this.persistentPrefix}${listKey}`) || this.read(`${this.prefix}${listKey}`);
  }

  save(listKey: string, state: StoredListState): void {
    sessionStorage.setItem(`${this.prefix}${listKey}`, JSON.stringify(state));
    localStorage.setItem(`${this.persistentPrefix}${listKey}`, JSON.stringify(state));
  }

  clear(listKey: string): void {
    sessionStorage.removeItem(`${this.prefix}${listKey}`);
    localStorage.removeItem(`${this.persistentPrefix}${listKey}`);
  }

  clearAll(listKeys: string[]): void {
    for (const key of listKeys) this.clear(key);
  }

  private read(key: string): StoredListState | null {
    try {
      const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) as StoredListState : null;
    } catch {
      return null;
    }
  }
}
