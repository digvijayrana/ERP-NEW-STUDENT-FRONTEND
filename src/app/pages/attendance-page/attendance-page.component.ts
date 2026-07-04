import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationBarComponent } from '../../shared/pagination-bar.component';
import { SpinnerComponent } from '../../shared/spinner.component';
import { AttendanceRecord } from '../../core/models';

interface CalendarDay {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSunday: boolean;
  holiday: boolean;
  holidayName: string;
  status: string | null;
  records: AttendanceRecord[];
}

@Component({
  selector: 'app-attendance-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginationBarComponent, SpinnerComponent],
  templateUrl: './attendance-page.component.html'
})
export class AttendancePageComponent implements DoCheck {
  @Input({ required: true }) vm!: any;
  today = new Date();
  calendarMonth = new Date();
  calendarDays: CalendarDay[] = [];
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  viewMode: 'calendar' | 'table' = 'calendar';
  private lastAttendanceLength = -1;
  private lastHolidayLength = -1;

  ngDoCheck(): void {
    const aLen = this.vm?.attendance?.length ?? 0;
    const hLen = this.vm?.holidays?.length ?? 0;
    if (aLen !== this.lastAttendanceLength || hLen !== this.lastHolidayLength) {
      this.lastAttendanceLength = aLen;
      this.lastHolidayLength = hLen;
      this.buildCalendar();
    }
  }

  get isTodaySundayOrHoliday(): boolean {
    return this.today.getDay() === 0 || this.vm?.isHoliday(this.today.toISOString())?.is;
  }

  get todayBlockReason(): string {
    if (this.today.getDay() === 0) return 'Sunday — No attendance';
    const h = this.vm?.isHoliday(this.today.toISOString());
    return h?.is ? `Holiday: ${h.name}` : '';
  }

  prevMonth(): void {
    this.calendarMonth = new Date(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth() - 1, 1);
    this.buildCalendar();
  }

  nextMonth(): void {
    this.calendarMonth = new Date(this.calendarMonth.getFullYear(), this.calendarMonth.getMonth() + 1, 1);
    this.buildCalendar();
  }

  goToToday(): void {
    this.calendarMonth = new Date();
    this.buildCalendar();
  }

  buildCalendar(): void {
    const year = this.calendarMonth.getFullYear();
    const month = this.calendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = firstDay.getDay();
    const days: CalendarDay[] = [];
    const now = new Date();
    const holidays: Array<{ date: string; name: string }> = this.vm?.holidays || [];

    const holidayMap = new Map<string, string>();
    for (const h of holidays) {
      const d = new Date(h.date);
      const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      holidayMap.set(key, h.name);
    }

    const makeDay = (date: Date, isCurrentMonth: boolean): CalendarDay => {
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      const isToday = date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth() && date.getDate() === now.getDate();
      return {
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isSunday: date.getDay() === 0,
        holiday: holidayMap.has(key),
        holidayName: holidayMap.get(key) || '',
        status: null,
        records: []
      };
    };

    for (let i = startOffset - 1; i >= 0; i--) {
      days.push(makeDay(new Date(year, month, -i), false));
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(makeDay(new Date(year, month, d), true));
    }

    const remaining = 7 - (days.length % 7);
    if (remaining < 7) {
      for (let i = 1; i <= remaining; i++) {
        days.push(makeDay(new Date(year, month + 1, i), false));
      }
    }

    const attendance: AttendanceRecord[] = this.vm?.filteredAttendance || [];
    for (const record of attendance) {
      const recordDate = new Date(record.date);
      const day = days.find((cell) =>
        cell.date.getFullYear() === recordDate.getFullYear() &&
        cell.date.getMonth() === recordDate.getMonth() &&
        cell.date.getDate() === recordDate.getDate()
      );
      if (day) {
        day.records.push(record);
        if (!day.status) day.status = record.status;
        else if (day.status !== record.status) day.status = 'mixed';
      }
    }

    this.calendarDays = days;
  }

  get monthLabel(): string {
    return this.calendarMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  get calendarStats(): { present: number; absent: number; late: number; total: number } {
    const attendance: AttendanceRecord[] = this.vm?.filteredAttendance || [];
    const year = this.calendarMonth.getFullYear();
    const month = this.calendarMonth.getMonth();
    const monthRecords = attendance.filter((r) => {
      const d = new Date(r.date);
      return d.getFullYear() === year && d.getMonth() === month;
    });
    return {
      present: monthRecords.filter((r) => r.status === 'present').length,
      absent: monthRecords.filter((r) => r.status === 'absent').length,
      late: monthRecords.filter((r) => r.status === 'late' || r.status === 'half_day').length,
      total: monthRecords.length
    };
  }
}
