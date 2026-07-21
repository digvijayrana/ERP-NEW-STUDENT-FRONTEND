import {
  TableSkeletonComponent
} from "./chunk-XH4A25GQ.js";
import {
  EmptyStateComponent
} from "./chunk-E33DYKKS.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-KJIDRE24.js";

// src/app/pages/reports-page/reports-page.component.ts
var _c0 = () => ["students", "fees", "attendance", "transport", "academic", "promotions", "operations"];
var _c1 = () => ["students", "fees", "attendance", "academic"];
var _c2 = () => ["students", "fees", "attendance"];
var _c3 = () => ["fees", "payroll", "attendance", "operations"];
var _c4 = () => ["fees", "payroll", "attendance"];
var _c5 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var _c6 = () => [];
function ReportsPageComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const domain_r1 = ctx.$implicit;
    \u0275\u0275property("value", domain_r1.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(domain_r1.label);
  }
}
function ReportsPageComponent_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r2.label);
  }
}
function ReportsPageComponent_select_15_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
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
function ReportsPageComponent_select_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_15_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportYear = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All academic years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_15_option_3_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.years);
  }
}
function ReportsPageComponent_select_16_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r7 = ctx.$implicit;
    \u0275\u0275property("value", room_r7._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r7.name, "-", room_r7.section, "");
  }
}
function ReportsPageComponent_select_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_16_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportClass = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_16_option_3_Template, 2, 3, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.classes);
  }
}
function ReportsPageComponent_select_17_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r9 = ctx.$implicit;
    \u0275\u0275property("value", room_r9.section);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r9.name, "-", room_r9.section, "");
  }
}
function ReportsPageComponent_select_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_17_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportSection = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All sections");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_17_option_3_Template, 2, 3, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportSection);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.classes);
  }
}
function ReportsPageComponent_select_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_18_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportStatus = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 22);
    \u0275\u0275text(4, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 23);
    \u0275\u0275text(6, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 24);
    \u0275\u0275text(8, "Left school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 25);
    \u0275\u0275text(10, "Passed out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 26);
    \u0275\u0275text(12, "TC issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 27);
    \u0275\u0275text(14, "Alumni");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportStatus);
  }
}
function ReportsPageComponent_input_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275listener("change", function ReportsPageComponent_input_19_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportAdmissionFrom = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportAdmissionFrom);
  }
}
function ReportsPageComponent_input_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 29);
    \u0275\u0275listener("change", function ReportsPageComponent_input_20_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportAdmissionTo = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportAdmissionTo)("min", ctx_r3.vm.filters.reportAdmissionFrom);
  }
}
function ReportsPageComponent_select_21_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", m_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.vm.getMonthName(m_r14));
  }
}
function ReportsPageComponent_select_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_21_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportMonth = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275template(1, ReportsPageComponent_select_21_option_1_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportMonth);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c5));
  }
}
function ReportsPageComponent_input_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 30);
    \u0275\u0275listener("change", function ReportsPageComponent_input_22_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportYearNum = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportYearNum);
  }
}
function ReportsPageComponent_input_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275listener("change", function ReportsPageComponent_input_23_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportDate = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportDate);
  }
}
function ReportsPageComponent_select_24_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r18 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", teacher_r18._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.vm.teacherName(teacher_r18));
  }
}
function ReportsPageComponent_select_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_24_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportTeacher = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_24_option_3_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportTeacher);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.teachers);
  }
}
function ReportsPageComponent_select_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_25_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportPerformanceCategory = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All performance bands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 31);
    \u0275\u0275text(4, "Excellent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 32);
    \u0275\u0275text(6, "Good");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 33);
    \u0275\u0275text(8, "Average");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 34);
    \u0275\u0275text(10, "Needs Attention");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportPerformanceCategory);
  }
}
function ReportsPageComponent_input_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 28);
    \u0275\u0275listener("change", function ReportsPageComponent_input_26_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportDate = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportDate);
  }
}
function ReportsPageComponent_select_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_27_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportPaymentStatus = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All payment status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 35);
    \u0275\u0275text(4, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 36);
    \u0275\u0275text(6, "Partial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 37);
    \u0275\u0275text(8, "Unpaid");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportPaymentStatus);
  }
}
function ReportsPageComponent_select_28_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r23 = ctx.$implicit;
    \u0275\u0275property("value", student_r23._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", student_r23.admissionNumber, " \u2014 ", student_r23.firstName, " ", student_r23.lastName || "", "");
  }
}
function ReportsPageComponent_select_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_28_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportStudent = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All students");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_28_option_3_Template, 2, 4, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportStudent);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.students);
  }
}
function ReportsPageComponent_input_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 38);
    \u0275\u0275listener("input", function ReportsPageComponent_input_29_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.vm.filters.reportDepartment = $event.target.value);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportDepartment);
  }
}
function ReportsPageComponent_input_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 39);
    \u0275\u0275listener("input", function ReportsPageComponent_input_30_Template_input_input_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.vm.filters.reportDesignation = $event.target.value);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportDesignation);
  }
}
function ReportsPageComponent_select_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_31_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportPayrollStatus = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All payroll status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 35);
    \u0275\u0275text(4, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 40);
    \u0275\u0275text(6, "Pending");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportPayrollStatus);
  }
}
function ReportsPageComponent_select_32_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r28 = ctx.$implicit;
    \u0275\u0275property("value", route_r28._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r28.routeName);
  }
}
function ReportsPageComponent_select_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_32_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportRoute = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All routes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_32_option_3_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportRoute);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.busRoutes);
  }
}
function ReportsPageComponent_select_33_ng_container_3_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stop_r30 = ctx.$implicit;
    const route_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", stop_r30.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", route_r31.routeName, " \u2014 ", stop_r30.name, "");
  }
}
function ReportsPageComponent_select_33_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReportsPageComponent_select_33_ng_container_3_option_1_Template, 2, 3, "option", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const route_r31 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", route_r31.stops || \u0275\u0275pureFunction0(1, _c6));
  }
}
function ReportsPageComponent_select_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_33_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportStop = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All stops");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ReportsPageComponent_select_33_ng_container_3_Template, 2, 2, "ng-container", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportStop);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.vm.busRoutes);
  }
}
function ReportsPageComponent_select_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 6);
    \u0275\u0275listener("change", function ReportsPageComponent_select_34_Template_select_change_0_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.vm.filters.reportBusStatus = $event.target.value;
      return \u0275\u0275resetView(ctx_r3.vm.loadReport());
    });
    \u0275\u0275elementStart(1, "option", 21);
    \u0275\u0275text(2, "All bus status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 22);
    \u0275\u0275text(4, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 23);
    \u0275\u0275text(6, "Inactive");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r3.vm.filters.reportBusStatus);
  }
}
function ReportsPageComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ReportsPageComponent_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.vm.exportReportCsv());
    });
    \u0275\u0275text(1, "Export Excel");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ReportsPageComponent_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.vm.exportReportPdf());
    });
    \u0275\u0275text(1, "Export PDF");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ReportsPageComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.vm.printReport());
    });
    \u0275\u0275text(1, "Print");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function ReportsPageComponent_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.vm.openReportServerPdf());
    });
    \u0275\u0275text(1, "Download PDF");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_div_42_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r37 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r37.label);
  }
}
function ReportsPageComponent_div_42_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r38 = ctx.$implicit;
    const row_r39 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.vm.reportCell(row_r39, col_r38.key));
  }
}
function ReportsPageComponent_div_42_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, ReportsPageComponent_div_42_tr_6_td_1_Template, 2, 1, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.vm.reportColumns());
  }
}
function ReportsPageComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "table")(2, "thead")(3, "tr");
    \u0275\u0275template(4, ReportsPageComponent_div_42_th_4_Template, 2, 1, "th", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "tbody");
    \u0275\u0275template(6, ReportsPageComponent_div_42_tr_6_Template, 2, 1, "tr", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.vm.reportColumns());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.vm.reportRows);
  }
}
function ReportsPageComponent_app_table_skeleton_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 44);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 6)("rows", 6)("embedded", true);
  }
}
function ReportsPageComponent_app_empty_state_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 45);
  }
}
var ReportsPageComponent = class _ReportsPageComponent {
  vm;
  domains = [
    { key: "students", label: "Academic \u2014 Students" },
    { key: "academic", label: "Academic \u2014 Performance" },
    { key: "promotions", label: "Academic \u2014 Promotions" },
    { key: "attendance", label: "Attendance" },
    { key: "fees", label: "Financial \u2014 Fees" },
    { key: "payroll", label: "Financial \u2014 Payroll" },
    { key: "transport", label: "Transport" },
    { key: "operations", label: "Operational" }
  ];
  typesByDomain = {
    students: [
      { id: "register", label: "Student Register" },
      { id: "class-register", label: "Class Register" },
      { id: "admission-register", label: "Admission Register" },
      { id: "class-wise", label: "Class-wise Report" },
      { id: "section-wise", label: "Section-wise Report" },
      { id: "status", label: "Student Status Report" },
      { id: "inactive-students", label: "Inactive Students" }
    ],
    academic: [
      { id: "student-progress", label: "Student Progress Report" },
      { id: "performance-summary", label: "Student Performance Summary" },
      { id: "top-performers", label: "Top Performers Report" },
      { id: "weak-students", label: "Weak Students Report" }
    ],
    fees: [
      { id: "monthly-collection", label: "Fee Collection Report" },
      { id: "pending", label: "Outstanding Fee Report" },
      { id: "outstanding", label: "Outstanding Fees" },
      { id: "student-ledger", label: "Student Fee Ledger" },
      { id: "discount-report", label: "Discount Report" },
      { id: "fine-collection", label: "Fine Collection Report" },
      { id: "bus-fee-collection", label: "Bus Fee Collection" }
    ],
    attendance: [
      { id: "daily", label: "Daily Attendance Report" },
      { id: "monthly", label: "Monthly Attendance Report" },
      { id: "yearly", label: "Yearly Attendance Report" },
      { id: "student-summary", label: "Student-wise Attendance" },
      { id: "class-summary", label: "Class-wise Attendance" },
      { id: "teacher-wise", label: "Teacher-wise Attendance" }
    ],
    payroll: [
      { id: "summary", label: "Payroll Summary Report" },
      { id: "salary-summary", label: "Salary Summary" },
      { id: "payment-status", label: "Payment Status" }
    ],
    transport: [
      { id: "route-wise", label: "Route-wise Students" },
      { id: "stop-wise", label: "Stop-wise Students" },
      { id: "bus-strength", label: "Route Strength Report" },
      { id: "fee-collection", label: "Bus Fee Collection" }
    ],
    promotions: [
      { id: "promotion-report", label: "Student Promotion Report" },
      { id: "promoted", label: "Promoted Students" },
      { id: "detained", label: "Detained Students" },
      { id: "left-school", label: "Left School" },
      { id: "tc-issued", label: "TC Issued" },
      { id: "class-strength-comparison", label: "Class Strength Comparison" }
    ],
    operations: [
      { id: "teacher-register", label: "Teacher Register" },
      { id: "bus-allocation", label: "Bus Allocation Report" },
      { id: "route-strength", label: "Route Strength Report" },
      { id: "inactive-students", label: "Inactive Students Report" },
      { id: "user-activity", label: "User Activity Report" },
      { id: "audit-summary", label: "Audit Summary Report" }
    ]
  };
  reportTypes() {
    const domain = this.vm.reportDomain;
    return this.typesByDomain[domain] || [];
  }
  static \u0275fac = function ReportsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsPageComponent, selectors: [["app-reports-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 45, vars: 39, consts: [[1, "workspace"], [1, "section-head", "span-12"], [1, "eyebrow"], [1, "dash-sub"], [1, "data-card", "span-12"], [1, "toolbar"], [1, "filter-select", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "filter-select", 3, "value", "change", 4, "ngIf"], ["type", "date", "class", "filter-select", 3, "value", "change", 4, "ngIf"], ["type", "date", "class", "filter-select", 3, "value", "min", "change", 4, "ngIf"], ["class", "filter-select", "type", "number", "min", "2020", "max", "2100", "placeholder", "Calendar year", 3, "value", "change", 4, "ngIf"], ["class", "filter-select", "placeholder", "Department / qualification", 3, "value", "input", 4, "ngIf"], ["class", "filter-select", "placeholder", "Designation", 3, "value", "input", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click", "disabled"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", "embedded", 4, "ngIf"], ["title", "No report data", "message", "No report data for the selected filters. Adjust filters and click Refresh.", 4, "ngIf"], [3, "value"], ["value", ""], ["value", "active"], ["value", "inactive"], ["value", "left_school"], ["value", "passed_out"], ["value", "tc_issued"], ["value", "alumni"], ["type", "date", 1, "filter-select", 3, "change", "value"], ["type", "date", 1, "filter-select", 3, "change", "value", "min"], ["type", "number", "min", "2020", "max", "2100", "placeholder", "Calendar year", 1, "filter-select", 3, "change", "value"], ["value", "excellent"], ["value", "good"], ["value", "average"], ["value", "needs_attention"], ["value", "paid"], ["value", "partial"], ["value", "unpaid"], ["placeholder", "Department / qualification", 1, "filter-select", 3, "input", "value"], ["placeholder", "Designation", 1, "filter-select", 3, "input", "value"], ["value", "pending"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "table-wrap", "sticky-header"], [3, "columns", "rows", "embedded"], ["title", "No report data", "message", "No report data for the selected filters. Adjust filters and click Refresh."]], template: function ReportsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      \u0275\u0275text(4, "Reports & Analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6, "Operational reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8, "Generate filtered reports from live ERP data. Export to Excel or PDF.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 4)(10, "div", 5)(11, "select", 6);
      \u0275\u0275listener("change", function ReportsPageComponent_Template_select_change_11_listener($event) {
        return ctx.vm.setReportDomain($event.target.value);
      });
      \u0275\u0275template(12, ReportsPageComponent_option_12_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 6);
      \u0275\u0275listener("change", function ReportsPageComponent_Template_select_change_13_listener($event) {
        return ctx.vm.setReportType($event.target.value);
      });
      \u0275\u0275template(14, ReportsPageComponent_option_14_Template, 2, 2, "option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, ReportsPageComponent_select_15_Template, 4, 2, "select", 8)(16, ReportsPageComponent_select_16_Template, 4, 2, "select", 8)(17, ReportsPageComponent_select_17_Template, 4, 2, "select", 8)(18, ReportsPageComponent_select_18_Template, 15, 1, "select", 8)(19, ReportsPageComponent_input_19_Template, 1, 1, "input", 9)(20, ReportsPageComponent_input_20_Template, 1, 2, "input", 10)(21, ReportsPageComponent_select_21_Template, 2, 3, "select", 8)(22, ReportsPageComponent_input_22_Template, 1, 1, "input", 11)(23, ReportsPageComponent_input_23_Template, 1, 1, "input", 9)(24, ReportsPageComponent_select_24_Template, 4, 2, "select", 8)(25, ReportsPageComponent_select_25_Template, 11, 1, "select", 8)(26, ReportsPageComponent_input_26_Template, 1, 1, "input", 9)(27, ReportsPageComponent_select_27_Template, 9, 1, "select", 8)(28, ReportsPageComponent_select_28_Template, 4, 2, "select", 8)(29, ReportsPageComponent_input_29_Template, 1, 1, "input", 12)(30, ReportsPageComponent_input_30_Template, 1, 1, "input", 13)(31, ReportsPageComponent_select_31_Template, 7, 1, "select", 8)(32, ReportsPageComponent_select_32_Template, 4, 2, "select", 8)(33, ReportsPageComponent_select_33_Template, 4, 2, "select", 8)(34, ReportsPageComponent_select_34_Template, 7, 1, "select", 8);
      \u0275\u0275elementStart(35, "button", 14);
      \u0275\u0275listener("click", function ReportsPageComponent_Template_button_click_35_listener() {
        return ctx.vm.loadReport();
      });
      \u0275\u0275text(36, "Refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, ReportsPageComponent_button_37_Template, 2, 0, "button", 15)(38, ReportsPageComponent_button_38_Template, 2, 0, "button", 15)(39, ReportsPageComponent_button_39_Template, 2, 0, "button", 15)(40, ReportsPageComponent_button_40_Template, 2, 0, "button", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 16);
      \u0275\u0275template(42, ReportsPageComponent_div_42_Template, 7, 2, "div", 17)(43, ReportsPageComponent_app_table_skeleton_43_Template, 1, 3, "app-table-skeleton", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275template(44, ReportsPageComponent_app_empty_state_44_Template, 1, 0, "app-empty-state", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.vm.reportDomain);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.domains);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.vm.reportType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.reportTypes());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(34, _c0).includes(ctx.vm.reportDomain));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(35, _c1).includes(ctx.vm.reportDomain));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(36, _c2).includes(ctx.vm.reportDomain));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "students");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "students");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "students");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(37, _c3).includes(ctx.vm.reportDomain));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(38, _c4).includes(ctx.vm.reportDomain));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "attendance" && ctx.vm.reportType === "daily");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "attendance" && ctx.vm.reportType === "teacher-wise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "academic");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "operations" && ctx.vm.reportType === "user-activity");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "fees");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "fees" && ctx.vm.reportType === "student-ledger");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "payroll");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "payroll");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "payroll");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "transport");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "transport" && ctx.vm.reportType === "stop-wise");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportDomain === "transport");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.vm.reportLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.vm.can("reports", "export"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.can("reports", "export"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.can("reports", "print"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.can("reports", "export"));
      \u0275\u0275advance();
      \u0275\u0275classProp("is-refreshing", ctx.vm.reportLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.reportLoading || ctx.vm.reportRows.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.reportLoading && !ctx.vm.reportRows.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.reportLoading && !ctx.vm.reportRows.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, EmptyStateComponent, TableSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsPageComponent, { className: "ReportsPageComponent", filePath: "src\\app\\pages\\reports-page\\reports-page.component.ts", lineNumber: 27 });
})();
export {
  ReportsPageComponent
};
//# sourceMappingURL=chunk-TCH3RUBV.js.map
