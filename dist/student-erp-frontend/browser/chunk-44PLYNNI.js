import {
  PaginationBarComponent
} from "./chunk-NHO3MKXE.js";
import "./chunk-XUTYR2A2.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KJIDRE24.js";

// src/app/shared/card-skeleton.component.ts
function CardSkeletonComponent_article_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function CardSkeletonComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 2);
    \u0275\u0275element(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275template(5, CardSkeletonComponent_article_1_div_5_Template, 1, 0, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.actionArray);
  }
}
var CardSkeletonComponent = class _CardSkeletonComponent {
  cards = 4;
  actions = 2;
  get cardArray() {
    return Array.from({ length: Math.max(1, this.cards) }, (_, i) => i);
  }
  get actionArray() {
    return Array.from({ length: Math.max(1, this.actions) }, (_, i) => i);
  }
  static \u0275fac = function CardSkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardSkeletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardSkeletonComponent, selectors: [["app-card-skeleton"]], inputs: { cards: "cards", actions: "actions" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["role", "status", "aria-label", "Loading content", 1, "card-skeleton-grid"], ["class", "card-skeleton-item", 4, "ngFor", "ngForOf"], [1, "card-skeleton-item"], [1, "skeleton-line", "skeleton-title"], [1, "skeleton-line", "skeleton-meta"], [1, "skeleton-line", "skeleton-meta", "short"], [1, "skeleton-actions"], ["class", "skeleton-pill", 4, "ngFor", "ngForOf"], [1, "skeleton-pill"]], template: function CardSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CardSkeletonComponent_article_1_Template, 6, 1, "article", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.cardArray);
    }
  }, dependencies: [CommonModule, NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardSkeletonComponent, { className: "CardSkeletonComponent", filePath: "src\\app\\shared\\card-skeleton.component.ts", lineNumber: 21 });
})();

