import {Component, OnInit} from '@angular/core';
import {CreateEventModalComponent} from '../create-event-modal/create-event-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarImportModalComponent} from '../calendar-import-modal/calendar-import-modal.component';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(CreateEventModalComponent, { size: 'lg' });
    modalRef.componentInstance.eventCreated.subscribe(_ => {
      modalRef.close();
    });
  }

  openUpload() {
    const modalRef = this.modalService.open(CalendarImportModalComponent, { size: 'lg' });
    modalRef.componentInstance.importCompleted.subscribe(_ => {
      modalRef.close();
    });
  }
}
