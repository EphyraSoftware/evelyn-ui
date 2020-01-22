import {Component, OnInit} from '@angular/core';
import {CreateEventComponent} from '../create-event/create-event.component';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {
  createEventComponent = CreateEventComponent;

  constructor() { }

  ngOnInit() {
  }

}
