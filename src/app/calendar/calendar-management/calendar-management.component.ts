import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';
import * as moment from 'moment';

export interface CellValue {
  value: number;
  empty: boolean;
  events: CalendarEvent[];
  classes: string[];
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

  manageDay: CellValue;

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

      const cell: CellValue = {
        value: 0,
        empty: true,
        events: [],
        classes: []
      };

      if (i < firstDayOfMonth - 1) {
        cellValues[Math.floor(i / 7)].push(cell);
      } else if (i < (firstDayOfMonth - 1) + daysInMonth) {
        cell.value = i - (firstDayOfMonth - 1) + 1;
        cell.empty = false;

        cellValues[Math.floor(i / 7)].push(cell);
      } else {
        cellValues[Math.floor(i / 7)].push(cell);
      }
    }

    this.cellValues = cellValues;
  }

  viewDay(cell: CellValue) {
    this.cellValues.forEach(value => value.forEach(value1 => value1.classes = []));

    cell.classes.push('badge');
    cell.classes.push('badge-primary');
    this.manageDay = cell;
  }
}
