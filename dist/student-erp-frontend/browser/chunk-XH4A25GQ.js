import {
  CommonModule,
  NgForOf,
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
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-KJIDRE24.js";

// src/app/shared/table-skeleton.component.ts
function TableSkeletonComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function TableSkeletonComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, TableSkeletonComponent_div_1_div_1_Template, 1, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-template-columns", ctx_r0.gridColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.columnArray);
  }
}
function TableSkeletonComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function TableSkeletonComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, TableSkeletonComponent_div_2_div_1_Template, 1, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("grid-template-columns", ctx_r0.gridColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.columnArray);
  }
}
var TableSkeletonComponent = class _TableSkeletonComponent {
  rows = 5;
  columns = 5;
  showHeader = true;
  embedded = false;
  get rowArray() {
    return Array.from({ length: Math.max(1, this.rows) }, (_, i) => i);
  }
  get columnArray() {
    return Array.from({ length: Math.max(1, this.columns) }, (_, i) => i);
  }
  get gridColumns() {
    return `repeat(${Math.max(1, this.columns)}, minmax(0, 1fr))`;
  }
  static \u0275fac = function TableSkeletonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableSkeletonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TableSkeletonComponent, selectors: [["app-table-skeleton"]], inputs: { rows: "rows", columns: "columns", showHeader: "showHeader", embedded: "embedded" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 4, consts: [["role", "status", "aria-label", "Loading data", 1, "table-skeleton"], ["class", "skeleton-row skeleton-header", 3, "grid-template-columns", 4, "ngIf"], ["class", "skeleton-row", 3, "grid-template-columns", 4, "ngFor", "ngForOf"], [1, "skeleton-row", "skeleton-header"], ["class", "skeleton-cell", 4, "ngFor", "ngForOf"], [1, "skeleton-cell"], [1, "skeleton-row"]], template: function TableSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, TableSkeletonComponent_div_1_Template, 2, 3, "div", 1)(2, TableSkeletonComponent_div_2_Template, 2, 3, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("table-skeleton-embedded", ctx.embedded);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showHeader);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rowArray);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TableSkeletonComponent, { className: "TableSkeletonComponent", filePath: "src\\app\\shared\\table-skeleton.component.ts", lineNumber: 19 });
})();

export {
  TableSkeletonComponent
};
//# sourceMappingURL=chunk-XH4A25GQ.js.map
