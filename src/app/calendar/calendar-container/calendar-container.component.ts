import {Component, OnInit} from '@angular/core';
import {CreateEventModalComponent} from '../create-event-modal/create-event-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
}
