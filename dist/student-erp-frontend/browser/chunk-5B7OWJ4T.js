import {
  PaginationBarComponent
} from "./chunk-NHO3MKXE.js";
import "./chunk-XUTYR2A2.js";
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
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KJIDRE24.js";

// src/app/pages/dashboard-page/dashboard-page.component.ts
function DashboardPageComponent_div_1_Template(rf, ctx) {
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
function DashboardPageComponent_ng_container_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Monitor admissions, staff, classes, documents, and recent school activity from one place.");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_ng_container_2_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Track students, attendance, exams, and academic operations \u2014 all from one place.");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_ng_container_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "View your fees, attendance, timetable, exams, and profile from one place.");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2, "Active Year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activeYear_r1 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(activeYear_r1.name);
  }
}
function DashboardPageComponent_ng_container_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "path", 35)(5, "circle", 36)(6, "path", 37)(7, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 39)(9, "span");
    \u0275\u0275text(10, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 40);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(14, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 34);
    \u0275\u0275element(16, "path", 41)(17, "circle", 42)(18, "polyline", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "div", 39)(20, "span");
    \u0275\u0275text(21, "Active Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 44);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_24_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("teachers"));
    });
    \u0275\u0275elementStart(25, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 34);
    \u0275\u0275element(27, "path", 45)(28, "circle", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div", 39)(30, "span");
    \u0275\u0275text(31, "Total Teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 47);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_34_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("teachers"));
    });
    \u0275\u0275elementStart(35, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 34);
    \u0275\u0275element(37, "path", 45)(38, "circle", 46)(39, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "div", 39)(41, "span");
    \u0275\u0275text(42, "Active Teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 49);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_45_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("classes"));
    });
    \u0275\u0275elementStart(46, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 34);
    \u0275\u0275element(48, "path", 50)(49, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 39)(51, "span");
    \u0275\u0275text(52, "Total Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "strong");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "div", 52);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("classes"));
    });
    \u0275\u0275elementStart(56, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(57, "svg", 34);
    \u0275\u0275element(58, "rect", 53)(59, "rect", 54)(60, "rect", 55)(61, "rect", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "div", 39)(63, "span");
    \u0275\u0275text(64, "Total Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "strong");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 32);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_67_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(68, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(69, "svg", 34);
    \u0275\u0275element(70, "path", 41)(71, "circle", 42)(72, "line", 57)(73, "line", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 39)(75, "span");
    \u0275\u0275text(76, "Today's Admissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "strong");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 59);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_15_Template_div_click_79_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(80, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(81, "svg", 34);
    \u0275\u0275element(82, "path", 60)(83, "polyline", 61)(84, "line", 62)(85, "line", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(86, "div", 39)(87, "span");
    \u0275\u0275text(88, "Pending Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "strong");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.totalStudents);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.activeStudents);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.totalTeachers);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.activeTeachers);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.totalClasses);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.totalSections);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.todaysAdmissions);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.pendingDocuments);
  }
}
function DashboardPageComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 40);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_16_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("attendance"));
    });
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "rect", 64)(5, "line", 65)(6, "line", 66)(7, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 39)(9, "span");
    \u0275\u0275text(10, "Today's Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 52);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_16_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("fees"));
    });
    \u0275\u0275elementStart(16, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 34);
    \u0275\u0275element(18, "rect", 68)(19, "line", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 39)(21, "span");
    \u0275\u0275text(22, "Today's Fee Collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 59);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_16_Template_div_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("fees"));
    });
    \u0275\u0275elementStart(27, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 34);
    \u0275\u0275element(29, "circle", 70)(30, "line", 71)(31, "line", 72);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 39)(33, "span");
    \u0275\u0275text(34, "Pending Fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 49);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_16_Template_div_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("transport"));
    });
    \u0275\u0275elementStart(39, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 34);
    \u0275\u0275element(41, "path", 73)(42, "path", 74)(43, "path", 75)(44, "circle", 76)(45, "circle", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 39)(47, "span");
    \u0275\u0275text(48, "Students Using Bus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 44);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_16_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("payroll"));
    });
    \u0275\u0275elementStart(52, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(53, "svg", 34);
    \u0275\u0275element(54, "rect", 78)(55, "path", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(56, "div", 39)(57, "span");
    \u0275\u0275text(58, "Payroll Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "strong");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "small");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", (ctx_r2.vm.summary.operational.todaysAttendance == null ? null : ctx_r2.vm.summary.operational.todaysAttendance.present) || 0, " present");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (ctx_r2.vm.summary.operational.todaysAttendance == null ? null : ctx_r2.vm.summary.operational.todaysAttendance.absent) || 0, " absent \xB7 ", (ctx_r2.vm.summary.operational.todaysAttendance == null ? null : ctx_r2.vm.summary.operational.todaysAttendance.total) || 0, " total");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 9, ctx_r2.vm.summary.operational.todaysFeeCollection || 0, "INR"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 12, ctx_r2.vm.summary.operational.pendingFees || 0, "INR"));
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.operational.busStudents || 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", (ctx_r2.vm.summary.operational.payrollStatus == null ? null : ctx_r2.vm.summary.operational.payrollStatus.paid) || 0, "/", (ctx_r2.vm.summary.operational.payrollStatus == null ? null : ctx_r2.vm.summary.operational.payrollStatus.total) || 0, " paid");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r2.vm.summary.operational.payrollStatus == null ? null : ctx_r2.vm.summary.operational.payrollStatus.pending) || 0, " pending this month");
  }
}
function DashboardPageComponent_ng_container_2_section_17_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.feeMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, row_r6.amount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.receiptNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 8, row_r6.paidAt, "medium"));
  }
}
function DashboardPageComponent_ng_container_2_section_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 80)(1, "div", 16)(2, "div")(3, "p", 17);
    \u0275\u0275text(4, "Fee Collections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Recent fee collections");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_section_17_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("reports"));
    });
    \u0275\u0275text(8, "Reports \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 82)(10, "table")(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, DashboardPageComponent_ng_container_2_section_17_tr_24_Template, 13, 11, "tr", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r2.vm.summary.operational.recentFeeCollections);
  }
}
function DashboardPageComponent_ng_container_2_section_18_article_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 86)(1, "span");
    \u0275\u0275text(2, "Admission trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r7 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(trend_r7.currentValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Previous: ", trend_r7.previousValue, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", trend_r7.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.trendLabel(trend_r7.trend));
  }
}
function DashboardPageComponent_ng_container_2_section_18_article_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 86)(1, "span");
    \u0275\u0275text(2, "Attendance trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r8 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", trend_r8.currentValue, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Previous: ", trend_r8.previousValue, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", trend_r8.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.trendLabel(trend_r8.trend));
  }
}
function DashboardPageComponent_ng_container_2_section_18_article_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 86)(1, "span");
    \u0275\u0275text(2, "Fee collection trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r9 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 4, trend_r9.currentValue, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Previous: ", \u0275\u0275pipeBind4(8, 9, trend_r9.previousValue, "INR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", trend_r9.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.trendLabel(trend_r9.trend));
  }
}
function DashboardPageComponent_ng_container_2_section_18_article_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 86)(1, "span");
    \u0275\u0275text(2, "Payroll trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r10 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 4, trend_r10.currentValue, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Previous: ", \u0275\u0275pipeBind4(8, 9, trend_r10.previousValue, "INR", "symbol", "1.0-0"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", trend_r10.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.trendLabel(trend_r10.trend));
  }
}
function DashboardPageComponent_ng_container_2_section_18_article_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 86)(1, "span");
    \u0275\u0275text(2, "Promotion trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r11 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(trend_r11.currentValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Previous: ", trend_r11.previousValue, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", trend_r11.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.trendLabel(trend_r11.trend));
  }
}
function DashboardPageComponent_ng_container_2_section_18_article_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 86)(1, "span");
    \u0275\u0275text(2, "Bus utilization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const trend_r12 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", trend_r12.currentValue, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Previous: ", trend_r12.previousValue, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", trend_r12.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.trendLabel(trend_r12.trend));
  }
}
function DashboardPageComponent_ng_container_2_section_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 80)(1, "div", 16)(2, "div")(3, "p", 17);
    \u0275\u0275text(4, "Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Operational trends (last 6 months)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 84);
    \u0275\u0275template(8, DashboardPageComponent_ng_container_2_section_18_article_8_Template, 9, 4, "article", 85)(9, DashboardPageComponent_ng_container_2_section_18_article_9_Template, 9, 4, "article", 85)(10, DashboardPageComponent_ng_container_2_section_18_article_10_Template, 11, 14, "article", 85)(11, DashboardPageComponent_ng_container_2_section_18_article_11_Template, 11, 14, "article", 85)(12, DashboardPageComponent_ng_container_2_section_18_article_12_Template, 9, 4, "article", 85)(13, DashboardPageComponent_ng_container_2_section_18_article_13_Template, 9, 4, "article", 85);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.vm.summary.trends.admissions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary.trends.attendance);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary.trends.feeCollection);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary.trends.payroll);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary.trends.promotions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary.trends.busUtilization);
  }
}
function DashboardPageComponent_ng_container_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_19_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "path", 35)(5, "circle", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 39)(7, "span");
    \u0275\u0275text(8, "Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 88)(12, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 34);
    \u0275\u0275element(14, "path", 45)(15, "circle", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 39)(17, "span");
    \u0275\u0275text(18, "Teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.students);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r2.vm.summary.teachers);
  }
}
function DashboardPageComponent_ng_container_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_20_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("profile"));
    });
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "path", 45)(5, "circle", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 39)(7, "span");
    \u0275\u0275text(8, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10, "View");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 52);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_20_Template_div_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("fees"));
    });
    \u0275\u0275elementStart(12, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 34);
    \u0275\u0275element(14, "rect", 89)(15, "line", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 39)(17, "span");
    \u0275\u0275text(18, "My Fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "View");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 49);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_20_Template_div_click_21_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("attendance"));
    });
    \u0275\u0275elementStart(22, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 34);
    \u0275\u0275element(24, "rect", 90)(25, "line", 65)(26, "line", 66)(27, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "div", 39)(29, "span");
    \u0275\u0275text(30, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32, "View");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 44);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_div_20_Template_div_click_33_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("exams"));
    });
    \u0275\u0275elementStart(34, "div", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 34);
    \u0275\u0275element(36, "path", 60)(37, "polyline", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div", 39)(39, "span");
    \u0275\u0275text(40, "Exams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "strong");
    \u0275\u0275text(42, "View");
    \u0275\u0275elementEnd()()()();
  }
}
function DashboardPageComponent_ng_container_2_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 41)(4, "circle", 42)(5, "line", 57)(6, "line", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Admit Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "New admission");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("teachers"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 45)(4, "circle", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Add Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Staff registration");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("classes"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 50)(4, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Create Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Classes & sections");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35)(4, "circle", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Student Directory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Browse students");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("users"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 35)(4, "circle", 36)(5, "path", 37)(6, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Users & Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Access control");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("attendance"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "rect", 90)(4, "line", 65)(5, "line", 66)(6, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Daily records");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("profile"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 45)(4, "circle", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Academic overview");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("fees"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "rect", 89)(4, "line", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "My Fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Payment history");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("attendance"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "rect", 90)(4, "line", 65)(5, "line", 66)(6, "line", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "View records");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("exams"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 60)(4, "polyline", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Exams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Unit tests");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("profile"));
    });
    \u0275\u0275elementStart(1, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 34);
    \u0275\u0275element(3, "path", 45)(4, "circle", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Profiles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Student insights");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_section_40_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r27 = ctx.$implicit;
    \u0275\u0275property("value", room_r27._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r27.name, "-", room_r27.section, "");
  }
}
function DashboardPageComponent_ng_container_2_section_40_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 109);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_section_40_tr_29_Template_tr_click_0_listener() {
      const student_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.openStudentProfile(student_r29._id));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 110);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r29.admissionNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(student_r29));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.enrollmentClassName(student_r29));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", student_r29.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.studentStatusLabel(student_r29.status));
  }
}
function DashboardPageComponent_ng_container_2_section_40_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2, "No students found");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_ng_container_2_section_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 99)(1, "div", 16)(2, "div")(3, "p", 17);
    \u0275\u0275text(4, "Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Student directory");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_section_40_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("students"));
    });
    \u0275\u0275text(8, "View all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 100)(10, "div", 101)(11, "input", 102);
    \u0275\u0275listener("input", function DashboardPageComponent_ng_container_2_section_40_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.vm.filters.studentSearch = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("dashboardStudents"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 103);
    \u0275\u0275listener("change", function DashboardPageComponent_ng_container_2_section_40_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.vm.filters.studentClass = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("dashboardStudents"));
    });
    \u0275\u0275elementStart(13, "option", 104);
    \u0275\u0275text(14, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DashboardPageComponent_ng_container_2_section_40_option_15_Template, 2, 3, "option", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 82)(17, "table")(18, "thead")(19, "tr")(20, "th");
    \u0275\u0275text(21, "Adm no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "tbody");
    \u0275\u0275template(29, DashboardPageComponent_ng_container_2_section_40_tr_29_Template, 10, 5, "tr", 106)(30, DashboardPageComponent_ng_container_2_section_40_tr_30_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(31, "app-pagination-bar", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r2.vm.filters.studentSearch);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.studentClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("dashboardStudents", ctx_r2.vm.filteredStudents));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.filteredStudents.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.filteredStudents);
  }
}
function DashboardPageComponent_ng_container_2_section_41_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_section_41_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("teachers"));
    });
    \u0275\u0275text(1, "View all \u2192");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_ng_container_2_section_41_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101)(2, "input", 116);
    \u0275\u0275listener("input", function DashboardPageComponent_ng_container_2_section_41_div_8_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.vm.filters.teacherSearch = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("dashboardTeachers"));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.vm.filters.teacherSearch);
  }
}
function DashboardPageComponent_ng_container_2_section_41_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Salary");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_ng_container_2_section_41_tr_17_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r32 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, teacher_r32.baseSalary, "INR"));
  }
}
function DashboardPageComponent_ng_container_2_section_41_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DashboardPageComponent_ng_container_2_section_41_tr_17_td_3_Template, 3, 4, "td", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const teacher_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.teacherName(teacher_r32));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
  }
}
function DashboardPageComponent_ng_container_2_section_41_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 117);
    \u0275\u0275text(2, "No teachers found");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.vm.isAdmin ? 2 : 1);
  }
}
function DashboardPageComponent_ng_container_2_section_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 112)(1, "div", 16)(2, "div")(3, "p", 17);
    \u0275\u0275text(4, "Teachers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Roster");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DashboardPageComponent_ng_container_2_section_41_button_7_Template, 2, 0, "button", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, DashboardPageComponent_ng_container_2_section_41_div_8_Template, 3, 1, "div", 114);
    \u0275\u0275elementStart(9, "div", 82)(10, "table")(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DashboardPageComponent_ng_container_2_section_41_th_15_Template, 2, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, DashboardPageComponent_ng_container_2_section_41_tr_17_Template, 4, 2, "tr", 83)(18, DashboardPageComponent_ng_container_2_section_41_tr_18_Template, 3, 1, "tr", 2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(19, "app-pagination-bar", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("dashboardTeachers", ctx_r2.vm.filteredTeachers));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.filteredTeachers.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.filteredTeachers);
  }
}
function DashboardPageComponent_ng_container_2_section_42_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 110);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const record_r34 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(record_r34.student));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", record_r34.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(record_r34.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, record_r34.date));
  }
}
function DashboardPageComponent_ng_container_2_section_42_app_empty_state_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 126);
  }
}
function DashboardPageComponent_ng_container_2_section_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 80)(1, "div", 16)(2, "div")(3, "p", 17);
    \u0275\u0275text(4, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Recent records");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 81);
    \u0275\u0275listener("click", function DashboardPageComponent_ng_container_2_section_42_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setTab("attendance"));
    });
    \u0275\u0275text(8, "View all \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 100)(10, "div", 101)(11, "input", 118);
    \u0275\u0275listener("input", function DashboardPageComponent_ng_container_2_section_42_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.vm.filters.attendanceSearch = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("dashboardAttendance"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 103);
    \u0275\u0275listener("change", function DashboardPageComponent_ng_container_2_section_42_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.vm.filters.attendanceStatus = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("dashboardAttendance"));
    });
    \u0275\u0275elementStart(13, "option", 104);
    \u0275\u0275text(14, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 119);
    \u0275\u0275text(16, "Present");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 120);
    \u0275\u0275text(18, "Absent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 121);
    \u0275\u0275text(20, "Late");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 122);
    \u0275\u0275text(22, "Half day");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 123)(24, "table")(25, "thead")(26, "tr")(27, "th");
    \u0275\u0275text(28, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "th");
    \u0275\u0275text(32, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "tbody");
    \u0275\u0275template(34, DashboardPageComponent_ng_container_2_section_42_tr_34_Template, 9, 6, "tr", 83);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(35, DashboardPageComponent_ng_container_2_section_42_app_empty_state_35_Template, 1, 0, "app-empty-state", 124);
    \u0275\u0275element(36, "app-pagination-bar", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r2.vm.filters.attendanceSearch);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.attendanceStatus);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("dashboardAttendance", ctx_r2.vm.sortedDashboardAttendance));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.sortedDashboardAttendance.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedDashboardAttendance);
  }
}
function DashboardPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "p", 7);
    \u0275\u0275text(4, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, DashboardPageComponent_ng_container_2_p_7_Template, 2, 0, "p", 9)(8, DashboardPageComponent_ng_container_2_p_8_Template, 2, 0, "p", 9)(9, DashboardPageComponent_ng_container_2_p_9_Template, 2, 0, "p", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275template(11, DashboardPageComponent_ng_container_2_div_11_Template, 5, 1, "div", 11);
    \u0275\u0275elementStart(12, "span", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, DashboardPageComponent_ng_container_2_div_15_Template, 91, 8, "div", 13)(16, DashboardPageComponent_ng_container_2_div_16_Template, 63, 15, "div", 13)(17, DashboardPageComponent_ng_container_2_section_17_Template, 25, 1, "section", 14)(18, DashboardPageComponent_ng_container_2_section_18_Template, 14, 6, "section", 14)(19, DashboardPageComponent_ng_container_2_div_19_Template, 21, 2, "div", 13)(20, DashboardPageComponent_ng_container_2_div_20_Template, 43, 0, "div", 13);
    \u0275\u0275elementStart(21, "section", 15)(22, "div", 16)(23, "div")(24, "p", 17);
    \u0275\u0275text(25, "Quick Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3");
    \u0275\u0275text(27, "Jump to a module");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 18);
    \u0275\u0275template(29, DashboardPageComponent_ng_container_2_button_29_Template, 11, 0, "button", 19)(30, DashboardPageComponent_ng_container_2_button_30_Template, 9, 0, "button", 20)(31, DashboardPageComponent_ng_container_2_button_31_Template, 9, 0, "button", 21)(32, DashboardPageComponent_ng_container_2_button_32_Template, 9, 0, "button", 22)(33, DashboardPageComponent_ng_container_2_button_33_Template, 11, 0, "button", 23)(34, DashboardPageComponent_ng_container_2_button_34_Template, 11, 0, "button", 24)(35, DashboardPageComponent_ng_container_2_button_35_Template, 9, 0, "button", 25)(36, DashboardPageComponent_ng_container_2_button_36_Template, 9, 0, "button", 19)(37, DashboardPageComponent_ng_container_2_button_37_Template, 11, 0, "button", 21)(38, DashboardPageComponent_ng_container_2_button_38_Template, 9, 0, "button", 24)(39, DashboardPageComponent_ng_container_2_button_39_Template, 9, 0, "button", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, DashboardPageComponent_ng_container_2_section_40_Template, 32, 7, "section", 26)(41, DashboardPageComponent_ng_container_2_section_41_Template, 20, 7, "section", 27)(42, DashboardPageComponent_ng_container_2_section_42_Template, 37, 6, "section", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.vm.isAdmin ? "School Command Center" : ctx_r2.vm.isTeacher ? "Teacher Workspace" : ctx_r2.vm.isParent ? "Parent Dashboard" : "Student Portal", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.vm.summary == null ? null : ctx_r2.vm.summary.activeYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 26, ctx_r2.today, "EEEE, MMM d, y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.vm.summary && ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.vm.summary == null ? null : ctx_r2.vm.summary.operational) && ctx_r2.vm.showOperationalDashboard);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.vm.summary == null ? null : ctx_r2.vm.summary.operational == null ? null : ctx_r2.vm.summary.operational.recentFeeCollections == null ? null : ctx_r2.vm.summary.operational.recentFeeCollections.length) && ctx_r2.vm.showOperationalDashboard);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.showOperationalDashboard && (ctx_r2.vm.summary == null ? null : ctx_r2.vm.summary.trends));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary && ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.summary && ctx_r2.vm.isPortalUser);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin || ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isStudent && !ctx_r2.vm.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser);
  }
}
var DashboardPageComponent = class _DashboardPageComponent {
  vm;
  today = /* @__PURE__ */ new Date();
  static \u0275fac = function DashboardPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPageComponent, selectors: [["app-dashboard-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace", "dashboard-view"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading dashboard data...", 3, "show"], [1, "dash-welcome"], [1, "dash-welcome-text"], [1, "dash-greeting"], [1, "dash-headline"], ["class", "dash-sub", 4, "ngIf"], [1, "dash-welcome-actions"], ["class", "active-year-pill", 4, "ngIf"], [1, "dash-date"], ["class", "dash-stats", 4, "ngIf"], ["class", "data-card span-12", 4, "ngIf"], [1, "dash-quick-section", "span-12"], [1, "section-head"], [1, "eyebrow"], [1, "dash-modules"], ["type", "button", "class", "dash-module dash-mod-blue", 3, "click", 4, "ngIf"], ["type", "button", "class", "dash-module dash-mod-purple", 3, "click", 4, "ngIf"], ["type", "button", "class", "dash-module dash-mod-orange", 3, "click", 4, "ngIf"], ["type", "button", "class", "dash-module dash-mod-teal", 3, "click", 4, "ngIf"], ["type", "button", "class", "dash-module dash-mod-indigo", 3, "click", 4, "ngIf"], ["type", "button", "class", "dash-module dash-mod-red", 3, "click", 4, "ngIf"], ["type", "button", "class", "dash-module dash-mod-green", 3, "click", 4, "ngIf"], ["class", "data-card span-8", 4, "ngIf"], ["class", "data-card span-4", 4, "ngIf"], [1, "dash-sub"], [1, "active-year-pill"], [1, "active-year-label"], [1, "dash-stats"], [1, "dash-stat-card", "dash-stat-blue", "clickable", 3, "click"], [1, "dash-stat-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "dash-stat-info"], [1, "dash-stat-card", "dash-stat-teal", "clickable", 3, "click"], ["d", "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["points", "17 11 19 13 23 9"], [1, "dash-stat-card", "dash-stat-purple", "clickable", 3, "click"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "dash-stat-card", "dash-stat-indigo", "clickable", 3, "click"], ["d", "M9 12l2 2 4-4"], [1, "dash-stat-card", "dash-stat-orange", "clickable", 3, "click"], ["d", "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"], ["d", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"], [1, "dash-stat-card", "dash-stat-green", "clickable", 3, "click"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], [1, "dash-stat-card", "dash-stat-red", "clickable", 3, "click"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "12", "y1", "18", "x2", "12", "y2", "12"], ["x1", "12", "y1", "9", "x2", "12.01", "y2", "9"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2"], ["x1", "1", "y1", "10", "x2", "23", "y2", "10"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["d", "M8 6v6"], ["d", "M15 6v6"], ["d", "M2 12h19"], ["cx", "7", "cy", "18", "r", "2"], ["cx", "17", "cy", "18", "r", "2"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2"], ["d", "M3 10h18"], [1, "data-card", "span-12"], ["type", "button", 1, "ghost", "small", "view-all-link", 3, "click"], [1, "table-wrap"], [4, "ngFor", "ngForOf"], [1, "trend-grid"], ["class", "trend-card", 4, "ngIf"], [1, "trend-card"], [1, "trend-pill", 3, "ngClass"], [1, "dash-stat-card", "dash-stat-teal"], ["x", "1", "y", "4", "width", "22", "height", "16", "rx", "2", "ry", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["type", "button", 1, "dash-module", "dash-mod-blue", 3, "click"], [1, "dash-mod-icon"], ["type", "button", 1, "dash-module", "dash-mod-purple", 3, "click"], ["type", "button", 1, "dash-module", "dash-mod-orange", 3, "click"], ["type", "button", 1, "dash-module", "dash-mod-teal", 3, "click"], ["type", "button", 1, "dash-module", "dash-mod-indigo", 3, "click"], ["type", "button", 1, "dash-module", "dash-mod-red", 3, "click"], ["type", "button", 1, "dash-module", "dash-mod-green", 3, "click"], [1, "data-card", "span-8"], [1, "toolbar"], [1, "search-box"], ["placeholder", "Search admission no or name", 3, "input", "value"], [1, "filter-select", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "clickable-row", 3, "click", 4, "ngFor", "ngForOf"], ["listKey", "dashboardStudents", 3, "vm", "items"], [3, "value"], [1, "clickable-row", 3, "click"], [1, "status-badge", 3, "ngClass"], ["colspan", "4", 1, "empty-cell"], [1, "data-card", "span-4"], ["type", "button", "class", "ghost small view-all-link", 3, "click", 4, "ngIf"], ["class", "toolbar", 4, "ngIf"], ["listKey", "dashboardTeachers", 3, "vm", "items"], ["placeholder", "Search teacher", 3, "input", "value"], [1, "empty-cell"], ["placeholder", "Search attendance", 3, "input", "value"], ["value", "present"], ["value", "absent"], ["value", "late"], ["value", "half_day"], [1, "table-wrap", "sticky-header"], ["title", "No attendance records", "message", "No attendance records match the current filters.", 4, "ngIf"], ["listKey", "dashboardAttendance", 3, "vm", "items"], ["title", "No attendance records", "message", "No attendance records match the current filters."]], template: function DashboardPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, DashboardPageComponent_div_1_Template, 2, 1, "div", 1)(2, DashboardPageComponent_ng_container_2_Template, 43, 29, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.summary);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.summary);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CurrencyPipe, DatePipe, PaginationBarComponent, SpinnerComponent, EmptyStateComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPageComponent, { className: "DashboardPageComponent", filePath: "src\\app\\pages\\dashboard-page\\dashboard-page.component.ts", lineNumber: 14 });
})();
export {
  DashboardPageComponent
};
//# sourceMappingURL=chunk-5B7OWJ4T.js.map
