import {Component, Input, OnInit} from '@angular/core';
import {CalendarEvent} from '../calendar-management/calendar-management.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss']
})
export class EventManagementComponent implements OnInit {

  @Input()
  manageEvent: CalendarEvent;

  constructor() { }

  ngOnInit() {
  }

}
