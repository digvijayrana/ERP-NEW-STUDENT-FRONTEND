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
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  PatternValidator,
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
  DecimalPipe,
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

// src/app/pages/transport-page/transport-page.component.ts
var _c0 = () => ({ standalone: true });
function TransportPageComponent_div_1_Template(rf, ctx) {
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
function TransportPageComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3, "Total Routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "span", 35);
    \u0275\u0275text(9, "Active Routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 34)(14, "span", 35);
    \u0275\u0275text(15, "Registrations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 36);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx_r1.vm.busRoutes.length));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, ctx_r1.vm.activeBusRoutes().length));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 7, (tmp_4_0 = ctx_r1.vm.listingTotals["busRegistrations"]) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ctx_r1.vm.busRegistrations.length));
  }
}
function TransportPageComponent_ng_container_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.openBusRouteForm());
    });
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Create route ");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_div_20_tr_19_app_action_btn_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 46);
    \u0275\u0275listener("clicked", function TransportPageComponent_ng_container_2_div_20_tr_19_app_action_btn_23_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const route_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.editBusRoute(route_r6));
    });
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_div_20_tr_19_app_action_btn_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 47);
    \u0275\u0275listener("clicked", function TransportPageComponent_ng_container_2_div_20_tr_19_app_action_btn_24_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r7);
      const route_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.toggleBusRouteStatus(route_r6._id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("type", route_r6.status === "active" ? "deactivate" : "activate")("label", route_r6.status === "active" ? "Deactivate" : "Activate");
  }
}
function TransportPageComponent_ng_container_2_div_20_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275element(11, "br");
    \u0275\u0275elementStart(12, "span", 41);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 42);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 43);
    \u0275\u0275template(23, TransportPageComponent_ng_container_2_div_20_tr_19_app_action_btn_23_Template, 1, 0, "app-action-btn", 44)(24, TransportPageComponent_ng_container_2_div_20_tr_19_app_action_btn_24_Template, 1, 2, "app-action-btn", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const route_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(route_r6.routeCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(route_r6.routeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(route_r6.vehicleNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(route_r6.driverName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(route_r6.driverMobile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((route_r6.stops == null ? null : route_r6.stops.length) || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", route_r6.assignedCount || 0, " / ", route_r6.capacity, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", route_r6.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r6.status);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "edit"));
  }
}
function TransportPageComponent_ng_container_2_div_20_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275element(2, "app-empty-state", 49);
    \u0275\u0275elementEnd()();
  }
}
function TransportPageComponent_ng_container_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "table")(2, "thead")(3, "tr")(4, "th", 40);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_20_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("busRoutes", "routeCode"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 40);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_20_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("busRoutes", "vehicleNumber"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Stops");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Assigned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 40);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_20_Template_th_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("busRoutes", "status"));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, TransportPageComponent_ng_container_2_div_20_tr_19_Template, 25, 12, "tr", 30)(20, TransportPageComponent_ng_container_2_div_20_tr_20_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Route", ctx_r1.vm.listSortIndicator("busRoutes", "routeCode"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Vehicle", ctx_r1.vm.listSortIndicator("busRoutes", "vehicleNumber"), "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Status", ctx_r1.vm.listSortIndicator("busRoutes", "status"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.vm.paged("busRoutes", ctx_r1.vm.sortedBusRoutes));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.sortedBusRoutes.length && !ctx_r1.vm.isListingLoading("busRoutes"));
  }
}
function TransportPageComponent_ng_container_2_app_table_skeleton_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 50);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 7)("rows", 5)("embedded", true);
  }
}
function TransportPageComponent_ng_container_2_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_button_30_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.openBusRegForm());
    });
    \u0275\u0275elementStart(1, "span", 39);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Register student ");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r9 = ctx.$implicit;
    \u0275\u0275property("value", year_r9._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r9.name);
  }
}
function TransportPageComponent_ng_container_2_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r10 = ctx.$implicit;
    \u0275\u0275property("value", room_r10._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r10.name, "-", room_r10.section, "");
  }
}
function TransportPageComponent_ng_container_2_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r11 = ctx.$implicit;
    \u0275\u0275property("value", route_r11._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(route_r11.routeCode);
  }
}
function TransportPageComponent_ng_container_2_div_53_tr_19_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reg_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", \u0275\u0275pipeBind2(2, 1, reg_r13.serviceEndDate, "dd MMM yyyy"), "");
  }
}
function TransportPageComponent_ng_container_2_div_53_tr_19_app_action_btn_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 46);
    \u0275\u0275listener("clicked", function TransportPageComponent_ng_container_2_div_53_tr_19_app_action_btn_22_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r14);
      const reg_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.editBusRegistration(reg_r13));
    });
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_div_53_tr_19_app_action_btn_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 53);
    \u0275\u0275listener("clicked", function TransportPageComponent_ng_container_2_div_53_tr_19_app_action_btn_23_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r15);
      const reg_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.deactivateBusRegistration(reg_r13._id));
    });
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_div_53_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "span", 41);
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
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275template(16, TransportPageComponent_ng_container_2_div_53_tr_19_span_16_Template, 3, 4, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 42);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "div", 43);
    \u0275\u0275template(22, TransportPageComponent_ng_container_2_div_53_tr_19_app_action_btn_22_Template, 1, 0, "app-action-btn", 44)(23, TransportPageComponent_ng_container_2_div_53_tr_19_app_action_btn_23_Template, 1, 0, "app-action-btn", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const reg_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vm.studentName(reg_r13.student));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.vm.studentAdmission(reg_r13.student));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.vm.busRouteLabel(reg_r13.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reg_r13.stopName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 11, reg_r13.monthlyFee, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 14, reg_r13.serviceStartDate, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", reg_r13.serviceEndDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", reg_r13.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reg_r13.busService ? reg_r13.status : "inactive");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "edit") && reg_r13.status === "active");
  }
}
function TransportPageComponent_ng_container_2_div_53_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275element(2, "app-empty-state", 54);
    \u0275\u0275elementEnd()();
  }
}
function TransportPageComponent_ng_container_2_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "table")(2, "thead")(3, "tr")(4, "th", 40);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_53_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("busRegistrations", "studentName"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Stop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 40);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_53_Template_th_click_14_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.toggleListSort("busRegistrations", "status"));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275template(19, TransportPageComponent_ng_container_2_div_53_tr_19_Template, 24, 17, "tr", 30)(20, TransportPageComponent_ng_container_2_div_53_tr_20_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Student", ctx_r1.vm.listSortIndicator("busRegistrations", "studentName"), "");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Status", ctx_r1.vm.listSortIndicator("busRegistrations", "status"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.vm.paged("busRegistrations", ctx_r1.vm.sortedBusRegistrations));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.sortedBusRegistrations.length && !ctx_r1.vm.isListingLoading("busRegistrations"));
  }
}
function TransportPageComponent_ng_container_2_app_table_skeleton_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 50);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 7)("rows", 5)("embedded", true);
  }
}
function TransportPageComponent_ng_container_2_option_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
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
function TransportPageComponent_ng_container_2_button_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_button_81_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.exportBusReportCsv());
    });
    \u0275\u0275text(1, "Export Excel");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_button_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_button_82_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.exportBusReportPdf());
    });
    \u0275\u0275text(1, "Export PDF");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_button_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_button_83_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.openBusReportServerPdf());
    });
    \u0275\u0275text(1, "Download PDF");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Student");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Class");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Route");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Stop");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Student");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Month");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Paid");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Receipt");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_th_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_tr_100_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 42);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.className || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.routeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.stopName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 7, row_r20.monthlyFee, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", row_r20.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r20.busService && row_r20.status === "active" ? "active" : "inactive");
  }
}
function TransportPageComponent_ng_container_2_tr_100_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
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
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.studentName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r20.feeMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, row_r20.busFee, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, row_r20.paidAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r20.receiptNumber || "\u2014");
  }
}
function TransportPageComponent_ng_container_2_tr_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, TransportPageComponent_ng_container_2_tr_100_ng_container_1_Template, 15, 10, "ng-container", 2)(2, TransportPageComponent_ng_container_2_tr_100_ng_container_2_Template, 13, 11, "ng-container", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType !== "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType === "fee-collection");
  }
}
function TransportPageComponent_ng_container_2_app_empty_state_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 55);
  }
}
function TransportPageComponent_ng_container_2_div_102_option_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", vehicle_r22.driverName, "");
  }
}
function TransportPageComponent_ng_container_2_div_102_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275template(2, TransportPageComponent_ng_container_2_div_102_option_27_span_2_Template, 2, 1, "span", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r22 = ctx.$implicit;
    \u0275\u0275property("value", vehicle_r22._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vehicle_r22.vehicleNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r22.driverName);
  }
}
function TransportPageComponent_ng_container_2_div_102_label_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label")(1, "span", 63);
    \u0275\u0275text(2, "Fixed monthly fee");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 83);
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template_input_ngModelChange_2_listener($event) {
      const stop_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(stop_r24.sequence, $event) || (stop_r24.sequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template_input_ngModelChange_4_listener($event) {
      const stop_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(stop_r24.name, $event) || (stop_r24.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template_input_ngModelChange_6_listener($event) {
      const stop_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(stop_r24.distance, $event) || (stop_r24.distance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template_input_ngModelChange_8_listener($event) {
      const stop_r24 = \u0275\u0275restoreView(_r23).$implicit;
      \u0275\u0275twoWayBindingSet(stop_r24.monthlyFee, $event) || (stop_r24.monthlyFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "button", 89);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template_button_click_10_listener() {
      const i_r25 = \u0275\u0275restoreView(_r23).index;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.removeBusRouteStop(i_r25));
    });
    \u0275\u0275text(11, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const stop_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", stop_r24.sequence);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", stop_r24.name);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", stop_r24.distance);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", stop_r24.monthlyFee);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0))("readonly", ((tmp_14_0 = ctx_r1.vm.busRouteForm.get("feeType")) == null ? null : tmp_14_0.value) === "fixed");
  }
}
function TransportPageComponent_ng_container_2_div_102_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Seq");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Stop name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Distance (km)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Monthly fee");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, TransportPageComponent_ng_container_2_div_102_div_67_tr_14_Template, 12, 13, "tr", 30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r1.vm.busRouteStops);
  }
}
function TransportPageComponent_ng_container_2_div_102_p_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1, "Add at least one stop for this route.");
    \u0275\u0275elementEnd();
  }
}
function TransportPageComponent_ng_container_2_div_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_102_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.closeBusRouteForm());
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_102_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 58)(3, "div")(4, "p", 8);
    \u0275\u0275text(5, "Routes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 59);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_102_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.closeBusRouteForm());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 60);
    \u0275\u0275listener("ngSubmit", function TransportPageComponent_ng_container_2_div_102_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.saveBusRoute());
    });
    \u0275\u0275elementStart(11, "div", 61)(12, "div", 62)(13, "label")(14, "span", 63);
    \u0275\u0275text(15, "Route name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label")(18, "span", 63);
    \u0275\u0275text(19, "Route code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label", 66)(22, "span", 63);
    \u0275\u0275text(23, "Vehicle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 67);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_div_102_Template_select_change_24_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.onRouteVehicleChange($event.target.value));
    });
    \u0275\u0275elementStart(25, "option", 13);
    \u0275\u0275text(26, "Select a registered vehicle (auto-fills details)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, TransportPageComponent_ng_container_2_div_102_option_27_Template, 3, 3, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "label")(29, "span", 63);
    \u0275\u0275text(30, "Vehicle number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label")(33, "span", 63);
    \u0275\u0275text(34, "Driver name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label")(37, "span", 63);
    \u0275\u0275text(38, "Driver mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label")(41, "span", 63);
    \u0275\u0275text(42, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "label")(45, "span", 63);
    \u0275\u0275text(46, "Fee type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "select", 72)(48, "option", 73);
    \u0275\u0275text(49, "Stop based");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 74);
    \u0275\u0275text(51, "Fixed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(52, TransportPageComponent_ng_container_2_div_102_label_52_Template, 4, 0, "label", 2);
    \u0275\u0275elementStart(53, "label")(54, "span", 63);
    \u0275\u0275text(55, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "select", 75)(57, "option", 14);
    \u0275\u0275text(58, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 15);
    \u0275\u0275text(60, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(61, "div", 76)(62, "div", 77)(63, "h4");
    \u0275\u0275text(64, "Bus stops");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 27);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_102_Template_button_click_65_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.addBusRouteStop());
    });
    \u0275\u0275text(66, "Add stop");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(67, TransportPageComponent_ng_container_2_div_102_div_67_Template, 15, 1, "div", 78)(68, TransportPageComponent_ng_container_2_div_102_p_68_Template, 2, 0, "p", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 80)(70, "button", 81);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_102_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.closeBusRouteForm());
    });
    \u0275\u0275text(71, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "button", 82);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.vm.editingBusRouteId ? "Update bus route" : "New bus route");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.vm.busRouteForm);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r1.vm.activeVehicles);
    \u0275\u0275advance(25);
    \u0275\u0275property("ngIf", ((tmp_5_0 = ctx_r1.vm.busRouteForm.get("feeType")) == null ? null : tmp_5_0.value) === "fixed");
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.vm.busRouteStops.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.busRouteStops.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.vm.busRouteForm.invalid || ctx_r1.vm.submitting || !ctx_r1.vm.busRouteStops.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.saveButtonLabel(ctx_r1.vm.editingBusRouteId ? "Update route" : "Create route"));
  }
}
function TransportPageComponent_ng_container_2_div_103_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r27 = ctx.$implicit;
    \u0275\u0275property("value", year_r27._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r27.name);
  }
}
function TransportPageComponent_ng_container_2_div_103_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r28 = ctx.$implicit;
    \u0275\u0275property("value", room_r28._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r28.name, "-", room_r28.section, "");
  }
}
function TransportPageComponent_ng_container_2_div_103_option_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r29 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", student_r29._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r29.admissionNumber, " \u2014 ", ctx_r1.vm.studentName(student_r29), "");
  }
}
function TransportPageComponent_ng_container_2_div_103_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r30 = ctx.$implicit;
    \u0275\u0275property("value", route_r30._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", route_r30.routeCode, " \u2014 ", route_r30.routeName, "");
  }
}
function TransportPageComponent_ng_container_2_div_103_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stop_r31 = ctx.$implicit;
    \u0275\u0275property("value", stop_r31.sequence);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", stop_r31.sequence, ". ", stop_r31.name, "");
  }
}
function TransportPageComponent_ng_container_2_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_103_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.closeBusRegForm());
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_103_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r26);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 58)(3, "div")(4, "p", 8);
    \u0275\u0275text(5, "Registration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 59);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_103_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.closeBusRegForm());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 60);
    \u0275\u0275listener("ngSubmit", function TransportPageComponent_ng_container_2_div_103_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.saveBusRegistration());
    });
    \u0275\u0275elementStart(11, "div", 61)(12, "p", 90);
    \u0275\u0275text(13, "Only active students can be registered. Bus fee is applied automatically to fee demands.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 62)(15, "label")(16, "span", 63);
    \u0275\u0275text(17, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 91)(19, "option", 13);
    \u0275\u0275text(20, "Select year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, TransportPageComponent_ng_container_2_div_103_option_21_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label")(23, "span", 63);
    \u0275\u0275text(24, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "select", 92);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_div_103_Template_select_change_25_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.onBusRegClassChange());
    });
    \u0275\u0275elementStart(26, "option", 13);
    \u0275\u0275text(27, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, TransportPageComponent_ng_container_2_div_103_option_28_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "label")(30, "span", 63);
    \u0275\u0275text(31, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 93)(33, "option", 13);
    \u0275\u0275text(34, "Select student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, TransportPageComponent_ng_container_2_div_103_option_35_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "label")(37, "span", 63);
    \u0275\u0275text(38, "Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "select", 94);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_div_103_Template_select_change_39_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.onBusRegRouteChange());
    });
    \u0275\u0275elementStart(40, "option", 13);
    \u0275\u0275text(41, "Select route");
    \u0275\u0275elementEnd();
    \u0275\u0275template(42, TransportPageComponent_ng_container_2_div_103_option_42_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "label")(44, "span", 63);
    \u0275\u0275text(45, "Stop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "select", 95);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_div_103_Template_select_change_46_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.onBusRegStopChange());
    });
    \u0275\u0275elementStart(47, "option", 13);
    \u0275\u0275text(48, "Select stop");
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, TransportPageComponent_ng_container_2_div_103_option_49_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "label")(51, "span", 63);
    \u0275\u0275text(52, "Monthly fee");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "label")(55, "span", 63);
    \u0275\u0275text(56, "Service start");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "label")(59, "span", 63);
    \u0275\u0275text(60, "Service end");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "label", 99);
    \u0275\u0275element(63, "input", 100);
    \u0275\u0275text(64, " Bus service enabled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "label")(66, "span", 63);
    \u0275\u0275text(67, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "select", 75)(69, "option", 14);
    \u0275\u0275text(70, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 15);
    \u0275\u0275text(72, "Inactive");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "div", 80)(74, "button", 81);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_div_103_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.closeBusRegForm());
    });
    \u0275\u0275text(75, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 82);
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.vm.editingBusRegistrationId ? "Update bus registration" : "Student bus registration");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.vm.busRegistrationForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r1.vm.openYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.vm.filteredActiveStudentsForBus());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.vm.activeBusRoutes());
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.vm.selectedBusRouteStops());
    \u0275\u0275advance(12);
    \u0275\u0275property("min", (tmp_9_0 = ctx_r1.vm.busRegistrationForm.get("serviceStartDate")) == null ? null : tmp_9_0.value);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.vm.busRegistrationForm.invalid || ctx_r1.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.saveButtonLabel(ctx_r1.vm.editingBusRegistrationId ? "Update registration" : "Register student"));
  }
}
function TransportPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TransportPageComponent_ng_container_2_div_1_Template, 19, 9, "div", 5);
    \u0275\u0275elementStart(2, "section", 6)(3, "div", 7)(4, "div")(5, "p", 8);
    \u0275\u0275text(6, "Master");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Bus routes");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, TransportPageComponent_ng_container_2_button_9_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-listing-toolbar", 10);
    \u0275\u0275listener("searchChange", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_searchChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListSearch("busRoutes", "busRouteSearch", $event));
    })("refresh", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_refresh_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.refreshListing("busRoutes"));
    })("exportCsv", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_exportCsv_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportBusRoutesCsv());
    })("exportPdf", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_exportPdf_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportBusRoutesPdf());
    });
    \u0275\u0275elementStart(11, "div", 11)(12, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("busRoutes", "busRouteStatus", $event.target.value));
    });
    \u0275\u0275elementStart(13, "option", 13);
    \u0275\u0275text(14, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 14);
    \u0275\u0275text(16, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 15);
    \u0275\u0275text(18, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 16);
    \u0275\u0275template(20, TransportPageComponent_ng_container_2_div_20_Template, 21, 5, "div", 17)(21, TransportPageComponent_ng_container_2_app_table_skeleton_21_Template, 1, 3, "app-table-skeleton", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "app-pagination-bar", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "section", 6)(24, "div", 7)(25, "div")(26, "p", 8);
    \u0275\u0275text(27, "Assignments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h3");
    \u0275\u0275text(29, "Bus registrations");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, TransportPageComponent_ng_container_2_button_30_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "app-listing-toolbar", 20);
    \u0275\u0275listener("searchChange", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_searchChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListSearch("busRegistrations", "busRegSearch", $event));
    })("refresh", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_refresh_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.refreshListing("busRegistrations"));
    })("exportCsv", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_exportCsv_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportBusRegistrationsCsv());
    })("exportPdf", function TransportPageComponent_ng_container_2_Template_app_listing_toolbar_exportPdf_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.exportBusRegistrationsPdf());
    });
    \u0275\u0275elementStart(32, "div", 11)(33, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("busRegistrations", "busRegYear", $event.target.value));
    });
    \u0275\u0275elementStart(34, "option", 13);
    \u0275\u0275text(35, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, TransportPageComponent_ng_container_2_option_36_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("busRegistrations", "busRegClass", $event.target.value));
    });
    \u0275\u0275elementStart(38, "option", 13);
    \u0275\u0275text(39, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, TransportPageComponent_ng_container_2_option_40_Template, 2, 3, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("busRegistrations", "busRegRoute", $event.target.value));
    });
    \u0275\u0275elementStart(42, "option", 13);
    \u0275\u0275text(43, "All routes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, TransportPageComponent_ng_container_2_option_44_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("busRegistrations", "busRegStatus", $event.target.value));
    });
    \u0275\u0275elementStart(46, "option", 13);
    \u0275\u0275text(47, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 14);
    \u0275\u0275text(49, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 15);
    \u0275\u0275text(51, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(52, "div", 16);
    \u0275\u0275template(53, TransportPageComponent_ng_container_2_div_53_Template, 21, 4, "div", 17)(54, TransportPageComponent_ng_container_2_app_table_skeleton_54_Template, 1, 3, "app-table-skeleton", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "app-pagination-bar", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "section", 6)(57, "div", 7)(58, "div")(59, "p", 8);
    \u0275\u0275text(60, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "h3");
    \u0275\u0275text(62, "Bus reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 23)(64, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_64_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.vm.transportReportType = $event.target.value;
      return \u0275\u0275resetView(ctx_r1.vm.loadBusReport());
    });
    \u0275\u0275elementStart(65, "option", 24);
    \u0275\u0275text(66, "Route-wise students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "option", 25);
    \u0275\u0275text(68, "Stop-wise students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "option", 26);
    \u0275\u0275text(70, "Bus fee collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "option", 14);
    \u0275\u0275text(72, "Active bus students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 15);
    \u0275\u0275text(74, "Inactive bus students");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "select", 12);
    \u0275\u0275listener("change", function TransportPageComponent_ng_container_2_Template_select_change_75_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.vm.filters.busReportYear = $event.target.value;
      return \u0275\u0275resetView(ctx_r1.vm.loadBusReport());
    });
    \u0275\u0275elementStart(76, "option", 13);
    \u0275\u0275text(77, "All academic years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, TransportPageComponent_ng_container_2_option_78_Template, 2, 2, "option", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 27);
    \u0275\u0275listener("click", function TransportPageComponent_ng_container_2_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadBusReport());
    });
    \u0275\u0275text(80, "Refresh report");
    \u0275\u0275elementEnd();
    \u0275\u0275template(81, TransportPageComponent_ng_container_2_button_81_Template, 2, 0, "button", 28)(82, TransportPageComponent_ng_container_2_button_82_Template, 2, 0, "button", 28)(83, TransportPageComponent_ng_container_2_button_83_Template, 2, 0, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 29)(85, "table")(86, "thead")(87, "tr");
    \u0275\u0275template(88, TransportPageComponent_ng_container_2_th_88_Template, 2, 0, "th", 2)(89, TransportPageComponent_ng_container_2_th_89_Template, 2, 0, "th", 2)(90, TransportPageComponent_ng_container_2_th_90_Template, 2, 0, "th", 2)(91, TransportPageComponent_ng_container_2_th_91_Template, 2, 0, "th", 2)(92, TransportPageComponent_ng_container_2_th_92_Template, 2, 0, "th", 2)(93, TransportPageComponent_ng_container_2_th_93_Template, 2, 0, "th", 2);
    \u0275\u0275elementStart(94, "th");
    \u0275\u0275text(95, "Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275template(96, TransportPageComponent_ng_container_2_th_96_Template, 2, 0, "th", 2)(97, TransportPageComponent_ng_container_2_th_97_Template, 2, 0, "th", 2)(98, TransportPageComponent_ng_container_2_th_98_Template, 2, 0, "th", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "tbody");
    \u0275\u0275template(100, TransportPageComponent_ng_container_2_tr_100_Template, 3, 2, "tr", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(101, TransportPageComponent_ng_container_2_app_empty_state_101_Template, 1, 0, "app-empty-state", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(102, TransportPageComponent_ng_container_2_div_102_Template, 74, 8, "div", 32)(103, TransportPageComponent_ng_container_2_div_103_Template, 78, 10, "div", 32);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "view"));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "create"));
    \u0275\u0275advance();
    \u0275\u0275property("searchValue", ctx_r1.vm.filters.busRouteSearch)("loading", ctx_r1.vm.isListingLoading("busRoutes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.vm.filters.busRouteStatus);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-refreshing", ctx_r1.vm.isListingLoading("busRoutes"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isListingLoading("busRoutes") || ctx_r1.vm.sortedBusRoutes.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isListingLoading("busRoutes") && !ctx_r1.vm.sortedBusRoutes.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r1.vm)("items", ctx_r1.vm.sortedBusRoutes);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "create"));
    \u0275\u0275advance();
    \u0275\u0275property("searchValue", ctx_r1.vm.filters.busRegSearch || "")("loading", ctx_r1.vm.isListingLoading("busRegistrations"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.vm.filters.busRegYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.busRegClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.busRegRoute);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.busRoutes);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.busRegStatus);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-refreshing", ctx_r1.vm.isListingLoading("busRegistrations"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.isListingLoading("busRegistrations") || ctx_r1.vm.sortedBusRegistrations.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isListingLoading("busRegistrations") && !ctx_r1.vm.sortedBusRegistrations.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r1.vm)("items", ctx_r1.vm.sortedBusRegistrations);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.vm.transportReportType);
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r1.vm.filters.busReportYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "export"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "export"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.can("transport", "export"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType !== "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType !== "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType !== "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType === "stop-wise" || ctx_r1.vm.transportReportType !== "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType === "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType === "fee-collection");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType === "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType === "fee-collection");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.transportReportType !== "fee-collection");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.busReportRows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.busReportRows.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.vm.can("transport", "create") || ctx_r1.vm.can("transport", "edit")) && ctx_r1.vm.showBusRouteForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.vm.can("transport", "create") || ctx_r1.vm.can("transport", "edit")) && ctx_r1.vm.showBusRegForm);
  }
}
var TransportPageComponent = class _TransportPageComponent {
  vm;
  static \u0275fac = function TransportPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TransportPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransportPageComponent, selectors: [["app-transport-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading transport data...", 3, "show"], ["class", "fee-summary-grid span-12", 4, "ngIf"], [1, "data-card", "span-12"], [1, "section-head"], [1, "eyebrow"], ["type", "button", "class", "primary-btn new-admission-btn", 3, "click", 4, "ngIf"], ["searchPlaceholder", "Search route name, code, vehicle, or driver...", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["listing-filters", "", 1, "listing-filters"], [1, "filter-select", 3, "change", "value"], ["value", ""], ["value", "active"], ["value", "inactive"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", "embedded", 4, "ngIf"], ["listKey", "busRoutes", 3, "vm", "items"], ["searchPlaceholder", "Search student, route, or stop...", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], [3, "value", 4, "ngFor", "ngForOf"], ["listKey", "busRegistrations", 3, "vm", "items"], [1, "toolbar"], ["value", "route-wise"], ["value", "stop-wise"], ["value", "fee-collection"], ["type", "button", 1, "ghost", "small", 3, "click"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], [1, "table-wrap", "sticky-header"], [4, "ngFor", "ngForOf"], ["message", "No report data for the selected filters.", 4, "ngIf"], ["class", "admission-overlay", 3, "click", 4, "ngIf"], [1, "fee-summary-grid", "span-12"], [1, "fee-summary-card"], [1, "fs-label"], [1, "fs-value"], [1, "fee-summary-card", "ok"], ["type", "button", 1, "primary-btn", "new-admission-btn", 3, "click"], ["aria-hidden", "true", 1, "btn-plus"], [1, "sortable", 3, "click"], [1, "muted"], [1, "status-badge", 3, "ngClass"], [1, "table-actions"], ["type", "edit", 3, "clicked", 4, "ngIf"], [3, "type", "label", "clicked", 4, "ngIf"], ["type", "edit", 3, "clicked"], [3, "clicked", "type", "label"], ["colspan", "7"], ["title", "No bus routes", "message", "Click \u201CCreate route\u201D to add your first bus route."], [3, "columns", "rows", "embedded"], [3, "value"], ["type", "deactivate", "label", "Deactivate", 3, "clicked", 4, "ngIf"], ["type", "deactivate", "label", "Deactivate", 3, "clicked"], ["title", "No registrations", "message", "Click \u201CRegister student\u201D to add a bus registration."], ["message", "No report data for the selected filters."], [1, "admission-overlay", 3, "click"], [1, "admission-modal", 3, "click"], [1, "admission-modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "admission-modal-body"], [1, "form-grid", "compact"], [1, "label-text"], ["formControlName", "routeName", "placeholder", "City Center Route"], ["formControlName", "routeCode", "placeholder", "RT-01"], [1, "span-2"], ["formControlName", "vehicle", 3, "change"], ["formControlName", "vehicleNumber", "placeholder", "KA-01-AB-1234"], ["formControlName", "driverName"], ["formControlName", "driverMobile", "maxlength", "10", "pattern", "\\d{10}", "inputmode", "numeric", "placeholder", "10-digit mobile"], ["type", "number", "formControlName", "capacity", "min", "1"], ["formControlName", "feeType"], ["value", "stop_based"], ["value", "fixed"], ["formControlName", "status"], [1, "stops-editor"], [1, "section-head", "compact"], ["class", "table-wrap", 4, "ngIf"], ["class", "hint-text", 4, "ngIf"], [1, "admission-modal-footer"], ["type", "button", 1, "ghost", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "disabled"], ["type", "number", "formControlName", "fixedMonthlyFee", "min", "0"], [1, "table-wrap"], ["type", "number", "min", "1", 1, "inline-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["placeholder", "Stop name", 1, "inline-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "min", "0", 1, "inline-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "min", "0", 1, "inline-input", 3, "ngModelChange", "ngModel", "ngModelOptions", "readonly"], ["type", "button", 1, "ghost", "small", "danger-text", 3, "click"], [1, "hint-text"], ["formControlName", "academicYear"], ["formControlName", "classRoom", 3, "change"], ["formControlName", "student"], ["formControlName", "route", 3, "change"], ["formControlName", "stopSequence", 3, "change"], ["type", "number", "formControlName", "monthlyFee", "min", "0", "readonly", "", 1, "readonly-field"], ["type", "date", "formControlName", "serviceStartDate"], ["type", "date", "formControlName", "serviceEndDate", 3, "min"], [1, "inline", "span-2"], ["type", "checkbox", "formControlName", "busService"]], template: function TransportPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, TransportPageComponent_div_1_Template, 2, 1, "div", 1)(2, TransportPageComponent_ng_container_2_Template, 104, 46, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.busRoutes.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.busRoutes.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, CurrencyPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, ActionBtnComponent, ListingToolbarComponent, TableSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransportPageComponent, { className: "TransportPageComponent", filePath: "src\\app\\pages\\transport-page\\transport-page.component.ts", lineNumber: 18 });
})();
export {
  TransportPageComponent
};
//# sourceMappingURL=chunk-36U47CIA.js.map
