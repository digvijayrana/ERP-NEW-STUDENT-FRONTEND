import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KJIDRE24.js";

// src/app/shared/spinner.component.ts
function SpinnerComponent_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275template(2, SpinnerComponent_div_0_span_2_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("spinner-inline", ctx_r0.mode === "inline");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.label);
  }
}
var SpinnerComponent = class _SpinnerComponent {
  show = false;
  label = "Loading...";
  mode = "overlay";
  static \u0275fac = function SpinnerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SpinnerComponent, selectors: [["app-spinner"]], inputs: { show: "show", label: "label", mode: "mode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "spinner-overlay", 3, "spinner-inline", 4, "ngIf"], [1, "spinner-overlay"], [1, "spinner-ring"], ["class", "spinner-text", 4, "ngIf"], [1, "spinner-text"]], template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SpinnerComponent_div_0_Template, 3, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.show);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SpinnerComponent, { className: "SpinnerComponent", filePath: "src\\app\\shared\\spinner.component.ts", lineNumber: 15 });
})();

export {
  SpinnerComponent
};
//# sourceMappingURL=chunk-PA65UFXL.js.map
