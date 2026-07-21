import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KJIDRE24.js";

// src/app/shared/field-error.component.ts
function FieldErrorComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
var FieldErrorComponent = class _FieldErrorComponent {
  control;
  label = "This field";
  get showError() {
    return !!this.control && this.control.invalid && (this.control.touched || this.control.dirty);
  }
  get message() {
    if (!this.control?.errors)
      return "";
    if (this.control.errors["required"])
      return `${this.label} is required`;
    if (this.control.errors["email"])
      return "Enter a valid email address";
    if (this.control.errors["pattern"])
      return `${this.label} format is invalid`;
    if (this.control.errors["min"])
      return `${this.label} must be at least ${this.control.errors["min"].min}`;
    return `${this.label} is invalid`;
  }
  static \u0275fac = function FieldErrorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FieldErrorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FieldErrorComponent, selectors: [["app-field-error"]], inputs: { control: "control", label: "label" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-error", 4, "ngIf"], [1, "field-error"]], template: function FieldErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FieldErrorComponent_span_0_Template, 2, 1, "span", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.showError);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FieldErrorComponent, { className: "FieldErrorComponent", filePath: "src\\app\\shared\\field-error.component.ts", lineNumber: 13 });
})();

export {
  FieldErrorComponent
};
//# sourceMappingURL=chunk-XC4GV5KT.js.map
