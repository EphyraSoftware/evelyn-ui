import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar-import-modal',
  templateUrl: './calendar-import-modal.component.html',
  styleUrls: ['./calendar-import-modal.component.scss']
})
export class CalendarImportModalComponent implements OnInit {

  @Output() importCompleted = new EventEmitter<never>();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onImportCompleted() {
    this.importCompleted.emit();
  }
}
