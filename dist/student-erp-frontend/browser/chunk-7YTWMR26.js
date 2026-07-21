import {
  LIST_PAGE_SIZE_OPTIONS
} from "./chunk-XUTYR2A2.js";
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
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-KJIDRE24.js";

// src/app/shared/listing-toolbar.component.ts
var _c0 = [[["", "listing-filters", ""]]];
var _c1 = ["[listing-filters]"];
function ListingToolbarComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
}
function ListingToolbarComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ListingToolbarComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportCsv.emit());
    });
    \u0275\u0275text(1, "Export Excel");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function ListingToolbarComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ListingToolbarComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.exportPdf.emit());
    });
    \u0275\u0275text(1, "Export PDF");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
var ListingToolbarComponent = class _ListingToolbarComponent {
  searchPlaceholder = "Search...";
  searchValue = "";
  showExport = true;
  loading = false;
  searchChange = new EventEmitter();
  refresh = new EventEmitter();
  exportCsv = new EventEmitter();
  exportPdf = new EventEmitter();
  pageSizeOptions = LIST_PAGE_SIZE_OPTIONS;
  static \u0275fac = function ListingToolbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListingToolbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListingToolbarComponent, selectors: [["app-listing-toolbar"]], inputs: { searchPlaceholder: "searchPlaceholder", searchValue: "searchValue", showExport: "showExport", loading: "loading" }, outputs: { searchChange: "searchChange", refresh: "refresh", exportCsv: "exportCsv", exportPdf: "exportPdf" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 11, vars: 8, consts: [[1, "listing-toolbar"], [1, "search-box", "listing-search"], [3, "input", "placeholder", "value", "disabled"], [1, "listing-filter-slot"], [1, "listing-toolbar-actions"], ["type", "button", "title", "Refresh listing", 1, "ghost", "small", 3, "click", "disabled"], ["class", "btn-spinner", 4, "ngIf"], ["type", "button", "class", "ghost small", 3, "disabled", "click", 4, "ngIf"], [1, "btn-spinner"], ["type", "button", 1, "ghost", "small", 3, "click", "disabled"]], template: function ListingToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "input", 2);
      \u0275\u0275listener("input", function ListingToolbarComponent_Template_input_input_2_listener($event) {
        return ctx.searchChange.emit($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275projection(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275listener("click", function ListingToolbarComponent_Template_button_click_6_listener() {
        return ctx.refresh.emit();
      });
      \u0275\u0275template(7, ListingToolbarComponent_span_7_Template, 1, 0, "span", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, ListingToolbarComponent_button_9_Template, 2, 1, "button", 7)(10, ListingToolbarComponent_button_10_Template, 2, 1, "button", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", ctx.searchPlaceholder)("value", ctx.searchValue)("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Refreshing..." : "Refresh", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showExport);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showExport);
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListingToolbarComponent, { className: "ListingToolbarComponent", filePath: "src\\app\\shared\\listing-toolbar.component.ts", lineNumber: 33 });
})();

export {
  ListingToolbarComponent
};
//# sourceMappingURL=chunk-7YTWMR26.js.map
