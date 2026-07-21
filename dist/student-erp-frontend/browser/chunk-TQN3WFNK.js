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

// src/app/pages/teachers-page/teachers-page.component.ts
var _c0 = () => ({ standalone: true });
function TeachersPageComponent_div_1_Template(rf, ctx) {
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
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const src_r2 = ctx.ngIf;
    \u0275\u0275property("src", src_r2, \u0275\u0275sanitizeUrl);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", tp_r3.firstName.charAt(0), "", (tp_r3.lastName || "").charAt(0), "");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cls_r4.name, "-", cls_r4.section, "");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_47_span_1_Template, 2, 2, "span", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.getTeacherClasses(tp_r3._id));
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Not assigned as class teacher");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_54_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const subj_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", subj_r6.className, " \u2014 ", subj_r6.subjectName, "");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_54_span_1_Template, 2, 2, "span", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.getTeacherSubjects(tp_r3._id));
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "No subjects assigned");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_61_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_61_span_1_Template, 2, 1, "span", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tp_r3.subjects);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Not specified");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_71_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const tp_r3 = \u0275\u0275nextContext().ngIf;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherDocument(tp_r3._id, "photo"));
    });
    \u0275\u0275text(3, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tp_r3.documents.photo.originalName, " ");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Not uploaded");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_82_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const tp_r3 = \u0275\u0275nextContext().ngIf;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherDocument(tp_r3._id, "idProof"));
    });
    \u0275\u0275text(5, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tp_r3.documents.idProof.originalName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tp_r3.documents.idProof.status || "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tp_r3.documents.idProof.status || "pending");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Not uploaded");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Reason: ", tp_r3.documents.idProof.rejectReason, "");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_div_1_span_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const i_r12 = \u0275\u0275nextContext().index;
      const tp_r3 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherEntryDocument(tp_r3._id, "experience", i_r12));
    });
    \u0275\u0275text(3, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Doc: ", exp_r13.document.originalName, " ");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_div_1_span_6_Template, 4, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 56);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_div_1_Template_button_click_11_listener() {
      const i_r12 = \u0275\u0275restoreView(_r10).index;
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.vm.removeTeacherExperience(i_r12));
    });
    \u0275\u0275text(12, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r13.instituteName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r13.designation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exp_r13.document == null ? null : exp_r13.document.originalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 5, exp_r13.fromDate, "MMM yyyy"), " \u2014 ", exp_r13.toDate ? \u0275\u0275pipeBind2(10, 8, exp_r13.toDate, "MMM yyyy") : "Present", "");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_div_1_Template, 13, 11, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tp_r3.experience);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_p_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, "No experience added");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.instituteName, $event) || (ctx_r4.vm.teacherExpForm.instituteName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.designation, $event) || (ctx_r4.vm.teacherExpForm.designation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.fromDate, $event) || (ctx_r4.vm.teacherExpForm.fromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.toDate, $event) || (ctx_r4.vm.teacherExpForm.toDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 65)(6, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.onExpFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 66);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.addTeacherExperience());
    });
    \u0275\u0275text(10, "+ Add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.instituteName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.designation);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.fromDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.toDate);
    \u0275\u0275property("min", ctx_r4.vm.teacherExpForm.fromDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherExpFile ? ctx_r4.vm.teacherExpFile.name : "Attach Document");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.vm.teacherExpForm.instituteName);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_div_1_span_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const i_r17 = \u0275\u0275nextContext().index;
      const tp_r3 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherEntryDocument(tp_r3._id, "education", i_r17));
    });
    \u0275\u0275text(3, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Doc: ", edu_r18.document.originalName, " ");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_div_1_span_6_Template, 4, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 56);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_div_1_Template_button_click_11_listener() {
      const i_r17 = \u0275\u0275restoreView(_r15).index;
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.vm.removeTeacherEducation(i_r17));
    });
    \u0275\u0275text(12, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r18 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(edu_r18.instituteName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r18.degree, " \u2014 ", edu_r18.fieldOfStudy, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", edu_r18.document == null ? null : edu_r18.document.originalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 6, edu_r18.fromDate, "yyyy"), " \u2014 ", edu_r18.toDate ? \u0275\u0275pipeBind2(10, 9, edu_r18.toDate, "yyyy") : "Present", "");
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_div_1_Template, 13, 12, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tp_r3 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", tp_r3.education);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_p_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, "No education added");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.instituteName, $event) || (ctx_r4.vm.teacherEduForm.instituteName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.degree, $event) || (ctx_r4.vm.teacherEduForm.degree = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.fieldOfStudy, $event) || (ctx_r4.vm.teacherEduForm.fieldOfStudy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.fromDate, $event) || (ctx_r4.vm.teacherEduForm.fromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.toDate, $event) || (ctx_r4.vm.teacherEduForm.toDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 65)(7, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.onEduFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 66);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.addTeacherEducation());
    });
    \u0275\u0275text(11, "+ Add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.instituteName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.degree);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.fieldOfStudy);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.fromDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.toDate);
    \u0275\u0275property("min", ctx_r4.vm.teacherEduForm.fromDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherEduFile ? ctx_r4.vm.teacherEduFile.name : "Attach Document");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.vm.teacherEduForm.instituteName);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18);
    \u0275\u0275template(9, TeachersPageComponent_ng_container_2_ng_container_1_div_1_img_9_Template, 1, 1, "img", 19)(10, TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_10_Template, 2, 2, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 22)(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19, "Employee Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 25);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 23)(23, "span", 24);
    \u0275\u0275text(24, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 25);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 23)(28, "span", 24);
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 25);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "span", 24);
    \u0275\u0275text(34, "Qualification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 25);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 23)(38, "span", 24);
    \u0275\u0275text(39, "Base Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 25);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23)(44, "span", 24);
    \u0275\u0275text(45, "Class Teacher Of");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 25);
    \u0275\u0275template(47, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_47_Template, 2, 1, "ng-container", 26)(48, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_template_48_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 23)(51, "span", 24);
    \u0275\u0275text(52, "Teaching Subjects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 25);
    \u0275\u0275template(54, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_54_Template, 2, 1, "ng-container", 26)(55, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_template_55_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 27)(58, "span", 24);
    \u0275\u0275text(59, "Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "span", 28);
    \u0275\u0275template(61, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_container_61_Template, 2, 1, "ng-container", 26)(62, TeachersPageComponent_ng_container_2_ng_container_1_div_1_ng_template_62_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 29)(65, "h4");
    \u0275\u0275text(66, "Documents & Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 22)(68, "div", 23)(69, "span", 24);
    \u0275\u0275text(70, "Profile Picture");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_71_Template, 4, 1, "span", 30)(72, TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_72_Template, 2, 0, "span", 31);
    \u0275\u0275elementStart(73, "label", 32)(74, "input", 33);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_Template_input_change_74_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.selfUploadTeacherDoc($event, "photo"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "Upload Photo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 23)(78, "span", 24);
    \u0275\u0275text(79, "ID Proof ");
    \u0275\u0275elementStart(80, "span", 34);
    \u0275\u0275text(81, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(82, TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_82_Template, 6, 3, "span", 30)(83, TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_83_Template, 2, 0, "span", 31)(84, TeachersPageComponent_ng_container_2_ng_container_1_div_1_span_84_Template, 2, 1, "span", 35);
    \u0275\u0275elementStart(85, "label", 32)(86, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_Template_input_change_86_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.selfUploadTeacherDoc($event, "idProof"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span");
    \u0275\u0275text(88, "Upload ID Proof");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(89, "div", 29)(90, "div", 37)(91, "h4");
    \u0275\u0275text(92, "Work Experience ");
    \u0275\u0275elementStart(93, "span", 34);
    \u0275\u0275text(94, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "button", 38);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleTeacherExpForm());
    });
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(97, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_97_Template, 2, 1, "div", 39)(98, TeachersPageComponent_ng_container_2_ng_container_1_div_1_p_98_Template, 2, 0, "p", 40)(99, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_99_Template, 11, 7, "div", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "div", 29)(101, "div", 37)(102, "h4");
    \u0275\u0275text(103, "Education ");
    \u0275\u0275elementStart(104, "span", 34);
    \u0275\u0275text(105, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "button", 38);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_ng_container_1_div_1_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleTeacherEduForm());
    });
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(108, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_108_Template, 2, 1, "div", 39)(109, TeachersPageComponent_ng_container_2_ng_container_1_div_1_p_109_Template, 2, 0, "p", 40)(110, TeachersPageComponent_ng_container_2_ng_container_1_div_1_div_110_Template, 12, 8, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tp_r3 = ctx.ngIf;
    const noCtClass_r20 = \u0275\u0275reference(49);
    const noSubjects_r21 = \u0275\u0275reference(56);
    const noSpec_r22 = \u0275\u0275reference(63);
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherName(tp_r3));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-photo", ctx_r4.vm.teacherPhotoSrc(tp_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.teacherPhotoSrc(tp_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.vm.teacherPhotoSrc(tp_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherName(tp_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", tp_r3.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tp_r3.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(tp_r3.employeeCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(tp_r3.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(tp_r3.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(tp_r3.qualification || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 34, tp_r3.baseSalary, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r4.vm.getTeacherClasses(tp_r3._id).length)("ngIfElse", noCtClass_r20);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.vm.getTeacherSubjects(tp_r3._id).length)("ngIfElse", noSubjects_r21);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", tp_r3.subjects == null ? null : tp_r3.subjects.length)("ngIfElse", noSpec_r22);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", tp_r3.documents == null ? null : tp_r3.documents.photo == null ? null : tp_r3.documents.photo.originalName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(tp_r3.documents == null ? null : tp_r3.documents.photo == null ? null : tp_r3.documents.photo.originalName));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", tp_r3.documents == null ? null : tp_r3.documents.idProof == null ? null : tp_r3.documents.idProof.originalName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(tp_r3.documents == null ? null : tp_r3.documents.idProof == null ? null : tp_r3.documents.idProof.originalName));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tp_r3.documents == null ? null : tp_r3.documents.idProof == null ? null : tp_r3.documents.idProof.rejectReason);
    \u0275\u0275advance(11);
    \u0275\u0275attribute("aria-label", ctx_r4.vm.showTeacherExpForm ? "Collapse" : "Add experience");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.showTeacherExpForm ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tp_r3.experience == null ? null : tp_r3.experience.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(tp_r3.experience == null ? null : tp_r3.experience.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.showTeacherExpForm);
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", ctx_r4.vm.showTeacherEduForm ? "Collapse" : "Add education");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.showTeacherEduForm ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tp_r3.education == null ? null : tp_r3.education.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(tp_r3.education == null ? null : tp_r3.education.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.showTeacherEduForm);
  }
}
function TeachersPageComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_div_1_Template, 111, 37, "div", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.myTeacherProfile);
  }
}
function TeachersPageComponent_ng_container_2_section_2_div_21_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    \u0275\u0275elementStart(10, "td")(11, "span", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "div", 86)(15, "app-action-btn", 87);
    \u0275\u0275listener("clicked", function TeachersPageComponent_ng_container_2_section_2_div_21_tr_17_Template_app_action_btn_clicked_15_listener() {
      const teacher_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.viewTeacherProfile(teacher_r26));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "app-action-btn", 88);
    \u0275\u0275listener("clicked", function TeachersPageComponent_ng_container_2_section_2_div_21_tr_17_Template_app_action_btn_clicked_16_listener() {
      const teacher_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.editTeacher(teacher_r26));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "app-action-btn", 89);
    \u0275\u0275listener("clicked", function TeachersPageComponent_ng_container_2_section_2_div_21_tr_17_Template_app_action_btn_clicked_17_listener() {
      const teacher_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.deleteTeacher(teacher_r26._id));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const teacher_r26 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherName(teacher_r26));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r26.employeeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(teacher_r26.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, teacher_r26.baseSalary, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", teacher_r26.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(teacher_r26.status);
  }
}
function TeachersPageComponent_ng_container_2_section_2_div_21_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 90);
    \u0275\u0275element(2, "app-empty-state", 91);
    \u0275\u0275elementEnd()();
  }
}
function TeachersPageComponent_ng_container_2_section_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 83)(1, "table")(2, "thead")(3, "tr")(4, "th", 84);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_section_2_div_21_Template_th_click_4_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleListSort("teachers", "name"));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 84);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_section_2_div_21_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleListSort("teachers", "employeeCode"));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 84);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_section_2_div_21_Template_th_click_8_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleListSort("teachers", "phone"));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 84);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_section_2_div_21_Template_th_click_10_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleListSort("teachers", "baseSalary"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 84);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_section_2_div_21_Template_th_click_12_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleListSort("teachers", "status"));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, TeachersPageComponent_ng_container_2_section_2_div_21_tr_17_Template, 18, 9, "tr", 85)(18, TeachersPageComponent_ng_container_2_section_2_div_21_tr_18_Template, 3, 0, "tr", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Name", ctx_r4.vm.listSortIndicator("teachers", "name"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Code", ctx_r4.vm.listSortIndicator("teachers", "employeeCode"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Phone", ctx_r4.vm.listSortIndicator("teachers", "phone"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Base salary", ctx_r4.vm.listSortIndicator("teachers", "baseSalary"), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Status", ctx_r4.vm.listSortIndicator("teachers", "status"), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r4.vm.paged("teachers", ctx_r4.vm.sortedTeachers));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.vm.sortedTeachers.length && !ctx_r4.vm.isListingLoading("teachers"));
  }
}
function TeachersPageComponent_ng_container_2_section_2_app_table_skeleton_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-table-skeleton", 92);
  }
  if (rf & 2) {
    \u0275\u0275property("columns", 6)("rows", 6);
  }
}
function TeachersPageComponent_ng_container_2_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 70)(1, "div", 15)(2, "div")(3, "p", 16);
    \u0275\u0275text(4, "Roster");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Teachers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 71);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_section_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherForm());
    });
    \u0275\u0275elementStart(8, "span", 72);
    \u0275\u0275text(9, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Create teacher ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "app-listing-toolbar", 73);
    \u0275\u0275listener("searchChange", function TeachersPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_searchChange_11_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.updateListSearch("teachers", "teacherSearch", $event));
    })("refresh", function TeachersPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_refresh_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.refreshListing("teachers"));
    })("exportCsv", function TeachersPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_exportCsv_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.exportTeachersCsv());
    })("exportPdf", function TeachersPageComponent_ng_container_2_section_2_Template_app_listing_toolbar_exportPdf_11_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.exportTeachersPdf());
    });
    \u0275\u0275elementStart(12, "div", 74)(13, "select", 75);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_section_2_Template_select_change_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.updateListFilter("teachers", "teacherStatus", $event.target.value));
    });
    \u0275\u0275elementStart(14, "option", 76);
    \u0275\u0275text(15, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 77);
    \u0275\u0275text(17, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 78);
    \u0275\u0275text(19, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 79);
    \u0275\u0275template(21, TeachersPageComponent_ng_container_2_section_2_div_21_Template, 19, 7, "div", 80)(22, TeachersPageComponent_ng_container_2_section_2_app_table_skeleton_22_Template, 1, 2, "app-table-skeleton", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "app-pagination-bar", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("searchValue", ctx_r4.vm.filters.teacherSearch)("loading", ctx_r4.vm.isListingLoading("teachers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r4.vm.filters.teacherStatus);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-refreshing", ctx_r4.vm.isListingLoading("teachers"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.vm.isListingLoading("teachers") || ctx_r4.vm.sortedTeachers.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isListingLoading("teachers") && !ctx_r4.vm.sortedTeachers.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r4.vm)("items", ctx_r4.vm.sortedTeachers);
  }
}
function TeachersPageComponent_ng_container_2_div_3_label_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label")(1, "span", 103);
    \u0275\u0275text(2, "Employee code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 124);
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_3_p_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 125);
    \u0275\u0275text(1, "Employee code is auto-generated (prefix TE) on save.");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_3_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r28 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", s_r28)("disabled", ctx_r4.vm.teacherSubjects.includes(s_r28));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r28);
  }
}
function TeachersPageComponent_ng_container_2_div_3_div_64_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 128);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_3_div_64_span_1_Template_button_click_2_listener() {
      const s_r30 = \u0275\u0275restoreView(_r29).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.removeTeacherSubject(s_r30));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r30, " ");
  }
}
function TeachersPageComponent_ng_container_2_div_3_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_div_3_div_64_span_1_Template, 4, 1, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.teacherSubjects);
  }
}
function TeachersPageComponent_ng_container_2_div_3_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275text(1, "No subjects selected yet.");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.closeTeacherForm());
    });
    \u0275\u0275elementStart(1, "div", 94);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r27);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "form", 95);
    \u0275\u0275listener("ngSubmit", function TeachersPageComponent_ng_container_2_div_3_Template_form_ngSubmit_2_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.saveTeacher());
    });
    \u0275\u0275elementStart(3, "div", 96)(4, "div")(5, "p", 16);
    \u0275\u0275text(6, "Teacher");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 97);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_3_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.closeTeacherForm());
    });
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 98)(12, "fieldset", 99)(13, "legend");
    \u0275\u0275text(14, "Basic details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 100);
    \u0275\u0275template(16, TeachersPageComponent_ng_container_2_div_3_label_16_Template, 4, 0, "label", 7)(17, TeachersPageComponent_ng_container_2_div_3_p_17_Template, 2, 0, "p", 101);
    \u0275\u0275elementStart(18, "label", 102)(19, "span", 103);
    \u0275\u0275text(20, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label")(23, "span", 103);
    \u0275\u0275text(24, "Middle name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 102)(27, "span", 103);
    \u0275\u0275text(28, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "app-field-error", 107);
    \u0275\u0275elementStart(31, "label", 102)(32, "span", 103);
    \u0275\u0275text(33, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "app-field-error", 109);
    \u0275\u0275elementStart(36, "label", 102)(37, "span", 103);
    \u0275\u0275text(38, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 102)(41, "span", 103);
    \u0275\u0275text(42, "Aadhaar number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "app-field-error", 112);
    \u0275\u0275elementStart(45, "label", 102)(46, "span", 103);
    \u0275\u0275text(47, "Qualification");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "label", 102)(50, "span", 103);
    \u0275\u0275text(51, "Base salary");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 114);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "fieldset", 99)(54, "legend");
    \u0275\u0275text(55, "Subjects / Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 115)(57, "div", 116)(58, "select", 117);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_3_Template_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherSubjectDraft, $event) || (ctx_r4.vm.teacherSubjectDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(59, "option", 76);
    \u0275\u0275text(60, "Select subject");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, TeachersPageComponent_ng_container_2_div_3_option_61_Template, 2, 3, "option", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 66);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_3_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.addTeacherSubject(ctx_r4.vm.teacherSubjectDraft));
    });
    \u0275\u0275text(63, "Add");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(64, TeachersPageComponent_ng_container_2_div_3_div_64_Template, 2, 1, "div", 119)(65, TeachersPageComponent_ng_container_2_div_3_span_65_Template, 2, 0, "span", 120);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 121)(67, "button", 122);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_3_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.closeTeacherForm());
    });
    \u0275\u0275text(68, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "button", 123);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r4.vm.teacherForm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.vm.editingTeacherId ? "Update teacher" : "Create teacher");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r4.vm.editingTeacherId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.vm.editingTeacherId);
    \u0275\u0275advance(13);
    \u0275\u0275property("control", ctx_r4.vm.teacherForm.get("firstName"));
    \u0275\u0275advance(5);
    \u0275\u0275property("control", ctx_r4.vm.teacherForm.get("phone"));
    \u0275\u0275advance(9);
    \u0275\u0275property("control", ctx_r4.vm.teacherForm.get("aadhaarNumber"));
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherSubjectDraft);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(15, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r4.vm.subjectOptions);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.vm.teacherSubjectDraft);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.vm.teacherSubjects.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.vm.teacherSubjects.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r4.vm.teacherForm.invalid || ctx_r4.vm.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.saveButtonLabel(ctx_r4.vm.editingTeacherId ? "Update teacher" : "Create teacher"));
  }
}
function TeachersPageComponent_ng_container_2_div_4_img_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 42);
  }
  if (rf & 2) {
    const src_r32 = ctx.ngIf;
    \u0275\u0275property("src", src_r32, \u0275\u0275sanitizeUrl);
  }
}
function TeachersPageComponent_ng_container_2_div_4_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r4.vm.viewingTeacher.firstName.charAt(0), "", (ctx_r4.vm.viewingTeacher.lastName || "").charAt(0), "");
  }
}
function TeachersPageComponent_ng_container_2_div_4_ng_container_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cls_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cls_r33.name, "-", cls_r33.section, "");
  }
}
function TeachersPageComponent_ng_container_2_div_4_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_div_4_ng_container_47_span_1_Template, 2, 2, "span", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.getTeacherClasses(ctx_r4.vm.viewingTeacher._id));
  }
}
function TeachersPageComponent_ng_container_2_div_4_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "No class assigned");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_4_ng_container_54_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r34 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r34);
  }
}
function TeachersPageComponent_ng_container_2_div_4_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_div_4_ng_container_54_span_1_Template, 2, 1, "span", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.viewingTeacher.subjects);
  }
}
function TeachersPageComponent_ng_container_2_div_4_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "Not specified");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 46);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_57_span_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherDocument(ctx_r4.vm.viewingTeacher._id, "photo"));
    });
    \u0275\u0275text(3, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.vm.viewingTeacher.documents.photo.originalName, " ");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Not uploaded");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_label_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 33);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_div_4_div_57_label_9_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.uploadTeacherDoc($event, "photo"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Upload Photo");
    \u0275\u0275elementEnd()();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_label_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 33);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_div_4_div_57_label_10_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.selfUploadTeacherDoc($event, "photo"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Upload Photo");
    \u0275\u0275elementEnd()();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 46);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_57_span_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherDocument(ctx_r4.vm.viewingTeacher._id, "idProof"));
    });
    \u0275\u0275text(5, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.vm.viewingTeacher.documents.idProof.originalName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.vm.viewingTeacher.documents.idProof.status || "pending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.viewingTeacher.documents.idProof.status || "pending");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Not uploaded");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Reason: ", ctx_r4.vm.viewingTeacher.documents.idProof.rejectReason, "");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_label_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_div_4_div_57_label_19_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r39);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.uploadTeacherDoc($event, "idProof"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Upload ID Proof");
    \u0275\u0275elementEnd()();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_label_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 32)(1, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_div_4_div_57_label_20_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.selfUploadTeacherDoc($event, "idProof"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Upload ID Proof");
    \u0275\u0275elementEnd()();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136)(1, "button", 137);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_57_div_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.verifyTeacherDoc("idProof", "approve"));
    });
    \u0275\u0275text(2, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_57_div_21_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r41);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.verifyDocReason, $event) || (ctx_r4.vm.verifyDocReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 139);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_57_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.verifyTeacherDoc("idProof", "reject"));
    });
    \u0275\u0275text(5, "Reject & Request Reupload");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.verifyDocReason);
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "h4");
    \u0275\u0275text(2, "Documents & Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23)(5, "span", 24);
    \u0275\u0275text(6, "Profile Picture");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, TeachersPageComponent_ng_container_2_div_4_div_57_span_7_Template, 4, 1, "span", 30)(8, TeachersPageComponent_ng_container_2_div_4_div_57_span_8_Template, 2, 0, "span", 31)(9, TeachersPageComponent_ng_container_2_div_4_div_57_label_9_Template, 4, 0, "label", 134)(10, TeachersPageComponent_ng_container_2_div_4_div_57_label_10_Template, 4, 0, "label", 134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "span", 24);
    \u0275\u0275text(13, "ID Proof ");
    \u0275\u0275elementStart(14, "span", 34);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, TeachersPageComponent_ng_container_2_div_4_div_57_span_16_Template, 6, 3, "span", 30)(17, TeachersPageComponent_ng_container_2_div_4_div_57_span_17_Template, 2, 0, "span", 31)(18, TeachersPageComponent_ng_container_2_div_4_div_57_span_18_Template, 2, 1, "span", 35)(19, TeachersPageComponent_ng_container_2_div_4_div_57_label_19_Template, 4, 0, "label", 134)(20, TeachersPageComponent_ng_container_2_div_4_div_57_label_20_Template, 4, 0, "label", 134)(21, TeachersPageComponent_ng_container_2_div_4_div_57_div_21_Template, 6, 1, "div", 135);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher.documents == null ? null : ctx_r4.vm.viewingTeacher.documents.photo == null ? null : ctx_r4.vm.viewingTeacher.documents.photo.originalName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r4.vm.viewingTeacher.documents == null ? null : ctx_r4.vm.viewingTeacher.documents.photo == null ? null : ctx_r4.vm.viewingTeacher.documents.photo.originalName));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isTeacher);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher.documents == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof.originalName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r4.vm.viewingTeacher.documents == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof.originalName));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher.documents == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof.rejectReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin && (ctx_r4.vm.viewingTeacher.documents == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof == null ? null : ctx_r4.vm.viewingTeacher.documents.idProof.url) && ctx_r4.vm.viewingTeacher.documents.idProof.status !== "approved");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_58_div_8_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_58_div_8_div_1_span_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r44);
      const i_r45 = \u0275\u0275nextContext().index;
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherEntryDocument(ctx_r4.vm.viewingTeacher._id, "experience", i_r45));
    });
    \u0275\u0275text(3, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Doc: ", exp_r46.document.originalName, " ");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_58_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TeachersPageComponent_ng_container_2_div_4_div_58_div_8_div_1_span_6_Template, 4, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 56);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_58_div_8_div_1_Template_button_click_11_listener() {
      const i_r45 = \u0275\u0275restoreView(_r43).index;
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.vm.removeTeacherExperience(i_r45));
    });
    \u0275\u0275text(12, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r46 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exp_r46.instituteName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r46.designation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", exp_r46.document == null ? null : exp_r46.document.originalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 5, exp_r46.fromDate, "MMM yyyy"), " \u2014 ", exp_r46.toDate ? \u0275\u0275pipeBind2(10, 8, exp_r46.toDate, "MMM yyyy") : "Present", "");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_58_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_div_4_div_58_div_8_div_1_Template, 13, 11, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.viewingTeacher.experience);
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_58_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, "No experience added");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.instituteName, $event) || (ctx_r4.vm.teacherExpForm.instituteName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.designation, $event) || (ctx_r4.vm.teacherExpForm.designation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.fromDate, $event) || (ctx_r4.vm.teacherExpForm.fromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherExpForm.toDate, $event) || (ctx_r4.vm.teacherExpForm.toDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 65)(6, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.onExpFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 66);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.addTeacherExperience());
    });
    \u0275\u0275text(10, "+ Add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.instituteName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.designation);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.fromDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherExpForm.toDate);
    \u0275\u0275property("min", ctx_r4.vm.teacherExpForm.fromDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherExpFile ? ctx_r4.vm.teacherExpFile.name : "Attach Document");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.vm.teacherExpForm.instituteName);
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 37)(2, "h4");
    \u0275\u0275text(3, "Work Experience ");
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_58_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleTeacherExpForm());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TeachersPageComponent_ng_container_2_div_4_div_58_div_8_Template, 2, 1, "div", 39)(9, TeachersPageComponent_ng_container_2_div_4_div_58_p_9_Template, 2, 0, "p", 40)(10, TeachersPageComponent_ng_container_2_div_4_div_58_div_10_Template, 11, 7, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", ctx_r4.vm.showTeacherExpForm ? "Collapse" : "Add experience");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.showTeacherExpForm ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher.experience == null ? null : ctx_r4.vm.viewingTeacher.experience.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r4.vm.viewingTeacher.experience == null ? null : ctx_r4.vm.viewingTeacher.experience.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.showTeacherExpForm);
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_59_div_8_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 58);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_59_div_8_div_1_span_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r50);
      const i_r51 = \u0275\u0275nextContext().index;
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.vm.openTeacherEntryDocument(ctx_r4.vm.viewingTeacher._id, "education", i_r51));
    });
    \u0275\u0275text(3, "View");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r52 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Doc: ", edu_r52.document.originalName, " ");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_59_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TeachersPageComponent_ng_container_2_div_4_div_59_div_8_div_1_span_6_Template, 4, 1, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 55);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 56);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_59_div_8_div_1_Template_button_click_11_listener() {
      const i_r51 = \u0275\u0275restoreView(_r49).index;
      const ctx_r4 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r4.vm.removeTeacherEducation(i_r51));
    });
    \u0275\u0275text(12, "Remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const edu_r52 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(edu_r52.instituteName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", edu_r52.degree, " \u2014 ", edu_r52.fieldOfStudy, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", edu_r52.document == null ? null : edu_r52.document.originalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(9, 6, edu_r52.fromDate, "yyyy"), " \u2014 ", edu_r52.toDate ? \u0275\u0275pipeBind2(10, 9, edu_r52.toDate, "yyyy") : "Present", "");
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_59_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_div_4_div_59_div_8_div_1_Template, 13, 12, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.vm.viewingTeacher.education);
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_59_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275text(1, "No education added");
    \u0275\u0275elementEnd();
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60)(1, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.instituteName, $event) || (ctx_r4.vm.teacherEduForm.instituteName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.degree, $event) || (ctx_r4.vm.teacherEduForm.degree = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.fieldOfStudy, $event) || (ctx_r4.vm.teacherEduForm.fieldOfStudy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.fromDate, $event) || (ctx_r4.vm.teacherEduForm.fromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r4.vm.teacherEduForm.toDate, $event) || (ctx_r4.vm.teacherEduForm.toDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 65)(7, "input", 36);
    \u0275\u0275listener("change", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.onEduFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 66);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r53);
      const ctx_r4 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r4.vm.addTeacherEducation());
    });
    \u0275\u0275text(11, "+ Add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.instituteName);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.degree);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.fieldOfStudy);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.fromDate);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.vm.teacherEduForm.toDate);
    \u0275\u0275property("min", ctx_r4.vm.teacherEduForm.fromDate);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherEduFile ? ctx_r4.vm.teacherEduFile.name : "Attach Document");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.vm.teacherEduForm.instituteName);
  }
}
function TeachersPageComponent_ng_container_2_div_4_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 37)(2, "h4");
    \u0275\u0275text(3, "Education ");
    \u0275\u0275elementStart(4, "span", 34);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 38);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_div_59_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r48);
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.vm.toggleTeacherEduForm());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TeachersPageComponent_ng_container_2_div_4_div_59_div_8_Template, 2, 1, "div", 39)(9, TeachersPageComponent_ng_container_2_div_4_div_59_p_9_Template, 2, 0, "p", 40)(10, TeachersPageComponent_ng_container_2_div_4_div_59_div_10_Template, 12, 8, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", ctx_r4.vm.showTeacherEduForm ? "Collapse" : "Add education");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.showTeacherEduForm ? "\u2212" : "+");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher.education == null ? null : ctx_r4.vm.viewingTeacher.education.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r4.vm.viewingTeacher.education == null ? null : ctx_r4.vm.viewingTeacher.education.length));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.showTeacherEduForm);
  }
}
function TeachersPageComponent_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.closeTeacherProfile());
    });
    \u0275\u0275elementStart(1, "div", 131);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r31);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 132)(3, "h3");
    \u0275\u0275text(4, "Teacher Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 58);
    \u0275\u0275listener("click", function TeachersPageComponent_ng_container_2_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.vm.closeTeacherProfile());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 17)(8, "div", 18);
    \u0275\u0275template(9, TeachersPageComponent_ng_container_2_div_4_img_9_Template, 1, 1, "img", 19)(10, TeachersPageComponent_ng_container_2_div_4_span_10_Template, 2, 2, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 22)(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19, "Employee Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 25);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 23)(23, "span", 24);
    \u0275\u0275text(24, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 25);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 23)(28, "span", 24);
    \u0275\u0275text(29, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 25);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 23)(33, "span", 24);
    \u0275\u0275text(34, "Qualification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 25);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 23)(38, "span", 24);
    \u0275\u0275text(39, "Base Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 25);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 23)(44, "span", 24);
    \u0275\u0275text(45, "Assigned Classes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 25);
    \u0275\u0275template(47, TeachersPageComponent_ng_container_2_div_4_ng_container_47_Template, 2, 1, "ng-container", 26)(48, TeachersPageComponent_ng_container_2_div_4_ng_template_48_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 27)(51, "span", 24);
    \u0275\u0275text(52, "Specialization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 28);
    \u0275\u0275template(54, TeachersPageComponent_ng_container_2_div_4_ng_container_54_Template, 2, 1, "ng-container", 26)(55, TeachersPageComponent_ng_container_2_div_4_ng_template_55_Template, 2, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(57, TeachersPageComponent_ng_container_2_div_4_div_57_Template, 22, 10, "div", 133)(58, TeachersPageComponent_ng_container_2_div_4_div_58_Template, 11, 5, "div", 133)(59, TeachersPageComponent_ng_container_2_div_4_div_59_Template, 11, 5, "div", 133);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noClasses_r54 = \u0275\u0275reference(49);
    const noSpecView_r55 = \u0275\u0275reference(56);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("has-photo", ctx_r4.vm.teacherPhotoSrc(ctx_r4.vm.viewingTeacher));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.teacherPhotoSrc(ctx_r4.vm.viewingTeacher));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.vm.teacherPhotoSrc(ctx_r4.vm.viewingTeacher));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.vm.teacherName(ctx_r4.vm.viewingTeacher));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r4.vm.viewingTeacher.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.vm.viewingTeacher.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.vm.viewingTeacher.employeeCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.vm.viewingTeacher.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.vm.viewingTeacher.email || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.vm.viewingTeacher.qualification || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 19, ctx_r4.vm.viewingTeacher.baseSalary, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r4.vm.getTeacherClasses(ctx_r4.vm.viewingTeacher._id).length)("ngIfElse", noClasses_r54);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher.subjects == null ? null : ctx_r4.vm.viewingTeacher.subjects.length)("ngIfElse", noSpecView_r55);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin || ctx_r4.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin || ctx_r4.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin || ctx_r4.vm.isTeacher);
  }
}
function TeachersPageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TeachersPageComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 7)(2, TeachersPageComponent_ng_container_2_section_2_Template, 24, 9, "section", 10)(3, TeachersPageComponent_ng_container_2_div_3_Template, 71, 16, "div", 11)(4, TeachersPageComponent_ng_container_2_div_4_Template, 60, 22, "div", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isTeacher);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.isAdmin && ctx_r4.vm.showTeacherForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.vm.viewingTeacher);
  }
}
var TeachersPageComponent = class _TeachersPageComponent {
  vm;
  static \u0275fac = function TeachersPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeachersPageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeachersPageComponent, selectors: [["app-teachers-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 2, consts: [["noCtClass", ""], ["noSubjects", ""], ["noSpec", ""], ["noClasses", ""], ["noSpecView", ""], [1, "workspace"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "page-spinner-wrap"], ["label", "Loading teachers...", 3, "show"], ["class", "data-card span-12", 4, "ngIf"], ["class", "admission-overlay", 3, "click", 4, "ngIf"], ["class", "my-profile-overlay", 3, "click", 4, "ngIf"], ["class", "panel span-12", 4, "ngIf"], [1, "panel", "span-12"], [1, "section-head"], [1, "eyebrow"], [1, "my-profile-avatar"], [1, "avatar", "large", "teacher-avatar", 2, "background", "linear-gradient(135deg, #a855f7, #7c3aed)", "color", "#fff"], ["alt", "Teacher photo", 3, "src", 4, "ngIf"], [1, "my-profile-name"], [1, "status-badge", 3, "ngClass"], [1, "my-profile-grid"], [1, "my-profile-field"], [1, "my-profile-label"], [1, "my-profile-value"], [4, "ngIf", "ngIfElse"], [1, "my-profile-field", "span-2-field"], [1, "my-profile-value", "chip-value"], [1, "teacher-docs-section"], ["class", "my-profile-value", 4, "ngIf"], ["class", "my-profile-value muted", 4, "ngIf"], [1, "doc-upload-label"], ["type", "file", "accept", "image/*", 3, "change"], [1, "mandatory"], ["class", "reject-reason", 4, "ngIf"], ["type", "file", "accept", "image/*,application/pdf", 3, "change"], [1, "exp-edu-head"], ["type", "button", 1, "ghost", "small", "exp-add-toggle", 3, "click"], ["class", "exp-edu-list", 4, "ngIf"], ["class", "muted", "style", "margin-bottom: 8px;", 4, "ngIf"], ["class", "exp-edu-form-grid", 4, "ngIf"], ["alt", "Teacher photo", 3, "src"], ["class", "class-chip", 4, "ngFor", "ngForOf"], [1, "class-chip"], [1, "muted"], ["type", "button", 1, "ghost", "small", "doc-view-btn", 3, "click"], [1, "my-profile-value", "muted"], [1, "status-badge", "small", 3, "ngClass"], [1, "reject-reason"], [1, "exp-edu-list"], ["class", "exp-edu-item", 4, "ngFor", "ngForOf"], [1, "exp-edu-item"], [1, "exp-edu-main"], ["class", "muted doc-attached", 4, "ngIf"], [1, "exp-edu-dates"], ["type", "button", 1, "ghost", "small", "danger-text", 3, "click"], [1, "muted", "doc-attached"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "muted", 2, "margin-bottom", "8px"], [1, "exp-edu-form-grid"], ["placeholder", "Institute / School name", 3, "ngModelChange", "ngModel"], ["placeholder", "Designation / Role", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel", "min"], [1, "doc-upload-label", "compact"], ["type", "button", 1, "ghost", "small", 3, "click", "disabled"], ["placeholder", "Institute / University", 3, "ngModelChange", "ngModel"], ["placeholder", "Degree (B.Ed, M.Sc...)", 3, "ngModelChange", "ngModel"], ["placeholder", "Field of study", 3, "ngModelChange", "ngModel"], [1, "data-card", "span-12"], ["type", "button", 1, "primary-btn", "new-admission-btn", 3, "click"], ["aria-hidden", "true", 1, "btn-plus"], ["searchPlaceholder", "Search teacher, employee code, phone, email", 3, "searchChange", "refresh", "exportCsv", "exportPdf", "searchValue", "loading"], ["listing-filters", "", 1, "listing-filters"], [1, "filter-select", 3, "change", "value"], ["value", ""], ["value", "active"], ["value", "inactive"], [1, "listing-table-panel"], ["class", "table-wrap sticky-header", 4, "ngIf"], [3, "columns", "rows", 4, "ngIf"], ["listKey", "teachers", 3, "vm", "items"], [1, "table-wrap", "sticky-header"], [1, "sortable", 3, "click"], [4, "ngFor", "ngForOf"], [1, "table-actions"], ["type", "view", 3, "clicked"], ["type", "edit", 3, "clicked"], ["type", "delete", 3, "clicked"], ["colspan", "6"], ["title", "No teachers found", "message", "Click \u201CCreate teacher\u201D to add your first staff member."], [3, "columns", "rows"], [1, "admission-overlay", 3, "click"], [1, "admission-modal", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "admission-modal-header"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [1, "admission-modal-body"], [1, "form-section"], [1, "form-grid"], ["class", "field-hint span-2", 4, "ngIf"], [1, "required"], [1, "label-text"], ["formControlName", "firstName"], ["formControlName", "middleName"], ["formControlName", "lastName"], ["label", "First name", 3, "control"], ["formControlName", "phone", "maxlength", "10", "pattern", "\\d{10}", "inputmode", "numeric"], ["label", "Phone", 3, "control"], ["formControlName", "email"], ["formControlName", "aadhaarNumber", "maxlength", "12", "pattern", "\\d{12}", "inputmode", "numeric"], ["label", "Aadhaar number", 3, "control"], ["formControlName", "qualification"], ["type", "number", "formControlName", "baseSalary", "min", "0"], [1, "subject-picker"], [1, "subject-picker-row"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["class", "subject-chips", 4, "ngIf"], ["class", "field-hint", 4, "ngIf"], [1, "admission-modal-footer"], ["type", "button", 1, "ghost", 3, "click"], ["type", "submit", 1, "primary-btn", 3, "disabled"], ["formControlName", "employeeCode", "readonly", ""], [1, "field-hint", "span-2"], [3, "value", "disabled"], [1, "subject-chips"], ["type", "button", "aria-label", "Remove subject", 1, "chip-remove", 3, "click"], [1, "field-hint"], [1, "my-profile-overlay", 3, "click"], [1, "my-profile-modal", 3, "click"], [1, "my-profile-header"], ["class", "teacher-docs-section", 4, "ngIf"], ["class", "doc-upload-label", 4, "ngIf"], ["class", "verify-actions", 4, "ngIf"], [1, "verify-actions"], ["type", "button", 1, "ghost", "small", "success-btn", 3, "click"], ["placeholder", "Reason for rejection", 1, "reject-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "danger-btn", "small", 3, "click"]], template: function TeachersPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 5);
      \u0275\u0275template(1, TeachersPageComponent_div_1_Template, 2, 1, "div", 6)(2, TeachersPageComponent_ng_container_2_Template, 5, 4, "ng-container", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.loading && !ctx.vm.teachers.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.loading || ctx.vm.teachers.length);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, CurrencyPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, PatternValidator, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, ListingToolbarComponent, PaginationBarComponent, SpinnerComponent, FieldErrorComponent, EmptyStateComponent, TableSkeletonComponent, ActionBtnComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeachersPageComponent, { className: "TeachersPageComponent", filePath: "src\\app\\pages\\teachers-page\\teachers-page.component.ts", lineNumber: 19 });
})();
export {
  TeachersPageComponent
};
//# sourceMappingURL=chunk-TQN3WFNK.js.map
