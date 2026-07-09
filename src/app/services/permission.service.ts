import { Injectable } from '@angular/core';

export type PermissionAction = 'view' | 'create' | 'edit' | 'deactivate' | 'export' | 'approve';

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
  | 'payroll'
  | 'timetable'
  | 'exams'
  | 'reports'
  | 'transport';

export interface ModulePermissions {
  view?: boolean;
  create?: boolean;
  edit?: boolean;
  deactivate?: boolean;
  export?: boolean;
  approve?: boolean;
}

export type PermissionMatrix = Record<string, ModulePermissions>;

export const TAB_MODULE_MAP: Record<string, ErpModule> = {
  dashboard: 'dashboard',
  students: 'students',
  classes: 'classes',
  teachers: 'teachers',
  fees: 'fees',
  payroll: 'payroll',
  transport: 'transport',
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
  student: ['dashboard', 'profile', 'fees', 'attendance', 'timetable', 'exams'],
  parent: ['dashboard', 'profile', 'fees', 'attendance', 'timetable', 'exams']
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
}
