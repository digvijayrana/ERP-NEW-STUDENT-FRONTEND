import {
  LIST_PAGE_SIZE_OPTIONS
} from "./chunk-XUTYR2A2.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-KJIDRE24.js";

// src/app/shared/pagination-bar.component.ts
function PaginationBarComponent_footer_0_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r3 = ctx.$implicit;
    \u0275\u0275property("value", size_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r3);
  }
}
function PaginationBarComponent_footer_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275listener("click", function PaginationBarComponent_footer_0_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5, "Previous");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function PaginationBarComponent_footer_0_div_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275elementStart(9, "span", 13);
    \u0275\u0275text(10, "Next");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 12);
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage <= 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", ctx_r1.currentPage, " / ", ctx_r1.totalPages, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage >= ctx_r1.totalPages);
  }
}
function PaginationBarComponent_footer_0_div_19_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275listener("click", function PaginationBarComponent_footer_0_div_19_ng_container_3_Template_button_click_1_listener() {
      const p_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.changePage(p_r7));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("active-page", p_r7 === ctx_r1.currentPage);
    \u0275\u0275attribute("aria-current", p_r7 === ctx_r1.currentPage ? "page" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7);
  }
}
function PaginationBarComponent_footer_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17);
    \u0275\u0275listener("click", function PaginationBarComponent_footer_0_div_19_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(1));
    });
    \u0275\u0275text(2, "\xAB");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PaginationBarComponent_footer_0_div_19_ng_container_3_Template, 3, 4, "ng-container", 18);
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function PaginationBarComponent_footer_0_div_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changePage(ctx_r1.totalPages));
    });
    \u0275\u0275text(5, "\xBB");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage >= ctx_r1.totalPages);
  }
}
function PaginationBarComponent_footer_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 1)(1, "span", 2);
    \u0275\u0275text(2, " Showing ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " of ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " \xB7 Page ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " of ");
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 3)(15, "label", 4)(16, "select", 5);
    \u0275\u0275listener("change", function PaginationBarComponent_footer_0_Template_select_change_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275template(17, PaginationBarComponent_footer_0_option_17_Template, 2, 2, "option", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, PaginationBarComponent_footer_0_div_18_Template, 13, 4, "div", 7)(19, PaginationBarComponent_footer_0_div_19_Template, 6, 3, "div", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.startItem, "\u2013", ctx_r1.endItem, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalItems);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.currentPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizeOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showNavigation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalPages > 1);
  }
}
var PaginationBarComponent = class _PaginationBarComponent {
  vm;
  listKey;
  items = [];
  pageSizeOptions = LIST_PAGE_SIZE_OPTIONS;
  get pageSize() {
    return this.vm.getListPageSize(this.listKey);
  }
  get currentPage() {
    return this.vm.pages[this.listKey] || 1;
  }
  get totalItems() {
    if (this.vm.isServerPaged?.(this.listKey)) {
      return this.vm.getListTotalItems?.(this.listKey) ?? 0;
    }
    return this.items.length;
  }
  get totalPages() {
    return this.vm.pageCount(this.items, this.listKey);
  }
  get showNavigation() {
    return this.totalItems > 0;
  }
  get startItem() {
    if (!this.totalItems)
      return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }
  get endItem() {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }
  get visiblePages() {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    let end = Math.min(total, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }
  changePage(page) {
    this.vm.setPage(this.listKey, page, this.items);
  }
  onPageSizeChange(event) {
    const size = Number(event.target.value);
    this.vm.setListPageSize(this.listKey, size);
  }
  static \u0275fac = function PaginationBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationBarComponent, selectors: [["app-pagination-bar"]], inputs: { vm: "vm", listKey: "listKey", items: "items" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "pagination-bar", 4, "ngIf"], [1, "pagination-bar"], [1, "pagination-meta"], [1, "pagination-controls"], [1, "page-size-select"], [3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "pagination-nav", 4, "ngIf"], ["class", "pagination-page-nums", 4, "ngIf"], [3, "value"], [1, "pagination-nav"], ["type", "button", "aria-label", "Previous page", 1, "ghost", "small", "pagination-nav-btn", 3, "click", "disabled"], ["aria-hidden", "true", 1, "pagination-nav-icon"], [1, "pagination-nav-label"], [1, "pagination-pages"], ["type", "button", "aria-label", "Next page", 1, "ghost", "small", "pagination-nav-btn", 3, "click", "disabled"], [1, "pagination-page-nums"], ["type", "button", "title", "First page", "aria-label", "First page", 1, "ghost", "small", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], ["type", "button", "title", "Last page", "aria-label", "Last page", 1, "ghost", "small", 3, "click", "disabled"], ["type", "button", 1, "ghost", "small", "page-num", 3, "click"]], template: function PaginationBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PaginationBarComponent_footer_0_Template, 20, 9, "footer", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.totalItems > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationBarComponent, { className: "PaginationBarComponent", filePath: "src\\app\\shared\\pagination-bar.component.ts", lineNumber: 108 });
})();

export {
  PaginationBarComponent
};
//# sourceMappingURL=chunk-NHO3MKXE.js.map
