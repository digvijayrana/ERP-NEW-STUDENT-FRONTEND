import "./chunk-7YTWMR26.js";
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
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
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
  DecimalPipe,
  NgClass,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KJIDRE24.js";

// src/app/pages/fees-page/fees-page.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function FeesPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-spinner", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("show", true);
  }
}
function FeesPageComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3, "Total Demands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "span", 30);
    \u0275\u0275text(9, "Total Collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 31);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 33)(14, "span", 30);
    \u0275\u0275text(15, "Pending Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 31);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 34)(20, "span", 30);
    \u0275\u0275text(21, "Overdue Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 31);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 32)(26, "span", 30);
    \u0275\u0275text(27, "Today's Collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 31);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 34)(32, "span", 30);
    \u0275\u0275text(33, "Defaulters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 31);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, s_r1.totalDemands));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 8, s_r1.totalCollection, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(18, 13, s_r1.pendingAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 18, s_r1.overdueAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(30, 23, s_r1.todayCollection, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 28, s_r1.defaultersCount));
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
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
function FeesPageComponent_ng_container_2_section_2_ng_container_9_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const name_r6 = ctx.$implicit;
    \u0275\u0275property("value", name_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(name_r6);
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_button_4_Template_button_click_0_listener() {
      const preset_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vm.addFeeComponentPreset(preset_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const preset_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+ ", preset_r9.label, "");
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("value", opt_r12.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r12.label);
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template_input_ngModelChange_1_listener($event) {
      const component_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(component_r11.label, $event) || (component_r11.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template_input_ngModelChange_2_listener($event) {
      const component_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(component_r11.amount, $event) || (component_r11.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template_select_ngModelChange_3_listener($event) {
      const component_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(component_r11.frequency, $event) || (component_r11.frequency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template_select_change_3_listener() {
      const component_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.vm.onFeeComponentFrequencyChange(component_r11));
    });
    \u0275\u0275template(4, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_option_4_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 61)(6, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template_input_ngModelChange_6_listener($event) {
      const component_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(component_r11.newAdmissionOnly, $event) || (component_r11.newAdmissionOnly = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Once");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 63);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template_button_click_9_listener() {
      const i_r13 = \u0275\u0275restoreView(_r10).index;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.vm.removeFeeComponent(i_r13));
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const component_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", component_r11.label);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c0));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", component_r11.amount);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", component_r11.frequency);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(12, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.feeFrequencyOptions);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", component_r11.newAdmissionOnly);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(13, _c0))("disabled", component_r11.frequency !== "one_time");
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "div", 54)(2, "span");
    \u0275\u0275text(3, "Component");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Amount (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Frequency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "New admission only");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_div_11_Template, 11, 14, "div", 55);
    \u0275\u0275elementStart(12, "div", 56)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r2.vm.feeStructureComponents);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Total for Class ", ctx_r2.vm.feeStructureClassName, " (all sections)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 3, ctx_r2.vm.feeStructureTotal, "INR"));
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_ng_template_8_p_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, "No components yet. Use the buttons above to add admission, tuition, bus, lab or custom fees.");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_ng_template_8_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, "Loading fee structure\u2026");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_ng_template_8_p_0_Template, 2, 0, "p", 64)(1, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_ng_template_8_p_1_Template, 2, 0, "p", 64);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngIf", !ctx_r2.vm.feeStructureLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.feeStructureLoading);
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 65);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vm.deleteFeeStructure());
    });
    \u0275\u0275text(1, "Delete structure");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "span", 46);
    \u0275\u0275text(3, "Add component:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_button_4_Template, 2, 1, "button", 47);
    \u0275\u0275elementStart(5, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.addCustomFeeComponent());
    });
    \u0275\u0275text(6, "+ Custom");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_div_7_Template, 18, 6, "div", 49)(8, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_ng_template_8_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(10, "div", 50);
    \u0275\u0275template(11, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_button_11_Template, 2, 0, "button", 51);
    \u0275\u0275elementStart(12, "button", 52);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.saveFeeStructure());
    });
    \u0275\u0275text(13, "Save structure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noComponents_r15 = \u0275\u0275reference(9);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.vm.feeComponentPresets);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.vm.feeStructureComponents.length)("ngIfElse", noComponents_r15);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.vm.feeStructureId);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.vm.feeStructureSaving);
  }
}
function FeesPageComponent_ng_container_2_section_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 38);
    \u0275\u0275text(2, "Define the fee once per class (e.g. Class V). Every section of that class (A, B, C\u2026) automatically inherits the same structure \u2014 including admission, registration, tuition and any other components. When you later create a section, the fee id is linked in the background.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39)(4, "label")(5, "span", 40);
    \u0275\u0275text(6, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_section_2_ng_container_9_Template_select_change_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.vm.feeStructureYear = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.loadFeeStructure());
    });
    \u0275\u0275elementStart(8, "option", 42);
    \u0275\u0275text(9, "Select year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FeesPageComponent_ng_container_2_section_2_ng_container_9_option_10_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label")(12, "span", 40);
    \u0275\u0275text(13, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_section_2_ng_container_9_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.vm.feeStructureClassName = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.loadFeeStructure());
    });
    \u0275\u0275elementStart(15, "option", 42);
    \u0275\u0275text(16, "Select class");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, FeesPageComponent_ng_container_2_section_2_ng_container_9_option_17_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, FeesPageComponent_ng_container_2_section_2_ng_container_9_ng_container_18_Template, 14, 5, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("value", ctx_r2.vm.feeStructureYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.openYears);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.vm.feeStructureClassName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classNameOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.feeStructureYear && ctx_r2.vm.feeStructureClassName);
  }
}
function FeesPageComponent_ng_container_2_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 35)(1, "div", 36)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Fee Structure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_section_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleFeeStructure());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, FeesPageComponent_ng_container_2_section_2_ng_container_9_Template, 19, 5, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.vm.showFeeStructure ? "Hide" : "Configure", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.showFeeStructure);
  }
}
function FeesPageComponent_ng_container_2_form_3_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r17 = ctx.$implicit;
    \u0275\u0275property("value", year_r17._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r17.name);
  }
}
function FeesPageComponent_ng_container_2_form_3_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r18 = ctx.$implicit;
    \u0275\u0275property("value", room_r18._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r18.name, "-", room_r18.section, "");
  }
}
function FeesPageComponent_ng_container_2_form_3_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    \u0275\u0275property("value", opt_r19.value)("disabled", opt_r19.value === "one_time");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r19.label);
  }
}
function FeesPageComponent_ng_container_2_form_3_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", m_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.getMonthName(m_r20));
  }
}
function FeesPageComponent_ng_container_2_form_3_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_form_3_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.clearGenStudent());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_3_div_45_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_form_3_div_45_button_1_Template_button_click_0_listener() {
      const student_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.selectGenStudent(student_r23));
    });
    \u0275\u0275elementStart(1, "span", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r23 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(student_r23));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r23.admissionNumber);
  }
}
function FeesPageComponent_ng_container_2_form_3_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, FeesPageComponent_ng_container_2_form_3_div_45_button_1_Template, 5, 2, "button", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.genStudentResults);
  }
}
function FeesPageComponent_ng_container_2_form_3_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, "Searching\u2026");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_3_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1, " Demands will be generated only for ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(ctx_r2.vm.genSelectedStudent));
  }
}
function FeesPageComponent_ng_container_2_form_3_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "span", 95);
    \u0275\u0275text(3, "Total Students");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 94)(8, "span", 95);
    \u0275\u0275text(9, "Demands Generated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 96);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 94)(14, "span", 95);
    \u0275\u0275text(15, "Pending Generation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 96);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 94)(20, "span", 95);
    \u0275\u0275text(21, "Last Generated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 96);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r24 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, s_r24.totalStudents));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, s_r24.demandsGenerated));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("danger-text", s_r24.pendingGeneration > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 10, s_r24.pendingGeneration));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(s_r24.lastGeneratedDate ? \u0275\u0275pipeBind2(24, 12, s_r24.lastGeneratedDate, "dd MMM yyyy") : "\u2014");
  }
}
function FeesPageComponent_ng_container_2_form_3_p_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 97);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.feeGenConfirmation);
  }
}
function FeesPageComponent_ng_container_2_form_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 66);
    \u0275\u0275listener("ngSubmit", function FeesPageComponent_ng_container_2_form_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.generateFeeDemands());
    });
    \u0275\u0275elementStart(1, "div", 36)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "Fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Generate Monthly Demands");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 67);
    \u0275\u0275text(8, "Generate Demands");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 39)(10, "label")(11, "span", 40);
    \u0275\u0275text(12, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 68);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_3_Template_select_change_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.loadFeeSummary());
    });
    \u0275\u0275elementStart(14, "option", 42);
    \u0275\u0275text(15, "Select year");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FeesPageComponent_ng_container_2_form_3_option_16_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label")(18, "span", 40);
    \u0275\u0275text(19, "Class (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 69);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_3_Template_select_change_20_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.loadFeeSummary());
    });
    \u0275\u0275elementStart(21, "option", 42);
    \u0275\u0275text(22, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, FeesPageComponent_ng_container_2_form_3_option_23_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label")(25, "span", 40);
    \u0275\u0275text(26, "Billing cycle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 70);
    \u0275\u0275template(28, FeesPageComponent_ng_container_2_form_3_option_28_Template, 2, 3, "option", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "label")(30, "span", 40);
    \u0275\u0275text(31, "From month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "select", 72);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_3_Template_select_change_32_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.loadFeeSummary());
    });
    \u0275\u0275template(33, FeesPageComponent_ng_container_2_form_3_option_33_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label")(35, "span", 40);
    \u0275\u0275text(36, "Fee year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 73);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_3_Template_input_change_37_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.loadFeeSummary());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 74)(39, "label", 75)(40, "span", 40);
    \u0275\u0275text(41, "Student (optional \u2014 leave blank for whole class/year)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 76)(43, "input", 77);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_form_3_Template_input_input_43_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onGenStudentQuery($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, FeesPageComponent_ng_container_2_form_3_button_44_Template, 2, 0, "button", 78)(45, FeesPageComponent_ng_container_2_form_3_div_45_Template, 2, 1, "div", 79)(46, FeesPageComponent_ng_container_2_form_3_div_46_Template, 2, 0, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, FeesPageComponent_ng_container_2_form_3_p_47_Template, 5, 1, "p", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 82);
    \u0275\u0275text(49, "Billing cycle decides how many months each demand covers \u2014 a quarterly demand bills 3 months of recurring fees, half-yearly 6, yearly 12. One-time items (like admission) bill only once.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, FeesPageComponent_ng_container_2_form_3_div_50_Template, 25, 15, "div", 83)(51, FeesPageComponent_ng_container_2_form_3_p_51_Template, 2, 1, "p", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.feeDemandForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.vm.feeDemandForm.invalid || ctx_r2.vm.submitting);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r2.vm.openYears);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.vm.feeFrequencyOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(13, _c1));
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.vm.genStudentQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.genSelectedStudent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.genStudentResults.length && !ctx_r2.vm.genSelectedStudent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.genSearching);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.genSelectedStudent);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.vm.feeSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.feeGenConfirmation);
  }
}
function FeesPageComponent_ng_container_2_form_4_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
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
function FeesPageComponent_ng_container_2_form_4_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
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
function FeesPageComponent_ng_container_2_form_4_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_form_4_button_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.clearCollectStudent());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_4_div_28_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_form_4_div_28_button_1_Template_button_click_0_listener() {
      const student_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.selectCollectStudent(student_r30));
    });
    \u0275\u0275elementStart(1, "span", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const student_r30 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(student_r30));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(student_r30.admissionNumber);
  }
}
function FeesPageComponent_ng_container_2_form_4_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, FeesPageComponent_ng_container_2_form_4_div_28_button_1_Template, 5, 2, "button", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.collectStudentResults);
  }
}
function FeesPageComponent_ng_container_2_form_4_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, "Searching\u2026");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r2.vm.collectStudentClassLabel, "");
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 Roll ", ctx_r2.vm.collectStudentRoll, "");
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, "No fee demands found for this student.");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_div_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r32 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.feePeriodLabel(invoice_r32.feeMonth, invoice_r32.feeYear));
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 113)(1, "label", 114)(2, "input", 115);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_div_2_Template_input_change_2_listener() {
      const invoice_r32 = \u0275\u0275restoreView(_r31).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vm.selectCollectInvoice(invoice_r32));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 116)(4, "span", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_div_2_span_6_Template, 2, 1, "span", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 119)(8, "span", 120);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 121);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 122);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const invoice_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-selected", ((tmp_8_0 = ctx_r2.vm.paymentForm.get("invoiceId")) == null ? null : tmp_8_0.value) === invoice_r32._id)("is-paid", invoice_r32.balanceAmount <= 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ((tmp_10_0 = ctx_r2.vm.paymentForm.get("invoiceId")) == null ? null : tmp_10_0.value) === invoice_r32._id)("disabled", invoice_r32.balanceAmount <= 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(invoice_r32.invoiceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r32.feeMonth && invoice_r32.feeYear);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 14, invoice_r32.totalAmount, "INR"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger-text", invoice_r32.balanceAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Bal: ", \u0275\u0275pipeBind2(13, 17, invoice_r32.balanceAmount, "INR"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", invoice_r32.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r32.status);
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275template(1, FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_p_1_Template, 2, 0, "p", 64)(2, FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_div_2_Template, 16, 20, "div", 112);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.collectStudentInvoices.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.collectStudentInvoices);
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, "Loading demands\u2026");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_label_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 139)(1, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_label_42_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.vm.collectIncludeAdmissionFees, $event) || (ctx_r2.vm.collectIncludeAdmissionFees = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_label_42_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vm.onToggleAdmissionFees());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.vm.collectIncludeAdmissionFees);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Include admission & registration fee (", \u0275\u0275pipeBind2(3, 3, ctx_r2.vm.collectOneTimeFeesTotal, "INR"), ") ");
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "div", 142)(2, "span");
    \u0275\u0275text(3, "Total payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 142)(8, "span");
    \u0275\u0275text(9, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 142)(14, "span");
    \u0275\u0275text(15, "Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 142)(20, "span");
    \u0275\u0275text(21, "Other charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 143)(26, "span");
    \u0275\u0275text(27, "Net payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 142)(32, "span");
    \u0275\u0275text(33, "Paying now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 144)(38, "span");
    \u0275\u0275text(39, "Remaining balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const b_r35 = ctx.ngIf;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, b_r35.total, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("- ", \u0275\u0275pipeBind2(12, 12, b_r35.discount, "INR"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(18, 15, b_r35.fine, "INR"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("+ ", \u0275\u0275pipeBind2(24, 18, b_r35.other, "INR"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 21, b_r35.netPayable, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 24, b_r35.amount, "INR"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("danger-text", b_r35.remaining > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 27, b_r35.remaining, "INR"));
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 124)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 125)(8, "label")(9, "span", 40);
    \u0275\u0275text(10, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 126);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_Template_input_input_11_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.onCollectAdjustmentChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label")(13, "span", 40);
    \u0275\u0275text(14, "Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 127);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_Template_input_input_15_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.onCollectAdjustmentChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label")(17, "span", 40);
    \u0275\u0275text(18, "Other charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 128);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_Template_input_input_19_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vm.onCollectAdjustmentChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "label")(21, "span", 40);
    \u0275\u0275text(22, "Amount paying");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label")(25, "span", 40);
    \u0275\u0275text(26, "Payment mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 130)(28, "option", 131);
    \u0275\u0275text(29, "Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 132);
    \u0275\u0275text(31, "UPI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 133);
    \u0275\u0275text(33, "Card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 134);
    \u0275\u0275text(35, "Bank Transfer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option", 135);
    \u0275\u0275text(37, "Cheque");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "label")(39, "span", 40);
    \u0275\u0275text(40, "Reference / Txn No.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "input", 136);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_label_42_Template, 4, 7, "label", 137)(43, FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_div_43_Template, 43, 30, "div", 138);
    \u0275\u0275elementStart(44, "div", 50)(45, "button", 67);
    \u0275\u0275text(46, "Record Payment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const inv_r36 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(inv_r36.invoiceNumber);
    \u0275\u0275advance(36);
    \u0275\u0275property("ngIf", ctx_r2.vm.collectHasOneTimeFees);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.paymentBreakdown);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.vm.paymentForm.invalid || ctx_r2.vm.submitting);
  }
}
function FeesPageComponent_ng_container_2_form_4_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 103)(2, "div", 104)(3, "div", 105);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 106);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 107);
    \u0275\u0275text(9);
    \u0275\u0275template(10, FeesPageComponent_ng_container_2_form_4_ng_container_30_span_10_Template, 2, 1, "span", 5)(11, FeesPageComponent_ng_container_2_form_4_ng_container_30_span_11_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 108)(13, "div", 109)(14, "span");
    \u0275\u0275text(15, "Total Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 109)(20, "span");
    \u0275\u0275text(21, "Pending demands");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(24, FeesPageComponent_ng_container_2_form_4_ng_container_30_div_24_Template, 3, 2, "div", 110)(25, FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_template_25_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(27, FeesPageComponent_ng_container_2_form_4_ng_container_30_ng_container_27_Template, 47, 4, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const st_r37 = ctx.ngIf;
    const loadingDemands_r38 = \u0275\u0275reference(26);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", st_r37.firstName.charAt(0), "", (st_r37.lastName || "").charAt(0), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(st_r37));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(st_r37.admissionNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.collectStudentClassLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.collectStudentRoll);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("danger-text", ctx_r2.vm.collectTotalDue > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 13, ctx_r2.vm.collectTotalDue, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.vm.collectPendingInvoices.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.collectInvoicesLoading)("ngIfElse", loadingDemands_r38);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.vm.collectSelectedInvoice);
  }
}
function FeesPageComponent_ng_container_2_form_4_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 145);
    \u0275\u0275text(1, "Search and select a student to view pending fee demands and collect payment.");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 98);
    \u0275\u0275listener("ngSubmit", function FeesPageComponent_ng_container_2_form_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.savePayment());
    });
    \u0275\u0275elementStart(1, "div", 99)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "Collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Collect Payment");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 100)(8, "label")(9, "span", 40);
    \u0275\u0275text(10, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_4_Template_select_change_11_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.collectAcademicYear = $event.target.value);
    });
    \u0275\u0275elementStart(12, "option", 42);
    \u0275\u0275text(13, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FeesPageComponent_ng_container_2_form_4_option_14_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label")(16, "span", 40);
    \u0275\u0275text(17, "Class (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_form_4_Template_select_change_18_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.collectClassRoom = $event.target.value);
    });
    \u0275\u0275elementStart(19, "option", 42);
    \u0275\u0275text(20, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, FeesPageComponent_ng_container_2_form_4_option_21_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "label", 75)(23, "span", 40);
    \u0275\u0275text(24, "Search student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 76)(26, "input", 101);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_form_4_Template_input_input_26_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onCollectStudentQuery($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, FeesPageComponent_ng_container_2_form_4_button_27_Template, 2, 0, "button", 78)(28, FeesPageComponent_ng_container_2_form_4_div_28_Template, 2, 1, "div", 79)(29, FeesPageComponent_ng_container_2_form_4_div_29_Template, 2, 0, "div", 80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, FeesPageComponent_ng_container_2_form_4_ng_container_30_Template, 28, 16, "ng-container", 5)(31, FeesPageComponent_ng_container_2_form_4_p_31_Template, 2, 0, "p", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.paymentForm);
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r2.vm.collectAcademicYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.years);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.vm.collectClassRoom);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.vm.collectStudentQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.collectSelectedStudent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.collectStudentResults.length && !ctx_r2.vm.collectSelectedStudent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.collectSearching);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.collectSelectedStudent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.collectSelectedStudent);
  }
}
function FeesPageComponent_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "button", 37);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleInvoiceFilters());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 147)(4, "button", 148);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setInvoiceView("card"));
    });
    \u0275\u0275text(5, "Cards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 148);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.setInvoiceView("table"));
    });
    \u0275\u0275text(7, "Table");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.vm.showInvoiceFilters ? "Hide filters" : "Filters", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.vm.invoiceView === "card");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.vm.invoiceView === "table");
  }
}
function FeesPageComponent_ng_container_2_div_13_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r41 = ctx.$implicit;
    \u0275\u0275property("value", year_r41._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r41.name);
  }
}
function FeesPageComponent_ng_container_2_div_13_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r42 = ctx.$implicit;
    \u0275\u0275property("value", room_r42._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r42.name, "-", room_r42.section, "");
  }
}
function FeesPageComponent_ng_container_2_div_13_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r43 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", m_r43);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.getMonthName(m_r43));
  }
}
function FeesPageComponent_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150)(2, "label")(3, "span", 40);
    \u0275\u0275text(4, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 151);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_div_13_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListSearch("invoices", "invoiceSearch", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label")(7, "span", 40);
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_13_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("invoices", "invoiceStatus", $event.target.value));
    });
    \u0275\u0275elementStart(10, "option", 42);
    \u0275\u0275text(11, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 152);
    \u0275\u0275text(13, "Unpaid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 153);
    \u0275\u0275text(15, "Partial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 154);
    \u0275\u0275text(17, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 155);
    \u0275\u0275text(19, "Cancelled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label")(21, "span", 40);
    \u0275\u0275text(22, "Academic year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_13_Template_select_change_23_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("invoices", "invoiceYear", $event.target.value));
    });
    \u0275\u0275elementStart(24, "option", 42);
    \u0275\u0275text(25, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, FeesPageComponent_ng_container_2_div_13_option_26_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "label")(28, "span", 40);
    \u0275\u0275text(29, "Class & section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_13_Template_select_change_30_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("invoices", "invoiceClass", $event.target.value));
    });
    \u0275\u0275elementStart(31, "option", 42);
    \u0275\u0275text(32, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, FeesPageComponent_ng_container_2_div_13_option_33_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label")(35, "span", 40);
    \u0275\u0275text(36, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_13_Template_select_change_37_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("invoices", "invoiceMonth", $event.target.value));
    });
    \u0275\u0275elementStart(38, "option", 42);
    \u0275\u0275text(39, "All months");
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, FeesPageComponent_ng_container_2_div_13_option_40_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 156)(42, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_13_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.resetInvoiceFilters());
    });
    \u0275\u0275text(43, "Reset filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_13_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.exportInvoicesCsv());
    });
    \u0275\u0275text(45, "Export CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_13_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.exportInvoicesPdf());
    });
    \u0275\u0275text(47, "Export PDF");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.vm.filters.invoiceSearch);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.vm.filters.invoiceStatus);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r2.vm.filters.invoiceYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.years);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.vm.filters.invoiceClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.vm.filters.invoiceMonth);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(8, _c1));
  }
}
function FeesPageComponent_ng_container_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "select", 158);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_14_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("invoices", "invoiceStatus", $event.target.value));
    });
    \u0275\u0275elementStart(2, "option", 42);
    \u0275\u0275text(3, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 152);
    \u0275\u0275text(5, "Unpaid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 153);
    \u0275\u0275text(7, "Partial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 154);
    \u0275\u0275text(9, "Paid");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.invoiceStatus);
  }
}
function FeesPageComponent_ng_container_2_div_16_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invoice_r46 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.feePeriodLabel(invoice_r46.feeMonth, invoice_r46.feeYear));
  }
}
function FeesPageComponent_ng_container_2_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 161);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_16_div_1_Template_div_click_0_listener() {
      const invoice_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.openInvoiceDetail(invoice_r46));
    });
    \u0275\u0275elementStart(1, "div", 162)(2, "div", 163);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 164);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 165);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FeesPageComponent_ng_container_2_div_16_div_1_div_8_Template, 2, 1, "div", 166);
    \u0275\u0275elementStart(9, "div", 167)(10, "span");
    \u0275\u0275text(11, "Total ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "Paid ");
    \u0275\u0275elementStart(17, "strong", 168);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Balance ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 169)(26, "span", 170);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 171)(30, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_16_div_1_Template_button_click_30_listener($event) {
      const invoice_r46 = \u0275\u0275restoreView(_r45).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.vm.openInvoicePdf(invoice_r46._id));
    });
    \u0275\u0275text(31, "PDF");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const invoice_r46 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(invoice_r46.invoiceNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", invoice_r46.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r46.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(invoice_r46.student));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invoice_r46.feeMonth && invoice_r46.feeYear);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 11, invoice_r46.totalAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(19, 16, invoice_r46.paidAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("danger-text", invoice_r46.balanceAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(24, 21, invoice_r46.balanceAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Due: ", \u0275\u0275pipeBind2(28, 26, invoice_r46.dueDate, "dd MMM yyyy"), "");
  }
}
function FeesPageComponent_ng_container_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275template(1, FeesPageComponent_ng_container_2_div_16_div_1_Template, 32, 29, "div", 160);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("invoices", ctx_r2.vm.sortedInvoices));
  }
}
function FeesPageComponent_ng_container_2_div_17_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 175);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_17_tr_23_Template_tr_click_0_listener() {
      const invoice_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.openInvoiceDetail(invoice_r48));
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
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 168);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 164);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 176)(23, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_17_tr_23_Template_button_click_23_listener($event) {
      const invoice_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.vm.openInvoiceDetail(invoice_r48));
    });
    \u0275\u0275text(24, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_17_tr_23_Template_button_click_25_listener($event) {
      const invoice_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.vm.openInvoicePdf(invoice_r48._id));
    });
    \u0275\u0275text(26, "PDF");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const invoice_r48 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invoice_r48.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(invoice_r48.student));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.feePeriodLabel(invoice_r48.feeMonth, invoice_r48.feeYear) || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(9, 11, invoice_r48.totalAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 16, invoice_r48.paidAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("danger-text", invoice_r48.balanceAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 21, invoice_r48.balanceAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", invoice_r48.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(invoice_r48.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 26, invoice_r48.dueDate, "dd MMM yyyy"));
  }
}
function FeesPageComponent_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 173)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, FeesPageComponent_ng_container_2_div_17_tr_23_Template, 27, 29, "tr", 174);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("invoices", ctx_r2.vm.sortedInvoices));
  }
}
function FeesPageComponent_ng_container_2_app_table_skeleton_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 177);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 4)("rows", 4);
  }
}
function FeesPageComponent_ng_container_2_app_empty_state_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 178);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r2.vm.isPortalUser ? "No fee demands" : "No fee demands found")("message", ctx_r2.vm.isPortalUser ? "No fee demands found for your account." : "Adjust filters or generate monthly demands to get started.");
  }
}
function FeesPageComponent_ng_container_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 146)(1, "button", 37);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r49);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleFeeHistoryFilters());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.vm.showFeeHistoryFilters ? "Hide filters" : "Filters", " ");
  }
}
function FeesPageComponent_ng_container_2_div_29_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r51 = ctx.$implicit;
    \u0275\u0275property("value", room_r51._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r51.name, "-", room_r51.section, "");
  }
}
function FeesPageComponent_ng_container_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 149)(1, "div", 150)(2, "label")(3, "span", 40);
    \u0275\u0275text(4, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 179);
    \u0275\u0275listener("input", function FeesPageComponent_ng_container_2_div_29_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListSearch("feeHistory", "feeHistorySearch", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "label")(7, "span", 40);
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_29_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("feeHistory", "feeHistoryStatus", $event.target.value));
    });
    \u0275\u0275elementStart(10, "option", 42);
    \u0275\u0275text(11, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 154);
    \u0275\u0275text(13, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 153);
    \u0275\u0275text(15, "Partial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 152);
    \u0275\u0275text(17, "Unpaid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 180);
    \u0275\u0275text(19, "Void");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label")(21, "span", 40);
    \u0275\u0275text(22, "Class & section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 41);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_29_Template_select_change_23_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("feeHistory", "feeHistoryClass", $event.target.value));
    });
    \u0275\u0275elementStart(24, "option", 42);
    \u0275\u0275text(25, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, FeesPageComponent_ng_container_2_div_29_option_26_Template, 2, 3, "option", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 156)(28, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_29_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.exportFeeHistoryCsv());
    });
    \u0275\u0275text(29, "Export CSV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_29_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.exportFeeHistoryPdf());
    });
    \u0275\u0275text(31, "Export PDF");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.vm.filters.feeHistorySearch);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.vm.filters.feeHistoryStatus);
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx_r2.vm.filters.feeHistoryClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
  }
}
function FeesPageComponent_ng_container_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 157)(1, "select", 158);
    \u0275\u0275listener("change", function FeesPageComponent_ng_container_2_div_30_Template_select_change_1_listener($event) {
      \u0275\u0275restoreView(_r52);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.updateListFilter("feeHistory", "feeHistoryStatus", $event.target.value));
    });
    \u0275\u0275elementStart(2, "option", 42);
    \u0275\u0275text(3, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "option", 154);
    \u0275\u0275text(5, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 153);
    \u0275\u0275text(7, "Partial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 152);
    \u0275\u0275text(9, "Unpaid");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.feeHistoryStatus);
  }
}
function FeesPageComponent_ng_container_2_div_32_th_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 181);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_32_th_6_Template_th_click_0_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("feeHistory", "studentName"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Student", ctx_r2.vm.listSortIndicator("feeHistory", "studentName"), "");
  }
}
function FeesPageComponent_ng_container_2_div_32_tr_22_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r55 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(row_r55.student));
  }
}
function FeesPageComponent_ng_container_2_div_32_tr_22_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_32_tr_22_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r56);
      const row_r55 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.openReceiptPdf(row_r55.invoiceId, row_r55.paymentId));
    });
    \u0275\u0275text(1, "PDF");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_ng_container_2_div_32_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FeesPageComponent_ng_container_2_div_32_tr_22_td_3_Template, 2, 1, "td", 5);
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 164);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 176);
    \u0275\u0275template(22, FeesPageComponent_ng_container_2_div_32_tr_22_button_22_Template, 2, 0, "button", 78);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r55 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.feePeriodLabel(row_r55.feeMonth, row_r55.feeYear));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r55.receiptNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 10, row_r55.paidAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 13, row_r55.pendingAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 16, row_r55.busFee || 0, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r55.paymentDate ? \u0275\u0275pipeBind2(17, 19, row_r55.paymentDate, "dd MMM yyyy") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", row_r55.paymentStatus);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r55.paymentStatus);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r55.paymentId && row_r55.paymentStatus !== "void");
  }
}
function FeesPageComponent_ng_container_2_div_32_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275element(2, "app-empty-state", 184);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.vm.isPortalUser ? 8 : 9);
  }
}
function FeesPageComponent_ng_container_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 173)(1, "table")(2, "thead")(3, "tr")(4, "th", 181);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_32_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("feeHistory", "paymentDate"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FeesPageComponent_ng_container_2_div_32_th_6_Template, 2, 1, "th", 182);
    \u0275\u0275elementStart(7, "th", 181);
    \u0275\u0275listener("click", function FeesPageComponent_ng_container_2_div_32_Template_th_click_7_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.toggleListSort("feeHistory", "receiptNumber"));
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Bus fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Payment date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, FeesPageComponent_ng_container_2_div_32_tr_22_Template, 23, 22, "tr", 183)(23, FeesPageComponent_ng_container_2_div_32_tr_23_Template, 3, 1, "tr", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Fee month", ctx_r2.vm.listSortIndicator("feeHistory", "paymentDate"), "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Receipt", ctx_r2.vm.listSortIndicator("feeHistory", "receiptNumber"), "");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("feeHistory", ctx_r2.vm.sortedFeeHistory));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.sortedFeeHistory.length && !ctx_r2.vm.isListingLoading("feeHistory"));
  }
}
function FeesPageComponent_ng_container_2_app_table_skeleton_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 185);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 8)("rows", 6)("embedded", true);
  }
}
function FeesPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FeesPageComponent_ng_container_2_div_1_Template, 37, 30, "div", 10)(2, FeesPageComponent_ng_container_2_section_2_Template, 10, 2, "section", 11)(3, FeesPageComponent_ng_container_2_form_3_Template, 52, 14, "form", 12)(4, FeesPageComponent_ng_container_2_form_4_Template, 32, 11, "form", 13);
    \u0275\u0275elementStart(5, "section", 14)(6, "div", 15)(7, "div")(8, "p", 16);
    \u0275\u0275text(9, "Invoices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, FeesPageComponent_ng_container_2_div_12_Template, 8, 5, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FeesPageComponent_ng_container_2_div_13_Template, 48, 9, "div", 18)(14, FeesPageComponent_ng_container_2_div_14_Template, 10, 1, "div", 19);
    \u0275\u0275elementStart(15, "div", 20);
    \u0275\u0275template(16, FeesPageComponent_ng_container_2_div_16_Template, 2, 1, "div", 21)(17, FeesPageComponent_ng_container_2_div_17_Template, 24, 1, "div", 22)(18, FeesPageComponent_ng_container_2_app_table_skeleton_18_Template, 1, 2, "app-table-skeleton", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, FeesPageComponent_ng_container_2_app_empty_state_19_Template, 1, 2, "app-empty-state", 24);
    \u0275\u0275element(20, "app-pagination-bar", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "section", 14)(22, "div", 15)(23, "div")(24, "p", 16);
    \u0275\u0275text(25, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, FeesPageComponent_ng_container_2_div_28_Template, 3, 1, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, FeesPageComponent_ng_container_2_div_29_Template, 32, 4, "div", 18)(30, FeesPageComponent_ng_container_2_div_30_Template, 10, 1, "div", 19);
    \u0275\u0275elementStart(31, "div", 20);
    \u0275\u0275template(32, FeesPageComponent_ng_container_2_div_32_Template, 24, 5, "div", 22)(33, FeesPageComponent_ng_container_2_app_table_skeleton_33_Template, 1, 3, "app-table-skeleton", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "app-pagination-bar", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser && ctx_r2.vm.can("fees", "view") && ctx_r2.vm.feeSummary);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("fees", "create"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("fees", "create"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("fees", "edit"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.vm.isPortalUser ? "My Fee Demands" : "Fee Demands");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser && ctx_r2.vm.showInvoiceFilters);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("invoices"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.vm.isPortalUser || ctx_r2.vm.invoiceView === "card") && (!ctx_r2.vm.isListingLoading("invoices") || ctx_r2.vm.sortedInvoices.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser && ctx_r2.vm.invoiceView === "table" && (!ctx_r2.vm.isListingLoading("invoices") || ctx_r2.vm.sortedInvoices.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isListingLoading("invoices") && !ctx_r2.vm.sortedInvoices.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("invoices") && !ctx_r2.vm.sortedInvoices.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedInvoices);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.vm.isPortalUser ? "My Payment History" : "Fee Payment History");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isPortalUser && ctx_r2.vm.showFeeHistoryFilters);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isPortalUser);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("feeHistory"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("feeHistory") || ctx_r2.vm.sortedFeeHistory.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isListingLoading("feeHistory") && !ctx_r2.vm.sortedFeeHistory.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedFeeHistory);
  }
}
function FeesPageComponent_div_3_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r58 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r2.vm.feePeriodLabel(inv_r58.feeMonth, inv_r58.feeYear), "");
  }
}
function FeesPageComponent_div_3_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 203);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r58 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.feeCycleLabel(inv_r58.billingCycle));
  }
}
function FeesPageComponent_div_3_ng_container_74_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r59 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r59.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, item_r59.amount, "INR"));
  }
}
function FeesPageComponent_div_3_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 198)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "Line items");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 204);
    \u0275\u0275template(6, FeesPageComponent_div_3_ng_container_74_div_6_Template, 6, 5, "div", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const inv_r58 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", inv_r58.items);
  }
}
function FeesPageComponent_div_3_div_79_div_1_small_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r60 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", \u0275\u0275pipeBind2(2, 1, payment_r60.paidAt, "dd MMM yyyy"), "");
  }
}
function FeesPageComponent_div_3_div_79_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_div_79_div_1_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r61);
      const payment_r60 = \u0275\u0275nextContext().$implicit;
      const inv_r58 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.openReceiptPdf(inv_r58._id, payment_r60._id));
    });
    \u0275\u0275text(1, "Receipt PDF");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_div_3_div_79_div_1_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 209);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_div_79_div_1_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r62);
      const payment_r60 = \u0275\u0275nextContext().$implicit;
      const inv_r58 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.voidFeeReceipt(inv_r58._id, payment_r60._id, payment_r60.receiptNumber));
    });
    \u0275\u0275text(1, "Void");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_div_3_div_79_div_1_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_div_79_div_1_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r63);
      const payment_r60 = \u0275\u0275nextContext().$implicit;
      const inv_r58 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.unlockFeeReceipt(inv_r58._id, payment_r60._id, payment_r60.receiptNumber));
    });
    \u0275\u0275text(1, "Unlock");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_div_3_div_79_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275template(4, FeesPageComponent_div_3_div_79_div_1_small_4_Template, 3, 4, "small", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 122);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FeesPageComponent_div_3_div_79_div_1_button_7_Template, 2, 0, "button", 78)(8, FeesPageComponent_div_3_div_79_div_1_button_8_Template, 2, 0, "button", 208)(9, FeesPageComponent_div_3_div_79_div_1_button_9_Template, 2, 0, "button", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const payment_r60 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", payment_r60.receiptNumber, " \u2014 ", \u0275\u0275pipeBind2(3, 8, payment_r60.amount, "INR"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", payment_r60.paidAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", payment_r60.status || "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(payment_r60.status || "active");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", payment_r60._id && payment_r60.status !== "void");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("fees", "edit") && payment_r60._id && payment_r60.status !== "void" && !payment_r60.locked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.can("fees", "unlock") && payment_r60._id && payment_r60.locked);
  }
}
function FeesPageComponent_div_3_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 205);
    \u0275\u0275template(1, FeesPageComponent_div_3_div_79_div_1_Template, 10, 11, "div", 206);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inv_r58 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", inv_r58.payments);
  }
}
function FeesPageComponent_div_3_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38);
    \u0275\u0275text(1, "No payments recorded on this demand yet.");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_div_3_button_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 210);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_button_85_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r64);
      const inv_r58 = \u0275\u0275nextContext().ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.openUpiPayment(inv_r58));
    });
    \u0275\u0275text(1, "Pay online (UPI)");
    \u0275\u0275elementEnd();
  }
}
function FeesPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 186);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeInvoiceDetail());
    });
    \u0275\u0275elementStart(1, "div", 187);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r57);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 188)(3, "div")(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275template(8, FeesPageComponent_div_3_span_8_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 189);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeInvoiceDetail());
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 190)(12, "div", 191)(13, "span", 170);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, FeesPageComponent_div_3_span_16_Template, 2, 1, "span", 192);
    \u0275\u0275elementStart(17, "span", 164);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 193)(20, "div", 194)(21, "span", 195);
    \u0275\u0275text(22, "Tuition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 196);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 194)(27, "span", 195);
    \u0275\u0275text(28, "Bus fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 196);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 194)(33, "span", 195);
    \u0275\u0275text(34, "Other charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 196);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 194)(39, "span", 195);
    \u0275\u0275text(40, "Previous pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span", 196);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 194)(45, "span", 195);
    \u0275\u0275text(46, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 196);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 194)(51, "span", 195);
    \u0275\u0275text(52, "Fine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 196);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 194)(57, "span", 195);
    \u0275\u0275text(58, "Total payable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 196);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 194)(63, "span", 195);
    \u0275\u0275text(64, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 197);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 194)(69, "span", 195);
    \u0275\u0275text(70, "Balance due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 196);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "currency");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(74, FeesPageComponent_div_3_ng_container_74_Template, 7, 1, "ng-container", 5);
    \u0275\u0275elementStart(75, "div", 198)(76, "div")(77, "p", 16);
    \u0275\u0275text(78, "Payments");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(79, FeesPageComponent_div_3_div_79_Template, 2, 1, "div", 199)(80, FeesPageComponent_div_3_ng_template_80_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 200)(83, "button", 65);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r57);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeInvoiceDetail());
    });
    \u0275\u0275text(84, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275template(85, FeesPageComponent_div_3_button_85_Template, 2, 0, "button", 201);
    \u0275\u0275elementStart(86, "button", 202);
    \u0275\u0275listener("click", function FeesPageComponent_div_3_Template_button_click_86_listener() {
      const inv_r58 = \u0275\u0275restoreView(_r57).ngIf;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.openInvoicePdf(inv_r58._id));
    });
    \u0275\u0275text(87, "Demand PDF");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const inv_r58 = ctx.ngIf;
    const noInvPayments_r65 = \u0275\u0275reference(81);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Fee demand \xB7 ", inv_r58.invoiceNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(inv_r58.student));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", inv_r58.feeMonth && inv_r58.feeYear);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Due: ", \u0275\u0275pipeBind2(15, 22, inv_r58.dueDate, "dd MMM yyyy"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inv_r58.billingCycle && inv_r58.billingCycle !== "monthly");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", inv_r58.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r58.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 25, inv_r58.tuitionFee || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 28, inv_r58.busFee || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 31, inv_r58.otherCharges || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 34, inv_r58.previousPending || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 37, inv_r58.discount || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 40, inv_r58.fine || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 43, inv_r58.totalAmount, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 46, inv_r58.paidAmount, "INR"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("danger-text", inv_r58.balanceAmount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 49, inv_r58.balanceAmount, "INR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", inv_r58.items == null ? null : inv_r58.items.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", inv_r58.payments == null ? null : inv_r58.payments.length)("ngIfElse", noInvPayments_r65);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.vm.isPortalUser && inv_r58.balanceAmount > 0);
  }
}
function FeesPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211);
    \u0275\u0275listener("click", function FeesPageComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeUpiPayment());
    });
    \u0275\u0275elementStart(1, "div", 212);
    \u0275\u0275listener("click", function FeesPageComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r66);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 188)(3, "div")(4, "p", 16);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Scan & pay with any UPI app");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 189);
    \u0275\u0275listener("click", function FeesPageComponent_div_4_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeUpiPayment());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 213)(11, "div", 214);
    \u0275\u0275text(12, "Amount due ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 215);
    \u0275\u0275element(17, "img", 216);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 217)(19, "div", 218)(20, "span");
    \u0275\u0275text(21, "UPI ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 218)(25, "span");
    \u0275\u0275text(26, "Payee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "a", 219);
    \u0275\u0275text(30, "Open in UPI app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 220);
    \u0275\u0275text(32, "Scan the QR with Google Pay, PhonePe, Paytm or any UPI app, or tap \u201COpen in UPI app\u201D on your phone. After paying, your receipt will be updated once the school confirms the payment.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 200)(34, "button", 65);
    \u0275\u0275listener("click", function FeesPageComponent_div_4_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeUpiPayment());
    });
    \u0275\u0275text(35, "Done");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pay_r67 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Pay fees \xB7 ", pay_r67.invoiceNumber, "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 6, pay_r67.balanceAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.vm.upiQrUrl(pay_r67), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.vm.upiVpa);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.vm.upiPayeeName);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r2.vm.upiPaymentLink(pay_r67), \u0275\u0275sanitizeUrl);
  }
}
var FeesPageComponent = class _FeesPageComponent {
  vm;
  static \u0275fac = function FeesPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeesPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeesPageComponent, selectors: [["app-fees-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 4, consts: [["noComponents", ""], ["loadingDemands", ""], ["noInvPayments", ""], [1, "workspace", "fees-workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "admission-overlay", 3, "click", 4, "ngIf"], ["class", "admission-overlay upi-overlay", 3, "click", 4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading fee records...", 3, "show"], ["class", "fee-summary-grid span-12", 4, "ngIf"], ["class", "panel fee-structure-card span-12", 4, "ngIf"], ["class", "panel fee-gen-card span-12", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "panel collect-card span-12", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "data-card", "span-12"], [1, "section-head", "fee-list-head"], [1, "eyebrow"], ["class", "fee-list-actions", 4, "ngIf"], ["class", "filter-bar", 4, "ngIf"], ["class", "toolbar", 4, "ngIf"], [1, "listing-table-panel"], ["class", "invoice-cards compact", 4, "ngIf"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", 4, "ngIf"], [3, "title", "message", 4, "ngIf"], ["listKey", "invoices", 3, "vm", "items"], [3, "columns", "rows", "embedded", 4, "ngIf"], ["listKey", "feeHistory", 3, "vm", "items"], [1, "fee-summary-grid", "span-12"], [1, "fee-summary-card"], [1, "fs-label"], [1, "fs-value"], [1, "fee-summary-card", "ok"], [1, "fee-summary-card", "warn"], [1, "fee-summary-card", "danger"], [1, "panel", "fee-structure-card", "span-12"], [1, "fee-gen-head"], ["type", "button", 1, "ghost", "small", "filter-toggle", 3, "click"], [1, "hint-text"], [1, "fee-gen-grid"], [1, "label-text"], [3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "fee-preset-row"], [1, "fee-preset-label"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "ghost", "small", 3, "click"], ["class", "fee-structure-table", 4, "ngIf", "ngIfElse"], [1, "form-actions"], ["type", "button", "class", "ghost", 3, "click", 4, "ngIf"], ["type", "button", 1, "primary-btn", "compact-submit", 3, "click", "disabled"], [1, "fee-structure-table"], [1, "fsc-head"], ["class", "fsc-row", 4, "ngFor", "ngForOf"], [1, "fsc-total"], [1, "fsc-row"], ["type", "text", "placeholder", "Component name", 1, "fsc-label", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["type", "number", "min", "0", 1, "fsc-amount", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "fsc-freq", 3, "ngModelChange", "change", "ngModel", "ngModelOptions"], [1, "fsc-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled"], ["type", "button", "aria-label", "Remove", 1, "ghost", "small", "danger-text", 3, "click"], ["class", "hint-text", 4, "ngIf"], ["type", "button", 1, "ghost", 3, "click"], [1, "panel", "fee-gen-card", "span-12", 3, "ngSubmit", "formGroup"], ["type", "submit", 1, "primary-btn", "compact-submit", 3, "disabled"], ["formControlName", "academicYear", 3, "change"], ["formControlName", "classRoom", 3, "change"], ["formControlName", "cycle"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["formControlName", "month", 3, "change"], ["type", "number", "formControlName", "year", "min", "2020", "max", "2100", 3, "change"], [1, "fee-gen-target"], [1, "collect-search-field"], [1, "collect-search"], ["type", "text", "placeholder", "Search name, admission no. or roll no.", "autocomplete", "off", 3, "input", "value"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["class", "collect-search-results", 4, "ngIf"], ["class", "collect-search-empty", 4, "ngIf"], ["class", "fee-gen-target-note hint-text", 4, "ngIf"], [1, "fee-cycle-hint", "hint-text"], ["class", "fee-gen-stats", 4, "ngIf"], ["class", "fee-gen-confirm", 4, "ngIf"], [3, "value", "disabled"], [1, "collect-search-results"], ["type", "button", "class", "collect-result", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "collect-result", 3, "click"], [1, "cr-name"], [1, "cr-meta"], [1, "collect-search-empty"], [1, "fee-gen-target-note", "hint-text"], [1, "fee-gen-stats"], [1, "fg-stat"], [1, "fg-label"], [1, "fg-value"], [1, "fee-gen-confirm"], [1, "panel", "collect-card", "span-12", 3, "ngSubmit", "formGroup"], [1, "section-head"], [1, "collect-filters"], ["type", "text", "placeholder", "Name, admission no. or roll no.", "autocomplete", "off", 3, "input", "value"], ["class", "collect-empty hint-text", 4, "ngIf"], [1, "collect-student-summary"], [1, "css-main"], [1, "css-avatar"], [1, "css-name"], [1, "css-meta"], [1, "css-stats"], [1, "css-stat"], ["class", "pending-demands", 4, "ngIf", "ngIfElse"], [1, "pending-demands"], ["class", "pending-demand-row", 3, "is-selected", "is-paid", 4, "ngFor", "ngForOf"], [1, "pending-demand-row"], [1, "pd-select"], ["type", "radio", "name", "collectInvoice", 3, "change", "checked", "disabled"], [1, "pd-info"], [1, "pd-number"], ["class", "pd-period", 4, "ngIf"], [1, "pd-amounts"], [1, "pd-total"], [1, "pd-balance"], [1, "status-badge", "small", 3, "ngClass"], [1, "pd-period"], [1, "section-head", "compact", 2, "margin-top", "0.75rem"], [1, "form-grid", "compact"], ["type", "number", "formControlName", "discount", "min", "0", 3, "input"], ["type", "number", "formControlName", "fine", "min", "0", 3, "input"], ["type", "number", "formControlName", "otherCharges", "min", "0", 3, "input"], ["type", "number", "formControlName", "amount", "min", "1"], ["formControlName", "mode"], ["value", "cash"], ["value", "upi"], ["value", "card"], ["value", "bank_transfer"], ["value", "cheque"], ["formControlName", "referenceNumber", "placeholder", "Optional"], ["class", "inline collect-onetime-toggle", 4, "ngIf"], ["class", "payment-summary", 4, "ngIf"], [1, "inline", "collect-onetime-toggle"], ["type", "checkbox", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "payment-summary"], [1, "ps-row"], [1, "ps-row", "net"], [1, "ps-row", "remaining"], [1, "collect-empty", "hint-text"], [1, "fee-list-actions"], [1, "view-toggle"], ["type", "button", 3, "click"], [1, "filter-bar"], [1, "filter-bar-grid"], ["type", "text", "placeholder", "Invoice no, student, receipt\u2026", 3, "input", "value"], ["value", "unpaid"], ["value", "partial"], ["value", "paid"], ["value", "cancelled"], [1, "filter-bar-actions"], [1, "toolbar"], [1, "filter-select", 3, "change", "value"], [1, "invoice-cards", "compact"], ["class", "invoice-card clickable-card", "title", "Click to view full invoice", 3, "click", 4, "ngFor", "ngForOf"], ["title", "Click to view full invoice", 1, "invoice-card", "clickable-card", 3, "click"], [1, "inv-header"], [1, "inv-number"], [1, "status-badge", 3, "ngClass"], [1, "inv-student"], ["class", "inv-meta", 4, "ngIf"], [1, "inv-mini-details"], [1, "success-text"], [1, "inv-footer"], [1, "inv-due"], [1, "inv-footer-actions"], [1, "inv-meta"], [1, "table-wrap", "sticky-header"], ["class", "clickable-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "clickable-row", 3, "click"], [1, "action-cell"], [3, "columns", "rows"], [3, "title", "message"], ["type", "text", "placeholder", "Receipt, invoice or student\u2026", 3, "input", "value"], ["value", "void"], [1, "sortable", 3, "click"], ["class", "sortable", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["title", "No payment history", "message", "No fee payment history yet for the selected filters."], [3, "columns", "rows", "embedded"], [1, "admission-overlay", 3, "click"], [1, "admission-modal", "fee-detail-modal", 3, "click"], [1, "admission-modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [1, "admission-modal-body"], [1, "inv-header", 2, "margin-bottom", "0.75rem"], ["class", "chip-value", 4, "ngIf"], [1, "inv-details", "fee-breakdown"], [1, "inv-detail"], [1, "inv-label"], [1, "inv-value"], [1, "inv-value", "success-text"], [1, "section-head", "compact", 2, "margin-top", "1rem"], ["class", "payment-chips", 4, "ngIf", "ngIfElse"], [1, "admission-modal-footer"], ["type", "button", "class", "success-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "primary-btn", 3, "click"], [1, "chip-value"], [1, "info-list"], [1, "payment-chips"], ["class", "payment-chip", 4, "ngFor", "ngForOf"], [1, "payment-chip"], ["type", "button", "class", "ghost small danger-text", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", "danger-text", 3, "click"], ["type", "button", 1, "success-btn", 3, "click"], [1, "admission-overlay", "upi-overlay", 3, "click"], [1, "admission-modal", "upi-modal", 3, "click"], [1, "admission-modal-body", "upi-body"], [1, "upi-amount"], [1, "upi-qr-wrap"], ["alt", "UPI payment QR code", "width", "220", "height", "220", 1, "upi-qr", 3, "src"], [1, "upi-details"], [1, "upi-detail"], [1, "primary-btn", "upi-app-btn", 3, "href"], [1, "hint-text", "upi-hint"]], template: function FeesPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 3);
      \u0275\u0275template(1, FeesPageComponent_div_1_Template, 2, 1, "div", 4)(2, FeesPageComponent_ng_container_2_Template, 35, 26, "ng-container", 5)(3, FeesPageComponent_div_3_Template, 88, 52, "div", 6)(4, FeesPageComponent_div_4_Template, 36, 9, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.invoices.length && !ctx.vm.feeHistory.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.invoices.length || ctx.vm.feeHistory.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.viewingInvoice);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.payingInvoice);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, CurrencyPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, NgModel, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, TableSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeesPageComponent, { className: "FeesPageComponent", filePath: "src\\app\\pages\\fees-page\\fees-page.component.ts", lineNumber: 17 });
})();
export {
  FeesPageComponent
};
//# sourceMappingURL=chunk-QOM4E5OB.js.map
