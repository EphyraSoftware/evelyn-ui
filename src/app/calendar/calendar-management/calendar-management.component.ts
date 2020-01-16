import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';
import * as moment from 'moment';

interface CellValue {
  value: string;
  empty: boolean;
}

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

    const cellValues: CellValue[][] = [];
    for (let i = 0; i < cellCount; i++) {
      if (i % 7 === 0) {
        cellValues.push([]);
      }

      if (i < firstDayOfMonth - 1) {
        cellValues[Math.floor(i / 7)].push({
          value: '',
          empty: true
        });
      } else if (i < (firstDayOfMonth - 1) + daysInMonth) {
        cellValues[Math.floor(i / 7)].push({
          value: (i - (firstDayOfMonth - 1) + 1).toString(),
          empty: true
        });
      } else {
        cellValues[Math.floor(i / 7)].push({
          value: '',
          empty: true
        });
      }
    }

    this.cellValues = cellValues;
  }
}
