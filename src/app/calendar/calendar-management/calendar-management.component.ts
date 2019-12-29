import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-calendar-management',
  templateUrl: './calendar-management.component.html',
  styleUrls: ['./calendar-management.component.scss']
})
export class CalendarManagementComponent implements OnInit {
  private events$;

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
    this.events$ = this.calendarService.getEvents();
  }

}
