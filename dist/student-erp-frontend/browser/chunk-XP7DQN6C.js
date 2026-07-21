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
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  TitleCasePipe,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KJIDRE24.js";

// src/app/pages/attendance-page/attendance-page.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function AttendancePageComponent_div_1_Template(rf, ctx) {
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
function AttendancePageComponent_ng_container_2_article_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\uF4E3");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_article_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_article_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 24);
    \u0275\u0275text(5, "Your attendance for today has been recorded.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, ctx_r1.vm.selfAttendanceStatus));
  }
}
function AttendancePageComponent_ng_container_2_article_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.todayBlockReason);
  }
}
function AttendancePageComponent_ng_container_2_article_1_button_16_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Mark Present");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_article_1_button_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275element(1, "span", 29);
    \u0275\u0275text(2, " Marking...");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_article_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_article_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.markSelfAttendance());
    });
    \u0275\u0275template(1, AttendancePageComponent_ng_container_2_article_1_button_16_span_1_Template, 2, 0, "span", 2)(2, AttendancePageComponent_ng_container_2_article_1_button_16_span_2_Template, 3, 0, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.vm.selfAttendanceLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.selfAttendanceLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.selfAttendanceLoading);
  }
}
function AttendancePageComponent_ng_container_2_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 16)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Today's Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18);
    \u0275\u0275template(9, AttendancePageComponent_ng_container_2_article_1_span_9_Template, 2, 0, "span", 2)(10, AttendancePageComponent_ng_container_2_article_1_span_10_Template, 2, 0, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 19);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AttendancePageComponent_ng_container_2_article_1_div_14_Template, 6, 3, "div", 20)(15, AttendancePageComponent_ng_container_2_article_1_div_15_Template, 3, 1, "div", 20)(16, AttendancePageComponent_ng_container_2_article_1_button_16_Template, 3, 3, "button", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("marked", ctx_r1.vm.selfAttendanceMarked);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.vm.selfAttendanceMarked ? "You are marked!" : "Mark your attendance");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("done", ctx_r1.vm.selfAttendanceMarked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.selfAttendanceMarked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.selfAttendanceMarked);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, ctx_r1.today, "EEEE, MMMM d, y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.selfAttendanceMarked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isTodaySundayOrHoliday && !ctx_r1.vm.selfAttendanceMarked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.selfAttendanceMarked && !ctx_r1.isTodaySundayOrHoliday);
  }
}
function AttendancePageComponent_ng_container_2_section_2_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r5 = ctx.$implicit;
    \u0275\u0275property("value", year_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r5.name);
  }
}
function AttendancePageComponent_ng_container_2_section_2_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
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
function AttendancePageComponent_ng_container_2_section_2_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Holiday: ", ctx_r1.vm.attendanceRegisterHoliday.name, "");
  }
}
function AttendancePageComponent_ng_container_2_section_2_p_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1, "Sunday \u2014 attendance entry is blocked unless using Holiday status.");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_2_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "span", 49);
    \u0275\u0275text(3, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 48)(7, "span", 49);
    \u0275\u0275text(8, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 48)(12, "span", 49);
    \u0275\u0275text(13, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 50);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 48)(17, "span", 49);
    \u0275\u0275text(18, "Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 50);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 48)(22, "span", 49);
    \u0275\u0275text(23, "Attendance %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 50);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vm.attendanceRegisterSummary.present);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vm.attendanceRegisterSummary.absent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vm.attendanceRegisterSummary.leave);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vm.attendanceRegisterSummary.holiday);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.vm.attendanceRegisterSummary.percentage, "%");
  }
}
function AttendancePageComponent_ng_container_2_section_2_div_34_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 53);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_section_2_div_34_tr_11_Template_select_change_4_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.setAttendanceRegisterRowStatus(row_r8.studentId, $event.target.value));
    });
    \u0275\u0275elementStart(5, "option", 54);
    \u0275\u0275text(6, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 55);
    \u0275\u0275text(8, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 56);
    \u0275\u0275text(10, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 57);
    \u0275\u0275text(12, "Holiday");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td")(14, "input", 58);
    \u0275\u0275listener("input", function AttendancePageComponent_ng_container_2_section_2_div_34_tr_11_Template_input_input_14_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      return \u0275\u0275resetView(row_r8.remarks = $event.target.value);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r8.admissionNumber, " \u2014 ", row_r8.studentName, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", row_r8.status)("disabled", !ctx_r1.vm.attendanceRegisterEditable);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", row_r8.remarks)("disabled", !ctx_r1.vm.attendanceRegisterEditable);
  }
}
function AttendancePageComponent_ng_container_2_section_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Remarks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody");
    \u0275\u0275template(11, AttendancePageComponent_ng_container_2_section_2_div_34_tr_11_Template, 15, 6, "tr", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.vm.attendanceRegisterRows);
  }
}
function AttendancePageComponent_ng_container_2_section_2_div_35_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_2_div_35_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.lockAttendanceRegister());
    });
    \u0275\u0275text(1, "Lock");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.vm.attendanceRegisterWorkflow === "locked" || ctx_r1.vm.submitting);
  }
}
function AttendancePageComponent_ng_container_2_section_2_div_35_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_2_div_35_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.unlockAttendanceRegister());
    });
    \u0275\u0275text(1, "Unlock");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.vm.attendanceRegisterWorkflow === "draft" || ctx_r1.vm.submitting);
  }
}
function AttendancePageComponent_ng_container_2_section_2_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59)(1, "button", 60);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_2_div_35_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.saveAttendanceRegisterDraft());
    });
    \u0275\u0275text(2, "Save draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_2_div_35_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.submitAttendanceRegister());
    });
    \u0275\u0275text(4, "Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AttendancePageComponent_ng_container_2_section_2_div_35_button_5_Template, 2, 1, "button", 61)(6, AttendancePageComponent_ng_container_2_section_2_div_35_button_6_Template, 2, 1, "button", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.vm.attendanceRegisterEditable || ctx_r1.vm.submitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.attendanceRegisterEditable || ctx_r1.vm.submitting);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("attendance", "unlock"));
  }
}
function AttendancePageComponent_ng_container_2_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 30)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Class register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Daily attendance entry");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 32);
    \u0275\u0275listener("ngSubmit", function AttendancePageComponent_ng_container_2_section_2_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.loadAttendanceRegister());
    });
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Academic year");
    \u0275\u0275elementStart(12, "select", 33)(13, "option", 34);
    \u0275\u0275text(14, "Select year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AttendancePageComponent_ng_container_2_section_2_option_15_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Class");
    \u0275\u0275elementStart(18, "select", 36)(19, "option", 34);
    \u0275\u0275text(20, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AttendancePageComponent_ng_container_2_section_2_option_21_Template, 2, 3, "option", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label");
    \u0275\u0275text(23, "Date");
    \u0275\u0275element(24, "input", 37);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 38)(27, "button", 39);
    \u0275\u0275text(28, "Load students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 40);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_2_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.markAllAttendancePresent());
    });
    \u0275\u0275text(30, "Mark all present");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, AttendancePageComponent_ng_container_2_section_2_p_31_Template, 2, 1, "p", 41)(32, AttendancePageComponent_ng_container_2_section_2_p_32_Template, 2, 0, "p", 41)(33, AttendancePageComponent_ng_container_2_section_2_div_33_Template, 26, 5, "div", 42)(34, AttendancePageComponent_ng_container_2_section_2_div_34_Template, 12, 1, "div", 43)(35, AttendancePageComponent_ng_container_2_section_2_div_35_Template, 7, 4, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", ctx_r1.vm.attendanceRegisterWorkflow);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.attendanceRegisterWorkflow);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.vm.attendanceForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.vm.openYears);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
    \u0275\u0275advance(3);
    \u0275\u0275property("max", \u0275\u0275pipeBind2(25, 13, ctx_r1.today, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.vm.attendanceForm.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.attendanceRegisterRows.length || !ctx_r1.vm.attendanceRegisterEditable);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceRegisterHoliday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceRegisterSunday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceRegisterRows.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceRegisterRows.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceRegisterRows.length);
  }
}
function AttendancePageComponent_ng_container_2_article_3_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 75);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_article_3_div_18_div_1_Template_button_click_6_listener() {
      const h_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.deleteHoliday(h_r14._id));
    });
    \u0275\u0275text(7, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, h_r14.date, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r14.name);
  }
}
function AttendancePageComponent_ng_container_2_article_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, AttendancePageComponent_ng_container_2_article_3_div_18_div_1_Template, 8, 5, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vm.holidays);
  }
}
function AttendancePageComponent_ng_container_2_article_3_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1, "No holidays added yet");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_article_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 64)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Manage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Holiday list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Date");
    \u0275\u0275elementStart(9, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AttendancePageComponent_ng_container_2_article_3_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.holidayForm.date, $event) || (ctx_r1.vm.holidayForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Name");
    \u0275\u0275elementStart(12, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AttendancePageComponent_ng_container_2_article_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.holidayForm.name, $event) || (ctx_r1.vm.holidayForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "Description (optional)");
    \u0275\u0275elementStart(15, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AttendancePageComponent_ng_container_2_article_3_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.holidayForm.description, $event) || (ctx_r1.vm.holidayForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 60);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_article_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.saveHoliday());
    });
    \u0275\u0275text(17, "Add Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AttendancePageComponent_ng_container_2_article_3_div_18_Template, 2, 1, "div", 68)(19, AttendancePageComponent_ng_container_2_article_3_p_19_Template, 2, 0, "p", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.holidayForm.date);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.holidayForm.name);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.holidayForm.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.vm.holidayForm.date || !ctx_r1.vm.holidayForm.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.holidays.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.holidays.length);
  }
}
function AttendancePageComponent_ng_container_2_div_16_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r16 = ctx.$implicit;
    \u0275\u0275property("value", year_r16._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r16.name);
  }
}
function AttendancePageComponent_ng_container_2_div_16_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r17 = ctx.$implicit;
    \u0275\u0275property("value", room_r17._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r17.name, "-", room_r17.section, "");
  }
}
function AttendancePageComponent_ng_container_2_div_16_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", s_r18._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", s_r18.admissionNumber, " - ", ctx_r1.vm.studentName(s_r18), "");
  }
}
function AttendancePageComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_16_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.vm.filters.attendanceYear = $event.target.value;
      ctx_r1.vm.resetPage("attendance");
      return \u0275\u0275resetView(ctx_r1.buildCalendar());
    });
    \u0275\u0275elementStart(2, "option", 34);
    \u0275\u0275text(3, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AttendancePageComponent_ng_container_2_div_16_option_4_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_16_Template_select_change_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.vm.filters.attendanceClass = $event.target.value;
      ctx_r1.vm.filters.attendanceStudent = "";
      ctx_r1.vm.resetPage("attendance");
      return \u0275\u0275resetView(ctx_r1.buildCalendar());
    });
    \u0275\u0275elementStart(6, "option", 34);
    \u0275\u0275text(7, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, AttendancePageComponent_ng_container_2_div_16_option_8_Template, 2, 3, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_16_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.vm.filters.attendanceStudent = $event.target.value;
      ctx_r1.vm.resetPage("attendance");
      return \u0275\u0275resetView(ctx_r1.buildCalendar());
    });
    \u0275\u0275elementStart(10, "option", 34);
    \u0275\u0275text(11, "All students");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AttendancePageComponent_ng_container_2_div_16_option_12_Template, 2, 3, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_16_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.vm.filters.attendanceStatus = $event.target.value;
      ctx_r1.vm.resetPage("attendance");
      return \u0275\u0275resetView(ctx_r1.buildCalendar());
    });
    \u0275\u0275elementStart(14, "option", 34);
    \u0275\u0275text(15, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 54);
    \u0275\u0275text(17, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 55);
    \u0275\u0275text(19, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 56);
    \u0275\u0275text(21, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 57);
    \u0275\u0275text(23, "Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 79);
    \u0275\u0275text(25, "Late");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 80);
    \u0275\u0275text(27, "Half day");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceStudent);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.attendanceStudentOptions);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceStatus);
  }
}
function AttendancePageComponent_ng_container_2_div_17_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r20);
  }
}
function AttendancePageComponent_ng_container_2_div_17_div_40_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 110);
  }
  if (rf & 2) {
    const cell_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", cell_r21.status);
  }
}
function AttendancePageComponent_ng_container_2_div_17_div_40_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 111);
    \u0275\u0275text(1, "H");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", cell_r21.holidayName);
  }
}
function AttendancePageComponent_ng_container_2_div_17_div_40_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112);
    \u0275\u0275text(1, "S");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_div_17_div_40_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r21.records.length);
  }
}
function AttendancePageComponent_ng_container_2_div_17_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "span", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AttendancePageComponent_ng_container_2_div_17_div_40_span_3_Template, 1, 1, "span", 106)(4, AttendancePageComponent_ng_container_2_div_17_div_40_span_4_Template, 2, 1, "span", 107)(5, AttendancePageComponent_ng_container_2_div_17_div_40_span_5_Template, 2, 0, "span", 108)(6, AttendancePageComponent_ng_container_2_div_17_div_40_span_6_Template, 2, 1, "span", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r21 = ctx.$implicit;
    \u0275\u0275classProp("other-month", !cell_r21.isCurrentMonth)("today", cell_r21.isToday)("has-record", cell_r21.status)("is-holiday", cell_r21.holiday)("is-sunday", cell_r21.isSunday);
    \u0275\u0275attribute("data-status", cell_r21.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r21.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r21.status && cell_r21.isCurrentMonth && !cell_r21.holiday && !cell_r21.isSunday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r21.holiday && cell_r21.isCurrentMonth);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r21.isSunday && cell_r21.isCurrentMonth && !cell_r21.holiday);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r21.records.length > 1 && cell_r21.isCurrentMonth);
  }
}
function AttendancePageComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "button", 84);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevMonth());
    });
    \u0275\u0275text(4, "\xAB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 84);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextMonth());
    });
    \u0275\u0275text(8, "\xBB");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 86);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_17_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToToday());
    });
    \u0275\u0275text(10, "Today");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 87)(12, "span", 88);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 89);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 90);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 91);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 92);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 93)(23, "span", 94);
    \u0275\u0275element(24, "span", 95);
    \u0275\u0275text(25, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 94);
    \u0275\u0275element(27, "span", 96);
    \u0275\u0275text(28, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 94);
    \u0275\u0275element(30, "span", 97);
    \u0275\u0275text(31, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 94);
    \u0275\u0275element(33, "span", 98);
    \u0275\u0275text(34, "Holiday");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 94);
    \u0275\u0275element(36, "span", 99);
    \u0275\u0275text(37, "Sunday");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 100);
    \u0275\u0275template(39, AttendancePageComponent_ng_container_2_div_17_div_39_Template, 2, 1, "div", 101)(40, AttendancePageComponent_ng_container_2_div_17_div_40_Template, 7, 16, "div", 102);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.monthLabel);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Present: ", ctx_r1.calendarStats.present, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Absent: ", ctx_r1.calendarStats.absent, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Leave: ", ctx_r1.calendarStats.leave, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Holiday: ", ctx_r1.calendarStats.holiday, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total: ", ctx_r1.calendarStats.total, "");
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.weekDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.calendarDays);
  }
}
function AttendancePageComponent_ng_container_2_div_18_select_14_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r24 = ctx.$implicit;
    \u0275\u0275property("value", room_r24._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r24.name, "-", room_r24.section, "");
  }
}
function AttendancePageComponent_ng_container_2_div_18_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_18_select_14_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("attendance", "attendanceClass", $event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 34);
    \u0275\u0275text(2, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AttendancePageComponent_ng_container_2_div_18_select_14_option_3_Template, 2, 3, "option", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
  }
}
function AttendancePageComponent_ng_container_2_div_18_select_15_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r26 = ctx.$implicit;
    \u0275\u0275property("value", year_r26._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r26.name);
  }
}
function AttendancePageComponent_ng_container_2_div_18_select_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_18_select_15_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("attendance", "attendanceYear", $event.target.value));
    });
    \u0275\u0275elementStart(1, "option", 34);
    \u0275\u0275text(2, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AttendancePageComponent_ng_container_2_div_18_select_15_option_3_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_th_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_18_div_17_th_6_Template_th_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("attendance", "studentName"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Student", ctx_r1.vm.listSortIndicator("attendance", "studentName"), "");
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Workflow");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.studentName(row_r29.student));
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_td_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const workflow_r30 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(workflow_r30);
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_td_10_span_1_Template, 2, 1, "span", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.registerWorkflow(row_r29));
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_td_4_Template, 2, 1, "td", 2);
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_td_10_Template, 2, 1, "td", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, row_r29.date));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vm.className(row_r29.classRoom));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r29.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r29.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser);
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "app-empty-state", 126);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.vm.isPortalUser ? 3 : 5);
  }
}
function AttendancePageComponent_ng_container_2_div_18_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121)(1, "table")(2, "thead")(3, "tr")(4, "th", 122);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_18_div_17_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("attendance", "date"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AttendancePageComponent_ng_container_2_div_18_div_17_th_6_Template, 2, 1, "th", 123);
    \u0275\u0275elementStart(7, "th", 122);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_18_div_17_Template_th_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("attendance", "className"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 122);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_div_18_div_17_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("attendance", "status"));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AttendancePageComponent_ng_container_2_div_18_div_17_th_11_Template, 2, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, AttendancePageComponent_ng_container_2_div_18_div_17_tr_13_Template, 11, 8, "tr", 52)(14, AttendancePageComponent_ng_container_2_div_18_div_17_tr_14_Template, 3, 1, "tr", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Date", ctx_r1.vm.listSortIndicator("attendance", "date"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class", ctx_r1.vm.listSortIndicator("attendance", "className"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status", ctx_r1.vm.listSortIndicator("attendance", "status"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.paged("attendance", ctx_r1.vm.sortedAttendance));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.sortedAttendance.length && !ctx_r1.vm.isListingLoading("attendance"));
  }
}
function AttendancePageComponent_ng_container_2_div_18_app_table_skeleton_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 127);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 5)("rows", 6)("embedded", true);
  }
}
function AttendancePageComponent_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-listing-toolbar", 114);
    \u0275\u0275listener("searchChange", function AttendancePageComponent_ng_container_2_div_18_Template_app_listing_toolbar_searchChange_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.updateListSearch("attendance", "attendanceSearch", $event));
    })("refresh", function AttendancePageComponent_ng_container_2_div_18_Template_app_listing_toolbar_refresh_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.refreshListing("attendance"));
    })("exportCsv", function AttendancePageComponent_ng_container_2_div_18_Template_app_listing_toolbar_exportCsv_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.exportAttendanceListCsv());
    })("exportPdf", function AttendancePageComponent_ng_container_2_div_18_Template_app_listing_toolbar_exportPdf_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.exportAttendanceListPdf());
    });
    \u0275\u0275elementStart(2, "div", 115)(3, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_div_18_Template_select_change_3_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("attendance", "attendanceStatus", $event.target.value));
    });
    \u0275\u0275elementStart(4, "option", 34);
    \u0275\u0275text(5, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 54);
    \u0275\u0275text(7, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 55);
    \u0275\u0275text(9, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option", 56);
    \u0275\u0275text(11, "Leave");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 57);
    \u0275\u0275text(13, "Holiday");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AttendancePageComponent_ng_container_2_div_18_select_14_Template, 4, 2, "select", 116)(15, AttendancePageComponent_ng_container_2_div_18_select_15_Template, 4, 2, "select", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 117);
    \u0275\u0275template(17, AttendancePageComponent_ng_container_2_div_18_div_17_Template, 15, 7, "div", 118)(18, AttendancePageComponent_ng_container_2_div_18_app_table_skeleton_18_Template, 1, 3, "app-table-skeleton", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "app-pagination-bar", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("searchValue", ctx_r1.vm.filters.attendanceSearch)("loading", ctx_r1.vm.isListingLoading("attendance"))("showExport", !ctx_r1.vm.isPortalUser);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceStatus);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-refreshing", ctx_r1.vm.isListingLoading("attendance"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isListingLoading("attendance") || ctx_r1.vm.sortedAttendance.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isListingLoading("attendance") && !ctx_r1.vm.sortedAttendance.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r1.vm)("items", ctx_r1.vm.sortedAttendance);
  }
}
function AttendancePageComponent_ng_container_2_section_19_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r32 = ctx.$implicit;
    \u0275\u0275property("value", year_r32._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r32.name);
  }
}
function AttendancePageComponent_ng_container_2_section_19_select_21_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r34 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", m_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.getMonthName(m_r34));
  }
}
function AttendancePageComponent_ng_container_2_section_19_select_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_section_19_select_21_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.vm.filters.attendanceReportMonth = $event.target.value;
      return \u0275\u0275resetView(ctx_r1.vm.loadAttendanceReport());
    });
    \u0275\u0275template(1, AttendancePageComponent_ng_container_2_section_19_select_21_option_1_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceReportMonth);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c0));
  }
}
function AttendancePageComponent_ng_container_2_section_19_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_19_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.exportAttendanceReportCsv());
    });
    \u0275\u0275text(1, "Export Excel");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_19_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.exportAttendanceReportPdf());
    });
    \u0275\u0275text(1, "Export PDF");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_19_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.openAttendanceReportServerPdf());
    });
    \u0275\u0275text(1, "Download PDF");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Student");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Month");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Present");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Absent");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Leave");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_th_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "%");
    \u0275\u0275elementEnd();
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r38.date, "dd MMM yyyy"));
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r38.studentName);
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r38.month);
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", row_r38.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r38.status);
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r38.present);
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r38.absent);
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r38.leave);
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", row_r38.percentage, "%");
  }
}
function AttendancePageComponent_ng_container_2_section_19_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, AttendancePageComponent_ng_container_2_section_19_tr_42_td_1_Template, 3, 4, "td", 2)(2, AttendancePageComponent_ng_container_2_section_19_tr_42_td_2_Template, 2, 1, "td", 2);
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AttendancePageComponent_ng_container_2_section_19_tr_42_td_5_Template, 2, 1, "td", 2)(6, AttendancePageComponent_ng_container_2_section_19_tr_42_td_6_Template, 3, 2, "td", 2)(7, AttendancePageComponent_ng_container_2_section_19_tr_42_td_7_Template, 2, 1, "td", 2)(8, AttendancePageComponent_ng_container_2_section_19_tr_42_td_8_Template, 2, 1, "td", 2)(9, AttendancePageComponent_ng_container_2_section_19_tr_42_td_9_Template, 2, 1, "td", 2)(10, AttendancePageComponent_ng_container_2_section_19_tr_42_td_10_Template, 2, 1, "td", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "class-summary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r38.className);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "monthly");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
  }
}
function AttendancePageComponent_ng_container_2_section_19_app_empty_state_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 135);
  }
}
function AttendancePageComponent_ng_container_2_section_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 128)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Attendance reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 77)(8, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_section_19_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.vm.attendanceReportType = $event.target.value;
      return \u0275\u0275resetView(ctx_r1.vm.loadAttendanceReport());
    });
    \u0275\u0275elementStart(9, "option", 129);
    \u0275\u0275text(10, "Daily attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 130);
    \u0275\u0275text(12, "Monthly attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 131);
    \u0275\u0275text(14, "Student summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 132);
    \u0275\u0275text(16, "Class summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 78);
    \u0275\u0275listener("change", function AttendancePageComponent_ng_container_2_section_19_Template_select_change_17_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.vm.filters.attendanceYear = $event.target.value;
      return \u0275\u0275resetView(ctx_r1.vm.loadAttendanceReport());
    });
    \u0275\u0275elementStart(18, "option", 34);
    \u0275\u0275text(19, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AttendancePageComponent_ng_container_2_section_19_option_20_Template, 2, 2, "option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AttendancePageComponent_ng_container_2_section_19_select_21_Template, 2, 3, "select", 116);
    \u0275\u0275elementStart(22, "button", 84);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_section_19_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.loadAttendanceReport());
    });
    \u0275\u0275text(23, "Refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AttendancePageComponent_ng_container_2_section_19_button_24_Template, 2, 0, "button", 133)(25, AttendancePageComponent_ng_container_2_section_19_button_25_Template, 2, 0, "button", 133)(26, AttendancePageComponent_ng_container_2_section_19_button_26_Template, 2, 0, "button", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 121)(28, "table")(29, "thead")(30, "tr");
    \u0275\u0275template(31, AttendancePageComponent_ng_container_2_section_19_th_31_Template, 2, 0, "th", 2)(32, AttendancePageComponent_ng_container_2_section_19_th_32_Template, 2, 0, "th", 2);
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AttendancePageComponent_ng_container_2_section_19_th_35_Template, 2, 0, "th", 2)(36, AttendancePageComponent_ng_container_2_section_19_th_36_Template, 2, 0, "th", 2)(37, AttendancePageComponent_ng_container_2_section_19_th_37_Template, 2, 0, "th", 2)(38, AttendancePageComponent_ng_container_2_section_19_th_38_Template, 2, 0, "th", 2)(39, AttendancePageComponent_ng_container_2_section_19_th_39_Template, 2, 0, "th", 2)(40, AttendancePageComponent_ng_container_2_section_19_th_40_Template, 2, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275template(42, AttendancePageComponent_ng_container_2_section_19_tr_42_Template, 11, 9, "tr", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, AttendancePageComponent_ng_container_2_section_19_app_empty_state_43_Template, 1, 0, "app-empty-state", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.vm.attendanceReportType);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.vm.filters.attendanceYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "monthly");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("attendance", "export"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("attendance", "export"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("attendance", "export"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "class-summary");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "monthly");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType === "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.attendanceReportType !== "daily");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.attendanceReportRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.attendanceReportRows.length);
  }
}
function AttendancePageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AttendancePageComponent_ng_container_2_article_1_Template, 17, 14, "article", 5)(2, AttendancePageComponent_ng_container_2_section_2_Template, 36, 16, "section", 6)(3, AttendancePageComponent_ng_container_2_article_3_Template, 20, 6, "article", 7);
    \u0275\u0275elementStart(4, "section", 8)(5, "div", 9)(6, "div")(7, "p", 10);
    \u0275\u0275text(8, "Records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11)(12, "button", 12);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "calendar");
    });
    \u0275\u0275text(13, "Calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function AttendancePageComponent_ng_container_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewMode = "table");
    });
    \u0275\u0275text(15, "Table");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, AttendancePageComponent_ng_container_2_div_16_Template, 28, 7, "div", 13)(17, AttendancePageComponent_ng_container_2_div_17_Template, 41, 8, "div", 14)(18, AttendancePageComponent_ng_container_2_div_18_Template, 20, 12, "div", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AttendancePageComponent_ng_container_2_section_19_Template, 44, 17, "section", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isAdmin || ctx_r1.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isAdmin);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.vm.isPortalUser ? "My attendance" : "Attendance calendar");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "calendar");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.viewMode === "table");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.isAdmin || ctx_r1.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "calendar");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewMode === "table");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isPortalUser && ctx_r1.vm.can("attendance", "view"));
  }
}
var AttendancePageComponent = class _AttendancePageComponent {
  vm;
  today = /* @__PURE__ */ new Date();
  calendarMonth = /* @__PURE__ */ new Date();
  calendarDays = [];
  weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  viewMode = "calendar";
  lastAttendanceLength = -1;
  lastHolidayLength = -1;
  ngDoCheck() {
    const aLen = this.vm?.attendance?.length ?? 0;
    const hLen = this.vm?.holidays?.length ?? 0;
    if (aLen !== this.lastAttendanceLength || hLen !== this.lastHolidayLength) {
      this.lastAttendanceLength = aLen;
      this.lastHolidayLength = hLen;
      this.buildCalendar();
    }
  }
  get isTodaySundayOrHoliday() {
    return this.today.getDay() === 0 || this.vm?.isHoliday(this.today.toISOString())?.is;
  }
  get todayBlockReason() {
    if (this.today.getDay() === 0)
      return "Sunday \u2014 No attendance";
    const h = this.vm?.isHoliday(this.today.toISOString());
    return h?.is ? `Holiday: ${h.name}` : "";
  }
  prevMonth() {
    this.calendarMonth = new Date(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth() - 1, 1);
    this.buildCalendar();
  }
  nextMonth() {
    this.calendarMonth = new Date(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth() + 1, 1);
    this.buildCalendar();
  }
  goToToday() {
    this.calendarMonth = /* @__PURE__ */ new Date();
    this.buildCalendar();
  }
  buildCalendar() {
    const year = this.calendarMonth.getFullYear();
    const month = this.calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = firstDay.getDay();
    const days = [];
    const now = /* @__PURE__ */ new Date();
    const holidays = this.vm?.holidays || [];
    const holidayMap = /* @__PURE__ */ new Map();
    for (const h of holidays) {
      const d = new Date(h.date);
      const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      holidayMap.set(key, h.name);
    }
    const makeDay = (date, isCurrentMonth) => {
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      const isToday = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
      return {
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isSunday: date.getDay() === 0,
        holiday: holidayMap.has(key),
        holidayName: holidayMap.get(key) || "",
        status: null,
        records: []
      };
    };
    for (let i = startOffset - 1; i >= 0; i--) {
      days.push(makeDay(new Date(year, month, -i), false));
    }
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(makeDay(new Date(year, month, d), true));
    }
    const remaining = 7 - days.length % 7;
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        days.push(makeDay(new Date(year, month + 1, i), false));
      }
    }
    const attendance = this.vm?.filteredAttendance || [];
    for (const record of attendance) {
      const recordDate = new Date(record.date);
      const day = days.find((cell) => cell.date.getFullYear() === recordDate.getFullYear() && cell.date.getMonth() === recordDate.getMonth() && cell.date.getDate() === recordDate.getDate());
      if (day) {
        day.records.push(record);
        if (!day.status)
          day.status = record.status;
        else if (day.status !== record.status)
          day.status = "mixed";
      }
    }
    this.calendarDays = days;
  }
  get monthLabel() {
    return this.calendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  }
  registerWorkflow(row) {
    if (!row.register || typeof row.register === "string")
      return null;
    return row.register.workflowStatus || null;
  }
  get calendarStats() {
    const attendance = this.vm?.filteredAttendance || [];
    const year = this.calendarMonth.getFullYear();
    const month = this.calendarMonth.getMonth();
    const monthRecords = attendance.filter((r) => {
      const d = new Date(r.date);
      return d.getFullYear() === year && d.getMonth() === month;
    });
    return {
      present: monthRecords.filter((r) => r.status === "present").length,
      absent: monthRecords.filter((r) => r.status === "absent").length,
      leave: monthRecords.filter((r) => r.status === "leave").length,
      holiday: monthRecords.filter((r) => r.status === "holiday").length,
      late: monthRecords.filter((r) => r.status === "late" || r.status === "half_day").length,
      total: monthRecords.length
    };
  }
  static \u0275fac = function AttendancePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendancePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendancePageComponent, selectors: [["app-attendance-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading attendance records...", 3, "show"], ["class", "panel span-4 self-attendance-card", 3, "marked", 4, "ngIf"], ["class", "panel span-8", 4, "ngIf"], ["class", "panel span-4 holiday-card", 4, "ngIf"], [1, "data-card", "span-12", "attendance-calendar-section"], [1, "section-head"], [1, "eyebrow"], [1, "view-toggle-bar"], ["type", "button", 1, "view-toggle-btn", 3, "click"], ["class", "toolbar", 4, "ngIf"], ["class", "attendance-calendar", 4, "ngIf"], ["class", "data-card span-12", 4, "ngIf"], [1, "panel", "span-4", "self-attendance-card"], [1, "self-attendance-body"], [1, "self-attendance-icon"], [1, "self-attendance-date"], ["class", "self-attendance-status", 4, "ngIf"], ["type", "button", "class", "self-mark-btn", 3, "disabled", "click", 4, "ngIf"], [1, "self-attendance-status"], [1, "status-badge", "present"], [1, "muted"], [1, "status-badge", "closed"], ["type", "button", 1, "self-mark-btn", 3, "click", "disabled"], ["class", "btn-spinner", 4, "ngIf"], [1, "btn-spinner"], [1, "spinner-ring"], [1, "panel", "span-8"], [1, "status-badge", 3, "ngClass"], [1, "form-grid", "compact", 3, "ngSubmit", "formGroup"], ["formControlName", "academicYear"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "classRoom"], ["type", "date", "formControlName", "date", 3, "max"], [1, "form-actions", "inline"], ["type", "submit", 3, "disabled"], ["type", "button", 1, "ghost", 3, "click", "disabled"], ["class", "hint-text", 4, "ngIf"], ["class", "inv-details fee-breakdown", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["class", "form-actions", 4, "ngIf"], [3, "value"], [1, "hint-text"], [1, "inv-details", "fee-breakdown"], [1, "inv-detail"], [1, "inv-label"], [1, "inv-value"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [3, "change", "value", "disabled"], ["value", "present"], ["value", "absent"], ["value", "leave"], ["value", "holiday"], [1, "inline-input", 3, "input", "value", "disabled"], [1, "form-actions"], ["type", "button", 3, "click", "disabled"], ["type", "button", "class", "ghost", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "ghost danger-text", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "ghost", "danger-text", 3, "click", "disabled"], [1, "panel", "span-4", "holiday-card"], ["type", "date", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Republic Day", 3, "ngModelChange", "ngModel"], ["placeholder", "Optional note", 3, "ngModelChange", "ngModel"], ["class", "holiday-list", 4, "ngIf"], ["class", "muted", "style", "text-align:center; padding: 12px 0;", 4, "ngIf"], [1, "holiday-list"], ["class", "holiday-row", 4, "ngFor", "ngForOf"], [1, "holiday-row"], [1, "holiday-date"], [1, "holiday-name"], ["type", "button", 1, "danger-btn", "small", 3, "click"], [1, "muted", 2, "text-align", "center", "padding", "12px 0"], [1, "toolbar"], [1, "filter-select", 3, "change", "value"], ["value", "late"], ["value", "half_day"], [1, "attendance-calendar"], [1, "calendar-toolbar"], [1, "calendar-nav"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "calendar-month-label"], ["type", "button", 1, "ghost", "small", "today-btn", 3, "click"], [1, "calendar-stats"], [1, "cal-stat", "present"], [1, "cal-stat", "absent"], [1, "cal-stat", "leave"], [1, "cal-stat", "holiday"], [1, "cal-stat", "total"], [1, "calendar-legend"], [1, "legend-item"], [1, "legend-dot", "present"], [1, "legend-dot", "absent"], [1, "legend-dot", "leave"], [1, "legend-dot", "holiday"], [1, "legend-dot", "sunday"], [1, "calendar-grid"], ["class", "calendar-weekday", 4, "ngFor", "ngForOf"], ["class", "calendar-cell", 3, "other-month", "today", "has-record", "is-holiday", "is-sunday", 4, "ngFor", "ngForOf"], [1, "calendar-weekday"], [1, "calendar-cell"], [1, "cell-day"], ["class", "cell-indicator", 3, "ngClass", 4, "ngIf"], ["class", "cell-holiday-label", 3, "title", 4, "ngIf"], ["class", "cell-sunday-label", 4, "ngIf"], ["class", "cell-count", 4, "ngIf"], [1, "cell-indicator", 3, "ngClass"], [1, "cell-holiday-label", 3, "title"], [1, "cell-sunday-label"], [1, "cell-count"], ["searchPlaceholder", "Search student, class, or status...", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading", "showExport"], ["listing-filters", "", 1, "listing-filters"], ["class", "filter-select", 3, "value", "change", 4, "ngIf"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", "embedded", 4, "ngIf"], ["listKey", "attendance", 3, "vm", "items"], [1, "table-wrap", "sticky-header"], [1, "sortable", 3, "click"], ["class", "sortable", 3, "click", 4, "ngIf"], ["class", "status-badge", 4, "ngIf"], [1, "status-badge"], ["title", "No attendance records", "message", "No attendance records match the selected filters."], [3, "columns", "rows", "embedded"], [1, "data-card", "span-12"], ["value", "daily"], ["value", "monthly"], ["value", "student-summary"], ["value", "class-summary"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["message", "No attendance report data for the selected filters.", 4, "ngIf"], ["message", "No attendance report data for the selected filters."]], template: function AttendancePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, AttendancePageComponent_div_1_Template, 2, 1, "div", 1)(2, AttendancePageComponent_ng_container_2_Template, 20, 12, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.attendance.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.attendance.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, ListingToolbarComponent, TableSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendancePageComponent, { className: "AttendancePageComponent", filePath: "src\\app\\pages\\attendance-page\\attendance-page.component.ts", lineNumber: 30 });
})();
export {
  AttendancePageComponent
};
//# sourceMappingURL=chunk-XP7DQN6C.js.map
