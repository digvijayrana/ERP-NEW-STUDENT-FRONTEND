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
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KJIDRE24.js";

// src/app/pages/students-page/students-page.component.ts
function StudentsPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "app-spinner", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("show", true);
  }
}
function StudentsPageComponent_ng_container_2_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.openAdmissionModal());
    });
    \u0275\u0275elementStart(1, "span", 29);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New admission ");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_option_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " (Active)");
    \u0275\u0275elementContainerEnd();
  }
}
function StudentsPageComponent_ng_container_2_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275template(2, StudentsPageComponent_ng_container_2_option_14_ng_container_2_Template, 2, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", year_r4._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r4) === "active");
  }
}
function StudentsPageComponent_ng_container_2_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
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
function StudentsPageComponent_ng_container_2_div_34_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsPageComponent_ng_container_2_div_34_select_3_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.bulkStatusTarget, $event) || (ctx_r2.vm.bulkStatusTarget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 13);
    \u0275\u0275text(2, "Bulk status...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "option", 15);
    \u0275\u0275text(4, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "option", 16);
    \u0275\u0275text(6, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 17);
    \u0275\u0275text(8, "Left school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 18);
    \u0275\u0275text(10, "Passed out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 19);
    \u0275\u0275text(12, "TC issued");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.bulkStatusTarget);
  }
}
function StudentsPageComponent_ng_container_2_div_34_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_34_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.executeBulkStatusUpdate());
    });
    \u0275\u0275text(1, "Update status");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_34_select_5_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
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
function StudentsPageComponent_ng_container_2_div_34_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsPageComponent_ng_container_2_div_34_select_5_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.bulkClassTarget, $event) || (ctx_r2.vm.bulkClassTarget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 13);
    \u0275\u0275text(2, "Assign class...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_34_select_5_option_3_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.bulkClassTarget);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
  }
}
function StudentsPageComponent_ng_container_2_div_34_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_34_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.executeBulkClassAssignment());
    });
    \u0275\u0275text(1, "Assign class");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_34_select_7_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r13 = ctx.$implicit;
    \u0275\u0275property("value", route_r13._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", route_r13.routeName, " (", route_r13.routeCode, ")");
  }
}
function StudentsPageComponent_ng_container_2_div_34_select_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsPageComponent_ng_container_2_div_34_select_7_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.bulkBusRouteTarget, $event) || (ctx_r2.vm.bulkBusRouteTarget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 13);
    \u0275\u0275text(2, "Assign bus route...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_34_select_7_option_3_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.bulkBusRouteTarget);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.busRoutes);
  }
}
function StudentsPageComponent_ng_container_2_div_34_select_8_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stop_r15 = ctx.$implicit;
    \u0275\u0275property("value", stop_r15.sequence);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stop_r15.name);
  }
}
function StudentsPageComponent_ng_container_2_div_34_select_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsPageComponent_ng_container_2_div_34_select_8_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.bulkBusStopSequence, $event) || (ctx_r2.vm.bulkBusStopSequence = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 13);
    \u0275\u0275text(2, "Stop...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_34_select_8_option_3_Template, 2, 2, "option", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.bulkBusStopSequence);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.bulkBusStops());
  }
}
function StudentsPageComponent_ng_container_2_div_34_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_34_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.executeBulkBusAssignment());
    });
    \u0275\u0275text(1, "Assign bus");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_34_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsPageComponent_ng_container_2_div_34_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.bulkNotificationMessage, $event) || (ctx_r2.vm.bulkNotificationMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.bulkNotificationMessage);
  }
}
function StudentsPageComponent_ng_container_2_div_34_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_34_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.executeBulkNotification());
    });
    \u0275\u0275text(1, "Notify");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_34_select_3_Template, 13, 1, "select", 32)(4, StudentsPageComponent_ng_container_2_div_34_button_4_Template, 2, 0, "button", 33)(5, StudentsPageComponent_ng_container_2_div_34_select_5_Template, 4, 2, "select", 32)(6, StudentsPageComponent_ng_container_2_div_34_button_6_Template, 2, 0, "button", 33)(7, StudentsPageComponent_ng_container_2_div_34_select_7_Template, 4, 2, "select", 32)(8, StudentsPageComponent_ng_container_2_div_34_select_8_Template, 4, 2, "select", 32)(9, StudentsPageComponent_ng_container_2_div_34_button_9_Template, 2, 0, "button", 33)(10, StudentsPageComponent_ng_container_2_div_34_input_10_Template, 1, 1, "input", 34)(11, StudentsPageComponent_ng_container_2_div_34_button_11_Template, 2, 0, "button", 33);
    \u0275\u0275elementStart(12, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_34_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.clearStudentSelection());
    });
    \u0275\u0275text(13, "Clear");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.selectedStudentCount, " selected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit") && ctx_r2.vm.bulkStatusTarget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit") && ctx_r2.vm.bulkClassTarget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("transport", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("transport", "edit") && ctx_r2.vm.bulkBusRouteTarget);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("transport", "edit") && ctx_r2.vm.bulkBusRouteTarget && ctx_r2.vm.bulkBusStopSequence);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit") && ctx_r2.vm.bulkNotificationMessage);
  }
}
function StudentsPageComponent_ng_container_2_div_36_th_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th")(1, "input", 41);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_36_th_4_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleAllStudentsOnPage($event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.vm.allStudentsSelectedOnPage());
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_22_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 41);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_36_tr_22_td_1_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      const student_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleStudent(student_r23._id, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r23 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.vm.selectedStudentIds.has(student_r23._id));
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_22_img_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 51);
  }
  if (rf & 2) {
    const photoUrl_r24 = ctx.ngIf;
    \u0275\u0275property("src", photoUrl_r24, \u0275\u0275sanitizeUrl);
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_22_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r23 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((student_r23.firstName || "?").charAt(0));
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_22_app_action_btn_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 52);
    \u0275\u0275listener("clicked", function StudentsPageComponent_ng_container_2_div_36_tr_22_app_action_btn_25_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r25);
      const student_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.editStudent(student_r23));
    });
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_22_app_action_btn_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-action-btn", 53);
    \u0275\u0275listener("clicked", function StudentsPageComponent_ng_container_2_div_36_tr_22_app_action_btn_26_Template_app_action_btn_clicked_0_listener() {
      \u0275\u0275restoreView(_r26);
      const student_r23 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.deactivateStudent(student_r23._id));
    });
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, StudentsPageComponent_ng_container_2_div_36_tr_22_td_1_Template, 2, 1, "td", 3);
    \u0275\u0275elementStart(2, "td")(3, "div", 42);
    \u0275\u0275template(4, StudentsPageComponent_ng_container_2_div_36_tr_22_img_4_Template, 1, 1, "img", 43)(5, StudentsPageComponent_ng_container_2_div_36_tr_22_span_5_Template, 2, 1, "span", 3);
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
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 44);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "span", 45);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td")(22, "div", 46)(23, "app-action-btn", 47);
    \u0275\u0275listener("clicked", function StudentsPageComponent_ng_container_2_div_36_tr_22_Template_app_action_btn_clicked_23_listener() {
      const student_r23 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.openStudentProfile(student_r23._id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "app-action-btn", 48);
    \u0275\u0275listener("clicked", function StudentsPageComponent_ng_container_2_div_36_tr_22_Template_app_action_btn_clicked_24_listener() {
      const student_r23 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.loadStudentDocuments(student_r23._id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, StudentsPageComponent_ng_container_2_div_36_tr_22_app_action_btn_25_Template, 1, 0, "app-action-btn", 49)(26, StudentsPageComponent_ng_container_2_div_36_tr_22_app_action_btn_26_Template, 1, 0, "app-action-btn", 50);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const student_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit") || ctx_r2.vm.can("transport", "edit"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-photo", ctx_r2.vm.studentPhotoUrl(student_r23));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.studentPhotoUrl(student_r23));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.studentPhotoUrl(student_r23));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r23.admissionNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(student_r23));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.enrollmentClassName(student_r23));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r23.admissionDate ? \u0275\u0275pipeBind2(14, 15, student_r23.admissionDate, "mediumDate") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", student_r23.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.studentStatusLabel(student_r23.status));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.vm.studentDocumentStatus(student_r23));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.studentDocumentStatus(student_r23));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "deactivate") && ctx_r2.vm.isAdmin);
  }
}
function StudentsPageComponent_ng_container_2_div_36_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "app-empty-state", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.vm.can("students", "edit") || ctx_r2.vm.can("transport", "edit") ? 9 : 8);
  }
}
function StudentsPageComponent_ng_container_2_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "table")(2, "thead")(3, "tr");
    \u0275\u0275template(4, StudentsPageComponent_ng_container_2_div_36_th_4_Template, 2, 1, "th", 3);
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 39);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_36_Template_th_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("students", "admissionNumber"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 39);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_36_Template_th_click_9_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("students", "name"));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 39);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_36_Template_th_click_11_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("students", "class"));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 39);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_36_Template_th_click_13_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("students", "admissionDate"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 39);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_36_Template_th_click_15_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("students", "status"));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Docs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, StudentsPageComponent_ng_container_2_div_36_tr_22_Template, 27, 18, "tr", 40)(23, StudentsPageComponent_ng_container_2_div_36_tr_23_Template, 3, 1, "tr", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.vm.can("students", "edit") || ctx_r2.vm.can("transport", "edit"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Adm no", ctx_r2.vm.listSortIndicator("students", "admissionNumber"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Name", ctx_r2.vm.listSortIndicator("students", "name"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class", ctx_r2.vm.listSortIndicator("students", "class"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Admission date", ctx_r2.vm.listSortIndicator("students", "admissionDate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status", ctx_r2.vm.listSortIndicator("students", "status"), "");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("students", ctx_r2.vm.sortedStudents));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.sortedStudents.length && !ctx_r2.vm.isListingLoading("students"));
  }
}
function StudentsPageComponent_ng_container_2_app_table_skeleton_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 55);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 8)("rows", 6);
  }
}
function StudentsPageComponent_ng_container_2_div_39_label_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label")(1, "span", 65);
    \u0275\u0275text(2, "Admission no");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 139);
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_button_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 140);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_button_136_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.clearParentSelection());
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 144);
    \u0275\u0275text(1, "Searching\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 144);
    \u0275\u0275text(1, "Type at least 2 characters (name or phone)");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 144);
    \u0275\u0275text(1, "No matching parent or guardian found");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const result_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r30.phone);
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const result_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", result_r30.relation, "");
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const result_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r30.email);
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " \xB7 Portal account");
    \u0275\u0275elementContainerEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const result_r30 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", result_r30.admissionNumber, "");
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 145);
    \u0275\u0275listener("mousedown", function StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_Template_li_mousedown_0_listener() {
      const result_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.selectParentAccount(result_r30));
    });
    \u0275\u0275elementStart(1, "span", 146);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 147)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275template(7, StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_7_Template, 2, 1, "ng-container", 3)(8, StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_8_Template, 2, 1, "ng-container", 3)(9, StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_9_Template, 2, 1, "ng-container", 3)(10, StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_10_Template, 2, 0, "ng-container", 3)(11, StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_ng_container_11_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const result_r30 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.parentInitials(result_r30));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(result_r30.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", result_r30.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", result_r30.relation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", result_r30.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", result_r30.source === "account");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", result_r30.admissionNumber);
  }
}
function StudentsPageComponent_ng_container_2_div_39_ul_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 141);
    \u0275\u0275template(1, StudentsPageComponent_ng_container_2_div_39_ul_137_li_1_Template, 2, 0, "li", 142)(2, StudentsPageComponent_ng_container_2_div_39_ul_137_li_2_Template, 2, 0, "li", 142)(3, StudentsPageComponent_ng_container_2_div_39_ul_137_li_3_Template, 2, 0, "li", 142)(4, StudentsPageComponent_ng_container_2_div_39_ul_137_li_4_Template, 12, 7, "li", 143);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.parentPickerLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.parentPickerLoading && ctx_r2.vm.parentPickerTerm.trim().length < 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.parentPickerLoading && ctx_r2.vm.parentPickerTerm.trim().length >= 2 && !ctx_r2.vm.parentPickerResults.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.parentPickerResults);
  }
}
function StudentsPageComponent_ng_container_2_div_39_option_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 30);
  }
  if (rf & 2) {
    const name_r31 = ctx.$implicit;
    \u0275\u0275property("value", name_r31);
  }
}
function StudentsPageComponent_ng_container_2_div_39_p_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 148)(1, "span", 149);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " This student will be linked to the selected parent portal account. ");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_option_194_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, " (Active)");
    \u0275\u0275elementContainerEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_option_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275template(2, StudentsPageComponent_ng_container_2_div_39_option_194_ng_container_2_Template, 2, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", year_r32._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r32.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.yearStatus(year_r32) === "active");
  }
}
function StudentsPageComponent_ng_container_2_div_39_option_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r33 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", room_r33._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", room_r33.name, "-", room_r33.section, " \xB7 ", ctx_r2.vm.getClassAvailableCapacity(room_r33), " seats \xB7 ", \u0275\u0275pipeBind2(2, 5, room_r33.monthlyFee, "INR"), "/mo ");
  }
}
function StudentsPageComponent_ng_container_2_div_39_div_206_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 159);
    \u0275\u0275text(1, " \xB7 one-time");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_div_206_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_39_div_206_div_8_span_3_Template, 2, 0, "span", 158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r34 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r34.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r34.newAdmissionOnly);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, c_r34.amount, "INR"));
  }
}
function StudentsPageComponent_ng_container_2_div_39_div_206_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 160);
    \u0275\u0275text(1, "No fee structure defined for this class \u2014 the class monthly fee will be applied.");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_div_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 150)(1, "div", 151)(2, "span", 152);
    \u0275\u0275text(3, "Fee auto-attached on admission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 153);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 154);
    \u0275\u0275template(8, StudentsPageComponent_ng_container_2_div_39_div_206_div_8_Template, 7, 6, "div", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StudentsPageComponent_ng_container_2_div_39_div_206_p_9_Template, 2, 0, "p", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, ctx_r2.vm.admissionFeePreviewTotal, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.admissionFeePreview.components);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r2.vm.admissionFeePreview.components == null ? null : ctx_r2.vm.admissionFeePreview.components.length));
  }
}
function StudentsPageComponent_ng_container_2_div_39_p_207_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 161);
    \u0275\u0275text(1, "Loading class fee structure\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_39_fieldset_220_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fieldset", 62)(1, "legend");
    \u0275\u0275text(2, "Previous school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 63)(4, "label")(5, "span", 65);
    \u0275\u0275text(6, "Previous school name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label")(9, "span", 65);
    \u0275\u0275text(10, "Board");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label")(13, "span", 65);
    \u0275\u0275text(14, "Percentage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label")(17, "span", 65);
    \u0275\u0275text(18, "Prev roll no");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 165);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label")(21, "span", 65);
    \u0275\u0275text(22, "Prev school address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label")(25, "span", 65);
    \u0275\u0275text(26, "Last class attended");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 167);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label")(29, "span", 65);
    \u0275\u0275text(30, "Year of passing");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "label")(33, "span", 65);
    \u0275\u0275text(34, "Reason for leaving");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 169);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "label")(37, "span", 65);
    \u0275\u0275text(38, "TC number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label")(41, "span", 65);
    \u0275\u0275text(42, "TC date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "label")(45, "span", 65);
    \u0275\u0275text(46, "Transfer certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 135);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_39_fieldset_220_Template_input_change_47_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.onFile("otherDocuments", $event));
    });
    \u0275\u0275elementEnd()()()();
  }
}
function StudentsPageComponent_ng_container_2_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeAdmissionModal());
    });
    \u0275\u0275elementStart(1, "div", 57);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "form", 58);
    \u0275\u0275listener("ngSubmit", function StudentsPageComponent_ng_container_2_div_39_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.saveAdmission());
    });
    \u0275\u0275elementStart(3, "div", 59)(4, "div")(5, "p", 8);
    \u0275\u0275text(6, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 60);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeAdmissionModal());
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 61)(12, "fieldset", 62)(13, "legend");
    \u0275\u0275text(14, "Personal details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 63);
    \u0275\u0275template(16, StudentsPageComponent_ng_container_2_div_39_label_16_Template, 4, 0, "label", 3);
    \u0275\u0275elementStart(17, "label", 64)(18, "span", 65);
    \u0275\u0275text(19, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "label")(22, "span", 65);
    \u0275\u0275text(23, "Middle name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "label")(26, "span", 65);
    \u0275\u0275text(27, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "app-field-error", 69);
    \u0275\u0275elementStart(30, "label", 64)(31, "span", 65);
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "select", 70)(34, "option", 71);
    \u0275\u0275text(35, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 72);
    \u0275\u0275text(37, "Female");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "option", 73);
    \u0275\u0275text(39, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "label", 64)(41, "span", 65);
    \u0275\u0275text(42, "Date of birth");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "app-field-error", 75);
    \u0275\u0275elementStart(45, "label")(46, "span", 65);
    \u0275\u0275text(47, "Blood group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 76)(49, "option", 13);
    \u0275\u0275text(50, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option", 77);
    \u0275\u0275text(52, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option", 78);
    \u0275\u0275text(54, "A-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "option", 79);
    \u0275\u0275text(56, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "option", 80);
    \u0275\u0275text(58, "B-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "option", 81);
    \u0275\u0275text(60, "AB+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "option", 82);
    \u0275\u0275text(62, "AB-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "option", 83);
    \u0275\u0275text(64, "O+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "option", 84);
    \u0275\u0275text(66, "O-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "label")(68, "span", 65);
    \u0275\u0275text(69, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "select", 85)(71, "option", 13);
    \u0275\u0275text(72, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "option", 86);
    \u0275\u0275text(74, "General");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "option", 87);
    \u0275\u0275text(76, "OBC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "option", 88);
    \u0275\u0275text(78, "SC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "option", 89);
    \u0275\u0275text(80, "ST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "option", 90);
    \u0275\u0275text(82, "EWS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "option", 91);
    \u0275\u0275text(84, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "label")(86, "span", 65);
    \u0275\u0275text(87, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "input", 92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "label")(90, "span", 65);
    \u0275\u0275text(91, "Mother name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "input", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "label")(94, "span", 65);
    \u0275\u0275text(95, "Aadhaar no");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "input", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "label")(98, "span", 65);
    \u0275\u0275text(99, "UDISE+/PEN ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 95);
    \u0275\u0275element(101, "input", 96);
    \u0275\u0275elementStart(102, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.generateUdisePenId());
    });
    \u0275\u0275text(103, "Generate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "button", 35);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.searchByUdise());
    });
    \u0275\u0275text(105, "Search");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "fieldset", 62)(107, "legend");
    \u0275\u0275text(108, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 63)(110, "label", 64)(111, "span", 65);
    \u0275\u0275text(112, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "input", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275element(114, "app-field-error", 98);
    \u0275\u0275elementStart(115, "label")(116, "span", 65);
    \u0275\u0275text(117, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(118, "input", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "label")(120, "span", 65);
    \u0275\u0275text(121, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275element(122, "input", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "label")(124, "span", 65);
    \u0275\u0275text(125, "Pincode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(126, "input", 101);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(127, "fieldset", 62)(128, "legend");
    \u0275\u0275text(129, "Guardian & parent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 63)(131, "label", 102)(132, "span", 65);
    \u0275\u0275text(133, "Search existing parent / guardian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(134, "div", 103)(135, "input", 104);
    \u0275\u0275listener("input", function StudentsPageComponent_ng_container_2_div_39_Template_input_input_135_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onParentPickerInput($event.target.value));
    })("focus", function StudentsPageComponent_ng_container_2_div_39_Template_input_focus_135_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onParentPickerFocus());
    })("blur", function StudentsPageComponent_ng_container_2_div_39_Template_input_blur_135_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onParentPickerBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(136, StudentsPageComponent_ng_container_2_div_39_button_136_Template, 2, 0, "button", 105)(137, StudentsPageComponent_ng_container_2_div_39_ul_137_Template, 5, 4, "ul", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "small", 107);
    \u0275\u0275text(139, "Find an existing guardian to auto-fill their details, or fill the fields below for a new guardian.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "label")(141, "span", 65);
    \u0275\u0275text(142, "Guardian");
    \u0275\u0275elementEnd();
    \u0275\u0275element(143, "input", 108);
    \u0275\u0275elementStart(144, "datalist", 109);
    \u0275\u0275template(145, StudentsPageComponent_ng_container_2_div_39_option_145_Template, 1, 1, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "label")(147, "span", 65);
    \u0275\u0275text(148, "Relation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "select", 110)(150, "option", 111);
    \u0275\u0275text(151, "Father");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "option", 112);
    \u0275\u0275text(153, "Mother");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "option", 113);
    \u0275\u0275text(155, "Grandfather");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "option", 114);
    \u0275\u0275text(157, "Grandmother");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "option", 115);
    \u0275\u0275text(159, "Guardian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "option", 116);
    \u0275\u0275text(161, "Uncle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "option", 117);
    \u0275\u0275text(163, "Aunt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "option", 118);
    \u0275\u0275text(165, "Brother");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "option", 119);
    \u0275\u0275text(167, "Sister");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(168, "option", 91);
    \u0275\u0275text(169, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(170, "label")(171, "span", 65);
    \u0275\u0275text(172, "Guardian phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(173, "input", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "label")(175, "span", 65);
    \u0275\u0275text(176, "Guardian email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(177, "input", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "small", 122);
    \u0275\u0275text(179, "Parent portal login: if an email is given, the parent verifies it and sets a password. Otherwise the parent logs in with their ");
    \u0275\u0275elementStart(180, "strong");
    \u0275\u0275text(181, "phone number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, " and a temporary password shown after admission.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(183, StudentsPageComponent_ng_container_2_div_39_p_183_Template, 4, 0, "p", 123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "fieldset", 62)(185, "legend");
    \u0275\u0275text(186, "Academic");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "div", 63)(188, "label")(189, "span", 65);
    \u0275\u0275text(190, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "select", 124);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_39_Template_select_change_191_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onAdmissionClassChange());
    });
    \u0275\u0275elementStart(192, "option", 13);
    \u0275\u0275text(193, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(194, StudentsPageComponent_ng_container_2_div_39_option_194_Template, 3, 3, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "label")(196, "span", 65);
    \u0275\u0275text(197, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(198, "select", 125);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_39_Template_select_change_198_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onAdmissionClassChange());
    });
    \u0275\u0275elementStart(199, "option", 13);
    \u0275\u0275text(200, "Select active class with available seats");
    \u0275\u0275elementEnd();
    \u0275\u0275template(201, StudentsPageComponent_ng_container_2_div_39_option_201_Template, 3, 8, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(202, "label")(203, "span", 65);
    \u0275\u0275text(204, "Roll no");
    \u0275\u0275elementEnd();
    \u0275\u0275element(205, "input", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275template(206, StudentsPageComponent_ng_container_2_div_39_div_206_Template, 10, 6, "div", 127)(207, StudentsPageComponent_ng_container_2_div_39_p_207_Template, 2, 0, "p", 128);
    \u0275\u0275elementStart(208, "label")(209, "span", 65);
    \u0275\u0275text(210, "Student status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(211, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "label", 102)(213, "span", 65);
    \u0275\u0275text(214, "Transfer from another school?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(215, "select", 130)(216, "option", 131);
    \u0275\u0275text(217, "No \u2014 new admission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "option", 132);
    \u0275\u0275text(219, "Yes \u2014 transfer from previous school");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(220, StudentsPageComponent_ng_container_2_div_39_fieldset_220_Template, 48, 0, "fieldset", 133);
    \u0275\u0275elementStart(221, "fieldset", 62)(222, "legend");
    \u0275\u0275text(223, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "div", 63)(225, "label")(226, "span", 65);
    \u0275\u0275text(227, "Photo (mandatory)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "input", 134);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_39_Template_input_change_228_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onFile("photo", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(229, "label")(230, "span", 65);
    \u0275\u0275text(231, "Aadhaar file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "input", 135);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_39_Template_input_change_232_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onFile("aadhaar", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(233, "label")(234, "span", 65);
    \u0275\u0275text(235, "Birth certificate (mandatory)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "input", 135);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_39_Template_input_change_236_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onFile("birthCertificate", $event));
    });
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(237, "div", 136)(238, "button", 137);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_39_Template_button_click_238_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeAdmissionModal());
    });
    \u0275\u0275text(239, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "button", 138);
    \u0275\u0275text(241);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.admissionForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.vm.editingStudentId ? "Update student profile" : "New admission");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.vm.editingStudentId);
    \u0275\u0275advance(13);
    \u0275\u0275property("control", ctx_r2.vm.admissionForm.get("firstName"));
    \u0275\u0275advance(15);
    \u0275\u0275property("control", ctx_r2.vm.admissionForm.get("dateOfBirth"));
    \u0275\u0275advance(70);
    \u0275\u0275property("control", ctx_r2.vm.admissionForm.get("line1"));
    \u0275\u0275advance(21);
    \u0275\u0275property("value", ctx_r2.vm.parentPickerTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.parentPickerTerm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.parentPickerOpen);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r2.vm.guardianSuggestions);
    \u0275\u0275advance(38);
    \u0275\u0275property("ngIf", !ctx_r2.vm.editingStudentId && ((tmp_12_0 = ctx_r2.vm.admissionForm.get("parentUserId")) == null ? null : tmp_12_0.value));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.vm.openYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.vm.admissionClassOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.vm.admissionFeePreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.admissionFeePreview && ctx_r2.vm.admissionFeePreviewLoading);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r2.vm.showPreviousSchoolDetails);
    \u0275\u0275advance(20);
    \u0275\u0275property("disabled", ctx_r2.vm.admissionForm.invalid || ctx_r2.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.saveButtonLabel(ctx_r2.vm.editingStudentId ? "Update student" : "Save admission"));
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r2.vm.admissionCredentials == null ? null : ctx_r2.vm.admissionCredentials.studentName, "");
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "h4");
    \u0275\u0275text(2, "Student login");
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_40_div_13_span_3_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 177)(5, "span");
    \u0275\u0275text(6, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 177)(10, "span");
    \u0275\u0275text(11, "Temporary password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 178);
    \u0275\u0275text(15, "Student signs in with the username and temporary password, then sets a new password.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sc_r37 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.vm.admissionCredentials == null ? null : ctx_r2.vm.admissionCredentials.studentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sc_r37.username);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sc_r37.temporaryPassword);
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 177)(2, "span");
    \u0275\u0275text(3, "Login (phone)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 177)(7, "span");
    \u0275\u0275text(8, "Temporary password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 178);
    \u0275\u0275text(12, "Parent signs in on the Parent portal using the phone number and temporary password, then sets a new password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pc_r38 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pc_r38.username);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pc_r38.temporaryPassword);
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_4_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pc_r38 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("A verification email was sent to ", pc_r38.email, ". The parent verifies it, sets a password, then signs in.");
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_4_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 178);
    \u0275\u0275text(1, 'Email is not configured on the server, so the verification email could not be sent. Configure SMTP, or the parent can use "Forgot password" once email works.');
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 177)(2, "span");
    \u0275\u0275text(3, "Login (email)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_4_p_6_Template, 2, 1, "p", 179)(7, StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_4_p_7_Template, 2, 0, "p", 179);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pc_r38 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pc_r38.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pc_r38.verificationEmailSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pc_r38.verificationEmailSent);
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 177)(2, "span");
    \u0275\u0275text(3, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 178);
    \u0275\u0275text(7, 'This parent already has an account (another child is linked). They use their existing password \u2014 or "Forgot password" to reset it. This child is now linked to that account.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const pc_r38 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(pc_r38.username || pc_r38.email);
  }
}
function StudentsPageComponent_ng_container_2_div_40_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 176)(1, "h4");
    \u0275\u0275text(2, "Parent login");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_3_Template, 13, 2, "ng-container", 3)(4, StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_4_Template, 8, 3, "ng-container", 3)(5, StudentsPageComponent_ng_container_2_div_40_div_14_ng_container_5_Template, 8, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pc_r38 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", pc_r38.mode === "phone" && !pc_r38.existing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pc_r38.mode === "email" && !pc_r38.existing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pc_r38.existing);
  }
}
function StudentsPageComponent_ng_container_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_40_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeAdmissionCredentials());
    });
    \u0275\u0275elementStart(1, "div", 172);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_40_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "div")(4, "p", 8);
    \u0275\u0275text(5, "Login credentials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Accounts created");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 60);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_40_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeAdmissionCredentials());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 61)(11, "p", 173);
    \u0275\u0275text(12, "Share these credentials securely. Passwords must be changed on first login.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StudentsPageComponent_ng_container_2_div_40_div_13_Template, 16, 3, "div", 174)(14, StudentsPageComponent_ng_container_2_div_40_div_14_Template, 6, 3, "div", 174);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 136)(16, "button", 175);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_40_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeAdmissionCredentials());
    });
    \u0275\u0275text(17, "Done");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r2.vm.admissionCredentials == null ? null : ctx_r2.vm.admissionCredentials.student);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.admissionCredentials == null ? null : ctx_r2.vm.admissionCredentials.parent);
  }
}
function StudentsPageComponent_ng_container_2_div_41_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r40 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", student_r40._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.vm.studentName(student_r40), " \xB7 ", student_r40.admissionNumber, "");
  }
}
function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 200)(1, "span", 201);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Verified and approved \u2014 view or download only. ");
    \u0275\u0275elementEnd();
  }
}
function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 202)(1, "strong");
    \u0275\u0275text(2, "Rejection reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r42 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", document_r42.rejectReason, " ");
  }
}
function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 203)(1, "label", 204)(2, "span", 205);
    \u0275\u0275text(3, "Replace file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 135);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_24_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r43);
      const document_r42 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.replaceStudentDocument(document_r42._id, $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 206);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r43);
      const document_r42 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.deleteStudentDocument(document_r42._id));
    });
    \u0275\u0275text(6, "Delete");
    \u0275\u0275elementEnd()();
  }
}
function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 207)(1, "button", 208);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_25_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r44);
      const document_r42 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.verifyStudentDoc(document_r42._id, "approve"));
    });
    \u0275\u0275text(2, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 209);
    \u0275\u0275twoWayListener("ngModelChange", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_25_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.verifyDocReason, $event) || (ctx_r2.vm.verifyDocReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 206);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r44);
      const document_r42 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.verifyStudentDoc(document_r42._id, "reject"));
    });
    \u0275\u0275text(5, "Reject");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.verifyDocReason);
  }
}
function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 186)(1, "div", 187)(2, "div", 188)(3, "span", 189);
    \u0275\u0275text(4, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 190);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "titlecase");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "span", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, StudentsPageComponent_ng_container_2_div_41_div_18_article_1_p_13_Template, 4, 0, "p", 191)(14, StudentsPageComponent_ng_container_2_div_41_div_18_article_1_p_14_Template, 4, 1, "p", 192);
    \u0275\u0275elementStart(15, "div", 193)(16, "button", 194);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_Template_button_click_16_listener() {
      const document_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.openStudentDocument(document_r42));
    });
    \u0275\u0275elementStart(17, "span", 195);
    \u0275\u0275text(18, "\u{1F441}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Preview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 196);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_div_18_article_1_Template_button_click_20_listener() {
      const document_r42 = \u0275\u0275restoreView(_r41).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.downloadStudentDocument(document_r42));
    });
    \u0275\u0275elementStart(21, "span", 197);
    \u0275\u0275text(22, "\u2B07");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Download ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_24_Template, 7, 0, "div", 198)(25, StudentsPageComponent_ng_container_2_div_41_div_18_article_1_div_25_Template, 6, 1, "div", 199);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const document_r42 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("doc-approved", document_r42.status === "approved")("doc-rejected", document_r42.status === "rejected")("doc-pending", document_r42.status === "pending" || document_r42.status === "uploaded" || !document_r42.status);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(document_r42.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 14, document_r42.type));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", document_r42.status || "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(document_r42.status || "pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r42.status === "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", document_r42.status === "rejected" && document_r42.rejectReason);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin && document_r42.status !== "approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin && document_r42.status !== "approved");
  }
}
function StudentsPageComponent_ng_container_2_div_41_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 184);
    \u0275\u0275template(1, StudentsPageComponent_ng_container_2_div_41_div_18_article_1_Template, 26, 16, "article", 185);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.selectedStudentDocuments);
  }
}
function StudentsPageComponent_ng_container_2_div_41_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 210);
  }
}
function StudentsPageComponent_ng_container_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeStudentDocuments());
    });
    \u0275\u0275elementStart(1, "div", 180);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r39);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "div")(4, "p", 8);
    \u0275\u0275text(5, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Document vault");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 60);
    \u0275\u0275listener("click", function StudentsPageComponent_ng_container_2_div_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.closeStudentDocuments());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 61)(11, "label", 181)(12, "span", 65);
    \u0275\u0275text(13, "Select student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 182);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_div_41_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.loadStudentDocuments($event.target.value));
    });
    \u0275\u0275elementStart(15, "option", 13);
    \u0275\u0275text(16, "Choose a student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentsPageComponent_ng_container_2_div_41_option_17_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, StudentsPageComponent_ng_container_2_div_41_div_18_Template, 2, 1, "div", 183)(19, StudentsPageComponent_ng_container_2_div_41_ng_template_19_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const noDocuments_r45 = \u0275\u0275reference(20);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r2.vm.selectedStudentId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.studentPickerOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.selectedStudentDocuments.length)("ngIfElse", noDocuments_r45);
  }
}
function StudentsPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 6)(2, "div", 7)(3, "div")(4, "p", 8);
    \u0275\u0275text(5, "Directory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Students");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, StudentsPageComponent_ng_container_2_button_8_Template, 4, 0, "button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "app-listing-toolbar", 10);
    \u0275\u0275listener("searchChange", function StudentsPageComponent_ng_container_2_Template_app_listing_toolbar_searchChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListSearch("students", "studentSearch", $event));
    })("refresh", function StudentsPageComponent_ng_container_2_Template_app_listing_toolbar_refresh_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.refreshListing("students"));
    })("exportCsv", function StudentsPageComponent_ng_container_2_Template_app_listing_toolbar_exportCsv_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.exportStudentsCsv());
    })("exportPdf", function StudentsPageComponent_ng_container_2_Template_app_listing_toolbar_exportPdf_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.exportStudentsPdf());
    });
    \u0275\u0275elementStart(10, "div", 11)(11, "select", 12);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_Template_select_change_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("students", "studentYear", $event.target.value));
    });
    \u0275\u0275elementStart(12, "option", 13);
    \u0275\u0275text(13, "All sessions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, StudentsPageComponent_ng_container_2_option_14_Template, 3, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "select", 12);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_Template_select_change_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("students", "studentClass", $event.target.value));
    });
    \u0275\u0275elementStart(16, "option", 13);
    \u0275\u0275text(17, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StudentsPageComponent_ng_container_2_option_18_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 12);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_Template_select_change_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("students", "studentStatus", $event.target.value));
    });
    \u0275\u0275elementStart(20, "option", 13);
    \u0275\u0275text(21, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 15);
    \u0275\u0275text(23, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 16);
    \u0275\u0275text(25, "Inactive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 17);
    \u0275\u0275text(27, "Left School");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 18);
    \u0275\u0275text(29, "Passed Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 19);
    \u0275\u0275text(31, "TC Issued");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 20);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_Template_input_change_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("students", "studentAdmissionFrom", $event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 21);
    \u0275\u0275listener("change", function StudentsPageComponent_ng_container_2_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("students", "studentAdmissionTo", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, StudentsPageComponent_ng_container_2_div_34_Template, 14, 10, "div", 22);
    \u0275\u0275elementStart(35, "div", 23);
    \u0275\u0275template(36, StudentsPageComponent_ng_container_2_div_36_Template, 24, 8, "div", 24)(37, StudentsPageComponent_ng_container_2_app_table_skeleton_37_Template, 1, 2, "app-table-skeleton", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "app-pagination-bar", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, StudentsPageComponent_ng_container_2_div_39_Template, 242, 18, "div", 27)(40, StudentsPageComponent_ng_container_2_div_40_Template, 18, 2, "div", 27)(41, StudentsPageComponent_ng_container_2_div_41_Template, 21, 4, "div", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin || ctx_r2.vm.can("students", "create") || ctx_r2.vm.can("students", "edit"));
    \u0275\u0275advance();
    \u0275\u0275property("searchValue", ctx_r2.vm.filters.studentSearch)("loading", ctx_r2.vm.isListingLoading("students"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.vm.filters.studentYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.years);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.studentClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.studentStatus);
    \u0275\u0275advance(13);
    \u0275\u0275property("value", ctx_r2.vm.filters.studentAdmissionFrom);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.studentAdmissionTo)("min", ctx_r2.vm.filters.studentAdmissionFrom);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.selectedStudentCount > 0 && (ctx_r2.vm.can("students", "edit") || ctx_r2.vm.can("transport", "edit")));
    \u0275\u0275advance();
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("students"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("students") || ctx_r2.vm.sortedStudents.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isListingLoading("students") && !ctx_r2.vm.sortedStudents.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedStudents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.showAdmissionModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.admissionCredentials);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.selectedStudentId);
  }
}
var StudentsPageComponent = class _StudentsPageComponent {
  vm;
  static \u0275fac = function StudentsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentsPageComponent, selectors: [["app-students-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["noDocuments", ""], [1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading students...", 3, "show"], [1, "data-card", "span-12"], [1, "section-head"], [1, "eyebrow"], ["type", "button", "class", "primary-btn new-admission-btn", 3, "click", 4, "ngIf"], ["searchPlaceholder", "Search by name, phone, father name, adm no, aadhaar, UDISE", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["listing-filters", "", 1, "listing-filters"], [1, "filter-select", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["value", "active"], ["value", "inactive"], ["value", "left_school"], ["value", "passed_out"], ["value", "tc_issued"], ["type", "date", "title", "Admission from", 1, "filter-select", 3, "change", "value"], ["type", "date", "title", "Admission to", 1, "filter-select", 3, "change", "value", "min"], ["class", "bulk-actions-bar", 4, "ngIf"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", 4, "ngIf"], ["listKey", "students", 3, "vm", "items"], ["class", "admission-overlay", 3, "click", 4, "ngIf"], ["type", "button", 1, "primary-btn", "new-admission-btn", 3, "click"], ["aria-hidden", "true", 1, "btn-plus"], [3, "value"], [1, "bulk-actions-bar"], ["class", "filter-select", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["type", "text", "class", "filter-select", "placeholder", "Bulk notification message", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "filter-select", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Bulk notification message", 1, "filter-select", 3, "ngModelChange", "ngModel"], [1, "table-wrap", "sticky-header"], [1, "sortable", 3, "click"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change", "checked"], [1, "table-photo"], ["alt", "", 3, "src", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "status-badge", "doc-status", 3, "ngClass"], [1, "table-actions"], ["type", "profile", 3, "clicked"], ["type", "docs", 3, "clicked"], ["type", "edit", 3, "clicked", 4, "ngIf"], ["type", "deactivate", 3, "clicked", 4, "ngIf"], ["alt", "", 3, "src"], ["type", "edit", 3, "clicked"], ["type", "deactivate", 3, "clicked"], ["title", "No students found", "message", "Adjust the filters above or click New admission to register a student."], [3, "columns", "rows"], [1, "admission-overlay", 3, "click"], [1, "admission-modal", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "admission-modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [1, "admission-modal-body"], [1, "form-section"], [1, "form-grid"], [1, "required"], [1, "label-text"], ["formControlName", "firstName"], ["formControlName", "middleName"], ["formControlName", "lastName"], ["label", "First name", 3, "control"], ["formControlName", "gender"], ["value", "male"], ["value", "female"], ["value", "other"], ["type", "date", "formControlName", "dateOfBirth"], ["label", "Date of birth", 3, "control"], ["formControlName", "bloodGroup"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], ["formControlName", "category"], ["value", "General"], ["value", "OBC"], ["value", "SC"], ["value", "ST"], ["value", "EWS"], ["value", "Other"], ["formControlName", "nationality"], ["formControlName", "motherName"], ["formControlName", "aadhaarNumber", "maxlength", "12", "pattern", "\\d{12}", "inputmode", "numeric"], [1, "inline-field-actions"], ["formControlName", "udisePenId", "placeholder", "UDISE or PEN ID"], ["formControlName", "line1"], ["label", "Address", 3, "control"], ["formControlName", "city"], ["formControlName", "state"], ["formControlName", "pincode"], [1, "span-full"], [1, "typeahead"], ["type", "text", "placeholder", "Search by name or phone number", "autocomplete", "off", 1, "typeahead-input", 3, "input", "focus", "blur", "value"], ["type", "button", "class", "typeahead-clear", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["class", "typeahead-menu", 4, "ngIf"], [1, "field-hint"], ["formControlName", "guardianName", "list", "guardian-name-suggestions", "placeholder", "Guardian / father name", "autocomplete", "off"], ["id", "guardian-name-suggestions"], ["formControlName", "guardianRelation"], ["value", "Father"], ["value", "Mother"], ["value", "Grandfather"], ["value", "Grandmother"], ["value", "Guardian"], ["value", "Uncle"], ["value", "Aunt"], ["value", "Brother"], ["value", "Sister"], ["formControlName", "guardianPhone", "maxlength", "10", "pattern", "\\d{10}", "inputmode", "numeric"], ["formControlName", "guardianEmail", "type", "email", "placeholder", "Optional \u2014 enables email login & reset", "autocomplete", "off"], [1, "field-hint", "span-full"], ["class", "parent-link-chip span-full", 4, "ngIf"], ["formControlName", "academicYear", 3, "change"], ["formControlName", "classRoom", 3, "change"], ["formControlName", "rollNumber"], ["class", "span-full admission-fee-preview", 4, "ngIf"], ["class", "span-full hint-text", 4, "ngIf"], ["formControlName", "studentStatus"], ["formControlName", "hasPreviousSchool"], ["value", "no"], ["value", "yes"], ["class", "form-section", 4, "ngIf"], ["type", "file", "accept", "image/png,image/jpeg", 3, "change"], ["type", "file", "accept", "image/png,image/jpeg,application/pdf", 3, "change"], [1, "admission-modal-footer"], ["type", "button", 1, "ghost", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "disabled"], ["formControlName", "admissionNumber", "readonly", ""], ["type", "button", "aria-label", "Clear", 1, "typeahead-clear", 3, "click"], [1, "typeahead-menu"], ["class", "typeahead-empty", 4, "ngIf"], ["class", "typeahead-item", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "typeahead-empty"], [1, "typeahead-item", 3, "mousedown"], [1, "typeahead-avatar"], [1, "typeahead-text"], [1, "parent-link-chip", "span-full"], ["aria-hidden", "true", 1, "parent-link-icon"], [1, "span-full", "admission-fee-preview"], [1, "afp-head"], [1, "afp-title"], [1, "afp-total"], [1, "afp-rows"], ["class", "afp-row", 4, "ngFor", "ngForOf"], ["class", "hint-text", 4, "ngIf"], [1, "afp-row"], ["class", "muted", 4, "ngIf"], [1, "muted"], [1, "hint-text"], [1, "span-full", "hint-text"], ["formControlName", "previousSchool", "placeholder", "School name"], ["formControlName", "previousSchoolBoard", "placeholder", "CBSE, ICSE, State board"], ["type", "number", "formControlName", "previousSchoolPercentage", "min", "0", "max", "100", "placeholder", "e.g. 85"], ["formControlName", "previousSchoolRollNumber", "placeholder", "Roll number"], ["formControlName", "previousSchoolAddress", "placeholder", "City, State"], ["formControlName", "previousSchoolLastClass", "placeholder", "e.g. Class 5"], ["type", "number", "formControlName", "previousSchoolYearOfPassing", "placeholder", "e.g. 2024", "min", "1990", "max", "2099"], ["formControlName", "previousSchoolReasonForLeaving", "placeholder", "Transfer, relocation..."], ["formControlName", "previousSchoolTcNumber", "placeholder", "Transfer certificate no."], ["type", "date", "formControlName", "previousSchoolTcDate"], [1, "admission-modal", "credentials-modal", 3, "click"], [1, "dash-sub"], ["class", "cred-card", 4, "ngIf"], ["type", "button", 1, "primary-btn", 3, "click"], [1, "cred-card"], [1, "cred-row"], [1, "cred-hint"], ["class", "cred-hint", 4, "ngIf"], [1, "admission-modal", "doc-vault-modal", 3, "click"], [1, "vault-student-select"], [3, "change", "value"], ["class", "document-list", 4, "ngIf", "ngIfElse"], [1, "document-list"], ["class", "document-card-enhanced", 3, "doc-approved", "doc-rejected", "doc-pending", 4, "ngFor", "ngForOf"], [1, "document-card-enhanced"], [1, "doc-card-header"], [1, "doc-card-title-wrap"], ["aria-hidden", "true", 1, "doc-type-icon"], [1, "doc-card-type"], ["class", "doc-approved-note", 4, "ngIf"], ["class", "reject-reason", 4, "ngIf"], [1, "doc-action-row", "doc-primary-actions"], ["type", "button", 1, "doc-view-btn", 3, "click"], ["aria-hidden", "true", 1, "doc-view-icon"], ["type", "button", 1, "doc-download-btn", 3, "click"], ["aria-hidden", "true"], ["class", "doc-action-row doc-admin-row", 4, "ngIf"], ["class", "verify-actions", 4, "ngIf"], [1, "doc-approved-note"], ["aria-hidden", "true", 1, "doc-approved-check"], [1, "reject-reason"], [1, "doc-action-row", "doc-admin-row"], [1, "replace-doc-label"], [1, "replace-doc-text"], ["type", "button", 1, "danger-btn", "small", 3, "click"], [1, "verify-actions"], ["type", "button", 1, "ghost", "small", "success-btn", 3, "click"], ["placeholder", "Rejection reason (required to reject)", 1, "reject-input", 3, "ngModelChange", "ngModel"], ["title", "No documents uploaded", "message", "This student has no documents in the vault yet."]], template: function StudentsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275template(1, StudentsPageComponent_div_1_Template, 2, 1, "div", 2)(2, StudentsPageComponent_ng_container_2_Template, 42, 21, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.students.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.students.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, FieldErrorComponent, ListingToolbarComponent, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, TableSkeletonComponent, ActionBtnComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentsPageComponent, { className: "StudentsPageComponent", filePath: "src\\app\\pages\\students-page\\students-page.component.ts", lineNumber: 19 });
})();
export {
  StudentsPageComponent
};
//# sourceMappingURL=chunk-ODRZG3WL.js.map
