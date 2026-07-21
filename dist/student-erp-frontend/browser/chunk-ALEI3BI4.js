import {
  FieldErrorComponent
} from "./chunk-XC4GV5KT.js";
import {
  ActionBtnComponent
} from "./chunk-ZV26SCHX.js";
import {
  ListingToolbarComponent
} from "./chunk-7YTWMR26.js";
import {
  TableSkeletonComponent
} from "./chunk-XH4A25GQ.js";
import {
  PaginationBarComponent
} from "./chunk-NHO3MKXE.js";
import "./chunk-XUTYR2A2.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OSBRT6XZ.js";
import {
  EmptyStateComponent
} from "./chunk-E33DYKKS.js";
import {
  SpinnerComponent
} from "./chunk-PA65UFXL.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KJIDRE24.js";

// src/app/pages/users-page/users-page.component.ts
function UsersPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "app-spinner", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("show", true);
  }
}
function UsersPageComponent_ng_container_2_form_1_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275property("value", role_r4.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r4.name);
  }
}
function UsersPageComponent_ng_container_2_form_1_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1, "Super Admin");
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_form_1_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", teacher_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.teacherName(teacher_r5));
  }
}
function UsersPageComponent_ng_container_2_form_1_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", student_r6._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r6.admissionNumber, " - ", ctx_r2.vm.studentName(student_r6), "");
  }
}
function UsersPageComponent_ng_container_2_form_1_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", student_r7._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r7.admissionNumber, " - ", ctx_r2.vm.studentName(student_r7), "");
  }
}
function UsersPageComponent_ng_container_2_form_1_div_51_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 47)(1, "input", 48);
    \u0275\u0275listener("change", function UsersPageComponent_ng_container_2_form_1_div_51_label_4_Template_input_change_1_listener() {
      const student_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.toggleParentChild(student_r9._id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.vm.parentLinkedStudentIds.has(student_r9._id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", student_r9.admissionNumber, " - ", ctx_r2.vm.studentName(student_r9), "");
  }
}
function UsersPageComponent_ng_container_2_form_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "label", 44);
    \u0275\u0275text(2, "Link additional children");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275template(4, UsersPageComponent_ng_container_2_form_1_div_51_label_4_Template, 4, 3, "label", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.vm.studentPickerOptions);
  }
}
function UsersPageComponent_ng_container_2_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 22);
    \u0275\u0275listener("ngSubmit", function UsersPageComponent_ng_container_2_form_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.saveUser());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "div")(3, "p", 8);
    \u0275\u0275text(4, "Access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Create role login");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 23)(8, "label", 24)(9, "span", 25);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "app-field-error", 27);
    \u0275\u0275elementStart(13, "label", 24)(14, "span", 25);
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "app-field-error", 29);
    \u0275\u0275elementStart(18, "label", 24)(19, "span", 25);
    \u0275\u0275text(20, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "app-field-error", 31);
    \u0275\u0275elementStart(23, "label", 24)(24, "span", 25);
    \u0275\u0275text(25, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 32);
    \u0275\u0275template(27, UsersPageComponent_ng_container_2_form_1_option_27_Template, 2, 2, "option", 13)(28, UsersPageComponent_ng_container_2_form_1_option_28_Template, 2, 0, "option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "label", 34);
    \u0275\u0275element(30, "input", 35);
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "Issue temporary password (user must change on first login)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "label");
    \u0275\u0275text(34, "Teacher profile");
    \u0275\u0275elementStart(35, "select", 36)(36, "option", 12);
    \u0275\u0275text(37, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, UsersPageComponent_ng_container_2_form_1_option_38_Template, 2, 2, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "label");
    \u0275\u0275text(40, "Student profile");
    \u0275\u0275elementStart(41, "select", 37)(42, "option", 12);
    \u0275\u0275text(43, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, UsersPageComponent_ng_container_2_form_1_option_44_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label");
    \u0275\u0275text(46, "Linked child (for parent)");
    \u0275\u0275elementStart(47, "select", 38)(48, "option", 12);
    \u0275\u0275text(49, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, UsersPageComponent_ng_container_2_form_1_option_50_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(51, UsersPageComponent_ng_container_2_form_1_div_51_Template, 5, 1, "div", 39);
    \u0275\u0275elementStart(52, "div", 40)(53, "button", 41);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.userForm);
    \u0275\u0275advance(12);
    \u0275\u0275property("control", ctx_r2.vm.userForm.get("name"));
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r2.vm.userForm.get("email"));
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r2.vm.userForm.get("password"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.vm.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r2.vm.teachers);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.vm.studentPickerOptions);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.vm.studentPickerOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r2.vm.userForm.get("role")) == null ? null : tmp_11_0.value) === "parent");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.vm.userForm.invalid || ctx_r2.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.saveButtonLabel("Create account"));
  }
}
function UsersPageComponent_ng_container_2_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    \u0275\u0275property("value", role_r10.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r10.name);
  }
}
function UsersPageComponent_ng_container_2_div_25_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 59);
    \u0275\u0275listener("clicked", function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_2_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r12);
      const user_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.issueTemporaryPassword(user_r13.id || user_r13._id));
    });
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 60);
    \u0275\u0275listener("clicked", function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_3_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r14);
      const user_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.unlockUserAccount(user_r13.id || user_r13._id));
    });
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 61);
    \u0275\u0275listener("clicked", function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_4_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r15);
      const user_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.deactivateUserAccount(user_r13.id || user_r13._id));
    });
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 62);
    \u0275\u0275listener("clicked", function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_5_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r16);
      const user_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.deleteUserAccount(user_r13.id || user_r13._id));
    });
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_14_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "div", 54);
    \u0275\u0275template(2, UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_2_Template, 1, 0, "app-action-btn", 55)(3, UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_3_Template, 1, 0, "app-action-btn", 56)(4, UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_4_Template, 1, 0, "app-action-btn", 57)(5, UsersPageComponent_ng_container_2_div_25_tr_14_td_11_app_action_btn_5_Template, 1, 0, "app-action-btn", 58);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.vm.can("users", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("users", "unlock") && user_r13.lockedUntil);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", user_r13.isActive !== false && ctx_r2.vm.can("users", "deactivate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin);
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "span", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, UsersPageComponent_ng_container_2_div_25_tr_14_td_11_Template, 6, 4, "td", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r13.email);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("data-role", user_r13.role);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.roleLabelFor(user_r13.role));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", user_r13.isActive === false ? "inactive" : "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r13.isActive === false ? "inactive" : "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("users", "deactivate") || ctx_r2.vm.can("users", "edit") || ctx_r2.vm.can("users", "unlock"));
  }
}
function UsersPageComponent_ng_container_2_div_25_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "app-empty-state", 63);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.vm.can("users", "deactivate") ? 5 : 4);
  }
}
function UsersPageComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "table")(2, "thead")(3, "tr")(4, "th", 50);
    \u0275\u0275listener("click", function UsersPageComponent_ng_container_2_div_25_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("users", "name"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 50);
    \u0275\u0275listener("click", function UsersPageComponent_ng_container_2_div_25_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("users", "email"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 50);
    \u0275\u0275listener("click", function UsersPageComponent_ng_container_2_div_25_Template_th_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("users", "role"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 50);
    \u0275\u0275listener("click", function UsersPageComponent_ng_container_2_div_25_Template_th_click_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("users", "status"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UsersPageComponent_ng_container_2_div_25_th_12_Template, 2, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, UsersPageComponent_ng_container_2_div_25_tr_14_Template, 12, 7, "tr", 51)(15, UsersPageComponent_ng_container_2_div_25_tr_15_Template, 3, 1, "tr", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Name", ctx_r2.vm.listSortIndicator("users", "name"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Email", ctx_r2.vm.listSortIndicator("users", "email"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Role", ctx_r2.vm.listSortIndicator("users", "role"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status", ctx_r2.vm.listSortIndicator("users", "status"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("users", "deactivate") || ctx_r2.vm.can("users", "edit") || ctx_r2.vm.can("users", "unlock"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("users", ctx_r2.vm.sortedUsers));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.sortedUsers.length && !ctx_r2.vm.isListingLoading("users"));
  }
}
function UsersPageComponent_ng_container_2_app_table_skeleton_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 64);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 5)("rows", 6);
  }
}
function UsersPageComponent_ng_container_2_section_28_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r18 = ctx.$implicit;
    \u0275\u0275property("value", role_r18.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", role_r18.name, " (", role_r18.slug, ")");
  }
}
function UsersPageComponent_ng_container_2_section_28_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function UsersPageComponent_ng_container_2_section_28_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.saveRolePermissions());
    });
    \u0275\u0275text(1, "Save permissions");
    \u0275\u0275elementEnd();
  }
}
function UsersPageComponent_ng_container_2_section_28_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 71);
    \u0275\u0275listener("ngSubmit", function UsersPageComponent_ng_container_2_section_28_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.createRole());
    });
    \u0275\u0275elementStart(1, "label");
    \u0275\u0275text(2, "Role slug");
    \u0275\u0275element(3, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Role name");
    \u0275\u0275element(6, "input", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Description");
    \u0275\u0275element(9, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 41);
    \u0275\u0275text(11, "Create role");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r2.vm.roleForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r2.vm.roleForm.invalid);
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const action_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(action_r21);
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_tr_9_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 78);
    \u0275\u0275listener("change", function UsersPageComponent_ng_container_2_section_28_div_14_tr_9_td_3_Template_input_change_1_listener() {
      const action_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const module_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.toggleRolePermission(module_r24, action_r23));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const action_r23 = ctx.$implicit;
    const module_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.vm.editablePermissions[module_r24] == null ? null : ctx_r2.vm.editablePermissions[module_r24][action_r23])("disabled", !ctx_r2.vm.isSuperAdmin);
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_tr_9_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, UsersPageComponent_ng_container_2_section_28_div_14_tr_9_td_3_Template, 2, 2, "td", 51)(4, UsersPageComponent_ng_container_2_section_28_div_14_tr_9_td_4_Template, 1, 0, "td", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r24.replace("_", " "));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.permissionSchema.actions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin);
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "button", 79);
    \u0275\u0275listener("click", function UsersPageComponent_ng_container_2_section_28_div_14_div_10_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.deleteRole(ctx_r2.vm.selectedRoleSlug));
    });
    \u0275\u0275text(2, "Delete role");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.vm.isSystemRole(ctx_r2.vm.selectedRoleSlug));
  }
}
function UsersPageComponent_ng_container_2_section_28_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "table", 76)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, UsersPageComponent_ng_container_2_section_28_div_14_th_6_Template, 2, 1, "th", 51)(7, UsersPageComponent_ng_container_2_section_28_div_14_th_7_Template, 1, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tbody");
    \u0275\u0275template(9, UsersPageComponent_ng_container_2_section_28_div_14_tr_9_Template, 5, 3, "tr", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, UsersPageComponent_ng_container_2_section_28_div_14_div_10_Template, 3, 1, "div", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.vm.permissionSchema.actions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.vm.permissionSchema.modules);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin);
  }
}
function UsersPageComponent_ng_container_2_section_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 65)(1, "div", 7)(2, "div")(3, "p", 8);
    \u0275\u0275text(4, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Permission matrix");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 66)(8, "select", 11);
    \u0275\u0275listener("change", function UsersPageComponent_ng_container_2_section_28_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.selectRoleForEdit($event.target.value));
    });
    \u0275\u0275elementStart(9, "option", 12);
    \u0275\u0275text(10, "Select role");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, UsersPageComponent_ng_container_2_section_28_option_11_Template, 2, 3, "option", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, UsersPageComponent_ng_container_2_section_28_button_12_Template, 2, 0, "button", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, UsersPageComponent_ng_container_2_section_28_form_13_Template, 12, 2, "form", 68)(14, UsersPageComponent_ng_container_2_section_28_div_14_Template, 11, 4, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r2.vm.selectedRoleSlug);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.roles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin && ctx_r2.vm.selectedRoleSlug);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isSuperAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.selectedRoleSlug && ctx_r2.vm.permissionSchema.modules.length);
  }
}
function UsersPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, UsersPageComponent_ng_container_2_form_1_Template, 55, 12, "form", 5);
    \u0275\u0275elementStart(2, "section", 6)(3, "div", 7)(4, "div")(5, "p", 8);
    \u0275\u0275text(6, "Accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "User directory");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "app-listing-toolbar", 9);
    \u0275\u0275listener("searchChange", function UsersPageComponent_ng_container_2_Template_app_listing_toolbar_searchChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListSearch("users", "userSearch", $event));
    })("refresh", function UsersPageComponent_ng_container_2_Template_app_listing_toolbar_refresh_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.refreshListing("users"));
    })("exportCsv", function UsersPageComponent_ng_container_2_Template_app_listing_toolbar_exportCsv_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.exportUsersCsv());
    })("exportPdf", function UsersPageComponent_ng_container_2_Template_app_listing_toolbar_exportPdf_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.exportUsersPdf());
    });
    \u0275\u0275elementStart(10, "div", 10)(11, "select", 11);
    \u0275\u0275listener("change", function UsersPageComponent_ng_container_2_Template_select_change_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("users", "userRole", $event.target.value));
    });
    \u0275\u0275elementStart(12, "option", 12);
    \u0275\u0275text(13, "All roles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, UsersPageComponent_ng_container_2_option_14_Template, 2, 2, "option", 13);
    \u0275\u0275elementStart(15, "option", 14);
    \u0275\u0275text(16, "Super Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 11);
    \u0275\u0275listener("change", function UsersPageComponent_ng_container_2_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("users", "userStatus", $event.target.value));
    });
    \u0275\u0275elementStart(18, "option", 12);
    \u0275\u0275text(19, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 15);
    \u0275\u0275text(21, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 16);
    \u0275\u0275text(23, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275template(25, UsersPageComponent_ng_container_2_div_25_Template, 16, 7, "div", 18)(26, UsersPageComponent_ng_container_2_app_table_skeleton_26_Template, 1, 2, "app-table-skeleton", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "app-pagination-bar", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, UsersPageComponent_ng_container_2_section_28_Template, 15, 5, "section", 21);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("users", "create"));
    \u0275\u0275advance();
    \u0275\u0275classProp("span-8", ctx_r2.vm.can("users", "create"))("span-12", !ctx_r2.vm.can("users", "create"));
    \u0275\u0275advance(7);
    \u0275\u0275property("searchValue", ctx_r2.vm.filters.userSearch)("loading", ctx_r2.vm.isListingLoading("users"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.vm.filters.userRole);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.roles);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.vm.filters.userStatus);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("users"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("users") || ctx_r2.vm.sortedUsers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isListingLoading("users") && !ctx_r2.vm.sortedUsers.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("roles", "view"));
  }
}
var UsersPageComponent = class _UsersPageComponent {
  vm;
  static \u0275fac = function UsersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersPageComponent, selectors: [["app-users-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading user accounts...", 3, "show"], ["class", "panel span-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "data-card"], [1, "section-head"], [1, "eyebrow"], ["searchPlaceholder", "Search name or email", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["listing-filters", "", 1, "listing-filters"], [1, "filter-select", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "super_admin"], ["value", "active"], ["value", "inactive"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", 4, "ngIf"], ["listKey", "users", 3, "vm", "items"], ["class", "panel span-12", 4, "ngIf"], [1, "panel", "span-4", 3, "ngSubmit", "formGroup"], [1, "form-grid", "compact"], [1, "required"], [1, "label-text"], ["formControlName", "name"], ["label", "Name", 3, "control"], ["type", "email", "formControlName", "email"], ["label", "Email", 3, "control"], ["type", "password", "formControlName", "password"], ["label", "Password", 3, "control"], ["formControlName", "role"], ["value", "super_admin", 4, "ngIf"], [1, "checkbox-row"], ["type", "checkbox", "formControlName", "useTemporaryPassword"], ["formControlName", "teacher"], ["formControlName", "student"], ["formControlName", "linkedStudent"], ["class", "multi-child-select", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 3, "disabled"], [3, "value"], [1, "multi-child-select"], [1, "multi-label"], [1, "multi-child-list"], ["class", "child-check-row", 4, "ngFor", "ngForOf"], [1, "child-check-row"], ["type", "checkbox", 3, "change", "checked"], [1, "table-wrap", "sticky-header"], [1, "sortable", 3, "click"], [4, "ngFor", "ngForOf"], [1, "role-pill", "small"], [1, "status-badge", 3, "ngClass"], [1, "table-actions"], ["type", "edit", "label", "Temp password", 3, "clicked", 4, "ngIf"], ["type", "unlock", "label", "Unlock", 3, "clicked", 4, "ngIf"], ["type", "deactivate", 3, "clicked", 4, "ngIf"], ["type", "delete", 3, "clicked", 4, "ngIf"], ["type", "edit", "label", "Temp password", 3, "clicked"], ["type", "unlock", "label", "Unlock", 3, "clicked"], ["type", "deactivate", 3, "clicked"], ["type", "delete", 3, "clicked"], ["title", "No user accounts", "message", "Create role-based logins to grant staff access to ERP modules."], [3, "columns", "rows"], [1, "panel", "span-12"], [1, "toolbar"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["class", "role-create-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "table-wrap permission-matrix-wrap", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "role-create-form", 3, "ngSubmit", "formGroup"], ["formControlName", "slug", "placeholder", "custom_role"], ["formControlName", "name", "placeholder", "Custom Role"], ["formControlName", "description"], [1, "table-wrap", "permission-matrix-wrap"], [1, "permission-matrix"], ["class", "form-actions", 4, "ngIf"], ["type", "checkbox", 3, "change", "checked", "disabled"], ["type", "button", 1, "danger-btn", "small", 3, "click", "disabled"]], template: function UsersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, UsersPageComponent_div_1_Template, 2, 1, "div", 1)(2, UsersPageComponent_ng_container_2_Template, 29, 17, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.users.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.users.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, ListingToolbarComponent, PaginationBarComponent, SpinnerComponent, FieldErrorComponent, EmptyStateComponent, TableSkeletonComponent, ActionBtnComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersPageComponent, { className: "UsersPageComponent", filePath: "src\\app\\pages\\users-page\\users-page.component.ts", lineNumber: 19 });
})();
export {
  UsersPageComponent
};
//# sourceMappingURL=chunk-ALEI3BI4.js.map
