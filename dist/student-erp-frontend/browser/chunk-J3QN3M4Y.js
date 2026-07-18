import{a as u}from"./chunk-MXUNGRSY.js";var S=[10,25,50,100],y={students:["studentSearch","studentClass","studentYear","studentSection","studentStatus","studentAdmissionFrom","studentAdmissionTo"],classes:["classSearch","classYear","classStatus"],years:["yearSearch","yearStatus"],teachers:["teacherSearch","teacherStatus"],users:["userSearch","userRole","userStatus"],invoices:["invoiceSearch","invoiceStatus","invoiceYear","invoiceClass","invoiceMonth"],feeHistory:["feeHistorySearch","feeHistoryStatus","feeHistoryClass"],payroll:["payrollSearch","payrollStatus"],busRoutes:["busRouteSearch","busRouteStatus"],busRegistrations:["busRegYear","busRegRoute","busRegClass","busRegStatus","busRegSearch"],profileExams:["profileExamSearch"],profileFees:["profileFeeSearch","profileFeeStatus"],attendance:["attendanceSearch","attendanceStatus","attendanceClass","attendanceYear"],exams:["examSearch","examStatus"],examResults:["examResultSearch","examResultGrade"],timetable:["timetableSearch"],dashboardStudents:["studentSearch","studentClass","studentYear","studentSection"],dashboardAttendance:["attendanceSearch","attendanceStatus","attendanceClass","attendanceYear"],dashboardTeachers:["teacherSearch","teacherStatus"],dashboardPayroll:["payrollSearch","payrollStatus"],dashboardTimetable:["timetableSearch"],dashboardActivities:[]},f={students:{field:"admissionNumber",dir:"asc"},classes:{field:"class",dir:"asc"},years:{field:"name",dir:"asc"},teachers:{field:"name",dir:"asc"},users:{field:"name",dir:"asc"},invoices:{field:"dueDate",dir:"desc"},feeHistory:{field:"paymentDate",dir:"desc"},payroll:{field:"period",dir:"desc"},busRoutes:{field:"routeCode",dir:"asc"},busRegistrations:{field:"studentName",dir:"asc"},attendance:{field:"date",dir:"desc"},profileExams:{field:"submittedAt",dir:"desc"},profileFees:{field:"dueDate",dir:"desc"},exams:{field:"title",dir:"asc"},examResults:{field:"percentage",dir:"desc"},timetable:{field:"dayOfWeek",dir:"asc"},dashboardStudents:{field:"admissionNumber",dir:"asc"},dashboardAttendance:{field:"date",dir:"desc"},dashboardTeachers:{field:"firstName",dir:"asc"},dashboardPayroll:{field:"period",dir:"desc"},dashboardTimetable:{field:"dayOfWeek",dir:"asc"},dashboardActivities:{field:"performedAt",dir:"desc"}};function R(e,t){for(let a of t)!e[a]&&f[a]&&(e[a]=u({},f[a]))}function x(e,t){return e==null&&t==null?0:e==null?1:t==null?-1:typeof e=="number"&&typeof t=="number"?e-t:e instanceof Date&&t instanceof Date?e.getTime()-t.getTime():String(e).localeCompare(String(t),void 0,{sensitivity:"base",numeric:!0})}function $(e,t,a,r){if(!t||!r[t])return[...e];let o=a==="desc"?-1:1;return[...e].sort((s,d)=>o*x(r[t](s),r[t](d)))}function v(e,t,a){let r=[t,...a].map(d=>d.map(n=>`"${String(n).replace(/"/g,'""')}"`).join(",")).join(`
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=e,s.click(),URL.revokeObjectURL(s.href)}function T(e,t,a){let r=getComputedStyle(document.documentElement),o=(r.getPropertyValue("--primary")||"#0d9488").trim(),s=(r.getPropertyValue("--primary-strong")||"#0f766e").trim(),d=(r.getPropertyValue("--primary-bright")||"#14b8a6").trim(),n=(r.getPropertyValue("--shell-dark-deep")||"#05191d").trim(),c=(r.getPropertyValue("--primary-soft")||"#f0fdfa").trim(),p=document.querySelector('meta[name="app-school-name"]')?.content||document.title||"School ERP",m=a.map((l,b)=>`<tr${b%2?' class="alt"':""}>${l.map(g=>`<td>${g}</td>`).join("")}</tr>`).join(""),h=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${e}</title>
    <style>
      *{box-sizing:border-box}
      body{font-family:'Segoe UI',Arial,sans-serif;color:#1e293b;margin:0;padding:0}
      .wrap{padding:28px}
      .doc-header{background:linear-gradient(135deg, ${n} 0%, ${s} 55%, ${d} 100%);
        color:#fff;padding:20px 24px;border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:space-between}
      .doc-header .brand{font-size:20px;font-weight:800;letter-spacing:.4px;text-transform:uppercase}
      .doc-header .meta{font-size:11px;color:${c};text-align:right}
      .accent{height:4px;background:${d};border-radius:0}
      .title-bar{padding:14px 24px;background:${c};border-left:4px solid ${o};
        margin:0;border-bottom:1px solid #e2e8f0}
      .title-bar h2{margin:0;font-size:15px;color:${s};text-transform:uppercase;letter-spacing:.5px}
      .title-bar p{margin:2px 0 0;font-size:11px;color:#64748b}
      table{width:100%;border-collapse:collapse;margin:0}
      thead th{background:linear-gradient(135deg, ${s}, ${d});color:#fff;
        padding:10px 12px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:.4px}
      tbody td{border-bottom:1px solid #e2e8f0;padding:9px 12px;font-size:12px}
      tbody tr.alt td{background:${c}}
      .foot{margin-top:16px;padding-top:10px;border-top:2px solid ${o};font-size:10px;color:#64748b;text-align:center}
      @media print{.wrap{padding:0}.doc-header{border-radius:0}}
    </style>
    </head><body><div class="wrap">
      <div class="doc-header">
        <span class="brand">${p}</span>
        <span class="meta">${e}<br>Exported ${new Date().toLocaleString()}</span>
      </div>
      <div class="accent"></div>
      <div class="title-bar"><h2>${e}</h2><p>${a.length} record(s)</p></div>
      <table><thead><tr>${t.map(l=>`<th>${l}</th>`).join("")}</tr></thead><tbody>${m}</tbody></table>
      <p class="foot">${p} &middot; System-generated report</p>
    </div></body></html>`,i=window.open("","_blank");i&&(i.document.write(h),i.document.close(),i.focus(),i.print())}export{S as a,y as b,R as c,$ as d,v as e,T as f};
