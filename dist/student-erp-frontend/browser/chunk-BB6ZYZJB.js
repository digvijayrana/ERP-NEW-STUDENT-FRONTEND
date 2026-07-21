import {
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
  CurrencyPipe,
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
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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

// src/app/pages/fee-prediction-page/fee-prediction-page.component.ts
var _c0 = () => ["critical", "high", "medium", "low"];
function FeePredictionPageComponent_section_0_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
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
function FeePredictionPageComponent_section_0_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    \u0275\u0275property("value", room_r4._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r4.name, "-", room_r4.section, "");
  }
}
function FeePredictionPageComponent_section_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "app-spinner");
    \u0275\u0275elementEnd();
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275element(4, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r5 = ctx.$implicit;
    const dash_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", key_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(key_r5);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.vm.feePredRiskBarWidth(key_r5), "%");
    \u0275\u0275property("ngClass", "risk-" + key_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(dash_r6.riskBreakdown[key_r5] || 0);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275element(2, "div", 47);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275element(4, "div", 48);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.vm.feePredTrendHeight(point_r7.billed), "%");
    \u0275\u0275property("title", "Billed " + \u0275\u0275pipeBind4(3, 8, point_r7.billed, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.vm.feePredTrendHeight(point_r7.collected), "%");
    \u0275\u0275property("title", "Collected " + \u0275\u0275pipeBind4(5, 13, point_r7.collected, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(point_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", point_r7.collectionRate, "%");
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, FeePredictionPageComponent_section_0_ng_container_19_div_51_div_1_Template, 10, 18, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dash_r6 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", dash_r6.paymentTrend);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 51);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "button", 11);
    \u0275\u0275listener("click", function FeePredictionPageComponent_section_0_ng_container_19_div_68_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.prepareFeeReminders());
    });
    \u0275\u0275text(2, "Generate reminders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function FeePredictionPageComponent_section_0_ng_container_19_div_68_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.sendFeeReminders("email"));
    });
    \u0275\u0275text(4, "Email reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 11);
    \u0275\u0275listener("click", function FeePredictionPageComponent_section_0_ng_container_19_div_68_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.sendFeeReminders("whatsapp"));
    });
    \u0275\u0275text(6, "WhatsApp reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function FeePredictionPageComponent_section_0_ng_container_19_div_68_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.sendFeeReminders("all"));
    });
    \u0275\u0275text(8, "Send all channels");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.vm.feePredSelectedIds.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.feePredSelectedIds.length || ctx_r1.vm.feePredSending);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.feePredSelectedIds.length || ctx_r1.vm.feePredSending);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.vm.feePredSelectedIds.length || ctx_r1.vm.feePredSending);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r12);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.contact == null ? null : row_r11.contact.phone);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275element(1, "br");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.contact == null ? null : row_r11.contact.email);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 59);
    \u0275\u0275listener("change", function FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_Template_input_change_2_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.toggleFeePredStudent(row_r11.studentId, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "div", 60)(16, "div", 41);
    \u0275\u0275element(17, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "td")(21, "div", 60)(22, "div", 41);
    \u0275\u0275element(23, "div", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td")(30, "span", 40);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 63);
    \u0275\u0275template(33, FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_33_Template, 2, 1, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 65);
    \u0275\u0275template(35, FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_35_Template, 2, 1, "span", 66)(36, FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_36_Template, 3, 1, "span", 66)(37, FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_span_37_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", ctx_r1.vm.isFeePredSelected(row_r11.studentId));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.vm.isFeePredSelected(row_r11.studentId));
    \u0275\u0275attribute("aria-label", "Select " + row_r11.studentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r11.studentName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r11.admissionNumber || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.classLabel || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 21, row_r11.pendingAmount, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", row_r11.latePaymentProbability, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r11.latePaymentProbability, "%");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", row_r11.defaultProbability, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", row_r11.defaultProbability, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(28, 26, row_r11.expectedCollection, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", row_r11.riskCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.riskCategory);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", row_r11.factors == null ? null : row_r11.factors.slice(0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r11.contact == null ? null : row_r11.contact.phone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r11.contact == null ? null : row_r11.contact.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r11.contact == null ? null : row_r11.contact.phone) && !(row_r11.contact == null ? null : row_r11.contact.email));
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "table", 55)(2, "thead")(3, "tr")(4, "th", 56)(5, "input", 57);
    \u0275\u0275listener("change", function FeePredictionPageComponent_section_0_ng_container_19_div_69_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.vm.toggleFeePredSelectAll($event.target.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Student");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Class");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Late pay %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Default %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Expected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Risk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Signals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Contact");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, FeePredictionPageComponent_section_0_ng_container_19_div_69_tr_25_Template, 38, 31, "tr", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dash_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("checked", ctx_r1.vm.feePredAllSelected);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", dash_r6.predictions);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 68);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 76);
    \u0275\u0275text(1, "Open WhatsApp");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rem_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", rem_r13.reminder == null ? null : rem_r13.reminder.whatsappUrl, \u0275\u0275sanitizeUrl);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "WhatsApp unavailable");
    \u0275\u0275elementEnd();
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Email ready");
    \u0275\u0275elementEnd();
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "No email");
    \u0275\u0275elementEnd();
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 71)(1, "div", 72)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 40);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 74);
    \u0275\u0275template(9, FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_a_9_Template, 2, 1, "a", 75)(10, FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_span_10_Template, 2, 0, "span", 66)(11, FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_span_11_Template, 2, 0, "span", 66)(12, FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_span_12_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rem_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(rem_r13.studentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", rem_r13.riskCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(rem_r13.riskCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rem_r13.reminder == null ? null : rem_r13.reminder.body);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", rem_r13.reminder == null ? null : rem_r13.reminder.whatsappUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(rem_r13.reminder == null ? null : rem_r13.reminder.whatsappReady));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", rem_r13.reminder == null ? null : rem_r13.reminder.emailReady);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(rem_r13.reminder == null ? null : rem_r13.reminder.emailReady));
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_section_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 25)(2, "div")(3, "p", 5);
    \u0275\u0275text(4, "Parent reminder");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275template(8, FeePredictionPageComponent_section_0_ng_container_19_section_72_article_8_Template, 13, 8, "article", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Prepared outreach (", ctx_r1.vm.feePredReminders.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.feePredReminders);
  }
}
function FeePredictionPageComponent_section_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "article", 17)(3, "span", 18);
    \u0275\u0275text(4, "Late payment risk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "article", 21)(10, "span", 18);
    \u0275\u0275text(11, "Default probability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 19);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 22)(17, "span", 18);
    \u0275\u0275text(18, "Expected collection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 19);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 20);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "article", 23)(26, "span", 18);
    \u0275\u0275text(27, "Monthly revenue forecast");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 19);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 20);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "section", 24)(34, "div", 25)(35, "div")(36, "p", 5);
    \u0275\u0275text(37, "Risk category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "h3");
    \u0275\u0275text(39, "Distribution");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 26);
    \u0275\u0275template(41, FeePredictionPageComponent_section_0_ng_container_19_div_41_Template, 7, 6, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p", 28);
    \u0275\u0275text(43, "Risk is scored from overdue history, payment latency, carry-forward balances and pending ratio.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "section", 29)(45, "div", 25)(46, "div")(47, "p", 5);
    \u0275\u0275text(48, "Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "h3");
    \u0275\u0275text(50, "Payment trend (6 months)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(51, FeePredictionPageComponent_section_0_ng_container_19_div_51_Template, 2, 1, "div", 30)(52, FeePredictionPageComponent_section_0_ng_container_19_ng_template_52_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(54, "div", 31)(55, "span");
    \u0275\u0275element(56, "i", 32);
    \u0275\u0275text(57, " Billed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275element(59, "i", 33);
    \u0275\u0275text(60, " Collected");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "section", 34)(62, "div", 35)(63, "div")(64, "p", 5);
    \u0275\u0275text(65, "Predictions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "h3");
    \u0275\u0275text(67, "Students with pending fees");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(68, FeePredictionPageComponent_section_0_ng_container_19_div_68_Template, 9, 4, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(69, FeePredictionPageComponent_section_0_ng_container_19_div_69_Template, 26, 2, "div", 37)(70, FeePredictionPageComponent_section_0_ng_container_19_ng_template_70_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, FeePredictionPageComponent_section_0_ng_container_19_section_72_Template, 9, 2, "section", 38);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dash_r6 = ctx.ngIf;
    const noTrend_r14 = \u0275\u0275reference(53);
    const noPredictions_r15 = \u0275\u0275reference(71);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(dash_r6.summary.latePaymentRiskCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Avg likelihood ", dash_r6.summary.avgLatePaymentProbability, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", dash_r6.summary.avgDefaultProbability, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", dash_r6.summary.defaulterRiskCount, " high/critical risk");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(21, 15, dash_r6.summary.expectedCollection, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("of ", \u0275\u0275pipeBind4(24, 20, dash_r6.summary.totalPending, "INR", "symbol", "1.0-0"), " pending");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(30, 25, dash_r6.summary.monthlyRevenueForecast, "INR", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Last month ", dash_r6.summary.lastMonthCollectionRate, "% collected");
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(30, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", dash_r6.paymentTrend == null ? null : dash_r6.paymentTrend.length)("ngIfElse", noTrend_r14);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r1.vm.can("fee_prediction", "create"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dash_r6.predictions == null ? null : dash_r6.predictions.length)("ngIfElse", noPredictions_r15);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.feePredReminders.length);
  }
}
function FeePredictionPageComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 3)(1, "header", 4)(2, "div")(3, "p", 5);
    \u0275\u0275text(4, "AI Fee Intelligence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Fee prediction & collection analytics");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "select", 7);
    \u0275\u0275twoWayListener("ngModelChange", function FeePredictionPageComponent_section_0_Template_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.feePredYear, $event) || (ctx_r1.vm.feePredYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeePredictionPageComponent_section_0_Template_select_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadFeePredictions());
    });
    \u0275\u0275elementStart(9, "option", 8);
    \u0275\u0275text(10, "All years");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FeePredictionPageComponent_section_0_option_11_Template, 2, 2, "option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function FeePredictionPageComponent_section_0_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.vm.feePredClass, $event) || (ctx_r1.vm.feePredClass = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeePredictionPageComponent_section_0_Template_select_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadFeePredictions());
    });
    \u0275\u0275elementStart(13, "option", 8);
    \u0275\u0275text(14, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, FeePredictionPageComponent_section_0_option_15_Template, 2, 3, "option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275listener("click", function FeePredictionPageComponent_section_0_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadFeePredictions());
    });
    \u0275\u0275text(17, "Refresh");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, FeePredictionPageComponent_section_0_div_18_Template, 2, 0, "div", 12)(19, FeePredictionPageComponent_section_0_ng_container_19_Template, 73, 31, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.feePredYear);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.years);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.vm.feePredClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.vm.feePredLoading);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.vm.feePredLoading && !ctx_r1.vm.feePredDashboard);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.feePredDashboard);
  }
}
var FeePredictionPageComponent = class _FeePredictionPageComponent {
  vm;
  static \u0275fac = function FeePredictionPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeePredictionPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeePredictionPageComponent, selectors: [["app-fee-prediction-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["noTrend", ""], ["noPredictions", ""], ["class", "workspace-grid fee-pred-page", 4, "ngIf"], [1, "workspace-grid", "fee-pred-page"], [1, "section-head", "span-12"], [1, "eyebrow"], [1, "listing-filters", "fee-pred-filters"], ["aria-label", "Academic year", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Class", 1, "filter-select", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "ghost", "small", 3, "click", "disabled"], ["class", "span-12", 4, "ngIf"], [4, "ngIf"], [3, "value"], [1, "span-12"], [1, "fee-summary-grid", "span-12"], [1, "fee-summary-card", "warn"], [1, "fs-label"], [1, "fs-value"], [1, "muted"], [1, "fee-summary-card", "danger"], [1, "fee-summary-card", "ok"], [1, "fee-summary-card"], [1, "panel", "span-4", "fee-pred-risk-panel"], [1, "section-head", "compact"], [1, "risk-stack"], ["class", "risk-row", 4, "ngFor", "ngForOf"], [1, "hint-text"], [1, "panel", "span-8", "fee-pred-trend-panel"], ["class", "trend-chart", 4, "ngIf", "ngIfElse"], [1, "trend-legend"], [1, "lg", "billed"], [1, "lg", "collected"], [1, "panel", "span-12"], [1, "section-head"], ["class", "fee-pred-actions", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf", "ngIfElse"], ["class", "panel span-12", 4, "ngIf"], [1, "risk-row"], [1, "risk-badge", 3, "ngClass"], [1, "bar-track"], [1, "bar-fill", 3, "ngClass"], [1, "trend-chart"], ["class", "trend-col", 4, "ngFor", "ngForOf"], [1, "trend-col"], [1, "trend-bars"], [1, "trend-bar", "billed", 3, "title"], [1, "trend-bar", "collected", 3, "title"], [1, "trend-label"], [1, "trend-rate"], ["title", "No trend data", "message", "Generate fee demands to see collection trends."], [1, "fee-pred-actions"], ["type", "button", 1, "primary-btn", "compact-submit", 3, "click", "disabled"], [1, "table-wrap"], [1, "data-table"], [2, "width", "36px"], ["type", "checkbox", "aria-label", "Select all", 3, "change", "checked"], [3, "selected", 4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "change", "checked"], [1, "mini-meter"], [1, "bar-fill", "late"], [1, "bar-fill", "default"], [1, "factors-cell"], ["class", "factor-chip", 4, "ngFor", "ngForOf"], [1, "contact-cell"], ["class", "muted", 4, "ngIf"], [1, "factor-chip"], ["title", "No pending fee risk", "message", "All analyzed students are clear, or no demands exist for the selected filters."], [1, "reminder-grid"], ["class", "reminder-card", 4, "ngFor", "ngForOf"], [1, "reminder-card"], [1, "reminder-head"], [1, "reminder-body"], [1, "reminder-actions"], ["class", "primary-btn compact-submit", "target", "_blank", "rel", "noopener", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", 1, "primary-btn", "compact-submit", 3, "href"]], template: function FeePredictionPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FeePredictionPageComponent_section_0_Template, 20, 7, "section", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.vm.can("fee_prediction", "view"));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CurrencyPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, SpinnerComponent, EmptyStateComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeePredictionPageComponent, { className: "FeePredictionPageComponent", filePath: "src\\app\\pages\\fee-prediction-page\\fee-prediction-page.component.ts", lineNumber: 14 });
})();
export {
  FeePredictionPageComponent
};
//# sourceMappingURL=chunk-BB6ZYZJB.js.map
