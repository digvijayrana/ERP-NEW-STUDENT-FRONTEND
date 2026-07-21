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
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
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
  CurrencyPipe,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KJIDRE24.js";

// src/app/pages/payroll-page/payroll-page.component.ts
function PayrollPageComponent_div_1_Template(rf, ctx) {
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
function PayrollPageComponent_ng_container_2_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", teacher_r3._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.vm.teacherName(teacher_r3), " (", teacher_r3.employeeCode, ")");
  }
}
function PayrollPageComponent_ng_container_2_div_73_div_1_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PayrollPageComponent_ng_container_2_div_73_div_1_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const payroll_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.markPayrollPaid(payroll_r6._id));
    });
    \u0275\u0275text(1, "Mark as Paid");
    \u0275\u0275elementEnd();
  }
}
function PayrollPageComponent_ng_container_2_div_73_div_1_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function PayrollPageComponent_ng_container_2_div_73_div_1_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const payroll_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.editPayroll(payroll_r6));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
}
function PayrollPageComponent_ng_container_2_div_73_div_1_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function PayrollPageComponent_ng_container_2_div_73_div_1_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const payroll_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.deletePayroll(payroll_r6._id));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function PayrollPageComponent_ng_container_2_div_73_div_1_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function PayrollPageComponent_ng_container_2_div_73_div_1_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const payroll_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.unlockPayroll(payroll_r6._id));
    });
    \u0275\u0275text(1, "Unlock");
    \u0275\u0275elementEnd();
  }
}
function PayrollPageComponent_ng_container_2_div_73_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div")(3, "div", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 36);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 37)(10, "div", 38)(11, "span");
    \u0275\u0275text(12, "Basic Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 39)(17, "span");
    \u0275\u0275text(18, "+ Allowances");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 40)(23, "span");
    \u0275\u0275text(24, "- Deductions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 41)(29, "span");
    \u0275\u0275text(30, "Net Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 42);
    \u0275\u0275template(35, PayrollPageComponent_ng_container_2_div_73_div_1_button_35_Template, 2, 0, "button", 43);
    \u0275\u0275elementStart(36, "button", 44);
    \u0275\u0275listener("click", function PayrollPageComponent_ng_container_2_div_73_div_1_Template_button_click_36_listener() {
      const payroll_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.openPayrollPdf(payroll_r6._id));
    });
    \u0275\u0275text(37, "Download Slip");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, PayrollPageComponent_ng_container_2_div_73_div_1_button_38_Template, 2, 0, "button", 45)(39, PayrollPageComponent_ng_container_2_div_73_div_1_button_39_Template, 2, 0, "button", 46)(40, PayrollPageComponent_ng_container_2_div_73_div_1_button_40_Template, 2, 0, "button", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const payroll_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vm.payrollTeacherName(payroll_r6.teacher));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.vm.getMonthName(payroll_r6.month), " ", payroll_r6.year, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", payroll_r6.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(payroll_r6.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 13, payroll_r6.basicSalary, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 16, payroll_r6.allowances, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 19, payroll_r6.deductions, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 22, payroll_r6.basicSalary + payroll_r6.allowances - payroll_r6.deductions, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payroll_r6.status === "pending");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", payroll_r6.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payroll_r6.status === "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payroll_r6.status === "paid" && payroll_r6.locked && ctx_r1.vm.can("payroll", "unlock"));
  }
}
function PayrollPageComponent_ng_container_2_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, PayrollPageComponent_ng_container_2_div_73_div_1_Template, 41, 25, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vm.paged("payroll", ctx_r1.vm.sortedPayrolls));
  }
}
function PayrollPageComponent_ng_container_2_app_table_skeleton_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 49);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 4)("rows", 4);
  }
}
function PayrollPageComponent_ng_container_2_app_empty_state_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 50);
  }
}
function PayrollPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 5);
    \u0275\u0275listener("ngSubmit", function PayrollPageComponent_ng_container_2_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.savePayroll());
    });
    \u0275\u0275elementStart(2, "div", 6)(3, "div")(4, "p", 7);
    \u0275\u0275text(5, "Payroll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 8)(9, "label");
    \u0275\u0275text(10, "Teacher ");
    \u0275\u0275elementStart(11, "select", 9)(12, "option", 10);
    \u0275\u0275text(13, "Select teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PayrollPageComponent_ng_container_2_option_14_Template, 2, 3, "option", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label");
    \u0275\u0275text(16, "Month ");
    \u0275\u0275elementStart(17, "select", 12)(18, "option", 13);
    \u0275\u0275text(19, "January");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 13);
    \u0275\u0275text(21, "February");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 13);
    \u0275\u0275text(23, "March");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 13);
    \u0275\u0275text(25, "April");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 13);
    \u0275\u0275text(27, "May");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 13);
    \u0275\u0275text(29, "June");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 13);
    \u0275\u0275text(31, "July");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 13);
    \u0275\u0275text(33, "August");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 13);
    \u0275\u0275text(35, "September");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 13);
    \u0275\u0275text(37, "October");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 13);
    \u0275\u0275text(39, "November");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 13);
    \u0275\u0275text(41, "December");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "label");
    \u0275\u0275text(43, "Year");
    \u0275\u0275element(44, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "label");
    \u0275\u0275text(46, "Basic salary (\u20B9)");
    \u0275\u0275element(47, "input", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "label");
    \u0275\u0275text(49, "Allowances (\u20B9)");
    \u0275\u0275element(50, "input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label");
    \u0275\u0275text(52, "Deductions (\u20B9)");
    \u0275\u0275element(53, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "button", 18);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "section", 19)(57, "div", 6)(58, "div")(59, "p", 7);
    \u0275\u0275text(60, "Salary Records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "h3");
    \u0275\u0275text(62, "Payroll History");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "app-listing-toolbar", 20);
    \u0275\u0275listener("searchChange", function PayrollPageComponent_ng_container_2_Template_app_listing_toolbar_searchChange_63_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListSearch("payroll", "payrollSearch", $event));
    })("refresh", function PayrollPageComponent_ng_container_2_Template_app_listing_toolbar_refresh_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.refreshListing("payroll"));
    })("exportCsv", function PayrollPageComponent_ng_container_2_Template_app_listing_toolbar_exportCsv_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportPayrollsCsv());
    })("exportPdf", function PayrollPageComponent_ng_container_2_Template_app_listing_toolbar_exportPdf_63_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportPayrollsPdf());
    });
    \u0275\u0275elementStart(64, "div", 21)(65, "select", 22);
    \u0275\u0275listener("change", function PayrollPageComponent_ng_container_2_Template_select_change_65_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("payroll", "payrollStatus", $event.target.value));
    });
    \u0275\u0275elementStart(66, "option", 10);
    \u0275\u0275text(67, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "option", 23);
    \u0275\u0275text(69, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 24);
    \u0275\u0275text(71, "Paid");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(72, "div", 25);
    \u0275\u0275template(73, PayrollPageComponent_ng_container_2_div_73_Template, 2, 1, "div", 26)(74, PayrollPageComponent_ng_container_2_app_table_skeleton_74_Template, 1, 2, "app-table-skeleton", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, PayrollPageComponent_ng_container_2_app_empty_state_75_Template, 1, 0, "app-empty-state", 28);
    \u0275\u0275element(76, "app-pagination-bar", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.vm.payrollForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.vm.editingPayrollId ? "Update Salary Record" : "Create Salary Record");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.vm.teachers);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 6);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 8);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 9);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 11);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 12);
    \u0275\u0275advance(14);
    \u0275\u0275property("disabled", ctx_r1.vm.payrollForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.vm.editingPayrollId ? "Update" : "Create", " Salary Record");
    \u0275\u0275advance(8);
    \u0275\u0275property("searchValue", ctx_r1.vm.filters.payrollSearch)("loading", ctx_r1.vm.isListingLoading("payroll"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.vm.filters.payrollStatus);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-refreshing", ctx_r1.vm.isListingLoading("payroll"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isListingLoading("payroll") || ctx_r1.vm.sortedPayrolls.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isListingLoading("payroll") && !ctx_r1.vm.sortedPayrolls.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isListingLoading("payroll") && !ctx_r1.vm.sortedPayrolls.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r1.vm)("items", ctx_r1.vm.sortedPayrolls);
  }
}
var PayrollPageComponent = class _PayrollPageComponent {
  vm;
  static \u0275fac = function PayrollPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayrollPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayrollPageComponent, selectors: [["app-payroll-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading payroll records...", 3, "show"], [1, "panel", "span-12", 3, "ngSubmit", "formGroup"], [1, "section-head"], [1, "eyebrow"], [1, "form-grid", "compact"], ["formControlName", "teacher"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "month"], [3, "value"], ["type", "number", "formControlName", "year", "min", "2020", "max", "2099"], ["type", "number", "formControlName", "basicSalary", "min", "0"], ["type", "number", "formControlName", "allowances", "placeholder", "0", "min", "0"], ["type", "number", "formControlName", "deductions", "placeholder", "0", "min", "0"], ["type", "submit", 3, "disabled"], [1, "data-card", "span-12"], ["searchPlaceholder", "Search teacher name or employee code...", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["listing-filters", "", 1, "listing-filters"], [1, "filter-select", 3, "change", "value"], ["value", "pending"], ["value", "paid"], [1, "listing-table-panel"], ["class", "payroll-cards", 4, "ngIf"], [3, "columns", "rows", 4, "ngIf"], ["title", "No payroll records", "message", "Create a salary record using the form above or adjust your filters.", 4, "ngIf"], ["listKey", "payroll", 3, "vm", "items"], [1, "payroll-cards"], ["class", "payroll-card", 4, "ngFor", "ngForOf"], [1, "payroll-card"], [1, "pr-header"], [1, "pr-teacher"], [1, "pr-period"], [1, "status-badge", 3, "ngClass"], [1, "pr-breakdown"], [1, "pr-row"], [1, "pr-row", "success-text"], [1, "pr-row", "danger-text"], [1, "pr-row", "pr-total"], [1, "pr-actions"], ["type", "button", "class", "ghost small success-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["type", "button", "class", "danger-btn small", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", "success-btn", 3, "click"], ["type", "button", 1, "danger-btn", "small", 3, "click"], [3, "columns", "rows"], ["title", "No payroll records", "message", "Create a salary record using the form above or adjust your filters."]], template: function PayrollPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, PayrollPageComponent_div_1_Template, 2, 1, "div", 1)(2, PayrollPageComponent_ng_container_2_Template, 77, 27, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.payrolls.length && !ctx.vm.teachers.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.payrolls.length || ctx.vm.teachers.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CurrencyPipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, ListingToolbarComponent, TableSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayrollPageComponent, { className: "PayrollPageComponent", filePath: "src\\app\\pages\\payroll-page\\payroll-page.component.ts", lineNumber: 17 });
})();
export {
  PayrollPageComponent
};
//# sourceMappingURL=chunk-MMX5DIK3.js.map