// src/app/pages/exams-page/exams-page.component.ts
function ExamsPageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "app-spinner", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("show", true);
  }
}
function ExamsPageComponent_ng_container_2_form_1_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
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
function ExamsPageComponent_ng_container_2_form_1_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 58);
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
function ExamsPageComponent_ng_container_2_form_1_span_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Generate with AI");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_form_1_span_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "span", 60);
    \u0275\u0275text(2, " Generating...");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_form_1_span_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Generate from PDF");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_form_1_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275element(1, "span", 60);
    \u0275\u0275text(2, " Generating...");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 37);
    \u0275\u0275listener("ngSubmit", function ExamsPageComponent_ng_container_2_form_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.generateExamPaper());
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "AI Unit Test");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Generate exam from chapter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Exam title");
    \u0275\u0275element(9, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Subject");
    \u0275\u0275element(12, "input", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label");
    \u0275\u0275text(14, "Chapter");
    \u0275\u0275element(15, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Book reference");
    \u0275\u0275element(18, "input", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275text(20, "Additional context");
    \u0275\u0275element(21, "textarea", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label");
    \u0275\u0275text(23, "Upload chapter PDF (optional)");
    \u0275\u0275elementStart(24, "input", 43);
    \u0275\u0275listener("change", function ExamsPageComponent_ng_container_2_form_1_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.onExamPdfFile($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label");
    \u0275\u0275text(26, "Academic year");
    \u0275\u0275elementStart(27, "select", 44)(28, "option", 15);
    \u0275\u0275text(29, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ExamsPageComponent_ng_container_2_form_1_option_30_Template, 2, 2, "option", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "label");
    \u0275\u0275text(32, "Class");
    \u0275\u0275elementStart(33, "select", 46)(34, "option", 15);
    \u0275\u0275text(35, "Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ExamsPageComponent_ng_container_2_form_1_option_36_Template, 2, 3, "option", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "label");
    \u0275\u0275text(38, "Difficulty");
    \u0275\u0275elementStart(39, "select", 47)(40, "option", 48);
    \u0275\u0275text(41, "Easy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 49);
    \u0275\u0275text(43, "Medium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 50);
    \u0275\u0275text(45, "Hard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 51);
    \u0275\u0275text(47, "Mixed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "label");
    \u0275\u0275text(49, "Question count");
    \u0275\u0275element(50, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "label");
    \u0275\u0275text(52, "Duration (minutes)");
    \u0275\u0275element(53, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 54);
    \u0275\u0275template(55, ExamsPageComponent_ng_container_2_form_1_span_55_Template, 2, 0, "span", 3)(56, ExamsPageComponent_ng_container_2_form_1_span_56_Template, 3, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 56);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_form_1_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.generateExamFromPdf());
    });
    \u0275\u0275template(58, ExamsPageComponent_ng_container_2_form_1_span_58_Template, 2, 0, "span", 3)(59, ExamsPageComponent_ng_container_2_form_1_span_59_Template, 3, 0, "span", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275element(60, "app-spinner", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r2.vm.examForm);
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", ctx_r2.vm.openYears);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.vm.classes);
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r2.vm.examForm.invalid || ctx_r2.vm.generatingExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.generatingExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.generatingExam);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.vm.examForm.invalid || !ctx_r2.vm.examPdfFile || ctx_r2.vm.generatingExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.generatingExam);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.generatingExam);
    \u0275\u0275advance();
    \u0275\u0275property("show", ctx_r2.vm.generatingExam);
  }
}
function ExamsPageComponent_ng_container_2_app_card_skeleton_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-card-skeleton", 61);
  }
  if (rf & 2) {
    \u0275\u0275property("cards", 4);
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const exam_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.publishExamPaper(exam_r8._id));
    });
    \u0275\u0275text(1, "Publish");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const exam_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.closeExamPaper(exam_r8._id));
    });
    \u0275\u0275text(1, "Close");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const exam_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.deleteExamPaper(exam_r8._id));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_1_Template, 2, 0, "button", 75)(2, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_2_Template, 2, 0, "button", 75);
    \u0275\u0275elementStart(3, "button", 76);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const exam_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.viewExamReport(exam_r8._id));
    });
    \u0275\u0275text(4, "Report");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_button_5_Template, 2, 0, "button", 77);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const exam_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exam_r8.status === "draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exam_r8.status === "published");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", exam_r8.status === "draft");
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const exam_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.startExam(exam_r8._id));
    });
    \u0275\u0275text(1, "Start Exam");
    \u0275\u0275elementEnd();
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 79);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_ng_container_2_Template_button_click_1_listener() {
      const result_r13 = \u0275\u0275restoreView(_r12).ngIf;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vm.viewStudentExamResult(result_r13));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const result_r13 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" View Result \u2014 ", result_r13.percentage, "% ");
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_button_1_Template, 2, 0, "button", 75)(2, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_ng_container_2_Template, 3, 1, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const exam_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent && exam_r8.status === "published" && !ctx_r2.vm.getExamResultForChild(exam_r8._id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.getExamResultForChild(exam_r8._id));
  }
}
function ExamsPageComponent_ng_container_2_div_23_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 64)(1, "div", 65)(2, "h4", 66);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 68)(7, "div", 69)(8, "span", 70);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 71);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 72)(13, "span", 73)(14, "strong");
    \u0275\u0275text(15, "Class:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 73)(18, "strong");
    \u0275\u0275text(19, "Marks:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 73)(22, "strong");
    \u0275\u0275text(23, "Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 74);
    \u0275\u0275template(26, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_26_Template, 6, 3, "ng-container", 3)(27, ExamsPageComponent_ng_container_2_div_23_article_1_ng_container_27_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exam_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("data-status", exam_r8.status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r8.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", exam_r8.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(exam_r8.status);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(exam_r8.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r8.chapter);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.vm.className(exam_r8.classRoom), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", exam_r8.totalMarks, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", exam_r8.durationMinutes, "min");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin || ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
  }
}
function ExamsPageComponent_ng_container_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, ExamsPageComponent_ng_container_2_div_23_article_1_Template, 28, 11, "article", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("exams", ctx_r2.vm.sortedExams));
  }
}
function ExamsPageComponent_ng_container_2_app_empty_state_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 80);
  }
}
function ExamsPageComponent_ng_container_2_section_26_div_8_div_7_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 88);
    \u0275\u0275element(1, "input", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    const question_r16 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("value", option_r15)("formControlName", "q_" + question_r16._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r15, " ");
  }
}
function ExamsPageComponent_ng_container_2_section_26_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, ExamsPageComponent_ng_container_2_section_26_div_8_div_7_label_1_Template, 3, 3, "label", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", question_r16.options);
  }
}
function ExamsPageComponent_ng_container_2_section_26_div_8_label_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "Your answer");
    \u0275\u0275element(2, "textarea", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", "q_" + question_r16._id);
  }
}
function ExamsPageComponent_ng_container_2_section_26_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "p")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, ExamsPageComponent_ng_container_2_section_26_div_8_div_7_Template, 2, 1, "div", 3)(8, ExamsPageComponent_ng_container_2_section_26_div_8_label_8_Template, 3, 1, "label", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const question_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r17 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", question_r16.text, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", question_r16.marks, " mark", question_r16.marks > 1 ? "s" : "", ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r16.type === "mcq" || question_r16.type === "true_false");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", question_r16.type === "short_answer");
  }
}
function ExamsPageComponent_ng_container_2_section_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 81)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Live attempt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "form", 82);
    \u0275\u0275listener("ngSubmit", function ExamsPageComponent_ng_container_2_section_26_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.submitExam());
    });
    \u0275\u0275template(8, ExamsPageComponent_ng_container_2_section_26_div_8_Template, 9, 6, "div", 83);
    \u0275\u0275elementStart(9, "button", 84);
    \u0275\u0275text(10, "Submit exam");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.vm.activeExamAttempt.exam.title);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.vm.examAttemptForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.activeExamAttempt.exam.questions);
  }
}
function ExamsPageComponent_ng_container_2_div_54_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 93);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_div_54_article_1_Template_article_click_0_listener() {
      const result_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.vm.viewStudentExamResult(result_r19));
    });
    \u0275\u0275elementStart(1, "div", 94)(2, "span", 95);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 96);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 97);
    \u0275\u0275element(9, "div", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 99)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 100);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "small");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const result_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("pass", result_r19.percentage >= 40)("fail", result_r19.percentage < 40);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.vm.studentName(result_r19.student));
    \u0275\u0275advance();
    \u0275\u0275classProp("high", result_r19.percentage >= 75);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r19.grade || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.examTitle(result_r19.exam));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", result_r19.percentage, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", result_r19.score, "/", result_r19.maxScore, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", result_r19.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, result_r19.submittedAt, "medium"));
  }
}
function ExamsPageComponent_ng_container_2_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275template(1, ExamsPageComponent_ng_container_2_div_54_article_1_Template, 18, 18, "article", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.vm.paged("examResults", ctx_r2.vm.filteredExamResults));
  }
}
function ExamsPageComponent_ng_container_2_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 101);
  }
}
function ExamsPageComponent_ng_container_2_section_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 102)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Class report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 76);
    \u0275\u0275listener("click", function ExamsPageComponent_ng_container_2_section_58_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.vm.examReport = null);
    });
    \u0275\u0275text(8, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 103)(10, "article", 104)(11, "span");
    \u0275\u0275text(12, "Attempted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "article", 105)(16, "span");
    \u0275\u0275text(17, "Average");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "article", 106)(21, "span");
    \u0275\u0275text(22, "Pass rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "article", 107)(26, "span");
    \u0275\u0275text(27, "Highest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "article", 108)(31, "span");
    \u0275\u0275text(32, "Lowest");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.examReport.exam.title, " \u2014 performance summary");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.vm.examReport.summary.attempted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.examReport.summary.averageScore, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.examReport.summary.passRate, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.examReport.summary.highestScore, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.examReport.summary.lowestScore, "%");
  }
}
function ExamsPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExamsPageComponent_ng_container_2_form_1_Template, 61, 10, "form", 7);
    \u0275\u0275elementStart(2, "section", 8)(3, "div", 9)(4, "div")(5, "p", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 11)(10, "div", 12)(11, "input", 13);
    \u0275\u0275listener("input", function ExamsPageComponent_ng_container_2_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.vm.filters.examSearch = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("exams"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "select", 14);
    \u0275\u0275listener("change", function ExamsPageComponent_ng_container_2_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.vm.filters.examStatus = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("exams"));
    });
    \u0275\u0275elementStart(13, "option", 15);
    \u0275\u0275text(14, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 16);
    \u0275\u0275text(16, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 17);
    \u0275\u0275text(18, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 18);
    \u0275\u0275text(20, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 19);
    \u0275\u0275template(22, ExamsPageComponent_ng_container_2_app_card_skeleton_22_Template, 1, 1, "app-card-skeleton", 20)(23, ExamsPageComponent_ng_container_2_div_23_Template, 2, 1, "div", 21)(24, ExamsPageComponent_ng_container_2_app_empty_state_24_Template, 1, 0, "app-empty-state", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "app-pagination-bar", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ExamsPageComponent_ng_container_2_section_26_Template, 11, 3, "section", 24);
    \u0275\u0275elementStart(27, "section", 25)(28, "div", 9)(29, "div")(30, "p", 10);
    \u0275\u0275text(31, "Results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33, "Student reports & scores");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 11)(35, "div", 12)(36, "input", 26);
    \u0275\u0275listener("input", function ExamsPageComponent_ng_container_2_Template_input_input_36_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.vm.filters.examResultSearch = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("examResults"));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "select", 14);
    \u0275\u0275listener("change", function ExamsPageComponent_ng_container_2_Template_select_change_37_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.vm.filters.examResultGrade = $event.target.value;
      return \u0275\u0275resetView(ctx_r2.vm.resetPage("examResults"));
    });
    \u0275\u0275elementStart(38, "option", 15);
    \u0275\u0275text(39, "All grades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 27);
    \u0275\u0275text(41, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 28);
    \u0275\u0275text(43, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 29);
    \u0275\u0275text(45, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 30);
    \u0275\u0275text(47, "B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 31);
    \u0275\u0275text(49, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 32);
    \u0275\u0275text(51, "D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 33);
    \u0275\u0275text(53, "F");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(54, ExamsPageComponent_ng_container_2_div_54_Template, 2, 1, "div", 34)(55, ExamsPageComponent_ng_container_2_ng_template_55_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(57, "app-pagination-bar", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ExamsPageComponent_ng_container_2_section_58_Template, 35, 6, "section", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const noResults_r21 = \u0275\u0275reference(56);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.isAdmin || ctx_r2.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275classProp("span-8", ctx_r2.vm.isAdmin || ctx_r2.vm.isTeacher)("span-12", ctx_r2.vm.isStudent || ctx_r2.vm.isParent);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.vm.isStudent ? "My exams" : ctx_r2.vm.isParent ? "Child exams" : "Exam papers");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.vm.isStudent ? "Available unit tests" : ctx_r2.vm.isParent ? "Child performance" : "Exam library");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.vm.filters.examSearch);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.examStatus);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-refreshing", ctx_r2.vm.isListingLoading("exams") || ctx_r2.vm.loading && !ctx_r2.vm.sortedExams.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.vm.isListingLoading("exams") || ctx_r2.vm.loading) && !ctx_r2.vm.sortedExams.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.sortedExams.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.vm.isListingLoading("exams") && !ctx_r2.vm.loading && !ctx_r2.vm.sortedExams.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.sortedExams);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.activeExamAttempt);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.vm.filters.examResultSearch);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.vm.filters.examResultGrade);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngIf", ctx_r2.vm.filteredExamResults.length)("ngIfElse", noResults_r21);
    \u0275\u0275advance(3);
    \u0275\u0275property("vm", ctx_r2.vm)("items", ctx_r2.vm.filteredExamResults);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.vm.examReport);
  }
}
function ExamsPageComponent_div_3_div_39_article_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 126)(1, "div", 127)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 129);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 130)(9, "span", 86);
    \u0275\u0275text(10, "Your answer:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ans_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    \u0275\u0275classProp("correct", ans_r23.isCorrect)("wrong", ans_r23.isCorrect === false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", i_r24 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ans_r23.marksAwarded || 0, " marks");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ans_r23.isCorrect ? "Correct" : "Incorrect");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ans_r23.answer || "(blank)", "");
  }
}
function ExamsPageComponent_div_3_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "p", 123);
    \u0275\u0275text(2, "Question-wise Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 124);
    \u0275\u0275template(4, ExamsPageComponent_div_3_div_39_article_4_Template, 12, 8, "article", 125);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.vm.viewingExamResult.answers);
  }
}
function ExamsPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109);
    \u0275\u0275listener("click", function ExamsPageComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeExamResultView());
    });
    \u0275\u0275elementStart(1, "div", 110);
    \u0275\u0275listener("click", function ExamsPageComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r22);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 111)(3, "div")(4, "p", 10);
    \u0275\u0275text(5, "Exam Result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 76);
    \u0275\u0275listener("click", function ExamsPageComponent_div_3_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.vm.closeExamResultView());
    });
    \u0275\u0275text(9, "Close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 112)(11, "div", 113)(12, "span", 114);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 115);
    \u0275\u0275text(15, "Score");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 116)(17, "div", 117)(18, "span", 118);
    \u0275\u0275text(19, "Marks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 119);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 117)(23, "span", 118);
    \u0275\u0275text(24, "Grade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 120);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 117)(28, "span", 118);
    \u0275\u0275text(29, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 119)(31, "span", 67);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 117)(34, "span", 118);
    \u0275\u0275text(35, "Submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 119);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(39, ExamsPageComponent_div_3_div_39_Template, 5, 1, "div", 121);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.vm.examTitle(ctx_r2.vm.viewingExamResult.exam));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("pass", ctx_r2.vm.viewingExamResult.percentage >= 40)("fail", ctx_r2.vm.viewingExamResult.percentage < 40);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.vm.viewingExamResult.percentage, "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", ctx_r2.vm.viewingExamResult.score, " / ", ctx_r2.vm.viewingExamResult.maxScore, "");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("high", ctx_r2.vm.viewingExamResult.percentage >= 75);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.viewingExamResult.grade || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", ctx_r2.vm.viewingExamResult.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vm.viewingExamResult.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 15, ctx_r2.vm.viewingExamResult.submittedAt, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.vm.viewingExamResult.answers == null ? null : ctx_r2.vm.viewingExamResult.answers.length);
  }
}
var ExamsPageComponent = class _ExamsPageComponent {
  vm;
  static \u0275fac = function ExamsPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExamsPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExamsPageComponent, selectors: [["app-exams-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["noResults", ""], [1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], ["class", "my-profile-overlay", 3, "click", 4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading exam data...", 3, "show"], ["class", "panel span-4 form-card", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "data-card"], [1, "section-head"], [1, "eyebrow"], [1, "toolbar"], [1, "search-box"], ["placeholder", "Search title, subject, chapter", 3, "input", "value"], [1, "filter-select", 3, "change", "value"], ["value", ""], ["value", "draft"], ["value", "published"], ["value", "closed"], [1, "listing-table-panel"], [3, "cards", 4, "ngIf"], ["class", "exam-cards", 4, "ngIf"], ["title", "No exams found", "message", "Try adjusting your search or status filter, or generate a new AI unit test.", 4, "ngIf"], ["listKey", "exams", 3, "vm", "items"], ["class", "panel span-12 live-exam-card", 4, "ngIf"], [1, "data-card", "span-12", "results-section"], ["placeholder", "Search student or exam", 3, "input", "value"], ["value", "A+"], ["value", "A"], ["value", "B+"], ["value", "B"], ["value", "C"], ["value", "D"], ["value", "F"], ["class", "score-card-grid", 4, "ngIf", "ngIfElse"], ["listKey", "examResults", 3, "vm", "items"], ["class", "panel span-12 report-panel", 4, "ngIf"], [1, "panel", "span-4", "form-card", 3, "ngSubmit", "formGroup"], ["formControlName", "title", "placeholder", "Chapter 5 Unit Test"], ["formControlName", "subject", "placeholder", "Mathematics"], ["formControlName", "chapter", "placeholder", "Fractions"], ["formControlName", "bookReference", "placeholder", "NCERT Class 8"], ["formControlName", "additionalContext", "rows", "2", "placeholder", "Focus on word problems"], ["type", "file", "accept", "application/pdf", 3, "change"], ["formControlName", "academicYear"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "classRoom"], ["formControlName", "difficulty"], ["value", "easy"], ["value", "medium"], ["value", "hard"], ["value", "mixed"], ["type", "number", "formControlName", "questionCount", "min", "3", "max", "20"], ["type", "number", "formControlName", "durationMinutes", "min", "5"], ["type", "submit", 3, "disabled"], ["class", "btn-spinner", 4, "ngIf"], ["type", "button", 3, "click", "disabled"], ["label", "AI is generating your exam paper...", "mode", "inline", 3, "show"], [3, "value"], [1, "btn-spinner"], [1, "spinner-ring"], [3, "cards"], [1, "exam-cards"], ["class", "exam-card", 4, "ngFor", "ngForOf"], [1, "exam-card"], [1, "exam-card-header"], [1, "exam-card-title"], [1, "status-badge", 3, "ngClass"], [1, "exam-card-body"], [1, "exam-card-tags"], [1, "exam-tag", "subject"], [1, "exam-tag", "chapter"], [1, "exam-card-meta"], [1, "exam-meta-item"], [1, "exam-card-footer"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click"], ["type", "button", "class", "danger-btn small", 3, "click", 4, "ngIf"], ["type", "button", 1, "danger-btn", "small", 3, "click"], ["type", "button", 1, "ghost", "small", "result-view-btn", 3, "click"], ["title", "No exams found", "message", "Try adjusting your search or status filter, or generate a new AI unit test."], [1, "panel", "span-12", "live-exam-card"], [3, "ngSubmit", "formGroup"], ["class", "question-block", 4, "ngFor", "ngForOf"], ["type", "submit"], [1, "question-block"], [1, "muted"], ["class", "option-row", 4, "ngFor", "ngForOf"], [1, "option-row"], ["type", "radio", 3, "value", "formControlName"], ["rows", "2", 3, "formControlName"], [1, "score-card-grid"], ["class", "score-card result-card clickable", 3, "pass", "fail", "click", 4, "ngFor", "ngForOf"], [1, "score-card", "result-card", "clickable", 3, "click"], [1, "score-card-top"], [1, "student-tag"], [1, "grade-badge"], [1, "score-bar-wrap"], [1, "score-bar"], [1, "score-footer"], [1, "percent-pill"], ["title", "No exam results yet", "message", "Publish a unit test and have students attempt it to see scores here."], [1, "panel", "span-12", "report-panel"], [1, "metrics-grid"], [1, "metric-card", "accent-blue"], [1, "metric-card", "accent-teal"], [1, "metric-card", "accent-green"], [1, "metric-card", "accent-purple"], [1, "metric-card", "accent-orange"], [1, "my-profile-overlay", 3, "click"], [1, "exam-result-modal", 3, "click"], [1, "my-profile-header"], [1, "exam-result-summary"], [1, "exam-result-score-ring"], [1, "ring-percent"], [1, "ring-label"], [1, "exam-result-stats"], [1, "my-profile-field"], [1, "my-profile-label"], [1, "my-profile-value"], [1, "my-profile-value", "grade-big"], ["class", "exam-result-answers", 4, "ngIf"], [1, "exam-result-answers"], [1, "my-profile-section-title"], [1, "answer-list"], ["class", "answer-card", 3, "correct", "wrong", 4, "ngFor", "ngForOf"], [1, "answer-card"], [1, "answer-header"], [1, "answer-marks"], [1, "answer-verdict"], [1, "answer-text"]], template: function ExamsPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1);
      \u0275\u0275template(1, ExamsPageComponent_div_1_Template, 2, 1, "div", 2)(2, ExamsPageComponent_ng_container_2_Template, 59, 24, "ng-container", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, ExamsPageComponent_div_3_Template, 40, 18, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.exams.length && !ctx.vm.students.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.exams.length || ctx.vm.students.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.viewingExamResult);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, PaginationBarComponent, SpinnerComponent, EmptyStateComponent, CardSkeletonComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExamsPageComponent, { className: "ExamsPageComponent", filePath: "src\\app\\pages\\exams-page\\exams-page.component.ts", lineNumber: 16 });
})();
export {
  ExamsPageComponent
};
//# sourceMappingURL=chunk-44PLYNNI.js.map
