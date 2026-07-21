import {
  PaginationBarComponent
} from "./chunk-NHO3MKXE.js";
import "./chunk-XUTYR2A2.js";
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
  TitleCasePipe,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
  ɵɵtextInterpolate3
} from "./chunk-KJIDRE24.js";

// src/app/pages/student-profile-page/student-profile-page.component.ts
function StudentProfilePageComponent_div_1_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_r3 = ctx.$implicit;
    \u0275\u0275property("value", room_r3._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", room_r3.name, "-", room_r3.section, "");
  }
}
function StudentProfilePageComponent_div_1_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const student_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", student_r4._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", student_r4.admissionNumber, " \u2014 ", ctx_r1.vm.studentName(student_r4), "");
  }
}
function StudentProfilePageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Student profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Select a student to view full report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 11)(8, "select", 12);
    \u0275\u0275listener("change", function StudentProfilePageComponent_div_1_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.filters.profileClass = $event.target.value);
    });
    \u0275\u0275elementStart(9, "option", 13);
    \u0275\u0275text(10, "All classes");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, StudentProfilePageComponent_div_1_option_11_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 15)(13, "input", 16);
    \u0275\u0275listener("input", function StudentProfilePageComponent_div_1_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.filters.profileSearch = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "select", 12);
    \u0275\u0275listener("change", function StudentProfilePageComponent_div_1_Template_select_change_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.loadStudentProfile($event.target.value));
    });
    \u0275\u0275elementStart(15, "option", 13);
    \u0275\u0275text(16, "Choose student");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, StudentProfilePageComponent_div_1_option_17_Template, 2, 3, "option", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.vm.filters.profileClass);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.classes);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.vm.filters.profileSearch);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.profileStudentId);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.vm.profileStudentOptions);
  }
}
function StudentProfilePageComponent_div_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Your profile will load automatically.");
    \u0275\u0275elementEnd();
  }
}
function StudentProfilePageComponent_div_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Select a student from the dropdown above.");
    \u0275\u0275elementEnd();
  }
}
function StudentProfilePageComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "strong");
    \u0275\u0275text(2, "No student profile loaded");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StudentProfilePageComponent_div_2_span_3_Template, 2, 0, "span", 7)(4, StudentProfilePageComponent_div_2_span_4_Template, 2, 0, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.vm.isStudent || ctx_r1.vm.isParent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.isAdmin || ctx_r1.vm.isTeacher);
  }
}
function StudentProfilePageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "app-spinner", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("show", true);
  }
}
function StudentProfilePageComponent_ng_container_4_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 65);
    \u0275\u0275listener("error", function StudentProfilePageComponent_ng_container_4_img_4_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.vm.onProfilePhotoError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.vm.profilePhotoSrc, \u0275\u0275sanitizeUrl);
  }
}
function StudentProfilePageComponent_ng_container_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r7.student.firstName.charAt(0), "", (p_r7.student.lastName == null ? null : p_r7.student.lastName.charAt(0)) || "", "");
  }
}
function StudentProfilePageComponent_ng_container_4_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Admitted: ", \u0275\u0275pipeBind2(2, 1, p_r7.academic.admissionDate, "mediumDate"), "");
  }
}
function StudentProfilePageComponent_ng_container_4_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Updated: ", \u0275\u0275pipeBind2(2, 1, p_r7.academic.lastUpdated, "mediumDate"), "");
  }
}
function StudentProfilePageComponent_ng_container_4_article_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 32)(1, "span");
    \u0275\u0275text(2, "Profile completion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Mandatory fields & documents");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", p_r7.profileCompletion, "%");
  }
}
function StudentProfilePageComponent_ng_container_4_section_62_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2691 Verification pending (", ctx_r1.vm.profilePendingDocuments.length, ") ");
  }
}
function StudentProfilePageComponent_ng_container_4_section_62_div_27_tr_13_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function StudentProfilePageComponent_ng_container_4_section_62_div_27_tr_13_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const doc_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.vm.viewProfileDocument(doc_r9._id));
    });
    \u0275\u0275text(1, "View");
    \u0275\u0275elementEnd();
  }
}
function StudentProfilePageComponent_ng_container_4_section_62_div_27_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 71);
    \u0275\u0275template(10, StudentProfilePageComponent_ng_container_4_section_62_div_27_tr_13_button_10_Template, 2, 0, "button", 72);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(doc_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", doc_r9.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(doc_r9.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", doc_r9.verificationStatus === "approved" ? "active" : doc_r9.verificationStatus === "rejected" ? "rejected" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.docVerificationLabel(doc_r9.verificationStatus));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r9.status === "uploaded" && doc_r9._id && (ctx_r1.vm.isAdmin || ctx_r1.vm.isTeacher));
  }
}
function StudentProfilePageComponent_ng_container_4_section_62_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Document");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, StudentProfilePageComponent_ng_container_4_section_62_div_27_tr_13_Template, 11, 6, "tr", 62);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", p_r7.documents.items);
  }
}
function StudentProfilePageComponent_ng_container_4_section_62_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74);
    \u0275\u0275text(1, "No documents uploaded yet.");
    \u0275\u0275elementEnd();
  }
}
function StudentProfilePageComponent_ng_container_4_section_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 66)(1, "div", 9)(2, "div")(3, "p", 10);
    \u0275\u0275text(4, "Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Uploaded documents");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, StudentProfilePageComponent_ng_container_4_section_62_span_7_Template, 2, 1, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 40)(9, "div")(10, "span");
    \u0275\u0275text(11, "Mandatory status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong")(13, "span", 68);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div")(16, "span");
    \u0275\u0275text(17, "Photo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong")(19, "span", 68);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div")(22, "span");
    \u0275\u0275text(23, "Birth certificate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong")(25, "span", 68);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(27, StudentProfilePageComponent_ng_container_4_section_62_div_27_Template, 14, 1, "div", 69)(28, StudentProfilePageComponent_ng_container_4_section_62_ng_template_28_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noDocs_r10 = \u0275\u0275reference(29);
    const p_r7 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.vm.profileHasPendingDocuments);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", p_r7.documents.mandatoryStatus.overall);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.documents.mandatoryStatus.overall);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", p_r7.documents.mandatoryStatus.photo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.documents.mandatoryStatus.photo);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngClass", p_r7.documents.mandatoryStatus.birthCertificate);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.documents.mandatoryStatus.birthCertificate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.documents.items.length)("ngIfElse", noDocs_r10);
  }
}
function StudentProfilePageComponent_ng_container_4_div_70_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1, "Primary");
    \u0275\u0275elementEnd();
  }
}
function StudentProfilePageComponent_ng_container_4_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StudentProfilePageComponent_ng_container_4_div_70_span_5_Template, 2, 0, "span", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r11.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", g_r11.relation, " \xB7 ", g_r11.phone, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", g_r11.isPrimary);
  }
}
function StudentProfilePageComponent_ng_container_4_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Vehicle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r7.transport.busNumber);
  }
}
function StudentProfilePageComponent_ng_container_4_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Driver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", p_r7.transport.driverName, " (", p_r7.transport.driverMobile, ")");
  }
}
function StudentProfilePageComponent_ng_container_4_div_112_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 80)(1, "div", 81)(2, "span", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 85);
    \u0275\u0275element(11, "div", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 87)(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "small");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exam_r12 = ctx.$implicit;
    \u0275\u0275classProp("pass", exam_r12.percentage >= 40)("fail", exam_r12.percentage < 40);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(exam_r12.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r12.grade || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exam_r12.chapter);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", exam_r12.percentage, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", exam_r12.score, "/", exam_r12.maxScore, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", exam_r12.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 14, exam_r12.submittedAt, "mediumDate"));
  }
}
function StudentProfilePageComponent_ng_container_4_div_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, StudentProfilePageComponent_ng_container_4_div_112_article_1_Template, 20, 17, "article", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.vm.paged("profileExams", ctx_r1.vm.sortedProfileExams));
  }
}
function StudentProfilePageComponent_ng_container_4_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 88);
  }
}
function StudentProfilePageComponent_ng_container_4_div_116_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92);
    \u0275\u0275element(4, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sub_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sub_r13.subject);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", sub_r13.average, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", sub_r13.average, "%");
  }
}
function StudentProfilePageComponent_ng_container_4_div_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, StudentProfilePageComponent_ng_container_4_div_116_div_1_Template, 7, 4, "div", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", p_r7.academics.subjectBreakdown);
  }
}
function StudentProfilePageComponent_ng_container_4_span_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 94);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r14 = ctx.$implicit;
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 3, day_r14.date));
    \u0275\u0275attribute("data-status", day_r14.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r14.status === "present" ? "P" : day_r14.status === "absent" ? "A" : day_r14.status === "leave" ? "L" : day_r14.status === "holiday" ? "H" : day_r14.status === "late" ? "L" : "H");
  }
}
function StudentProfilePageComponent_ng_container_4_div_153_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, d_r15, "dd MMM yyyy"));
  }
}
function StudentProfilePageComponent_ng_container_4_div_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "p", 96);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 97);
    \u0275\u0275template(4, StudentProfilePageComponent_ng_container_4_div_153_span_4_Template, 3, 4, "span", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Absent on (", ctx_r1.vm.profileRecentAbsentDates.length, ")");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.vm.profileRecentAbsentDates);
  }
}
function StudentProfilePageComponent_ng_container_4_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 100);
    \u0275\u0275text(1, "No absences in the last 30 days.");
    \u0275\u0275elementEnd();
  }
}
function StudentProfilePageComponent_ng_container_4_div_194_small_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const receipt_r16 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(2, 1, receipt_r16.paidAt, "dd MMM yyyy"), ")");
  }
}
function StudentProfilePageComponent_ng_container_4_div_194_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2, "Last receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275template(6, StudentProfilePageComponent_ng_container_4_div_194_small_6_Template, 3, 4, "small", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const receipt_r16 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", receipt_r16.receiptNumber, " \u2014 ", \u0275\u0275pipeBind2(5, 3, receipt_r16.amount, "INR"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", receipt_r16.paidAt);
  }
}
function StudentProfilePageComponent_ng_container_4_tr_228_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 28);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inv_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r17.invoiceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, inv_r17.dueDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 8, inv_r17.totalAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 11, inv_r17.balanceAmount, "INR"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", inv_r17.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r17.status);
  }
}
function StudentProfilePageComponent_ng_container_4_app_empty_state_229_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 101);
  }
}
function StudentProfilePageComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 21)(2, "div", 22)(3, "div", 23);
    \u0275\u0275template(4, StudentProfilePageComponent_ng_container_4_img_4_Template, 1, 1, "img", 24)(5, StudentProfilePageComponent_ng_container_4_span_5_Template, 2, 2, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "p", 10);
    \u0275\u0275text(8, "Student profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 25)(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 26);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, StudentProfilePageComponent_ng_container_4_span_18_Template, 3, 4, "span", 27)(19, StudentProfilePageComponent_ng_container_4_span_19_Template, 3, 4, "span", 27);
    \u0275\u0275elementStart(20, "span", 28);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "div", 29)(23, "article", 30)(24, "span");
    \u0275\u0275text(25, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "article", 31)(31, "span");
    \u0275\u0275text(32, "Avg exam score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "small");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "article", 32)(38, "span");
    \u0275\u0275text(39, "Class rank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "small");
    \u0275\u0275text(43, "Among classmates");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "article", 33)(45, "span");
    \u0275\u0275text(46, "Fee status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "strong");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "small");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "currency");
    \u0275\u0275pipe(53, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "article", 34)(55, "span");
    \u0275\u0275text(56, "Behavior");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "strong");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "small");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(61, StudentProfilePageComponent_ng_container_4_article_61_Template, 7, 1, "article", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, StudentProfilePageComponent_ng_container_4_section_62_Template, 30, 9, "section", 36);
    \u0275\u0275elementStart(63, "section", 37)(64, "div", 9)(65, "div")(66, "p", 10);
    \u0275\u0275text(67, "Guardian");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "h3");
    \u0275\u0275text(69, "Parent information");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(70, StudentProfilePageComponent_ng_container_4_div_70_Template, 6, 4, "div", 38);
    \u0275\u0275elementStart(71, "div", 39)(72, "div")(73, "p", 10);
    \u0275\u0275text(74, "Transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "h3");
    \u0275\u0275text(76, "Bus service");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 40)(78, "div")(79, "span");
    \u0275\u0275text(80, "Bus route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "strong");
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div")(84, "span");
    \u0275\u0275text(85, "Bus stop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "strong");
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div")(89, "span");
    \u0275\u0275text(90, "Monthly bus fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "strong");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div")(95, "span");
    \u0275\u0275text(96, "Service status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "strong")(98, "span", 28);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(100, StudentProfilePageComponent_ng_container_4_div_100_Template, 5, 1, "div", 7)(101, StudentProfilePageComponent_ng_container_4_div_101_Template, 5, 2, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "section", 41)(103, "div", 9)(104, "div")(105, "p", 10);
    \u0275\u0275text(106, "\u{1F4CA} Exam results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "h3");
    \u0275\u0275text(108, "Recent examination scores");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 11)(110, "div", 15)(111, "input", 42);
    \u0275\u0275listener("input", function StudentProfilePageComponent_ng_container_4_Template_input_input_111_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("profileExams", "profileExamSearch", $event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(112, StudentProfilePageComponent_ng_container_4_div_112_Template, 2, 1, "div", 43)(113, StudentProfilePageComponent_ng_container_4_ng_template_113_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(115, "app-pagination-bar", 44);
    \u0275\u0275template(116, StudentProfilePageComponent_ng_container_4_div_116_Template, 2, 1, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "section", 37)(118, "div", 9)(119, "div")(120, "p", 10);
    \u0275\u0275text(121, "Attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "h3");
    \u0275\u0275text(123, "Attendance summary");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(124, "div", 40)(125, "div")(126, "span");
    \u0275\u0275text(127, "Attendance %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "strong");
    \u0275\u0275text(129);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "div")(131, "span");
    \u0275\u0275text(132, "Present days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "strong");
    \u0275\u0275text(134);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(135, "div")(136, "span");
    \u0275\u0275text(137, "Absent days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "strong");
    \u0275\u0275text(139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div")(141, "span");
    \u0275\u0275text(142, "Leave days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "strong");
    \u0275\u0275text(144);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(145, "div", 46)(146, "div")(147, "p", 10);
    \u0275\u0275text(148, "Recent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "h3");
    \u0275\u0275text(150, "Last 30 days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(151, "div", 47);
    \u0275\u0275template(152, StudentProfilePageComponent_ng_container_4_span_152_Template, 3, 5, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(153, StudentProfilePageComponent_ng_container_4_div_153_Template, 5, 2, "div", 49)(154, StudentProfilePageComponent_ng_container_4_ng_template_154_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "section", 50)(157, "div", 9)(158, "div")(159, "p", 10);
    \u0275\u0275text(160, "Fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "h3");
    \u0275\u0275text(162, "Fee summary");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(163, "div", 51)(164, "div", 52)(165, "span", 53);
    \u0275\u0275text(166, "Monthly fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "span", 54);
    \u0275\u0275text(168);
    \u0275\u0275pipe(169, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(170, "div", 52)(171, "span", 53);
    \u0275\u0275text(172, "Bus fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(173, "span", 54);
    \u0275\u0275text(174);
    \u0275\u0275pipe(175, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(176, "div", 52)(177, "span", 53);
    \u0275\u0275text(178, "Paid amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "span", 55);
    \u0275\u0275text(180);
    \u0275\u0275pipe(181, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(182, "div", 52)(183, "span", 53);
    \u0275\u0275text(184, "Pending amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "span", 54);
    \u0275\u0275text(186);
    \u0275\u0275pipe(187, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "div", 52)(189, "span", 53);
    \u0275\u0275text(190, "Payment status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "span", 54)(192, "span", 28);
    \u0275\u0275text(193);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(194, StudentProfilePageComponent_ng_container_4_div_194_Template, 7, 6, "div", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "div", 39)(196, "div")(197, "p", 10);
    \u0275\u0275text(198, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "h3");
    \u0275\u0275text(200, "Payment history");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(201, "div", 11)(202, "div", 15)(203, "input", 57);
    \u0275\u0275listener("input", function StudentProfilePageComponent_ng_container_4_Template_input_input_203_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("profileFees", "profileFeeSearch", $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(204, "select", 12);
    \u0275\u0275listener("change", function StudentProfilePageComponent_ng_container_4_Template_select_change_204_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.vm.updateListFilter("profileFees", "profileFeeStatus", $event.target.value));
    });
    \u0275\u0275elementStart(205, "option", 13);
    \u0275\u0275text(206, "All status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "option", 58);
    \u0275\u0275text(208, "Paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "option", 59);
    \u0275\u0275text(210, "Partial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "option", 60);
    \u0275\u0275text(212, "Unpaid");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(213, "div", 61)(214, "table")(215, "thead")(216, "tr")(217, "th");
    \u0275\u0275text(218, "Invoice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "th");
    \u0275\u0275text(220, "Due date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "th");
    \u0275\u0275text(222, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(223, "th");
    \u0275\u0275text(224, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "th");
    \u0275\u0275text(226, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(227, "tbody");
    \u0275\u0275template(228, StudentProfilePageComponent_ng_container_4_tr_228_Template, 15, 14, "tr", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(229, StudentProfilePageComponent_ng_container_4_app_empty_state_229_Template, 1, 0, "app-empty-state", 63);
    \u0275\u0275element(230, "app-pagination-bar", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_50_0;
    let tmp_51_0;
    const p_r7 = ctx.ngIf;
    const noExams_r18 = \u0275\u0275reference(114);
    const noAbsent_r19 = \u0275\u0275reference(155);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-photo", ctx_r1.vm.profilePhotoSrc && !ctx_r1.vm.profilePhotoError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.profilePhotoSrc && !ctx_r1.vm.profilePhotoError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.profilePhotoSrc || ctx_r1.vm.profilePhotoError);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.vm.studentName(p_r7.student));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("ID: ", p_r7.student.admissionNumber, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Class: ", p_r7.academic.className, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Roll: ", p_r7.academic.rollNumber, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.academic.admissionDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.academic.lastUpdated);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", p_r7.student.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.vm.studentStatusLabel(p_r7.student.status));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", p_r7.attendance.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", p_r7.attendance.present, " present \xB7 ", p_r7.attendance.absent, " absent \xB7 ", p_r7.attendance.leave || 0, " leave");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", p_r7.academics.averageScore, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r7.academics.examCount, " exams taken");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r7.academic.classRank || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 62, p_r7.fees.status));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Paid: ", \u0275\u0275pipeBind2(52, 64, p_r7.fees.totalPaid, "INR"), " \xB7 Pending: ", \u0275\u0275pipeBind2(53, 67, (tmp_21_0 = p_r7.fees.pendingAmount) !== null && tmp_21_0 !== void 0 ? tmp_21_0 : p_r7.fees.totalDue, "INR"), "");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(p_r7.behavior.score);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r7.behavior.remarks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.profileCompletion != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.documents);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", p_r7.student.guardians);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(p_r7.transport.route);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r7.transport.busStop || p_r7.transport.pickupPoint);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 70, p_r7.transport.monthlyFee || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", p_r7.transport.status || "inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.transport.status || "inactive");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.transport.busNumber && p_r7.transport.busNumber !== "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.transport.driverName && p_r7.transport.driverName !== "\u2014");
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r1.vm.filters.profileExamSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.sortedProfileExams.length)("ngIfElse", noExams_r18);
    \u0275\u0275advance(3);
    \u0275\u0275property("vm", ctx_r1.vm)("items", ctx_r1.vm.sortedProfileExams);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.academics.subjectBreakdown.length);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1("", p_r7.attendance.percentage, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r7.attendance.present);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r7.attendance.absent);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r7.attendance.leave || 0);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", p_r7.attendance.recent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.vm.profileRecentAbsentDates.length)("ngIfElse", noAbsent_r19);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(169, 73, p_r7.fees.monthlyFee || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(175, 76, p_r7.fees.busFee || 0, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(181, 79, p_r7.fees.totalPaid, "INR"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("danger-text", ((tmp_50_0 = p_r7.fees.pendingAmount) !== null && tmp_50_0 !== void 0 ? tmp_50_0 : p_r7.fees.totalDue) > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(187, 82, (tmp_51_0 = p_r7.fees.pendingAmount) !== null && tmp_51_0 !== void 0 ? tmp_51_0 : p_r7.fees.totalDue, "INR"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", p_r7.fees.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r7.fees.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r7.fees.lastReceipt);
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.vm.filters.profileFeeSearch);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.vm.filters.profileFeeStatus);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", ctx_r1.vm.paged("profileFees", ctx_r1.vm.sortedProfileFees));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.vm.sortedProfileFees.length);
    \u0275\u0275advance();
    \u0275\u0275property("vm", ctx_r1.vm)("items", ctx_r1.vm.sortedProfileFees);
  }
}
var StudentProfilePageComponent = class _StudentProfilePageComponent {
  vm;
  static \u0275fac = function StudentProfilePageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentProfilePageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentProfilePageComponent, selectors: [["app-student-profile-page"]], inputs: { vm: "vm" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 4, consts: [["noExams", ""], ["noAbsent", ""], ["noDocs", ""], [1, "workspace", "profile-view"], ["class", "profile-selector panel span-12", 4, "ngIf"], ["class", "empty-state premium-empty span-12", 4, "ngIf"], ["class", "page-spinner-wrap", 4, "ngIf"], [4, "ngIf"], [1, "profile-selector", "panel", "span-12"], [1, "section-head"], [1, "eyebrow"], [1, "toolbar"], [1, "filter-select", 3, "change", "value"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "search-box"], ["placeholder", "Search student", 3, "input", "value"], [3, "value"], [1, "empty-state", "premium-empty", "span-12"], [1, "page-spinner-wrap"], ["label", "Loading student profile...", 3, "show"], [1, "profile-hero", "span-12"], [1, "profile-hero-left"], [1, "profile-avatar"], ["alt", "Student photo", 3, "src", "error", 4, "ngIf"], [1, "profile-meta-row"], [1, "meta-chip"], ["class", "meta-chip", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "metrics-grid", "span-12"], [1, "metric-card", "accent-blue"], [1, "metric-card", "accent-teal"], [1, "metric-card", "accent-purple"], [1, "metric-card", "accent-orange"], [1, "metric-card", "accent-green"], ["class", "metric-card accent-purple", 4, "ngIf"], ["class", "panel span-7", 4, "ngIf"], [1, "panel", "span-5"], ["class", "guardian-card", 4, "ngFor", "ngForOf"], [1, "section-head", 2, "margin-top", "1.5rem"], [1, "info-list"], [1, "data-card", "span-7"], ["placeholder", "Search exam or subject", 3, "input", "value"], ["class", "score-card-grid", 4, "ngIf", "ngIfElse"], ["listKey", "profileExams", 3, "vm", "items"], ["class", "subject-bars", "style", "margin-top: 1rem;", 4, "ngIf"], [1, "section-head", 2, "margin-top", "1.25rem"], [1, "attendance-calendar"], ["class", "att-day", 3, "title", 4, "ngFor", "ngForOf"], ["class", "absent-dates", 4, "ngIf", "ngIfElse"], [1, "data-card", "span-12"], [1, "inv-details", "fee-breakdown"], [1, "inv-detail"], [1, "inv-label"], [1, "inv-value"], [1, "inv-value", "success-text"], ["class", "inv-detail", 4, "ngIf"], ["placeholder", "Search invoice", 3, "input", "value"], ["value", "paid"], ["value", "partial"], ["value", "unpaid"], [1, "table-wrap", "sticky-header"], [4, "ngFor", "ngForOf"], ["title", "No fee records", "message", "No fee invoices match the current filters.", 4, "ngIf"], ["listKey", "profileFees", 3, "vm", "items"], ["alt", "Student photo", 3, "error", "src"], [1, "panel", "span-7"], ["class", "status-badge warning", "title", "Some documents are awaiting staff verification", 4, "ngIf"], [1, "status-badge", "doc-status", 3, "ngClass"], ["class", "table-wrap sticky-header", 4, "ngIf", "ngIfElse"], ["title", "Some documents are awaiting staff verification", 1, "status-badge", "warning"], [1, "action-cell"], ["type", "button", "class", "ghost small", 3, "click", 4, "ngIf"], ["type", "button", 1, "ghost", "small", 3, "click"], [1, "premium-empty"], [1, "guardian-card"], ["class", "status-badge active", 4, "ngIf"], [1, "status-badge", "active"], [1, "score-card-grid"], ["class", "score-card", 3, "pass", "fail", 4, "ngFor", "ngForOf"], [1, "score-card"], [1, "score-card-top"], [1, "subject-tag"], [1, "grade-badge"], [1, "chapter-label"], [1, "score-bar-wrap"], [1, "score-bar"], [1, "score-footer"], ["title", "No exam results", "message", "No exam results yet. Attempt a published unit test."], [1, "subject-bars", 2, "margin-top", "1rem"], ["class", "subject-bar-row", 4, "ngFor", "ngForOf"], [1, "subject-bar-row"], [1, "bar-track"], [1, "bar-fill"], [1, "att-day", 3, "title"], [1, "absent-dates"], [1, "eyebrow", 2, "margin-top", "1rem"], [1, "absent-date-chips"], ["class", "absent-date-chip", 4, "ngFor", "ngForOf"], [1, "absent-date-chip"], [1, "hint-text", 2, "margin-top", "1rem"], ["title", "No fee records", "message", "No fee invoices match the current filters."]], template: function StudentProfilePageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 3);
      \u0275\u0275template(1, StudentProfilePageComponent_div_1_Template, 18, 5, "div", 4)(2, StudentProfilePageComponent_div_2_Template, 5, 2, "div", 5)(3, StudentProfilePageComponent_div_3_Template, 2, 1, "div", 6)(4, StudentProfilePageComponent_ng_container_4_Template, 231, 85, "ng-container", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.isAdmin || ctx.vm.isTeacher);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.vm.studentProfile && !ctx.vm.profileLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.profileLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.vm.studentProfile);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, TitleCasePipe, CurrencyPipe, DatePipe, PaginationBarComponent, SpinnerComponent, EmptyStateComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentProfilePageComponent, { className: "StudentProfilePageComponent", filePath: "src\\app\\pages\\student-profile-page\\student-profile-page.component.ts", lineNumber: 14 });
})();
export {
  StudentProfilePageComponent
};
//# sourceMappingURL=chunk-WK7DHQJN.js.map
