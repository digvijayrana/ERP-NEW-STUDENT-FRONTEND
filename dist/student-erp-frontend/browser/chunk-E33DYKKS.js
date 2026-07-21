import {
  CommonModule,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KJIDRE24.js";

// src/app/shared/empty-state.component.ts
function EmptyStateComponent_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function EmptyStateComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function EmptyStateComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.action.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionLabel);
  }
}
var EmptyStateComponent = class _EmptyStateComponent {
  title = "";
  message = "No records to display.";
  actionLabel = "";
  action = new EventEmitter();
  static \u0275fac = function EmptyStateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmptyStateComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyStateComponent, selectors: [["app-empty-state"]], inputs: { title: "title", message: "message", actionLabel: "actionLabel" }, outputs: { action: "action" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [["role", "status", 1, "ui-empty-state"], ["aria-hidden", "true", 1, "ui-empty-icon"], ["viewBox", "0 0 64 64", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["x", "10", "y", "14", "width", "44", "height", "36", "rx", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 28h20M22 36h14M22 44h18", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "46", "cy", "22", "r", "8", "fill", "currentColor", "opacity", "0.15"], ["d", "M43 22h6M46 19v6", "stroke", "currentColor", "stroke-width", "1.75", "stroke-linecap", "round"], ["class", "ui-empty-title", 4, "ngIf"], [1, "ui-empty-message"], ["type", "button", "class", "primary-btn ui-empty-action", 3, "click", 4, "ngIf"], [1, "ui-empty-title"], ["type", "button", 1, "primary-btn", "ui-empty-action", 3, "click"]], template: function EmptyStateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "rect", 3)(4, "path", 4)(5, "circle", 5)(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, EmptyStateComponent_h4_7_Template, 2, 1, "h4", 7);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, EmptyStateComponent_button_10_Template, 2, 1, "button", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.message);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.actionLabel);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyStateComponent, { className: "EmptyStateComponent", filePath: "src\\app\\shared\\empty-state.component.ts", lineNumber: 24 });
})();

export {
  EmptyStateComponent
};
//# sourceMappingURL=chunk-E33DYKKS.js.map
