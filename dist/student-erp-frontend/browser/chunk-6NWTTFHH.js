import {
  ActionBtnComponent
} from "./chunk-ZV26SCHX.js";
import {
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
  ɵɵpropertyInterpolate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KJIDRE24.js";

// src/app/pages/drivers-page/drivers-page.component.ts
function DriversPageComponent_div_1_Template(rf, ctx) {
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
function DriversPageComponent_ng_container_2_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 10);
    \u0275\u0275text(2, "Salaries pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.vm.driverSalaryRegister.totals.unpaidCount);
  }
}
function DriversPageComponent_ng_container_2_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "Paid this period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.vm.driverSalaryRegister.totals.paidAmount, "INR"));
  }
}
function DriversPageComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Vehicles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "span", 10);
    \u0275\u0275text(9, "Active vehicles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DriversPageComponent_ng_container_2_div_1_div_13_Template, 5, 1, "div", 13)(14, DriversPageComponent_ng_container_2_div_1_div_14_Template, 6, 4, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx_r0.vm.vehicles.length));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, ctx_r0.vm.activeVehicles.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.vm.driverSalaryRegister);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.driverSalaryRegister);
  }
}
function DriversPageComponent_ng_container_2_section_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_section_2_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.openVehicleForm());
    });
    \u0275\u0275elementStart(1, "span", 23);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Register vehicle ");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 40);
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.vm.vehicleDocImageUrl(vehicle_r4._id, "driverPhoto"), \u0275\u0275sanitizeUrl);
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((vehicle_r4.driverName || "?").charAt(0));
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.vm.vehicleExpiryStatus(vehicle_r4.registrationExpiry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("RC ", \u0275\u0275pipeBind2(2, 2, vehicle_r4.registrationExpiry, "dd MMM yy"), "");
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.vm.vehicleExpiryStatus(vehicle_r4.insuranceExpiry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("INS ", \u0275\u0275pipeBind2(2, 2, vehicle_r4.insuranceExpiry, "dd MMM yy"), "");
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.vm.vehicleExpiryStatus(vehicle_r4.pollutionExpiry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("PUC ", \u0275\u0275pipeBind2(2, 2, vehicle_r4.pollutionExpiry, "dd MMM yy"), "");
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.vm.vehicleExpiryStatus(vehicle_r4.fitnessExpiry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("FIT ", \u0275\u0275pipeBind2(2, 2, vehicle_r4.fitnessExpiry, "dd MMM yy"), "");
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vehicle_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.vm.vehicleExpiryStatus(vehicle_r4.licenseExpiry));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("DL ", \u0275\u0275pipeBind2(2, 2, vehicle_r4.licenseExpiry, "dd MMM yy"), "");
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_app_action_btn_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 47);
    \u0275\u0275listener("clicked", function DriversPageComponent_ng_container_2_section_2_tr_25_app_action_btn_33_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r5);
      const vehicle_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.editVehicle(vehicle_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_app_action_btn_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 48);
    \u0275\u0275listener("clicked", function DriversPageComponent_ng_container_2_section_2_tr_25_app_action_btn_34_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r6);
      const vehicle_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.deleteVehicle(vehicle_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "span", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "div", 25);
    \u0275\u0275template(9, DriversPageComponent_ng_container_2_section_2_tr_25_img_9_Template, 1, 1, "img", 26)(10, DriversPageComponent_ng_container_2_section_2_tr_25_span_10_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275elementStart(14, "span", 24);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "div", 28);
    \u0275\u0275template(21, DriversPageComponent_ng_container_2_section_2_tr_25_span_21_Template, 3, 5, "span", 29)(22, DriversPageComponent_ng_container_2_section_2_tr_25_span_22_Template, 3, 5, "span", 30)(23, DriversPageComponent_ng_container_2_section_2_tr_25_span_23_Template, 3, 5, "span", 31)(24, DriversPageComponent_ng_container_2_section_2_tr_25_span_24_Template, 3, 5, "span", 32)(25, DriversPageComponent_ng_container_2_section_2_tr_25_span_25_Template, 3, 5, "span", 33)(26, DriversPageComponent_ng_container_2_section_2_tr_25_span_26_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "span", 35);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "div", 36)(32, "app-action-btn", 37);
    \u0275\u0275listener("clicked", function DriversPageComponent_ng_container_2_section_2_tr_25_Template_app_action_btn_clicked_32_listener() {
      const vehicle_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.openVehicleView(vehicle_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, DriversPageComponent_ng_container_2_section_2_tr_25_app_action_btn_33_Template, 1, 0, "app-action-btn", 38)(34, DriversPageComponent_ng_container_2_section_2_tr_25_app_action_btn_34_Template, 1, 0, "app-action-btn", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vehicle_r4.vehicleNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("", vehicle_r4.model || "\u2014", " \xB7 ", vehicle_r4.type || "bus", " \xB7 ", vehicle_r4.capacity || 0, " seats");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", vehicle_r4.documents == null ? null : vehicle_r4.documents.driverPhoto == null ? null : vehicle_r4.documents.driverPhoto.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(vehicle_r4.documents == null ? null : vehicle_r4.documents.driverPhoto == null ? null : vehicle_r4.documents.driverPhoto.url));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", vehicle_r4.driverName || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(vehicle_r4.driverMobile || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 19, vehicle_r4.driverSalary || 0, "INR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", vehicle_r4.registrationExpiry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r4.insuranceExpiry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r4.pollutionExpiry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r4.fitnessExpiry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", vehicle_r4.licenseExpiry);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !vehicle_r4.registrationExpiry && !vehicle_r4.insuranceExpiry && !vehicle_r4.pollutionExpiry && !vehicle_r4.fitnessExpiry && !vehicle_r4.licenseExpiry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", vehicle_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(vehicle_r4.status);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "deactivate"));
  }
}
function DriversPageComponent_ng_container_2_section_2_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275element(2, "app-empty-state", 50);
    \u0275\u0275elementEnd()();
  }
}
function DriversPageComponent_ng_container_2_section_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 17)(2, "div")(3, "p", 18);
    \u0275\u0275text(4, "Fleet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Vehicles & drivers");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, DriversPageComponent_ng_container_2_section_2_button_7_Template, 4, 0, "button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20)(9, "table")(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Vehicle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, DriversPageComponent_ng_container_2_section_2_tr_25_Template, 35, 22, "tr", 21)(26, DriversPageComponent_ng_container_2_section_2_tr_26_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "create"));
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.vm.vehicles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.vm.vehicles.length);
  }
}
function DriversPageComponent_ng_container_2_section_3_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    \u0275\u0275property("value", m_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r8);
  }
}
function DriversPageComponent_ng_container_2_section_3_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const y_r9 = ctx.$implicit;
    \u0275\u0275property("value", y_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(y_r9);
  }
}
function DriversPageComponent_ng_container_2_section_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3, "Drivers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12)(7, "span", 10);
    \u0275\u0275text(8, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 15)(12, "span", 10);
    \u0275\u0275text(13, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
    \u0275\u0275text(18, "Paid amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 11);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 9)(23, "span", 10);
    \u0275\u0275text(24, "Pending amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 11);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.vm.driverSalaryRegister.totals.drivers);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.vm.driverSalaryRegister.totals.paidCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.vm.driverSalaryRegister.totals.unpaidCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 5, ctx_r0.vm.driverSalaryRegister.totals.paidAmount, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 8, ctx_r0.vm.driverSalaryRegister.totals.pendingAmount, "INR"));
  }
}
function DriversPageComponent_ng_container_2_section_3_tr_30_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_section_3_tr_30_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.openDriverSalaryForm(row_r11));
    });
    \u0275\u0275text(1, "Record payment");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_section_3_tr_30_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_section_3_tr_30_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const row_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.revertDriverSalary(row_r11));
    });
    \u0275\u0275text(1, "Revert");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_section_3_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 35);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "div", 36);
    \u0275\u0275template(19, DriversPageComponent_ng_container_2_section_3_tr_30_button_19_Template, 2, 0, "button", 58)(20, DriversPageComponent_ng_container_2_section_3_tr_30_button_20_Template, 2, 0, "button", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const row_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.driverName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r11.driverMobile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.vehicleNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, (tmp_7_0 = row_r11.payment == null ? null : row_r11.payment.amount) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : row_r11.salaryAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", row_r11.status === "paid" ? "active" : "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((row_r11.payment == null ? null : row_r11.payment.paidOn) ? \u0275\u0275pipeBind2(16, 12, row_r11.payment == null ? null : row_r11.payment.paidOn, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r11.status === "unpaid" && ctx_r0.vm.can("drivers", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r11.status === "paid" && ctx_r0.vm.can("drivers", "edit"));
  }
}
function DriversPageComponent_ng_container_2_section_3_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275element(2, "app-empty-state", 62);
    \u0275\u0275elementEnd()();
  }
}
function DriversPageComponent_ng_container_2_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 16)(1, "div", 17)(2, "div")(3, "p", 18);
    \u0275\u0275text(4, "Payroll");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Driver salaries");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 51)(8, "select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function DriversPageComponent_ng_container_2_section_3_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.vm.driverSalaryMonth, $event) || (ctx_r0.vm.driverSalaryMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DriversPageComponent_ng_container_2_section_3_Template_select_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.loadDriverSalaries());
    });
    \u0275\u0275template(9, DriversPageComponent_ng_container_2_section_3_option_9_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function DriversPageComponent_ng_container_2_section_3_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.vm.driverSalaryYear, $event) || (ctx_r0.vm.driverSalaryYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DriversPageComponent_ng_container_2_section_3_Template_select_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.loadDriverSalaries());
    });
    \u0275\u0275template(11, DriversPageComponent_ng_container_2_section_3_option_11_Template, 2, 2, "option", 53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, DriversPageComponent_ng_container_2_section_3_div_12_Template, 28, 11, "div", 55);
    \u0275\u0275elementStart(13, "div", 20)(14, "table")(15, "thead")(16, "tr")(17, "th");
    \u0275\u0275text(18, "Driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Vehicle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Paid on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, DriversPageComponent_ng_container_2_section_3_tr_30_Template, 21, 15, "tr", 21)(31, DriversPageComponent_ng_container_2_section_3_tr_31_Template, 3, 0, "tr", 2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.vm.driverSalaryMonth);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.vm.driverSalaryMonthOptions);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.vm.driverSalaryYear);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.vm.driverSalaryYearOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.driverSalaryRegister);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r0.vm.driverSalaryRegister == null ? null : ctx_r0.vm.driverSalaryRegister.rows);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.vm.driverSalaryRegister == null ? null : ctx_r0.vm.driverSalaryRegister.rows == null ? null : ctx_r0.vm.driverSalaryRegister.rows.length));
  }
}
function DriversPageComponent_ng_container_2_div_4_div_103_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "New file selected");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const doc_r15 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.openVehicleDoc(ctx_r0.vm.editingVehicleId, doc_r15.key));
    });
    \u0275\u0275text(1, "View uploaded");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "No file yet");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_button_1_Template, 2, 0, "button", 58)(2, DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_span_2_Template, 2, 0, "span", 34);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const doc_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.editingVehicleHasDoc(doc_r15.key));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.vm.editingVehicleHasDoc(doc_r15.key));
  }
}
function DriversPageComponent_ng_container_2_div_4_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 104);
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 105)(6, "input", 106);
    \u0275\u0275listener("change", function DriversPageComponent_ng_container_2_div_4_div_103_Template_input_change_6_listener($event) {
      const doc_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.onVehicleDocSelected(doc_r15.key, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 107);
    \u0275\u0275template(11, DriversPageComponent_ng_container_2_div_4_div_103_span_11_Template, 2, 0, "span", 108)(12, DriversPageComponent_ng_container_2_div_4_div_103_ng_container_12_Template, 3, 2, "ng-container", 2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r15 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", doc_r15.label, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.vm.vehicleDocSelectedName(doc_r15.key) || (ctx_r0.vm.editingVehicleHasDoc(doc_r15.key) ? "Replace file" : "Choose file"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.vm.vehicleDocSelectedName(doc_r15.key));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.vm.vehicleDocSelectedName(doc_r15.key));
  }
}
function DriversPageComponent_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleForm());
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "div")(4, "p", 18);
    \u0275\u0275text(5, "Fleet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 66);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleForm());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 67);
    \u0275\u0275listener("ngSubmit", function DriversPageComponent_ng_container_2_div_4_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.saveVehicle());
    });
    \u0275\u0275elementStart(11, "div", 68)(12, "p", 18);
    \u0275\u0275text(13, "Vehicle details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 69)(15, "label")(16, "span", 70);
    \u0275\u0275text(17, "Vehicle number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label")(20, "span", 70);
    \u0275\u0275text(21, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label")(24, "span", 70);
    \u0275\u0275text(25, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 73)(27, "option", 74);
    \u0275\u0275text(28, "Bus");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 75);
    \u0275\u0275text(30, "Van");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 76);
    \u0275\u0275text(32, "Car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 77);
    \u0275\u0275text(34, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "label")(36, "span", 70);
    \u0275\u0275text(37, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label")(40, "span", 70);
    \u0275\u0275text(41, "Registration expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label")(44, "span", 70);
    \u0275\u0275text(45, "Insurance expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "label")(48, "span", 70);
    \u0275\u0275text(49, "Pollution (PUC) expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label")(52, "span", 70);
    \u0275\u0275text(53, "Fitness expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 83);
    \u0275\u0275text(56, "Driver details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 69)(58, "label")(59, "span", 70);
    \u0275\u0275text(60, "Driver name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "label")(63, "span", 70);
    \u0275\u0275text(64, "Driver mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "label", 86)(67, "span", 70);
    \u0275\u0275text(68, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "label")(71, "span", 70);
    \u0275\u0275text(72, "License number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(73, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "label")(75, "span", 70);
    \u0275\u0275text(76, "License expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "label")(79, "span", 70);
    \u0275\u0275text(80, "Monthly salary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(81, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "label")(83, "span", 70);
    \u0275\u0275text(84, "Joining date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "input", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "label")(87, "span", 70);
    \u0275\u0275text(88, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "select", 92)(90, "option", 93);
    \u0275\u0275text(91, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "option", 94);
    \u0275\u0275text(93, "Inactive");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "label", 86)(95, "span", 70);
    \u0275\u0275text(96, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(97, "input", 95);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "p", 83);
    \u0275\u0275text(99, "Driver documents ");
    \u0275\u0275elementStart(100, "span", 96);
    \u0275\u0275text(101, "(all required)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 97);
    \u0275\u0275template(103, DriversPageComponent_ng_container_2_div_4_div_103_Template, 13, 4, "div", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 99)(105, "button", 100);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_4_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleForm());
    });
    \u0275\u0275text(106, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "button", 101);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.vm.editingVehicleId ? "Update vehicle" : "Register vehicle");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.vm.vehicleForm);
    \u0275\u0275advance(32);
    \u0275\u0275property("min", ctx_r0.vm.minExpiryDate);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", ctx_r0.vm.minExpiryDate);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", ctx_r0.vm.minExpiryDate);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", ctx_r0.vm.minExpiryDate);
    \u0275\u0275advance(23);
    \u0275\u0275property("min", ctx_r0.vm.minExpiryDate);
    \u0275\u0275advance(26);
    \u0275\u0275property("ngForOf", ctx_r0.vm.vehicleDocTypes);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.vm.vehicleForm.invalid || ctx_r0.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.vm.saveButtonLabel(ctx_r0.vm.editingVehicleId ? "Update vehicle" : "Register vehicle"));
  }
}
function DriversPageComponent_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_5_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeDriverSalaryForm());
    });
    \u0275\u0275elementStart(1, "div", 110);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_5_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "div")(4, "p", 18);
    \u0275\u0275text(5, "Driver salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 66);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_5_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeDriverSalaryForm());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 67);
    \u0275\u0275listener("ngSubmit", function DriversPageComponent_ng_container_2_div_5_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.saveDriverSalary());
    });
    \u0275\u0275elementStart(11, "div", 68)(12, "p", 111);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 69)(15, "label")(16, "span", 70);
    \u0275\u0275text(17, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label")(20, "span", 70);
    \u0275\u0275text(21, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 113)(23, "option", 114);
    \u0275\u0275text(24, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 115);
    \u0275\u0275text(26, "Bank transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 116);
    \u0275\u0275text(28, "UPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 117);
    \u0275\u0275text(30, "Cheque");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "label")(32, "span", 70);
    \u0275\u0275text(33, "Reference no");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "label")(36, "span", 70);
    \u0275\u0275text(37, "Paid on");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 86)(40, "span", 70);
    \u0275\u0275text(41, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 120);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 99)(44, "button", 100);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_5_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeDriverSalaryForm());
    });
    \u0275\u0275text(45, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 101);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Record salary \u2014 ", (ctx_r0.vm.driverSalaryTarget == null ? null : ctx_r0.vm.driverSalaryTarget.driverName) || (ctx_r0.vm.driverSalaryTarget == null ? null : ctx_r0.vm.driverSalaryTarget.vehicleNumber), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r0.vm.driverSalaryForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3("Period: ", ctx_r0.vm.driverSalaryMonth, "/", ctx_r0.vm.driverSalaryYear, " \xB7 Vehicle ", ctx_r0.vm.driverSalaryTarget == null ? null : ctx_r0.vm.driverSalaryTarget.vehicleNumber, "");
    \u0275\u0275advance(33);
    \u0275\u0275property("disabled", ctx_r0.vm.driverSalaryForm.invalid || ctx_r0.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.vm.saveButtonLabel("Record payment"));
  }
}
function DriversPageComponent_ng_container_2_div_6_div_102_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 123);
    \u0275\u0275elementStart(2, "button", 60);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_6_div_102_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const doc_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.vm.openVehicleDoc(ctx_r0.vm.viewingVehicle._id, doc_r20.key));
    });
    \u0275\u0275text(3, "View / download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const doc_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("alt", doc_r20.label);
    \u0275\u0275property("src", ctx_r0.vm.vehicleDocImageUrl(ctx_r0.vm.viewingVehicle._id, doc_r20.key), \u0275\u0275sanitizeUrl);
  }
}
function DriversPageComponent_ng_container_2_div_6_div_102_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Not uploaded");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_div_6_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DriversPageComponent_ng_container_2_div_6_div_102_ng_container_3_Template, 4, 2, "ng-container", 2)(4, DriversPageComponent_ng_container_2_div_6_div_102_span_4_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r20.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.vehicleHasDoc(ctx_r0.vm.viewingVehicle, doc_r20.key));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.vm.vehicleHasDoc(ctx_r0.vm.viewingVehicle, doc_r20.key));
  }
}
function DriversPageComponent_ng_container_2_div_6_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 124);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_6_button_106_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.vm.editVehicle(ctx_r0.vm.viewingVehicle);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleView());
    });
    \u0275\u0275text(1, "Edit vehicle");
    \u0275\u0275elementEnd();
  }
}
function DriversPageComponent_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleView());
    });
    \u0275\u0275elementStart(1, "div", 64);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "div")(4, "p", 18);
    \u0275\u0275text(5, "Vehicle & driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 66);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleView());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 68)(11, "p", 18);
    \u0275\u0275text(12, "Vehicle details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 121)(14, "div")(15, "span");
    \u0275\u0275text(16, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span");
    \u0275\u0275text(21, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span");
    \u0275\u0275text(26, "Capacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "span");
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "span");
    \u0275\u0275text(36, "Registration expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div")(41, "span");
    \u0275\u0275text(42, "Insurance expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "span");
    \u0275\u0275text(48, "Pollution expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "strong");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div")(53, "span");
    \u0275\u0275text(54, "Fitness expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "p", 83);
    \u0275\u0275text(59, "Driver details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 121)(61, "div")(62, "span");
    \u0275\u0275text(63, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "strong");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "span");
    \u0275\u0275text(68, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "strong");
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 86)(72, "span");
    \u0275\u0275text(73, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "strong");
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div")(77, "span");
    \u0275\u0275text(78, "License no");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "strong");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div")(82, "span");
    \u0275\u0275text(83, "License expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "strong");
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div")(88, "span");
    \u0275\u0275text(89, "Monthly salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "strong");
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div")(94, "span");
    \u0275\u0275text(95, "Joining date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "strong");
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "p", 83);
    \u0275\u0275text(100, "Driver documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 97);
    \u0275\u0275template(102, DriversPageComponent_ng_container_2_div_6_div_102_Template, 5, 3, "div", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div", 99)(104, "button", 100);
    \u0275\u0275listener("click", function DriversPageComponent_ng_container_2_div_6_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.vm.closeVehicleView());
    });
    \u0275\u0275text(105, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(106, DriversPageComponent_ng_container_2_div_6_button_106_Template, 2, 0, "button", 122);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.vehicleNumber);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.model) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.type) || "bus");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.capacity) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.registrationExpiry) ? \u0275\u0275pipeBind2(39, 18, ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.registrationExpiry, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.insuranceExpiry) ? \u0275\u0275pipeBind2(45, 21, ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.insuranceExpiry, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.pollutionExpiry) ? \u0275\u0275pipeBind2(51, 24, ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.pollutionExpiry, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.fitnessExpiry) ? \u0275\u0275pipeBind2(57, 27, ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.fitnessExpiry, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.driverName) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.driverMobile) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.driverAddress) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.licenseNumber) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.licenseExpiry) ? \u0275\u0275pipeBind2(86, 30, ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.licenseExpiry, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 33, (ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.driverSalary) || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.joiningDate) ? \u0275\u0275pipeBind2(98, 36, ctx_r0.vm.viewingVehicle == null ? null : ctx_r0.vm.viewingVehicle.joiningDate, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.vm.vehicleDocTypes);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "edit"));
  }
}
function DriversPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DriversPageComponent_ng_container_2_div_1_Template, 15, 8, "div", 5)(2, DriversPageComponent_ng_container_2_section_2_Template, 27, 3, "section", 6)(3, DriversPageComponent_ng_container_2_section_3_Template, 32, 7, "section", 6)(4, DriversPageComponent_ng_container_2_div_4_Template, 109, 10, "div", 7)(5, DriversPageComponent_ng_container_2_div_5_Template, 48, 7, "div", 7)(6, DriversPageComponent_ng_container_2_div_6_Template, 107, 39, "div", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "view"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "view"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.can("drivers", "view"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.vm.can("drivers", "create") || ctx_r0.vm.can("drivers", "edit")) && ctx_r0.vm.showVehicleForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.showDriverSalaryForm && ctx_r0.vm.driverSalaryTarget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.vm.viewingVehicle);
  }
}
var DriversPageComponent = class _DriversPageComponent {
  vm;
  static \u0275fac = function DriversPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DriversPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DriversPageComponent, selectors: [["app-drivers-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [[1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading drivers & fleet...", 3, "show"], ["class", "fee-summary-grid span-12", 4, "ngIf"], ["class", "data-card span-12", 4, "ngIf"], ["class", "admission-overlay", 3, "click", 4, "ngIf"], [1, "fee-summary-grid", "span-12"], [1, "fee-summary-card"], [1, "fs-label"], [1, "fs-value"], [1, "fee-summary-card", "ok"], ["class", "fee-summary-card warn", 4, "ngIf"], ["class", "fee-summary-card", 4, "ngIf"], [1, "fee-summary-card", "warn"], [1, "data-card", "span-12"], [1, "section-head"], [1, "eyebrow"], ["type", "button", "class", "primary-btn new-admission-btn", 3, "click", 4, "ngIf"], [1, "table-wrap", "sticky-header"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "primary-btn", "new-admission-btn", 3, "click"], ["aria-hidden", "true", 1, "btn-plus"], [1, "muted"], [1, "driver-cell"], ["class", "driver-avatar", "alt", "driver", 3, "src", 4, "ngIf"], ["class", "driver-avatar placeholder", 4, "ngIf"], [1, "vehicle-doc-tags"], ["class", "doc-tag", "title", "Registration", 3, "ngClass", 4, "ngIf"], ["class", "doc-tag", "title", "Insurance", 3, "ngClass", 4, "ngIf"], ["class", "doc-tag", "title", "Pollution", 3, "ngClass", 4, "ngIf"], ["class", "doc-tag", "title", "Fitness", 3, "ngClass", 4, "ngIf"], ["class", "doc-tag", "title", "Driver license", 3, "ngClass", 4, "ngIf"], ["class", "muted", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "table-actions"], ["type", "view", 3, "clicked"], ["type", "edit", 3, "clicked", 4, "ngIf"], ["type", "delete", 3, "clicked", 4, "ngIf"], ["alt", "driver", 1, "driver-avatar", 3, "src"], [1, "driver-avatar", "placeholder"], ["title", "Registration", 1, "doc-tag", 3, "ngClass"], ["title", "Insurance", 1, "doc-tag", 3, "ngClass"], ["title", "Pollution", 1, "doc-tag", 3, "ngClass"], ["title", "Fitness", 1, "doc-tag", 3, "ngClass"], ["title", "Driver license", 1, "doc-tag", 3, "ngClass"], ["type", "edit", 3, "clicked"], ["type", "delete", 3, "clicked"], ["colspan", "6"], ["title", "No vehicles", "message", "Click \u201CRegister vehicle\u201D to add a vehicle with driver details."], [1, "salary-filters"], ["aria-label", "Month", 1, "filter-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Year", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["class", "fee-summary-grid", 4, "ngIf"], [3, "value"], [1, "fee-summary-grid"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["type", "button", "class", "ghost small danger-text", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click"], ["type", "button", 1, "ghost", "small", "danger-text", 3, "click"], ["title", "No drivers", "message", "Register a vehicle with driver details to track salaries."], [1, "admission-overlay", 3, "click"], [1, "admission-modal", 3, "click"], [1, "admission-modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "admission-modal-body"], [1, "form-grid", "compact"], [1, "label-text"], ["formControlName", "vehicleNumber", "placeholder", "KA-01-AB-1234"], ["formControlName", "model", "placeholder", "Tata Starbus"], ["formControlName", "type"], ["value", "bus"], ["value", "van"], ["value", "car"], ["value", "other"], ["type", "number", "formControlName", "capacity", "min", "1"], ["type", "date", "formControlName", "registrationExpiry", 3, "min"], ["type", "date", "formControlName", "insuranceExpiry", 3, "min"], ["type", "date", "formControlName", "pollutionExpiry", 3, "min"], ["type", "date", "formControlName", "fitnessExpiry", 3, "min"], [1, "eyebrow", 2, "margin-top", "var(--space-4)"], ["formControlName", "driverName"], ["formControlName", "driverMobile", "maxlength", "10", "pattern", "\\d{10}", "inputmode", "numeric", "placeholder", "10-digit mobile"], [1, "span-2"], ["formControlName", "driverAddress", "placeholder", "Residential address"], ["formControlName", "licenseNumber"], ["type", "date", "formControlName", "licenseExpiry", 3, "min"], ["type", "number", "formControlName", "driverSalary", "min", "0"], ["type", "date", "formControlName", "joiningDate"], ["formControlName", "status"], ["value", "active"], ["value", "inactive"], ["formControlName", "notes", "placeholder", "Optional remarks"], [1, "req-note"], [1, "vehicle-doc-grid"], ["class", "vehicle-doc-upload", 4, "ngFor", "ngForOf"], [1, "admission-modal-footer"], ["type", "button", 1, "ghost", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "disabled"], [1, "vehicle-doc-upload"], [1, "vehicle-doc-title"], [1, "req-star"], [1, "doc-upload-label"], ["type", "file", "accept", "image/jpeg,image/png,application/pdf", "hidden", "", 3, "change"], [1, "vehicle-doc-status"], ["class", "doc-tag ok", 4, "ngIf"], [1, "doc-tag", "ok"], [1, "admission-modal", "small", 3, "click"], [1, "hint-text"], ["type", "number", "formControlName", "amount", "min", "0"], ["formControlName", "mode"], ["value", "cash"], ["value", "bank"], ["value", "upi"], ["value", "cheque"], ["formControlName", "referenceNumber", "placeholder", "Txn / cheque no"], ["type", "date", "formControlName", "paidOn"], ["formControlName", "notes", "placeholder", "Optional"], [1, "detail-grid"], ["type", "button", "class", "primary-btn", 3, "click", 4, "ngIf"], [1, "vehicle-doc-thumb", 3, "src", "alt"], ["type", "button", 1, "primary-btn", 3, "click"]], template: function DriversPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275template(1, DriversPageComponent_div_1_Template, 2, 1, "div", 1)(2, DriversPageComponent_ng_container_2_Template, 7, 6, "ng-container", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.vehicles.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.vehicles.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, CurrencyPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, SpinnerComponent, EmptyStateComponent, ActionBtnComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DriversPageComponent, { className: "DriversPageComponent", filePath: "src\\app\\pages\\drivers-page\\drivers-page.component.ts", lineNumber: 15 });
})();
export {
  DriversPageComponent
};
//# sourceMappingURL=chunk-6NWTTFHH.js.map
