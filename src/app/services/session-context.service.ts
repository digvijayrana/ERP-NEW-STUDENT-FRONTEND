import { Injectable } from '@angular/core';

export interface WorkspaceContext {
  academicYearId?: string;
  classId?: string;
  section?: string;
  promotionWizardStep?: number;
  promotionFromYear?: string;
  promotionToYear?: string;
  promotionFromClass?: string;
  promotionToClass?: string;
  promotionRollMode?: string;
}

@Injectable({ providedIn: 'root' })
export class SessionContextService {
  private readonly key = 'erp_workspace_context';

  load(): WorkspaceContext {
    try {
      const raw = sessionStorage.getItem(this.key);
      return raw ? JSON.parse(raw) as WorkspaceContext : {};
    } catch {
      return {};
    }
  }

  save(context: WorkspaceContext): void {
    sessionStorage.setItem(this.key, JSON.stringify(context));
  }

  patch(partial: Partial<WorkspaceContext>): void {
    this.save({ ...this.load(), ...partial });
  }

  clear(): void {
    sessionStorage.removeItem(this.key);
  }
}
