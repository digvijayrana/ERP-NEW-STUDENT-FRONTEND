import { Injectable } from '@angular/core';

export type PermissionAction =
  | 'view'
  | 'create'
  | 'edit'
  | 'delete'
  | 'deactivate'
  | 'export'
  | 'print'
  | 'approve'
  | 'unlock';

export type ErpModule =
  | 'dashboard'
  | 'academic_year'
  | 'classes'
  | 'teachers'
  | 'students'
  | 'users'
  | 'roles'
  | 'attendance'
  | 'fees'
  | 'fee_prediction'
  | 'admission_assistant'
  | 'timetable_generator'
  | 'payroll'
  | 'timetable'
  | 'exams'
  | 'reports'
  | 'transport'
  | 'drivers'
  | 'governance';

export interface ModulePermissions {
  view?: boolean;
  create?: boolean;
  edit?: boolean;
  delete?: boolean;
  deactivate?: boolean;
  export?: boolean;
  print?: boolean;
  approve?: boolean;
  unlock?: boolean;
}

export type PermissionMatrix = Record<string, ModulePermissions>;

export const TAB_MODULE_MAP: Record<string, ErpModule> = {
  dashboard: 'dashboard',
  students: 'students',
  classes: 'classes',
  teachers: 'teachers',
  fees: 'fees',
  'fee-prediction': 'fee_prediction',
  'admission-assistant': 'admission_assistant',
  'timetable-generator': 'timetable_generator',
  payroll: 'payroll',
  transport: 'transport',
  drivers: 'drivers',
  promotion: 'students',
  attendance: 'attendance',
  timetable: 'timetable',
  exams: 'exams',
  profile: 'students',
  users: 'users',
  reports: 'reports'
};

/** Tabs each self-service role may see (in addition to module permissions). */
export const ROLE_TAB_ALLOWLIST: Partial<Record<string, string[]>> = {
  student: ['dashboard', 'profile', 'fees', 'attendance', 'exams'],
  parent: ['dashboard', 'profile', 'fees', 'attendance', 'exams']
};

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private permissions: PermissionMatrix = {};

  setPermissions(permissions?: PermissionMatrix): void {
    this.permissions = permissions || {};
  }

  clear(): void {
    this.permissions = {};
  }

  can(module: ErpModule | string, action: PermissionAction, role?: string): boolean {
    if (role === 'super_admin') return true;
    return !!this.permissions?.[module]?.[action];
  }

  canViewTab(tabKey: string, role?: string): boolean {
    const module = TAB_MODULE_MAP[tabKey];
    if (!module) return false;
    const allowlist = role ? ROLE_TAB_ALLOWLIST[role] : undefined;
    if (allowlist && !allowlist.includes(tabKey)) return false;
    return this.can(module, 'view', role);
  }

  canViewSensitivePii(module: ErpModule | string, role?: string): boolean {
    if (role === 'super_admin' || role === 'admin' || role === 'principal') return true;
    return this.can(module, 'edit', role);
  }
}
