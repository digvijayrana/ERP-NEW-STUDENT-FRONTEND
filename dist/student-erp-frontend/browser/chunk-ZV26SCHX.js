import {
  CommonModule,
  EventEmitter,
  NgClass,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KJIDRE24.js";

// src/app/shared/action-btn.component.ts
var ACTION_META = {
  view: { label: "View", icon: "\u{1F441}", variant: "ghost" },
  edit: { label: "Edit", icon: "\u270E", variant: "ghost" },
  profile: { label: "Profile", icon: "\u{1F464}", variant: "ghost" },
  docs: { label: "Docs", icon: "\u{1F4C4}", variant: "ghost" },
  deactivate: { label: "Deactivate", icon: "\u2298", variant: "danger-btn" },
  delete: { label: "Delete", icon: "\u{1F5D1}", variant: "danger-btn" },
  activate: { label: "Activate", icon: "\u2713", variant: "ghost success-btn" },
  close: { label: "Close", icon: "\u{1F512}", variant: "ghost" },
  unlock: { label: "Unlock", icon: "\u{1F513}", variant: "ghost" }
};
var ActionBtnComponent = class _ActionBtnComponent {
  type;
  label = "";
  disabled = false;
  clicked = new EventEmitter();
  get meta() {
    return ACTION_META[this.type];
  }
  get displayLabel() {
    return this.label || this.meta.label;
  }
  static \u0275fac = function ActionBtnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionBtnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionBtnComponent, selectors: [["app-action-btn"]], inputs: { type: "type", label: "label", disabled: "disabled" }, outputs: { clicked: "clicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 6, consts: [["type", "button", 1, "action-btn", "small", 3, "click", "ngClass", "disabled", "title"], ["aria-hidden", "true", 1, "action-btn-icon"], [1, "action-btn-label"]], template: function ActionBtnComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ActionBtnComponent_Template_button_click_0_listener($event) {
        return ctx.clicked.emit($event);
      });
      \u0275\u0275elementStart(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.meta.variant)("disabled", ctx.disabled)("title", ctx.displayLabel);
      \u0275\u0275attribute("aria-label", ctx.displayLabel);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.meta.icon);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.displayLabel);
    }
  }, dependencies: [CommonModule, NgClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionBtnComponent, { className: "ActionBtnComponent", filePath: "src\\app\\shared\\action-btn.component.ts", lineNumber: 36 });
})();

export {
  ActionBtnComponent
};
//# sourceMappingURL=chunk-ZV26SCHX.js.map
