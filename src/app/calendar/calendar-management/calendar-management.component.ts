import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-management',
  templateUrl: './calendar-management.component.html',
  styleUrls: ['./calendar-management.component.scss']
})
export class CalendarManagementComponent implements OnInit {
  private events$;
  private cellValues: any[];

  constructor(private calendarService: CalendarService) {
    this.generateDays();
  }

  ngOnInit() {
    this.events$ = this.calendarService.getEvents();
  }

  generateDays() {
    const today = moment();

    console.log('day', today.day());
    const daysInMonth = today.daysInMonth();
    console.log('days in month', daysInMonth);
    const firstDayOfMonth = today.clone().date(1).day();
    console.log('first day of month', firstDayOfMonth);

    let cellCount = (firstDayOfMonth - 1) + daysInMonth;
    cellCount += 7 - cellCount % 7;

    console.log(cellCount);

    const cellValues = [];
    for (let i = 0; i < cellCount; i++) {
      if (i % 7 === 0) {
        cellValues.push([]);
      }

      if (i < firstDayOfMonth - 1) {
        cellValues[Math.floor(i / 7)].push('-');
      } else if (i < (firstDayOfMonth - 1) + daysInMonth) {
        cellValues[Math.floor(i / 7)].push(i - (firstDayOfMonth - 1) + 1);
      } else {
        cellValues[Math.floor(i / 7)].push('-');
      }
    }

    this.cellValues = cellValues;
  }
}
