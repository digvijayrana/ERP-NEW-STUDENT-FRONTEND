import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KJIDRE24.js";

// src/app/pages/timetable-generator-page/timetable-generator-page.component.ts
var _c0 = () => [];
function TimetableGeneratorPageComponent_section_0_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
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
function TimetableGeneratorPageComponent_section_0_label_17_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r5 = ctx.$implicit;
    \u0275\u0275property("value", room_r5._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", room_r5.name, "", room_r5.section ? "-" + room_r5.section : "", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_label_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 9)(1, "span");
    \u0275\u0275text(2, "View class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_label_17_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenClassFilter, $event) || (ctx_r1.vm.ttGenClassFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TimetableGeneratorPageComponent_section_0_label_17_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.selectTtGenClass($event));
    });
    \u0275\u0275elementStart(4, "option", 11);
    \u0275\u0275text(5, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TimetableGeneratorPageComponent_section_0_label_17_option_6_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenClassFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (ctx_r1.vm.ttGenDashboard == null ? null : ctx_r1.vm.ttGenDashboard.classes) || \u0275\u0275pureFunction0(2, _c0));
  }
}
function TimetableGeneratorPageComponent_section_0_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.ttGenShowAdvancedFilters = !ctx_r1.vm.ttGenShowAdvancedFilters);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenShowAdvancedFilters ? "Hide filters" : "More filters", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_19_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    \u0275\u0275property("value", t_r8._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r8.firstName, " ", t_r8.lastName, "");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_19_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subject_r9 = ctx.$implicit;
    \u0275\u0275property("value", subject_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(subject_r9);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 9)(2, "span");
    \u0275\u0275text(3, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_19_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenTeacherFilter, $event) || (ctx_r1.vm.ttGenTeacherFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 11);
    \u0275\u0275text(6, "All teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TimetableGeneratorPageComponent_section_0_ng_container_19_option_7_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label", 9)(9, "span");
    \u0275\u0275text(10, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_19_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenSubjectFilter, $event) || (ctx_r1.vm.ttGenSubjectFilter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 11);
    \u0275\u0275text(13, "All subjects");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TimetableGeneratorPageComponent_section_0_ng_container_19_option_14_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_19_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.toggleTtGenCompact());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenTeacherFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", (ctx_r1.vm.ttGenDashboard == null ? null : ctx_r1.vm.ttGenDashboard.teachers) || \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenSubjectFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenSubjectOptions());
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-pressed", ctx_r1.vm.ttGenCompact);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenCompact ? "Comfortable" : "Compact", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "app-spinner");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "button", 39);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_div_42_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.runTtGenNextAction());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 40);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_div_42_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.toggleTimetableSettings());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r12 = ctx.ngIf;
    const dash_r13 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy || ctx_r1.vm.ttGenGuideStep() === 3 && (dash_r13.summary.conflictCount || 0) > 0 && !ctx_r1.vm.can("timetable_generator", "approve") && !ctx_r1.vm.can("timetable_generator", "print"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenBusy ? "Please wait\u2026" : ctx_r1.vm.ttGenNextActionLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r1.vm.ttGenSettingsOpen);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenSettingsOpen ? "Hide day setup" : "Edit school day times", " ");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", plan_r12.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r12.status === "applied" ? "Live" : plan_r12.status);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 33)(2, "div")(3, "p", 6);
    \u0275\u0275text(4, "How to create a timetable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 34);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.dismissTtGenGuide());
    });
    \u0275\u0275text(8, "Hide tips");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ol", 35)(10, "li")(11, "span", 36);
    \u0275\u0275text(12, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "strong");
    \u0275\u0275text(15, "Set school day times");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Add periods and breaks with start and end times.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "li")(19, "span", 36);
    \u0275\u0275text(20, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "strong");
    \u0275\u0275text(23, "Create timetable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p");
    \u0275\u0275text(25, "Optional: mark busy teachers, then auto-fill classes.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "li")(27, "span", 36);
    \u0275\u0275text(28, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "strong");
    \u0275\u0275text(31, "Check & fix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "Open a class, fix any clashes, adjust subjects if needed.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "li")(35, "span", 36);
    \u0275\u0275text(36, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "strong");
    \u0275\u0275text(39, "Publish");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41, "Make it live for the school, or download a PDF.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(42, TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_div_42_Template, 7, 6, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenNextActionHint());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("done", ctx_r1.vm.ttGenGuideStep() > 1)("active", ctx_r1.vm.ttGenGuideStep() === 1);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("done", ctx_r1.vm.ttGenGuideStep() > 2)("active", ctx_r1.vm.ttGenGuideStep() === 2);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("done", ctx_r1.vm.ttGenGuideStep() > 3)("active", ctx_r1.vm.ttGenGuideStep() === 3);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("done", ctx_r1.vm.ttGenGuideStep() === 4)("active", ctx_r1.vm.ttGenGuideStep() === 4);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", dash_r13.plan);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenSelectedClassLabel());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "span", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.runTtGenNextAction());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.toggleTimetableSettings());
    });
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r16 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-status", plan_r16.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(plan_r16.status === "applied" ? "Live" : plan_r16.status);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenBusy ? "Working\u2026" : ctx_r1.vm.ttGenNextActionLabel(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenSettingsOpen ? "Hide day setup" : "Edit day times", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 42)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3, "TT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 45)(5, "p", 6);
    \u0275\u0275text(6, "Plan name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 46)(8, "span", 47);
    \u0275\u0275text(9, "Timetable plan name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenPlanName, $event) || (ctx_r1.vm.ttGenPlanName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 49)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_span_14_Template, 2, 1, "span", 15);
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(17, TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_div_17_Template, 7, 5, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r16 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenPlanName);
    \u0275\u0275property("readonly", !ctx_r1.vm.can("timetable_generator", "edit") || plan_r16.status === "applied");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenAcademicYearLabel());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenHasSchedule());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", plan_r16.workingDays.length, " working days");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenGuideDismissed);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_div_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_div_3_button_5_Template_button_click_0_listener() {
      const room_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.selectTtGenClass(room_r19._id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r19 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r1.vm.ttGenClassFilter === room_r19._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", room_r19.name, "", room_r19.section ? "-" + room_r19.section : "", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2, "Choose class (required to assign teacher)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_div_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.selectTtGenClass(""));
    });
    \u0275\u0275text(4, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, TimetableGeneratorPageComponent_section_0_ng_container_23_div_3_button_5_Template, 2, 4, "button", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", !ctx_r1.vm.ttGenClassFilter);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", dash_r13.classes);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_div_4_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Updated ", \u0275\u0275pipeBind2(2, 1, dash_r13.summary.generatedAt, "medium"), "");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "article", 58)(2, "span", 59);
    \u0275\u0275text(3, "Filled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "article", 62)(9, "span", 59);
    \u0275\u0275text(10, "Clashes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 60);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 61);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "article", 62)(16, "span", 59);
    \u0275\u0275text(17, "Periods / day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 60);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 61);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "article", 62)(23, "span", 59);
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 63);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TimetableGeneratorPageComponent_section_0_ng_container_23_div_4_span_27_Template, 3, 4, "span", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", dash_r13.summary.score || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dash_r13.summary.placed || 0, " periods placed");
    \u0275\u0275advance();
    \u0275\u0275classProp("warn", (dash_r13.summary.conflictCount || 0) > 0)("danger", (dash_r13.summary.conflictCount || 0) > 5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(dash_r13.summary.conflictCount || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dash_r13.summary.unplaced || 0, " still unplaced");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(dash_r13.summary.teachingPeriods || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dash_r13.summary.breakPeriods || 0, " breaks");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((dash_r13.plan == null ? null : dash_r13.plan.status) === "applied" ? "Live" : dash_r13.summary.status || (dash_r13.plan == null ? null : dash_r13.plan.status) || "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dash_r13.summary.generatedAt);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_17_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.addTimetablePeriod("teaching"));
    });
    \u0275\u0275text(2, "+ Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_17_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.addTimetablePeriod("break"));
    });
    \u0275\u0275text(4, "+ Break");
    \u0275\u0275elementEnd()();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const period_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.removeTimetablePeriod(period_r23.index));
    });
    \u0275\u0275text(1, " Remove ");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "span", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_Template_input_ngModelChange_3_listener($event) {
      const period_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(period_r23.label, $event) || (period_r23.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_Template_select_ngModelChange_4_listener($event) {
      const period_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(period_r23.type, $event) || (period_r23.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 84);
    \u0275\u0275text(6, "Teaching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 85);
    \u0275\u0275text(8, "Break");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 86);
    \u0275\u0275text(10, "Assembly");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_Template_input_ngModelChange_11_listener($event) {
      const period_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(period_r23.startTime, $event) || (period_r23.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_Template_input_ngModelChange_12_listener($event) {
      const period_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(period_r23.endTime, $event) || (period_r23.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_button_13_Template, 2, 0, "button", 89)(14, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_span_14_Template, 1, 0, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r23 = ctx.$implicit;
    const i_r25 = ctx.index;
    const plan_r26 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r25 + 1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", period_r23.label);
    \u0275\u0275property("readonly", !ctx_r1.vm.can("timetable_generator", "edit") || plan_r26.status === "applied");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", period_r23.type);
    \u0275\u0275property("disabled", !ctx_r1.vm.can("timetable_generator", "edit") || plan_r26.status === "applied");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", period_r23.startTime);
    \u0275\u0275property("readonly", !ctx_r1.vm.can("timetable_generator", "edit") || plan_r26.status === "applied");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", period_r23.endTime);
    \u0275\u0275property("readonly", !ctx_r1.vm.can("timetable_generator", "edit") || plan_r26.status === "applied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "edit") && plan_r26.status !== "applied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.vm.can("timetable_generator", "edit") && plan_r26.status !== "applied"));
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "span", 7);
    \u0275\u0275text(2, "Save these times before creating the timetable.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_35_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.saveTimetablePeriods());
    });
    \u0275\u0275text(4, " Save school day times ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r29 = ctx.$implicit;
    \u0275\u0275property("value", t_r29._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r29.firstName, " ", t_r29.lastName, "");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r30 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", d_r30);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenFullDayLabel(d_r30));
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.vm.runTimetableGenerator());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenBusy ? "Creating\u2026" : "Create timetable", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "label")(2, "span");
    \u0275\u0275text(3, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenAvailTeacher, $event) || (ctx_r1.vm.ttGenAvailTeacher = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(5, "option", 11);
    \u0275\u0275text(6, "Select teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_option_7_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "label")(9, "span");
    \u0275\u0275text(10, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenAvailDay, $event) || (ctx_r1.vm.ttGenAvailDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_option_12_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94)(14, "label")(15, "span");
    \u0275\u0275text(16, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenAvailStartTime, $event) || (ctx_r1.vm.ttGenAvailStartTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label")(19, "span");
    \u0275\u0275text(20, "Until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenAvailEndTime, $event) || (ctx_r1.vm.ttGenAvailEndTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 16);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.addTeacherAvailabilityBlock());
    });
    \u0275\u0275text(23, " Add busy time ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_button_24_Template, 2, 2, "button", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r26 = \u0275\u0275nextContext().ngIf;
    const dash_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenAvailTeacher);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", dash_r13.teachers || \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenAvailDay);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", plan_r26.workingDays);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenAvailStartTime);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenAvailEndTime);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "create"));
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 101);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_div_1_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r32);
      const row_r33 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.vm.removeTeacherAvailabilityBlock(row_r33));
    });
    \u0275\u0275text(1, "Remove");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_div_1_button_6_Template, 2, 0, "button", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const plan_r26 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenAvailTeacherLabel(row_r33));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.vm.ttGenDayLabel(row_r33.dayOfWeek), " \xB7 ", ctx_r1.vm.ttGenAvailabilityTimeLabel(row_r33), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "edit") && plan_r26.status !== "applied");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_div_1_Template, 7, 4, "div", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r26 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", plan_r26.teacherAvailability);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 102);
    \u0275\u0275text(1, "No busy teachers added \u2014 that is fine for most schools.");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 65)(1, "div", 66)(2, "div")(3, "p", 6);
    \u0275\u0275text(4, "Step 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "School day times");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8, "Tell the system when each period starts and ends. Example: Period 1 08:00\u201308:40, then Lunch Break.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 67)(10, "div", 68)(11, "div", 69)(12, "div")(13, "h4");
    \u0275\u0275text(14, "Periods & breaks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 7);
    \u0275\u0275text(16, "List them in order from morning to afternoon.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_17_Template, 5, 0, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label", 71)(19, "span");
    \u0275\u0275text(20, "Timetable plan name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenPlanName, $event) || (ctx_r1.vm.ttGenPlanName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 72)(23, "div", 73);
    \u0275\u0275element(24, "span");
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26, "Period name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Start");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32, "End");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_34_Template, 15, 11, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_35_Template, 5, 1, "div", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "aside", 76)(37, "div")(38, "p", 6);
    \u0275\u0275text(39, "Optional");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "h4");
    \u0275\u0275text(41, "Busy teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 7);
    \u0275\u0275text(43, "If a teacher cannot teach at a certain time, select them from the list and add that slot. Skip this if everyone is free.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(44, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_44_Template, 25, 9, "div", 77)(45, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_div_45_Template, 2, 1, "div", 78)(46, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_ng_template_46_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r26 = ctx.ngIf;
    const noTeacherRules_r34 = \u0275\u0275reference(47);
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("hidden", !ctx_r1.vm.ttGenSettingsOpen);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "edit") && plan_r26.status !== "applied");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenPlanName);
    \u0275\u0275property("readonly", !ctx_r1.vm.can("timetable_generator", "edit") || plan_r26.status === "applied");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenPeriods);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "edit") && plan_r26.status !== "applied");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "edit") && plan_r26.status !== "applied");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", plan_r26.teacherAvailability == null ? null : plan_r26.teacherAvailability.length)("ngIfElse", noTeacherRules_r34);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1, " Select a class, then click a ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Free");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " cell to assign subject + teacher. Click a filled period to edit or drag to swap. ");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, " Editing ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5, "\xB7 pick teacher below, or click another cell to move it");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_3_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext(4);
      ctx_r1.vm.ttGenSelectedSlotId = "";
      return \u0275\u0275resetView(ctx_r1.vm.clearTtGenSlotEditor());
    });
    \u0275\u0275text(7, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const selected_r37 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(selected_r37.subject);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, " Assigning ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.clearTtGenSlotEditor());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenAssignContextLabel());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.enableTimetableEditing());
    });
    \u0275\u0275text(1, " Edit timetable ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.applyTimetablePlan());
    });
    \u0275\u0275text(1, " Publish ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r41 = \u0275\u0275nextContext().ngIf;
    const dash_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy || plan_r41.status === "applied" || (dash_r13.summary.conflictCount || 0) > 0);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.exportTimetablePlanPdf());
    });
    \u0275\u0275text(1, " PDF ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const plan_r41 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("disabled", !plan_r41._id);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 103)(1, "div", 104);
    \u0275\u0275template(2, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_2_Template, 5, 0, "span", 105)(3, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_3_Template, 8, 1, "span", 106)(4, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_span_4_Template, 6, 1, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 107);
    \u0275\u0275template(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_6_Template, 2, 1, "button", 96);
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.validateTimetablePlan());
    });
    \u0275\u0275text(8, " Find clashes ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_9_Template, 2, 1, "button", 96)(10, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_button_10_Template, 2, 1, "button", 108);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const plan_r41 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.vm.ttGenEditorOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenSelectedSlot());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenIsAssigning());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "edit") && plan_r41.status === "applied");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy || !plan_r41._id || plan_r41.status === "applied");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "approve"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("timetable_generator", "print"));
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selected_r44 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", selected_r44.classLabel || ctx_r1.vm.ttGenClassLabel(selected_r44), " \xB7 ", ctx_r1.vm.ttGenFullDayLabel(selected_r44.dayOfWeek), " \xB7 Period ", selected_r44.periodIndex, " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenAssignContextLabel());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 18);
  }
  if (rf & 2) {
    const subject_r45 = ctx.$implicit;
    \u0275\u0275property("value", subject_r45);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r46 = ctx.$implicit;
    \u0275\u0275property("value", t_r46._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", t_r46.firstName, " ", t_r46.lastName, "");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_p_1_Template, 2, 3, "p", 105)(2, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_p_2_Template, 2, 1, "p", 105);
    \u0275\u0275elementStart(3, "div", 113)(4, "label")(5, "span");
    \u0275\u0275text(6, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenEditSubject, $event) || (ctx_r1.vm.ttGenEditSubject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "datalist", 115);
    \u0275\u0275template(9, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_option_9_Template, 1, 1, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label")(11, "span");
    \u0275\u0275text(12, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 116);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenEditTeacher, $event) || (ctx_r1.vm.ttGenEditTeacher = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(14, "option", 11);
    \u0275\u0275text(15, "Select teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_option_16_Template, 2, 3, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label")(18, "span");
    \u0275\u0275text(19, "Room (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenEditRoom, $event) || (ctx_r1.vm.ttGenEditRoom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label")(22, "span");
    \u0275\u0275text(23, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 116);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenEditSlotType, $event) || (ctx_r1.vm.ttGenEditSlotType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 118);
    \u0275\u0275text(26, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 119);
    \u0275\u0275text(28, "Lab");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 120);
    \u0275\u0275text(30, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 121);
    \u0275\u0275text(32, "Library");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 91)(34, "span", 7);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 52);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.saveTimetableSlotEdit());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenSelectedSlot());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenIsAssigning());
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenEditSubject);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenSubjectChoices);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenEditTeacher);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", dash_r13.teachers || \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenEditRoom);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenEditSlotType);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenIsAssigning() ? "Choose subject and teacher, then save." : "Save to update this period and re-check clashes.");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenBusy);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenBusy ? "Saving\u2026" : ctx_r1.vm.ttGenIsAssigning() ? "Assign teacher" : "Save period", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r47 = ctx.$implicit;
    const dash_r13 = \u0275\u0275nextContext(4).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", key_r47, ": ", dash_r13.conflictsByType[key_r47] || 0, "");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126);
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_1_span_1_Template, 2, 2, "span", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenConflictKeys());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 131);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r48 = ctx.$implicit;
    \u0275\u0275classProp("err", c_r48.severity === "error")("warn", c_r48.severity === "warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r48.severity === "error" ? "Clash" : "Note");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r48.message);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 129);
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_ul_2_li_1_Template, 5, 6, "li", 130);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenVisibleConflicts());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 132);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_5_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r49 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", u_r49.subject, " \u2014 ", u_r49.reason, "");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "p", 6);
    \u0275\u0275text(2, "Could not place automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_5_p_3_Template, 2, 2, "p", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", dash_r13.plan == null ? null : dash_r13.plan.unplaced);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r50 = ctx.$implicit;
    \u0275\u0275classProp("maxed", row_r50.maxed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r50.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r50.count);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "p", 6);
    \u0275\u0275text(2, "Teacher periods this week (current class view)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136);
    \u0275\u0275template(4, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_6_div_4_Template, 5, 4, "div", 137);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenTeacherLoad());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_1_Template, 2, 1, "div", 122)(2, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_ul_2_Template, 2, 1, "ul", 123)(3, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_ng_template_3_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(5, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_5_Template, 4, 1, "div", 124)(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_div_6_Template, 5, 1, "div", 125);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noConflicts_r51 = \u0275\u0275reference(4);
    const dash_r13 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dash_r13.conflictsByType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenVisibleConflicts().length)("ngIfElse", noConflicts_r51);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", dash_r13.plan == null ? null : dash_r13.plan.unplaced == null ? null : dash_r13.plan.unplaced.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenTeacherLoad().length);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 110)(1, "div", 66)(2, "div")(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_div_7_Template, 38, 12, "div", 111)(8, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_ng_container_8_Template, 7, 5, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenEditorOpen() ? ctx_r1.vm.ttGenIsAssigning() ? "Assign teacher" : "Edit period" : "Step 3");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenIsAssigning() ? "Who teaches this period?" : ctx_r1.vm.ttGenSelectedSlotId ? "Change subject / teacher / room" : "Clashes to fix", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenEditorOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.ttGenEditorOpen());
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Pick a class above, then click any Free cell to assign a teacher.");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 152)(1, "span", 153);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 154);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r52 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-today", ctx_r1.vm.ttGenIsToday(day_r52));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenDayLabel(day_r52));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenFullDayLabel(day_r52));
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r57 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r57.classLabel || ctx_r1.vm.ttGenClassLabel(slot_r57));
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 164);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r57 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r57.room);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 162);
    \u0275\u0275listener("dragstart", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_Template_div_dragstart_0_listener($event) {
      const slot_r57 = \u0275\u0275restoreView(_r56).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      ctx_r1.vm.onTtGenDragStart($event, slot_r57);
      return \u0275\u0275resetView($event.stopPropagation());
    })("dragend", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_Template_div_dragend_0_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r1 = \u0275\u0275nextContext(7);
      return \u0275\u0275resetView(ctx_r1.vm.onTtGenDragEnd());
    })("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_Template_div_click_0_listener($event) {
      const slot_r57 = \u0275\u0275restoreView(_r56).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(7);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.vm.selectTimetableSlot(slot_r57));
    });
    \u0275\u0275elementStart(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_span_3_Template, 2, 1, "span", 15);
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_span_6_Template, 2, 1, "span", 163);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r57 = ctx.$implicit;
    const dash_r13 = \u0275\u0275nextContext(5).ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--slot-hue", ctx_r1.vm.ttGenSubjectHue(slot_r57.subject));
    \u0275\u0275classProp("locked", slot_r57.locked)("selected", ctx_r1.vm.ttGenSelectedSlotId === slot_r57._id);
    \u0275\u0275property("draggable", !slot_r57.locked && slot_r57.slotType !== "break" && ctx_r1.vm.can("timetable_generator", "edit") && (dash_r13.plan == null ? null : dash_r13.plan.status) !== "applied");
    \u0275\u0275attribute("data-type", slot_r57.slotType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r57.subject);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r57.classLabel || ctx_r1.vm.ttGenClassLabel(slot_r57));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slot_r57.teacherLabel || ctx_r1.vm.ttGenTeacherLabel(slot_r57) || "No teacher");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slot_r57.room);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 165);
    \u0275\u0275text(1, "Break");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 165);
    \u0275\u0275text(1, "Assembly");
    \u0275\u0275elementEnd();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 166);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.vm.ttGenClassFilter ? "+ Assign teacher" : "Free", " ");
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 158);
    \u0275\u0275listener("dragover", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_Template_td_dragover_0_listener($event) {
      const day_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const period_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.vm.onTtGenDragOver($event, day_r54, period_r55));
    })("drop", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_Template_td_drop_0_listener($event) {
      const day_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const period_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.vm.onTtGenDrop($event, day_r54, period_r55));
    })("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_Template_td_click_0_listener() {
      const day_r54 = \u0275\u0275restoreView(_r53).$implicit;
      const period_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r1.vm.onTtGenCellClick(day_r54, period_r55));
    });
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_div_1_Template, 7, 12, "div", 159)(2, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_span_2_Template, 2, 0, "span", 160)(3, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_span_3_Template, 2, 0, "span", 160)(4, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_span_4_Template, 2, 1, "span", 161);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r54 = ctx.$implicit;
    const period_r55 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("drop-target", ctx_r1.vm.ttGenDragSlotId && ctx_r1.vm.ttGenDropDay === day_r54 && ctx_r1.vm.ttGenDropPeriod === period_r55.index)("has-conflict", ctx_r1.vm.ttGenCellHasConflict(day_r54, period_r55.index))("click-target", period_r55.type !== "break" && period_r55.type !== "assembly" && (ctx_r1.vm.ttGenSelectedSlotId || !ctx_r1.vm.ttGenSlotsFor(day_r54, period_r55.index).length))("is-today", ctx_r1.vm.ttGenIsToday(day_r54))("is-empty", period_r55.type !== "break" && period_r55.type !== "assembly" && !ctx_r1.vm.ttGenSlotsFor(day_r54, period_r55.index).length)("is-assigning", ctx_r1.vm.ttGenAssignDay === day_r54 && ctx_r1.vm.ttGenAssignPeriod === period_r55.index);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vm.ttGenSlotsFor(day_r54, period_r55.index));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", period_r55.type === "break");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", period_r55.type === "assembly");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", period_r55.type !== "break" && period_r55.type !== "assembly" && !ctx_r1.vm.ttGenSlotsFor(day_r54, period_r55.index).length);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 155)(2, "span", 156);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_td_6_Template, 5, 16, "td", 157);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const period_r55 = ctx.$implicit;
    const dash_r13 = \u0275\u0275nextContext(3).ngIf;
    \u0275\u0275classProp("is-break", period_r55.type === "break" || period_r55.type === "assembly");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(period_r55.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", period_r55.startTime, "\u2013", period_r55.endTime, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", dash_r13.calendar.days);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "table", 148)(2, "thead")(3, "tr")(4, "th", 149);
    \u0275\u0275text(5, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_th_6_Template, 5, 4, "th", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tbody");
    \u0275\u0275template(8, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_tr_8_Template, 7, 6, "tr", 151);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", dash_r13.calendar.days);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", dash_r13.calendar.periods);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 139)(1, "div", 66)(2, "div")(3, "p", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_p_7_Template, 2, 0, "p", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 140)(9, "span", 141);
    \u0275\u0275text(10, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 142);
    \u0275\u0275text(12, "Lab");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 143);
    \u0275\u0275text(14, "Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 144);
    \u0275\u0275text(16, "Library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 145);
    \u0275\u0275text(18, "Break");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_div_19_Template, 9, 2, "div", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r13 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("compact", ctx_r1.vm.ttGenCompact);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.vm.ttGenAcademicYearLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.vm.ttGenSelectedClassLabel(), " \xB7 Weekly view");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.ttGenClassFilter);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", dash_r13.calendar == null ? null : dash_r13.calendar.periods == null ? null : dash_r13.calendar.periods.length);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_ng_template_9_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 168);
    \u0275\u0275element(1, "app-empty-state", 169);
    \u0275\u0275elementStart(2, "div", 170)(3, "button", 171);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_ng_container_23_ng_template_9_section_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.ttGenSettingsOpen = true);
    });
    \u0275\u0275text(4, "Start with school day times");
    \u0275\u0275elementEnd()()();
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TimetableGeneratorPageComponent_section_0_ng_container_23_ng_template_9_section_0_Template, 5, 0, "section", 167);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", !ctx_r1.vm.ttGenSettingsOpen);
  }
}
function TimetableGeneratorPageComponent_section_0_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TimetableGeneratorPageComponent_section_0_ng_container_23_section_1_Template, 43, 18, "section", 24)(2, TimetableGeneratorPageComponent_section_0_ng_container_23_section_2_Template, 18, 6, "section", 25)(3, TimetableGeneratorPageComponent_section_0_ng_container_23_div_3_Template, 6, 3, "div", 26)(4, TimetableGeneratorPageComponent_section_0_ng_container_23_div_4_Template, 28, 12, "div", 27)(5, TimetableGeneratorPageComponent_section_0_ng_container_23_section_5_Template, 48, 9, "section", 28)(6, TimetableGeneratorPageComponent_section_0_ng_container_23_section_6_Template, 11, 7, "section", 29)(7, TimetableGeneratorPageComponent_section_0_ng_container_23_section_7_Template, 9, 4, "section", 30)(8, TimetableGeneratorPageComponent_section_0_ng_container_23_section_8_Template, 20, 6, "section", 31)(9, TimetableGeneratorPageComponent_section_0_ng_container_23_ng_template_9_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dash_r13 = ctx.ngIf;
    const emptyStart_r59 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.ttGenGuideDismissed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dash_r13.plan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenCanShowCalendar() && (dash_r13.classes || \u0275\u0275pureFunction0(9, _c0)).length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenHasSchedule());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dash_r13.plan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenCanShowCalendar() && dash_r13.plan);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenCanShowCalendar() || ctx_r1.vm.ttGenEditorOpen());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenCanShowCalendar())("ngIfElse", emptyStart_r59);
  }
}
function TimetableGeneratorPageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 4)(1, "header", 5)(2, "div")(3, "p", 6);
    \u0275\u0275text(4, "Scheduling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Timetable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8, "Build your weekly class schedule in a few simple steps.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 8)(10, "label", 9)(11, "span");
    \u0275\u0275text(12, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function TimetableGeneratorPageComponent_section_0_Template_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.ttGenYear, $event) || (ctx_r1.vm.ttGenYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function TimetableGeneratorPageComponent_section_0_Template_select_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.vm.ttGenClassFilter = "";
      return \u0275\u0275resetView(ctx_r1.vm.loadTimetableGenerator());
    });
    \u0275\u0275elementStart(14, "option", 11);
    \u0275\u0275text(15, "Active year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, TimetableGeneratorPageComponent_section_0_option_16_Template, 2, 2, "option", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, TimetableGeneratorPageComponent_section_0_label_17_Template, 7, 3, "label", 13)(18, TimetableGeneratorPageComponent_section_0_button_18_Template, 2, 1, "button", 14)(19, TimetableGeneratorPageComponent_section_0_ng_container_19_Template, 17, 7, "ng-container", 15);
    \u0275\u0275elementStart(20, "button", 16);
    \u0275\u0275listener("click", function TimetableGeneratorPageComponent_section_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadTimetableGenerator());
    });
    \u0275\u0275text(21, "Refresh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, TimetableGeneratorPageComponent_section_0_div_22_Template, 2, 0, "div", 17)(23, TimetableGeneratorPageComponent_section_0_ng_container_23_Template, 11, 10, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.ttGenYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenCanShowCalendar());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenCanShowCalendar());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenShowAdvancedFilters && ctx_r1.vm.ttGenCanShowCalendar());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.ttGenLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenLoading && !ctx_r1.vm.ttGenDashboard);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.ttGenDashboard);
  }
}
var TimetableGeneratorPageComponent = class _TimetableGeneratorPageComponent {
  vm;
  static \u0275fac = function TimetableGeneratorPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimetableGeneratorPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimetableGeneratorPageComponent, selectors: [["app-timetable-generator-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["emptyStart", ""], ["noTeacherRules", ""], ["noConflicts", ""], ["class", "workspace-grid ttgen-page", 4, "ngIf"], [1, "workspace-grid", "ttgen-page"], [1, "section-head", "span-12"], [1, "eyebrow"], [1, "hint-text"], [1, "listing-filters", "ttgen-filters"], [1, "ttgen-filter-field"], ["aria-label", "Academic year", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "ttgen-filter-field", 4, "ngIf"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click", "disabled"], ["class", "span-12", 4, "ngIf"], [3, "value"], ["aria-label", "View timetable for class", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ghost", "small", 3, "click"], ["aria-label", "Filter by teacher", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["aria-label", "Filter by subject", 1, "filter-select", 3, "ngModelChange", "ngModel"], [1, "span-12"], ["class", "ttgen-guide span-12", 4, "ngIf"], ["class", "ttgen-context span-12", 4, "ngIf"], ["class", "ttgen-class-chips span-12", 4, "ngIf"], ["class", "fee-summary-grid span-12", 4, "ngIf"], ["class", "panel span-12 ttgen-period-editor", 3, "hidden", 4, "ngIf"], ["class", "panel span-12 ttgen-toolbar", 4, "ngIf"], ["class", "panel span-12 ttgen-conflict-panel", 4, "ngIf"], ["class", "panel span-12 ttgen-calendar-panel", 3, "compact", 4, "ngIf", "ngIfElse"], [1, "ttgen-guide", "span-12"], [1, "ttgen-guide-top"], ["type", "button", "aria-label", "Hide guide", 1, "ghost", "small", 3, "click"], [1, "ttgen-steps"], [1, "ttgen-step-num"], ["class", "ttgen-guide-actions", 4, "ngIf"], [1, "ttgen-guide-actions"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["type", "button", 1, "ghost", 3, "click"], [1, "ttgen-plan-badge"], [1, "ttgen-context", "span-12"], [1, "ttgen-context-main"], ["aria-hidden", "true", 1, "ttgen-context-icon"], [1, "ttgen-context-copy"], [1, "ttgen-banner-name"], [1, "sr-only"], ["type", "text", "placeholder", "e.g. Main school timetable 2026-27", 3, "ngModelChange", "ngModel", "readonly"], [1, "ttgen-context-meta"], ["class", "ttgen-context-actions", 4, "ngIf"], [1, "ttgen-context-actions"], ["type", "button", 1, "primary", "small", 3, "click", "disabled"], [1, "ttgen-class-chips", "span-12"], [1, "ttgen-chip-label"], ["type", "button", 1, "ttgen-chip-btn", 3, "click"], ["type", "button", "class", "ttgen-chip-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fee-summary-grid", "span-12"], [1, "fee-summary-card", "ok"], [1, "fs-label"], [1, "fs-value"], [1, "muted"], [1, "fee-summary-card"], [1, "fs-value", "ttgen-status"], ["class", "muted", 4, "ngIf"], [1, "panel", "span-12", "ttgen-period-editor", 3, "hidden"], [1, "section-head", "compact"], [1, "ttgen-setup-grid"], [1, "ttgen-bell-editor"], [1, "ttgen-setup-head"], ["class", "ttgen-period-actions", 4, "ngIf"], [1, "ttgen-plan-name"], [1, "ttgen-period-grid"], ["aria-hidden", "true", 1, "ttgen-period-row", "ttgen-period-head"], ["class", "ttgen-period-row", 4, "ngFor", "ngForOf"], ["class", "ttgen-save-row", 4, "ngIf"], [1, "ttgen-teacher-editor"], ["class", "ttgen-teacher-time-form", 4, "ngIf"], ["class", "ttgen-availability-list", 4, "ngIf", "ngIfElse"], [1, "ttgen-period-actions"], [1, "ttgen-period-row"], [1, "ttgen-period-number"], ["type", "text", "aria-label", "Period label", "placeholder", "e.g. Period 1", 3, "ngModelChange", "ngModel", "readonly"], ["aria-label", "Period type", 3, "ngModelChange", "ngModel", "disabled"], ["value", "teaching"], ["value", "break"], ["value", "assembly"], ["type", "time", "aria-label", "Start time", 3, "ngModelChange", "ngModel", "readonly"], ["type", "time", "aria-label", "End time", 3, "ngModelChange", "ngModel", "readonly"], ["type", "button", "class", "ghost small danger-text", "aria-label", "Remove period", 3, "click", 4, "ngIf"], ["type", "button", "aria-label", "Remove period", 1, "ghost", "small", "danger-text", 3, "click"], [1, "ttgen-save-row"], [1, "ttgen-teacher-time-form"], [3, "ngModelChange", "ngModel"], [1, "ttgen-time-pair"], ["type", "time", 3, "ngModelChange", "ngModel"], ["type", "button", "class", "primary small", 3, "disabled", "click", 4, "ngIf"], [1, "ttgen-availability-list"], ["class", "ttgen-availability-rule", 4, "ngFor", "ngForOf"], [1, "ttgen-availability-rule"], ["type", "button", "class", "ghost small danger-text", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", "danger-text", 3, "click"], [1, "ttgen-empty-rule"], [1, "panel", "span-12", "ttgen-toolbar"], [1, "ttgen-toolbar-left"], ["class", "hint-text", 4, "ngIf"], ["class", "ttgen-selected-hint", 4, "ngIf"], [1, "ttgen-toolbar-actions"], ["type", "button", "class", "ghost small", 3, "disabled", "click", 4, "ngIf"], [1, "ttgen-selected-hint"], [1, "panel", "span-12", "ttgen-conflict-panel"], ["class", "ttgen-slot-editor", 4, "ngIf"], [1, "ttgen-slot-editor"], [1, "ttgen-slot-editor-grid"], ["type", "text", "list", "ttgen-subject-list", "placeholder", "e.g. Mathematics", 3, "ngModelChange", "ngModel"], ["id", "ttgen-subject-list"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Room / facility", 3, "ngModelChange", "ngModel"], ["value", "subject"], ["value", "lab"], ["value", "sports"], ["value", "library"], ["class", "ttgen-conflict-chips", 4, "ngIf"], ["class", "ttgen-conflict-list", 4, "ngIf", "ngIfElse"], ["class", "ttgen-unplaced", 4, "ngIf"], ["class", "ttgen-load", 4, "ngIf"], [1, "ttgen-conflict-chips"], ["class", "ttgen-chip", 4, "ngFor", "ngForOf"], [1, "ttgen-chip"], [1, "ttgen-conflict-list"], [3, "err", "warn", 4, "ngFor", "ngForOf"], [1, "ttgen-sev"], ["title", "No clashes", "message", "Great \u2014 you can publish this timetable for the school."], [1, "ttgen-unplaced"], ["class", "muted", 4, "ngFor", "ngForOf"], [1, "ttgen-load"], [1, "ttgen-load-list"], ["class", "ttgen-load-row", 3, "maxed", 4, "ngFor", "ngForOf"], [1, "ttgen-load-row"], [1, "panel", "span-12", "ttgen-calendar-panel"], ["aria-label", "Period type legend", 1, "ttgen-legend"], ["data-type", "subject", 1, "ttgen-legend-item"], ["data-type", "lab", 1, "ttgen-legend-item"], ["data-type", "sports", 1, "ttgen-legend-item"], ["data-type", "library", 1, "ttgen-legend-item"], ["data-type", "break", 1, "ttgen-legend-item"], ["class", "ttgen-cal-wrap", 4, "ngIf"], [1, "ttgen-cal-wrap"], ["role", "grid", "aria-label", "Weekly timetable calendar", 1, "ttgen-calendar"], ["scope", "col", 1, "ttgen-sticky-col"], ["scope", "col", 3, "is-today", 4, "ngFor", "ngForOf"], [3, "is-break", 4, "ngFor", "ngForOf"], ["scope", "col"], [1, "ttgen-day-short"], [1, "ttgen-day-full"], ["scope", "row", 1, "ttgen-sticky-col"], [1, "ttgen-period-label"], ["class", "ttgen-cell", 3, "drop-target", "has-conflict", "click-target", "is-today", "is-empty", "is-assigning", "dragover", "drop", "click", 4, "ngFor", "ngForOf"], [1, "ttgen-cell", 3, "dragover", "drop", "click"], ["class", "ttgen-slot", 3, "--slot-hue", "locked", "selected", "draggable", "dragstart", "dragend", "click", 4, "ngFor", "ngForOf"], ["class", "ttgen-break", 4, "ngIf"], ["class", "ttgen-free", 4, "ngIf"], [1, "ttgen-slot", 3, "dragstart", "dragend", "click", "draggable"], ["class", "ttgen-room", 4, "ngIf"], [1, "ttgen-room"], [1, "ttgen-break"], [1, "ttgen-free"], ["class", "panel span-12 ttgen-empty-start", 4, "ngIf"], [1, "panel", "span-12", "ttgen-empty-start"], ["title", "No timetable yet", "message", "Follow the steps above: save school day times, then click Create timetable."], [1, "ttgen-empty-actions"], ["type", "button", 1, "primary", 3, "click"]], template: function TimetableGeneratorPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TimetableGeneratorPageComponent_section_0_Template, 24, 8, "section", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.vm.can("timetable_generator", "view"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SpinnerComponent, EmptyStateComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimetableGeneratorPageComponent, { className: "TimetableGeneratorPageComponent", filePath: "src\\app\\pages\\timetable-generator-page\\timetable-generator-page.component.ts", lineNumber: 14 });
})();
export {
  TimetableGeneratorPageComponent
};
//# sourceMappingURL=chunk-M5MC276J.js.map
