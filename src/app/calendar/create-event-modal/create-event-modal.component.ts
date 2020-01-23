import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-event-modal',
  templateUrl: './create-event-modal.component.html',
  styleUrls: ['./create-event-modal.component.scss']
})
export class CreateEventModalComponent implements OnInit {

  @Output() eventCreated = new EventEmitter<never>();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onEventCreated() {
    this.eventCreated.emit();
  }
}
