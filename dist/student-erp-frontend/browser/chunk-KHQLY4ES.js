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
  DatePipe,
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

// src/app/pages/classes-page/classes-page.component.ts
function ClassesPageComponent_div_1_Template(rf, ctx) {
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
function ClassesPageComponent_ng_container_2_form_1_label_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 35);
    \u0275\u0275element(1, "input", 36);
    \u0275\u0275text(2, " Set as active year on create ");
    \u0275\u0275elementEnd();
  }
}
function ClassesPageComponent_ng_container_2_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 22);
    \u0275\u0275listener("ngSubmit", function ClassesPageComponent_ng_container_2_form_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.saveAcademicYear());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Academic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 23)(8, "label", 24)(9, "span", 25);
    \u0275\u0275text(10, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "app-field-error", 27);
    \u0275\u0275elementStart(13, "label", 24)(14, "span", 25);
    \u0275\u0275text(15, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "app-field-error", 29);
    \u0275\u0275elementStart(18, "label", 24)(19, "span", 25);
    \u0275\u0275text(20, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "app-field-error", 31);
    \u0275\u0275template(23, ClassesPageComponent_ng_container_2_form_1_label_23_Template, 3, 0, "label", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 33)(25, "button", 34);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.academicYearForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.vm.editingAcademicYearId ? "Update academic year" : "New academic year");
    \u0275\u0275advance(6);
    \u0275\u0275property("control", ctx_r2.vm.academicYearForm.get("name"));
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r2.vm.academicYearForm.get("startDate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("min", (tmp_6_0 = ctx_r2.vm.academicYearForm.get("startDate")) == null ? null : tmp_6_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r2.vm.academicYearForm.get("endDate"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.editingAcademicYearId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.vm.academicYearForm.invalid || ctx_r2.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.saveButtonLabel(ctx_r2.vm.editingAcademicYearId ? "Update year" : "Create year"));
  }
}
function ClassesPageComponent_ng_container_2_section_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activeYear_r5 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", activeYear_r5.name, " \xB7 Active");
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 53);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_13_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r7);
      const year_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.editAcademicYear(year_r8));
    });
    \u0275\u0275elementEnd();
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 54);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_14_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r9);
      const year_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.activateAcademicYear(year_r8._id));
    });
    \u0275\u0275elementEnd();
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 55);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_15_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r10);
      const year_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.closeAcademicYear(year_r8._id));
    });
    \u0275\u0275elementEnd();
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 56);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_16_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r11);
      const year_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.deleteAcademicYear(year_r8._id));
    });
    \u0275\u0275elementEnd();
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td")(12, "div", 48);
    \u0275\u0275template(13, ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_13_Template, 1, 0, "app-action-btn", 49)(14, ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_14_Template, 1, 0, "app-action-btn", 50)(15, ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_15_Template, 1, 0, "app-action-btn", 51)(16, ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_app_action_btn_16_Template, 1, 0, "app-action-btn", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const year_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(year_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 9, year_r8.startDate, "MMM d, y"), " \u2014 ", \u0275\u0275pipeBind2(7, 12, year_r8.endDate, "MMM d, y"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r2.vm.yearStatus(year_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.yearStatus(year_r8));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r8) !== "closed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r8) === "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r8) === "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r8) !== "active");
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275element(2, "app-empty-state", 58);
    \u0275\u0275elementEnd()();
  }
}
function ClassesPageComponent_ng_container_2_section_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "table")(2, "thead")(3, "tr")(4, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_section_2_div_20_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("years", "name"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_section_2_div_20_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("years", "startDate"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_section_2_div_20_Template_th_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("years", "status"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, ClassesPageComponent_ng_container_2_section_2_div_20_tr_13_Template, 17, 15, "tr", 46)(14, ClassesPageComponent_ng_container_2_section_2_div_20_tr_14_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Name", ctx_r2.vm.listSortIndicator("years", "name"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Period", ctx_r2.vm.listSortIndicator("years", "startDate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status", ctx_r2.vm.listSortIndicator("years", "status"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("years", ctx_r2.vm.sortedYears));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.sortedYears.length && !ctx_r2.vm.isListingLoading("years"));
  }
}
function ClassesPageComponent_ng_container_2_section_2_app_table_skeleton_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 59);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 4)("rows", 5);
  }
}
function ClassesPageComponent_ng_container_2_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 37)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Academic year history");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ClassesPageComponent_ng_container_2_section_2_span_7_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-listing-toolbar", 39);
    \u0275\u0275listener("searchChange", function ClassesPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_searchChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListSearch("years", "yearSearch", $event));
    })("refresh", function ClassesPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_refresh_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.refreshListing("years"));
    })("exportCsv", function ClassesPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_exportCsv_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.exportYearsCsv());
    })("exportPdf", function ClassesPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_exportPdf_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.exportYearsPdf());
    });
    \u0275\u0275elementStart(9, "div", 12)(10, "select", 13);
    \u0275\u0275listener("change", function ClassesPageComponent_ng_container_2_section_2_Template_select_change_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("years", "yearStatus", $event.target.value));
    });
    \u0275\u0275elementStart(11, "option", 14);
    \u0275\u0275text(12, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 16);
    \u0275\u0275text(14, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 40);
    \u0275\u0275text(16, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 41);
    \u0275\u0275text(18, "Closed");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 18);
    \u0275\u0275template(20, ClassesPageComponent_ng_container_2_section_2_div_20_Template, 15, 5, "div", 19)(21, ClassesPageComponent_ng_container_2_section_2_app_table_skeleton_21_Template, 1, 2, "app-table-skeleton", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "app-pagination-bar", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.vm.activeAcademicYear);
    \u0275\u0275advance();
    \u0275\u0275property("searchValue", ctx_r2.vm.filters.yearSearch)("loading", ctx_r2.vm.isListingLoading("years"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.vm.filters.yearStatus);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("years"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("years") || ctx_r2.vm.sortedYears.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isListingLoading("years") && !ctx_r2.vm.sortedYears.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedYears);
  }
}
function ClassesPageComponent_ng_container_2_form_3_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("value", c_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13);
  }
}
function ClassesPageComponent_ng_container_2_form_3_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275property("value", s_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r14);
  }
}
function ClassesPageComponent_ng_container_2_form_3_option_35_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " (Active)");
    \u0275\u0275elementContainerEnd();
  }
}
function ClassesPageComponent_ng_container_2_form_3_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ClassesPageComponent_ng_container_2_form_3_option_35_ng_container_2_Template, 2, 0, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", year_r15._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r15.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r15) === "active");
  }
}
function ClassesPageComponent_ng_container_2_form_3_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", teacher_r16._id)("disabled", ctx_r2.vm.isTeacherAssignedToAnotherClass(teacher_r16._id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.classTeacherOptionLabel(teacher_r16));
  }
}
function ClassesPageComponent_ng_container_2_form_3_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "p", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Looking up Class ", (tmp_3_0 = ctx_r2.vm.classForm.get("name")) == null ? null : tmp_3_0.value, " fee structure\u2026");
  }
}
function ClassesPageComponent_ng_container_2_form_3_div_53_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "em", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r17.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r2.vm.feeCycleLabel(c_r17.frequency), ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, c_r17.amount, "INR"));
  }
}
function ClassesPageComponent_ng_container_2_form_3_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 78)(2, "span", 79);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 80);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 81);
    \u0275\u0275template(8, ClassesPageComponent_ng_container_2_form_3_div_53_div_8_Template, 8, 6, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 77);
    \u0275\u0275text(10, "Fee id is linked in the background. Applies to section ");
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Fee structure attached \u2014 Class ", (tmp_3_0 = ctx_r2.vm.classForm.get("name")) == null ? null : tmp_3_0.value, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, ctx_r2.vm.classFeeStructureTotal, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classFeeStructure == null ? null : ctx_r2.vm.classFeeStructure.components);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r2.vm.classForm.get("section")) == null ? null : tmp_6_0.value) || "\u2026");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" and every other section of Class ", (tmp_7_0 = ctx_r2.vm.classForm.get("name")) == null ? null : tmp_7_0.value, ". Monthly tuition: ", \u0275\u0275pipeBind2(14, 9, ctx_r2.vm.classFeeMonthlyTuition, "INR"), "/mo.");
  }
}
function ClassesPageComponent_ng_container_2_form_3_p_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Fees \u2192 Fee Structure");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ", or enter a monthly tuition above. Once a structure is saved, every new section of this class will inherit it automatically.");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No fee structure found for Class ", (tmp_3_0 = ctx_r2.vm.classForm.get("name")) == null ? null : tmp_3_0.value, ". Define one in ");
  }
}
function ClassesPageComponent_ng_container_2_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 60);
    \u0275\u0275listener("ngSubmit", function ClassesPageComponent_ng_container_2_form_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.saveClass());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Class & section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 23)(8, "label", 24)(9, "span", 25);
    \u0275\u0275text(10, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 61);
    \u0275\u0275listener("change", function ClassesPageComponent_ng_container_2_form_3_Template_select_change_11_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onClassSelectionChange());
    });
    \u0275\u0275elementStart(12, "option", 14);
    \u0275\u0275text(13, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ClassesPageComponent_ng_container_2_form_3_option_14_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "app-field-error", 62);
    \u0275\u0275elementStart(16, "label", 24)(17, "span", 25);
    \u0275\u0275text(18, "Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 63);
    \u0275\u0275listener("change", function ClassesPageComponent_ng_container_2_form_3_Template_select_change_19_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onClassSelectionChange());
    });
    \u0275\u0275elementStart(20, "option", 14);
    \u0275\u0275text(21, "Select section");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ClassesPageComponent_ng_container_2_form_3_option_22_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "app-field-error", 64);
    \u0275\u0275elementStart(24, "label", 24)(25, "span", 25);
    \u0275\u0275text(26, "Maximum capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "app-field-error", 66);
    \u0275\u0275elementStart(29, "label", 24)(30, "span", 25);
    \u0275\u0275text(31, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 67);
    \u0275\u0275listener("change", function ClassesPageComponent_ng_container_2_form_3_Template_select_change_32_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onClassSelectionChange());
    });
    \u0275\u0275elementStart(33, "option", 14);
    \u0275\u0275text(34, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, ClassesPageComponent_ng_container_2_form_3_option_35_Template, 3, 3, "option", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "app-field-error", 68);
    \u0275\u0275elementStart(37, "label")(38, "span", 25);
    \u0275\u0275text(39, "Class teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "select", 69)(41, "option", 14);
    \u0275\u0275text(42, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, ClassesPageComponent_ng_container_2_form_3_option_43_Template, 2, 3, "option", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "label", 24)(45, "span", 25);
    \u0275\u0275text(46, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 71)(48, "option", 16);
    \u0275\u0275text(49, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 17);
    \u0275\u0275text(51, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, ClassesPageComponent_ng_container_2_form_3_div_52_Template, 3, 1, "div", 72)(53, ClassesPageComponent_ng_container_2_form_3_div_53_Template, 15, 12, "div", 72)(54, ClassesPageComponent_ng_container_2_form_3_p_54_Template, 5, 1, "p", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 33)(56, "button", 34);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.classForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.vm.editingClassId ? "Update class" : "Class configuration");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classNameOptions);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r2.vm.classForm.get("name"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.vm.sectionOptions);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r2.vm.classForm.get("section"));
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r2.vm.classForm.get("capacity"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.vm.openYears);
    \u0275\u0275advance();
    \u0275\u0275property("control", ctx_r2.vm.classForm.get("academicYear"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.vm.teachers);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.vm.classFeeStructureLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.classFeeStructureLoading && ctx_r2.vm.classHasFeeStructure);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.classFeeStructureLoading && !ctx_r2.vm.classHasFeeStructure && ((tmp_14_0 = ctx_r2.vm.classForm.get("name")) == null ? null : tmp_14_0.value) && ((tmp_14_0 = ctx_r2.vm.classForm.get("academicYear")) == null ? null : tmp_14_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.vm.classForm.invalid || ctx_r2.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.saveButtonLabel(ctx_r2.vm.editingClassId ? "Update class" : "Save class"));
  }
}
function ClassesPageComponent_ng_container_2_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r18 = ctx.$implicit;
    \u0275\u0275property("value", year_r18._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r18.name);
  }
}
function ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 53);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_20_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r20);
      const room_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.editClass(room_r21));
    });
    \u0275\u0275elementEnd();
  }
}
function ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 88);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_21_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r22);
      const room_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleClassStatus(room_r21._id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("type", (room_r21.status || "active") === "active" ? "deactivate" : "activate")("label", (room_r21.status || "active") === "active" ? "Deactivate" : "Activate");
  }
}
function ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 89);
    \u0275\u0275listener("clicked", function ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_22_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r23);
      const room_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.deleteClass(room_r21._id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const room_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ((tmp_5_0 = room_r21.studentCount) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : ctx_r2.vm.getClassStudentCount(room_r21._id)) > 0);
  }
}
function ClassesPageComponent_ng_container_2_div_25_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 47);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 48);
    \u0275\u0275template(20, ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_20_Template, 1, 0, "app-action-btn", 49)(21, ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_21_Template, 1, 2, "app-action-btn", 86)(22, ClassesPageComponent_ng_container_2_div_25_tr_21_app_action_btn_22_Template, 1, 1, "app-action-btn", 87);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const room_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", room_r21.name, "-", room_r21.section, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.classYearName(room_r21));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.teacherName(room_r21.classTeacher));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (tmp_7_0 = room_r21.studentCount) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ctx_r2.vm.getClassStudentCount(room_r21._id), " / ", room_r21.capacity || 0, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.getClassAvailableCapacity(room_r21));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 13, room_r21.monthlyFee, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", room_r21.status || "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(room_r21.status || "active");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin && !ctx_r2.vm.isClassYearClosed(room_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin && !ctx_r2.vm.isClassYearClosed(room_r21));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
  }
}
function ClassesPageComponent_ng_container_2_div_25_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275element(2, "app-empty-state", 91);
    \u0275\u0275elementEnd()();
  }
}
function ClassesPageComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44)(1, "table")(2, "thead")(3, "tr")(4, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_div_25_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("classes", "class"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_div_25_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("classes", "academicYear"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_div_25_Template_th_click_8_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("classes", "teacher"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_div_25_Template_th_click_14_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("classes", "monthlyFee"));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 45);
    \u0275\u0275listener("click", function ClassesPageComponent_ng_container_2_div_25_Template_th_click_16_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("classes", "status"));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, ClassesPageComponent_ng_container_2_div_25_tr_21_Template, 23, 16, "tr", 46)(22, ClassesPageComponent_ng_container_2_div_25_tr_22_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Class", ctx_r2.vm.listSortIndicator("classes", "class"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Academic Year", ctx_r2.vm.listSortIndicator("classes", "academicYear"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Teacher", ctx_r2.vm.listSortIndicator("classes", "teacher"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Monthly fee", ctx_r2.vm.listSortIndicator("classes", "monthlyFee"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status", ctx_r2.vm.listSortIndicator("classes", "status"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("classes", ctx_r2.vm.sortedClasses));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.sortedClasses.length && !ctx_r2.vm.isListingLoading("classes"));
  }
}
function ClassesPageComponent_ng_container_2_app_table_skeleton_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 59);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 8)("rows", 6);
  }
}
function ClassesPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ClassesPageComponent_ng_container_2_form_1_Template, 27, 9, "form", 5)(2, ClassesPageComponent_ng_container_2_section_2_Template, 23, 10, "section", 6)(3, ClassesPageComponent_ng_container_2_form_3_Template, 58, 15, "form", 7);
    \u0275\u0275elementStart(4, "section", 8)(5, "div", 9)(6, "div")(7, "p", 10);
    \u0275\u0275text(8, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10, "Classes and sections");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "app-listing-toolbar", 11);
    \u0275\u0275listener("searchChange", function ClassesPageComponent_ng_container_2_Template_app_listing_toolbar_searchChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListSearch("classes", "classSearch", $event));
    })("refresh", function ClassesPageComponent_ng_container_2_Template_app_listing_toolbar_refresh_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.refreshListing("classes"));
    })("exportCsv", function ClassesPageComponent_ng_container_2_Template_app_listing_toolbar_exportCsv_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.exportClassesCsv());
    })("exportPdf", function ClassesPageComponent_ng_container_2_Template_app_listing_toolbar_exportPdf_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.exportClassesPdf());
    });
    \u0275\u0275elementStart(12, "div", 12)(13, "select", 13);
    \u0275\u0275listener("change", function ClassesPageComponent_ng_container_2_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("classes", "classYear", $event.target.value));
    });
    \u0275\u0275elementStart(14, "option", 14);
    \u0275\u0275text(15, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ClassesPageComponent_ng_container_2_option_16_Template, 2, 2, "option", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 13);
    \u0275\u0275listener("change", function ClassesPageComponent_ng_container_2_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("classes", "classStatus", $event.target.value));
    });
    \u0275\u0275elementStart(18, "option", 14);
    \u0275\u0275text(19, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 16);
    \u0275\u0275text(21, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 17);
    \u0275\u0275text(23, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275template(25, ClassesPageComponent_ng_container_2_div_25_Template, 23, 7, "div", 19)(26, ClassesPageComponent_ng_container_2_app_table_skeleton_26_Template, 1, 2, "app-table-skeleton", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "app-pagination-bar", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance(8);
    \u0275\u0275property("searchValue", ctx_r2.vm.filters.classSearch)("loading", ctx_r2.vm.isListingLoading("classes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.vm.filters.classYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.years);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.classStatus);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("classes"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("classes") || ctx_r2.vm.sortedClasses.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isListingLoading("classes") && !ctx_r2.vm.sortedClasses.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedClasses);
  }
}
var ClassesPageComponent = class _ClassesPageComponent {
  vm;
  static \u0275fac = function ClassesPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ClassesPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClassesPageComponent, selectors: [["app-classes-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading classes...", 3, "show"], ["class", "panel span-4", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "data-card span-8", 4, "ngIf"], ["class", "panel span-12", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "data-card", "span-12"], [1, "section-head"], [1, "eyebrow"], ["searchPlaceholder", "Search class or teacher", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["listing-filters", "", 1, "listing-filters"], [1, "filter-select", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", 4, "ngIf"], ["listKey", "classes", 3, "vm", "items"], [1, "panel", "span-4", 3, "ngSubmit", "formGroup"], [1, "form-grid", "compact"], [1, "required"], [1, "label-text"], ["formControlName", "name", "placeholder", "2026-2027"], ["label", "Name", 3, "control"], ["type", "date", "formControlName", "startDate"], ["label", "Start date", 3, "control"], ["type", "date", "formControlName", "endDate", 3, "min"], ["label", "End date", 3, "control"], ["class", "inline span-2", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 3, "disabled"], [1, "inline", "span-2"], ["type", "checkbox", "formControlName", "isActive"], [1, "data-card", "span-8"], ["class", "status-badge active", 4, "ngIf"], ["searchPlaceholder", "Search academic year", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["value", "draft"], ["value", "closed"], ["listKey", "years", 3, "vm", "items"], [1, "status-badge", "active"], [1, "table-wrap", "sticky-header"], [1, "sortable", 3, "click"], [4, "ngFor", "ngForOf"], [1, "status-badge", 3, "ngClass"], [1, "table-actions"], ["type", "edit", 3, "clicked", 4, "ngIf"], ["type", "activate", 3, "clicked", 4, "ngIf"], ["type", "close", "label", "Close", 3, "clicked", 4, "ngIf"], ["type", "delete", 3, "clicked", 4, "ngIf"], ["type", "edit", 3, "clicked"], ["type", "activate", 3, "clicked"], ["type", "close", "label", "Close", 3, "clicked"], ["type", "delete", 3, "clicked"], ["colspan", "4"], ["title", "No academic years", "message", "Create an academic year using the form on the left to start configuring classes and admissions."], [3, "columns", "rows"], [1, "panel", "span-12", 3, "ngSubmit", "formGroup"], ["formControlName", "name", 3, "change"], ["label", "Class", 3, "control"], ["formControlName", "section", 3, "change"], ["label", "Section", 3, "control"], ["type", "number", "formControlName", "capacity", "min", "1"], ["label", "Capacity", 3, "control"], ["formControlName", "academicYear", 3, "change"], ["label", "Academic year", 3, "control"], ["formControlName", "classTeacher"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["formControlName", "status"], ["class", "span-full admission-fee-preview", 4, "ngIf"], ["class", "span-full hint-text", 4, "ngIf"], [3, "value"], [3, "value", "disabled"], [1, "span-full", "admission-fee-preview"], [1, "hint-text"], [1, "afp-head"], [1, "afp-title"], [1, "afp-total"], [1, "afp-rows"], ["class", "afp-row", 4, "ngFor", "ngForOf"], [1, "afp-row"], [1, "muted"], [1, "span-full", "hint-text"], [3, "type", "label", "clicked", 4, "ngIf"], ["type", "delete", 3, "disabled", "clicked", 4, "ngIf"], [3, "clicked", "type", "label"], ["type", "delete", 3, "clicked", "disabled"], ["colspan", "8"], ["title", "No classes found", "message", "Configure a class and section for the active academic year."]], template: function ClassesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, ClassesPageComponent_div_1_Template, 2, 1, "div", 1)(2, ClassesPageComponent_ng_container_2_Template, 28, 14, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.classes.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.classes.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CurrencyPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, ListingToolbarComponent, PaginationBarComponent, SpinnerComponent, FieldErrorComponent, EmptyStateComponent, TableSkeletonComponent, ActionBtnComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClassesPageComponent, { className: "ClassesPageComponent", filePath: "src\\app\\pages\\classes-page\\classes-page.component.ts", lineNumber: 19 });
})();
export {
  ClassesPageComponent
};
//# sourceMappingURL=chunk-KHQLY4ES.js.map
