import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';
import * as moment from 'moment';

interface CellValue {
  value: number;
  empty: boolean;
  events: CalendarEvent[];
}

interface CalendarEvent {
  summary: string;
  description: string;
  startDate: Date;
}

@Component({
  selector: 'app-calendar-management',
  templateUrl: './calendar-management.component.html',
  styleUrls: ['./calendar-management.component.scss']
})
export class CalendarManagementComponent implements OnInit {
  private events$;
  private cellValues: CellValue[][];

  SUMMARY_MAX_LENGTH = 20;

  constructor(private calendarService: CalendarService) {
    this.generateDays();
  }

  ngOnInit() {
    const today = moment();
    const daysInMonth = today.daysInMonth();
    const firstDayOfMonth = today.clone().date(1);
    const lastDayOfMonth = today.clone().date(daysInMonth);

    console.log(this.cellValues);

    this.calendarService.getEvents().subscribe((events: CalendarEvent[]) => {
      events.filter(event => {
        return moment(event.startDate).isAfter(firstDayOfMonth) && moment(event.startDate).isBefore(lastDayOfMonth);
      }).forEach(event => {
        const startDay = moment(event.startDate).date();

        this.cellValues.forEach(cellRow => {
          cellRow.forEach(cellValue => {
            if (cellValue.value === startDay) {
              cellValue.events.push(event);
            }
          });
        });
      });
    });
  }

  generateDays() {
    const today = moment();

    const daysInMonth = today.daysInMonth();
    const firstDayOfMonth = today.clone().date(1).day();
    let cellCount = (firstDayOfMonth - 1) + daysInMonth;
    cellCount += 7 - cellCount % 7;

    const cellValues: CellValue[][] = [];
    for (let i = 0; i < cellCount; i++) {
      if (i % 7 === 0) {
        cellValues.push([]);
      }

      if (i < firstDayOfMonth - 1) {
        cellValues[Math.floor(i / 7)].push({
          value: 0,
          empty: true,
          events: []
        });
      } else if (i < (firstDayOfMonth - 1) + daysInMonth) {
        cellValues[Math.floor(i / 7)].push({
          value: i - (firstDayOfMonth - 1) + 1,
          empty: false,
          events: []
        });
      } else {
        cellValues[Math.floor(i / 7)].push({
          value: 0,
          empty: true,
          events: []
        });
      }
    }

    this.cellValues = cellValues;
  }
}
