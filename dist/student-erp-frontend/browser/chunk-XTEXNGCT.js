import {
  TableSkeletonComponent
} from "./chunk-XH4A25GQ.js";
import "./chunk-NHO3MKXE.js";
import "./chunk-XUTYR2A2.js";
import {
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
  CurrencyPipe,
  KeyValuePipe,
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
  ɵɵpipeBind1,
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

// src/app/pages/promotion-page/promotion-page.component.ts
function PromotionPageComponent_div_1_Template(rf, ctx) {
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
function PromotionPageComponent_ng_container_2_div_22_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r3 = ctx.$implicit;
    \u0275\u0275property("value", year_r3._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r3.name);
  }
}
function PromotionPageComponent_ng_container_2_div_22_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r4 = ctx.$implicit;
    \u0275\u0275property("value", year_r4._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r4.name);
  }
}
function PromotionPageComponent_ng_container_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label");
    \u0275\u0275text(2, "From academic year ");
    \u0275\u0275elementStart(3, "select", 29)(4, "option", 30);
    \u0275\u0275text(5, "Select year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PromotionPageComponent_ng_container_2_div_22_option_6_Template, 2, 2, "option", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "To academic year ");
    \u0275\u0275elementStart(9, "select", 32)(10, "option", 30);
    \u0275\u0275text(11, "Select year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PromotionPageComponent_ng_container_2_div_22_option_12_Template, 2, 2, "option", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.vm.openYears);
  }
}
function PromotionPageComponent_ng_container_2_div_23_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r5 = ctx.$implicit;
    \u0275\u0275property("value", room_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r5.name, "-", room_r5.section, "");
  }
}
function PromotionPageComponent_ng_container_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label");
    \u0275\u0275text(2, "From class & section ");
    \u0275\u0275elementStart(3, "select", 34)(4, "option", 30);
    \u0275\u0275text(5, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PromotionPageComponent_ng_container_2_div_23_option_6_Template, 2, 3, "option", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.vm.promotionClassesForYear(ctx_r1.vm.promotionForm.value.fromAcademicYear));
  }
}
function PromotionPageComponent_ng_container_2_div_24_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r6 = ctx.$implicit;
    \u0275\u0275property("value", room_r6._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r6.name, "-", room_r6.section, "");
  }
}
function PromotionPageComponent_ng_container_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "label");
    \u0275\u0275text(2, "To class & section ");
    \u0275\u0275elementStart(3, "select", 35)(4, "option", 30);
    \u0275\u0275text(5, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PromotionPageComponent_ng_container_2_div_24_option_6_Template, 2, 3, "option", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.vm.promotionClassesForYear(ctx_r1.vm.promotionForm.value.toAcademicYear));
  }
}
function PromotionPageComponent_ng_container_2_div_25_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "New roll");
    \u0275\u0275elementEnd();
  }
}
function PromotionPageComponent_ng_container_2_div_25_tr_27_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.ineligibleReason);
  }
}
function PromotionPageComponent_ng_container_2_div_25_tr_27_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.promotionWarningSummary(row_r9));
  }
}
function PromotionPageComponent_ng_container_2_div_25_tr_27_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PromotionPageComponent_ng_container_2_div_25_tr_27_td_16_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 48);
    \u0275\u0275listener("input", function PromotionPageComponent_ng_container_2_div_25_tr_27_td_16_input_1_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.promotionRollAssignments[row_r9.studentId] = $event.target.value);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.vm.promotionRollAssignments[row_r9.studentId] || "");
  }
}
function PromotionPageComponent_ng_container_2_div_25_tr_27_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, PromotionPageComponent_ng_container_2_div_25_tr_27_td_16_input_1_Template, 1, 1, "input", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9.eligible);
  }
}
function PromotionPageComponent_ng_container_2_div_25_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 43);
    \u0275\u0275listener("change", function PromotionPageComponent_ng_container_2_div_25_tr_27_Template_input_change_2_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.togglePromotionStudent(row_r9.studentId, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 44);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PromotionPageComponent_ng_container_2_div_25_tr_27_small_12_Template, 2, 1, "small", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, PromotionPageComponent_ng_container_2_div_25_tr_27_span_14_Template, 2, 1, "span", 45)(15, PromotionPageComponent_ng_container_2_div_25_tr_27_span_15_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, PromotionPageComponent_ng_container_2_div_25_tr_27_td_16_Template, 2, 1, "td", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ineligible", !row_r9.eligible);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.vm.isPromotionStudentSelected(row_r9.studentId))("disabled", !row_r9.eligible);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.admissionNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.currentRollNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r9.eligible ? "active" : "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.eligible ? "Eligible" : "Ineligible");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r9.eligible);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r9.warnings.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r9.warnings.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionRollMode === "manual");
  }
}
function PromotionPageComponent_ng_container_2_div_25_app_empty_state_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 49);
  }
}
function PromotionPageComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 17)(2, "label", 36)(3, "input", 37);
    \u0275\u0275listener("change", function PromotionPageComponent_ng_container_2_div_25_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.selectAllPromotionStudents($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Select all eligible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 18);
    \u0275\u0275listener("change", function PromotionPageComponent_ng_container_2_div_25_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.promotionRollMode = $event.target.value);
    });
    \u0275\u0275elementStart(6, "option", 38);
    \u0275\u0275text(7, "Auto roll numbers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 39);
    \u0275\u0275text(9, "Manual roll numbers");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 40)(11, "table")(12, "thead")(13, "tr");
    \u0275\u0275element(14, "th");
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Admission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Roll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Warnings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, PromotionPageComponent_ng_container_2_div_25_th_25_Template, 2, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275template(27, PromotionPageComponent_ng_container_2_div_25_tr_27_Template, 17, 13, "tr", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(28, PromotionPageComponent_ng_container_2_div_25_app_empty_state_28_Template, 1, 0, "app-empty-state", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.vm.promotionRollMode);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionRollMode === "manual");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.promotionEligibleRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.promotionEligibleRows.length);
  }
}
function PromotionPageComponent_ng_container_2_div_26_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 36)(1, "input", 53);
    \u0275\u0275listener("change", function PromotionPageComponent_ng_container_2_div_26_label_3_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.promotionWarningsAcknowledged = $event.target.checked);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " I acknowledge promotion warnings and wish to continue ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.vm.promotionWarningsAcknowledged);
  }
}
function PromotionPageComponent_ng_container_2_div_26_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275classProp("ineligible", !row_r12.eligible || !row_r12.included);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.studentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.admissionNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.current.academicYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.current.classSection);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.current.rollNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 13, row_r12.current.monthlyFee, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((row_r12.proposed == null ? null : row_r12.proposed.academicYear) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((row_r12.proposed == null ? null : row_r12.proposed.classSection) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((row_r12.proposed == null ? null : row_r12.proposed.rollNumber) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.proposed ? \u0275\u0275pipeBind2(23, 16, row_r12.proposed.monthlyFee, "INR") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r12.current.busAssignment);
  }
}
function PromotionPageComponent_ng_container_2_div_26_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "button", 14);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_div_26_div_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.loadPromotionPreview());
    });
    \u0275\u0275text(2, "Refresh preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_div_26_div_30_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.executePromotionBatch());
    });
    \u0275\u0275text(4, " Execute promotion (draft) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const preview_r14 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.promotionLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.vm.submitting || preview_r14.promotableCount === 0 || preview_r14.warningCount > 0 && !ctx_r1.vm.promotionWarningsAcknowledged);
  }
}
function PromotionPageComponent_ng_container_2_div_26_div_31_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_div_26_div_31_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.finalizePromotionBatch());
    });
    \u0275\u0275text(1, "Finalize & lock");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.vm.submitting || batch_r17.locked || batch_r17.status !== "draft");
  }
}
function PromotionPageComponent_ng_container_2_div_26_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "p", 56);
    \u0275\u0275text(2, "Batch status: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 14);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_div_26_div_31_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.rollbackPromotionBatch());
    });
    \u0275\u0275text(7, "Rollback");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PromotionPageComponent_ng_container_2_div_26_div_31_button_8_Template, 2, 1, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const batch_r17 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(batch_r17.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Promoted: ", batch_r17.promotedCount, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.submitting || batch_r17.locked || batch_r17.status !== "draft");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("students", "approve"));
  }
}
function PromotionPageComponent_ng_container_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "p", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PromotionPageComponent_ng_container_2_div_26_label_3_Template, 3, 1, "label", 51);
    \u0275\u0275elementStart(4, "div", 40)(5, "table")(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Current year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Current class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Current roll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Current fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "New year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "New class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "New roll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "New fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Bus");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275template(29, PromotionPageComponent_ng_container_2_div_26_tr_29_Template, 26, 19, "tr", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, PromotionPageComponent_ng_container_2_div_26_div_30_Template, 5, 2, "div", 52)(31, PromotionPageComponent_ng_container_2_div_26_div_31_Template, 9, 4, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preview_r14 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Review ", preview_r14.promotableCount, " promotion(s). ", preview_r14.warningCount, " warning(s) require acknowledgement before execution.");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", preview_r14.warningCount);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", preview_r14.rows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.promotionBatch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionBatch);
  }
}
function PromotionPageComponent_ng_container_2_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.nextPromotionStep());
    });
    \u0275\u0275text(1, "Next");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.canPromotionStepContinue());
  }
}
function PromotionPageComponent_ng_container_2_app_table_skeleton_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 57);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 6)("rows", 5)("embedded", true);
  }
}
function PromotionPageComponent_ng_container_2_div_57_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r19.key);
  }
}
function PromotionPageComponent_ng_container_2_div_57_tr_7_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r20.value);
  }
}
function PromotionPageComponent_ng_container_2_div_57_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, PromotionPageComponent_ng_container_2_div_57_tr_7_td_1_Template, 2, 1, "td", 58);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, row_r21));
  }
}
function PromotionPageComponent_ng_container_2_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "table")(2, "thead")(3, "tr");
    \u0275\u0275template(4, PromotionPageComponent_ng_container_2_div_57_th_4_Template, 2, 1, "th", 58);
    \u0275\u0275pipe(5, "keyvalue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "tbody");
    \u0275\u0275template(7, PromotionPageComponent_ng_container_2_div_57_tr_7_Template, 3, 3, "tr", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 2, ctx_r1.vm.promotionReportRows[0]));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.promotionReportRows);
  }
}
function PromotionPageComponent_ng_container_2_app_empty_state_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 59);
  }
}
function PromotionPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 5)(2, "div", 6)(3, "div")(4, "p", 7);
    \u0275\u0275text(5, "Academic progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Promotion wizard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 8);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.resetPromotionWizard());
    });
    \u0275\u0275text(9, "Reset wizard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 9)(11, "span", 10);
    \u0275\u0275text(12, "1. Academic years");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 10);
    \u0275\u0275text(14, "2. Current class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 10);
    \u0275\u0275text(16, "3. Target class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 10);
    \u0275\u0275text(18, "4. Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 10);
    \u0275\u0275text(20, "5. Preview");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "form", 11);
    \u0275\u0275template(22, PromotionPageComponent_ng_container_2_div_22_Template, 13, 2, "div", 12)(23, PromotionPageComponent_ng_container_2_div_23_Template, 7, 1, "div", 12)(24, PromotionPageComponent_ng_container_2_div_24_Template, 7, 1, "div", 12)(25, PromotionPageComponent_ng_container_2_div_25_Template, 29, 4, "div", 12)(26, PromotionPageComponent_ng_container_2_div_26_Template, 32, 6, "div", 12);
    \u0275\u0275elementStart(27, "div", 13)(28, "button", 14);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.prevPromotionStep());
    });
    \u0275\u0275text(29, "Back");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, PromotionPageComponent_ng_container_2_button_30_Template, 2, 1, "button", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "section", 16)(32, "div", 6)(33, "div")(34, "p", 7);
    \u0275\u0275text(35, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "h3");
    \u0275\u0275text(37, "Promotion reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 17)(39, "select", 18);
    \u0275\u0275listener("change", function PromotionPageComponent_ng_container_2_Template_select_change_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.vm.promotionReportType = $event.target.value;
      return \u0275\u0275resetView(ctx_r1.vm.loadPromotionReport());
    });
    \u0275\u0275elementStart(40, "option", 19);
    \u0275\u0275text(41, "Promoted students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 20);
    \u0275\u0275text(43, "Detained students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 21);
    \u0275\u0275text(45, "Left school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 22);
    \u0275\u0275text(47, "TC issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 23);
    \u0275\u0275text(49, "Class strength comparison");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "button", 24);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadPromotionReport());
    });
    \u0275\u0275text(51, "Refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "button", 24);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_Template_button_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportPromotionReportCsv());
    });
    \u0275\u0275text(53, "Export Excel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 24);
    \u0275\u0275listener("click", function PromotionPageComponent_ng_container_2_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportPromotionReportPdf());
    });
    \u0275\u0275text(55, "Export PDF");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(56, PromotionPageComponent_ng_container_2_app_table_skeleton_56_Template, 1, 3, "app-table-skeleton", 25)(57, PromotionPageComponent_ng_container_2_div_57_Template, 8, 4, "div", 26)(58, PromotionPageComponent_ng_container_2_app_empty_state_58_Template, 1, 0, "app-empty-state", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275classProp("active", ctx_r1.vm.promotionWizardStep === 1)("done", ctx_r1.vm.promotionWizardStep > 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.vm.promotionWizardStep === 2)("done", ctx_r1.vm.promotionWizardStep > 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.vm.promotionWizardStep === 3)("done", ctx_r1.vm.promotionWizardStep > 3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.vm.promotionWizardStep === 4)("done", ctx_r1.vm.promotionWizardStep > 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.vm.promotionWizardStep === 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.vm.promotionForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionWizardStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionWizardStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionWizardStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionWizardStep === 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionWizardStep === 5 && ctx_r1.vm.promotionPreview);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.vm.promotionWizardStep === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionWizardStep < 5);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.vm.promotionReportType);
    \u0275\u0275advance(11);
    \u0275\u0275property("disabled", ctx_r1.vm.promotionReportLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.promotionReportRows.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.promotionReportRows.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.promotionReportLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.promotionReportLoading && ctx_r1.vm.promotionReportRows.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.promotionReportLoading && !ctx_r1.vm.promotionReportRows.length);
  }
}
var PromotionPageComponent = class _PromotionPageComponent {
  vm;
  static \u0275fac = function PromotionPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromotionPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromotionPageComponent, selectors: [["app-promotion-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading promotion data...", 3, "show"], [1, "panel", "span-12"], [1, "section-head"], [1, "eyebrow"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "wizard-steps"], [1, "wizard-step"], [1, "promotion-wizard-form", 3, "formGroup"], ["class", "wizard-panel", 4, "ngIf"], [1, "wizard-nav"], ["type", "button", 1, "ghost", 3, "click", "disabled"], ["type", "button", 3, "disabled", "click", 4, "ngIf"], [1, "data-card", "span-12"], [1, "toolbar"], [1, "filter-select", 3, "change", "value"], ["value", "promoted"], ["value", "detained"], ["value", "left-school"], ["value", "tc-issued"], ["value", "class-strength-comparison"], ["type", "button", 1, "ghost", "small", 3, "click", "disabled"], [3, "columns", "rows", "embedded", 4, "ngIf"], ["class", "table-wrap sticky-header", 4, "ngIf"], ["title", "No report data", "message", "Select filters in the wizard and refresh the report.", 4, "ngIf"], [1, "wizard-panel"], ["formControlName", "fromAcademicYear"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "toAcademicYear"], [3, "value"], ["formControlName", "fromClassRoom"], ["formControlName", "toClassRoom"], [1, "inline-check"], ["type", "checkbox", 3, "change"], ["value", "auto"], ["value", "manual"], [1, "table-wrap", "sticky-header"], [3, "ineligible", 4, "ngFor", "ngForOf"], ["title", "No students found", "message", "No eligible students for the selected class and academic year.", 4, "ngIf"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "status-badge", 3, "ngClass"], ["class", "warning-chip", 4, "ngIf"], [1, "warning-chip"], ["type", "text", "class", "filter-select", 3, "value", "input", 4, "ngIf"], ["type", "text", 1, "filter-select", 3, "input", "value"], ["title", "No students found", "message", "No eligible students for the selected class and academic year."], [1, "summary-note"], ["class", "inline-check", 4, "ngIf"], ["class", "wizard-actions", 4, "ngIf"], ["type", "checkbox", 3, "change", "checked"], [1, "wizard-actions"], ["type", "button", 3, "click", "disabled"], [1, "meta-chip"], [3, "columns", "rows", "embedded"], [4, "ngFor", "ngForOf"], ["title", "No report data", "message", "Select filters in the wizard and refresh the report."]], template: function PromotionPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, PromotionPageComponent_div_1_Template, 2, 1, "div", 1)(2, PromotionPageComponent_ng_container_2_Template, 59, 33, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.promotionLoading && !ctx.vm.promotionEligibleRows.length && !ctx.vm.promotionPreview);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.promotionLoading || ctx.vm.promotionEligibleRows.length || ctx.vm.promotionPreview);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CurrencyPipe, KeyValuePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, SpinnerComponent, EmptyStateComponent, TableSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromotionPageComponent, { className: "PromotionPageComponent", filePath: "src\\app\\pages\\promotion-page\\promotion-page.component.ts", lineNumber: 16 });
})();
export {
  PromotionPageComponent
};
//# sourceMappingURL=chunk-XTEXNGCT.js.map
