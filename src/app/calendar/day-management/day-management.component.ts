import {Component, Input, OnInit} from '@angular/core';
import {CellValue} from '../calendar-management/calendar-management.component';

@Component({
  selector: 'app-day-management',
  templateUrl: './day-management.component.html',
  styleUrls: ['./day-management.component.scss']
})
export class DayManagementComponent implements OnInit {

  @Input()
  manageDay: CellValue;

  constructor() { }

  ngOnInit() {
  }

}
