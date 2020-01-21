import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private calendarService: CalendarService) {
    this.newEventForm = this.formBuilder.group({
      summary: formBuilder.control(''),
      description: formBuilder.control('')
    });
  }

  newEventForm: FormGroup;

  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  formGroupClasses: string[] = [];
  startDateClasses: string[] = [];
  endDateClasses: string[] = [];

  private static toDate(ngbDate: NgbDateStruct) {
    return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
  }

  ngOnInit() {
  }

  createEvent(eventForm: HTMLFormElement) {
    const isValid = this.validateCreateEventForm(eventForm);
    if (!isValid) {
      return;
    }

    const model = this.newEventForm.getRawValue();
    model.startDate = CreateEventComponent.toDate(this.startDate);
    model.endDate = CreateEventComponent.toDate(this.endDate);

    this.calendarService.createEvent(model).subscribe(response => {
      console.log(response);
    });
  }

  private validateCreateEventForm(eventForm: HTMLFormElement) {
    let isValid = true;

    if (!eventForm.checkValidity()) {
      this.formGroupClasses.push('was-validated');
      isValid = false;
    }

    if (!this.startDate) {
      this.startDateClasses.push('invalid-date');
      isValid = false;
    }

    if (!this.endDate) {
      this.endDateClasses.push('invalid-date');
      isValid = false;
    }

    return isValid;
  }

  updateStartDate($event: NgbDate) {
    this.startDateClasses = [];

    this.startDate = $event;
  }

  updateEndDate($event: NgbDate) {
    this.endDateClasses = [];
    
    this.endDate = $event;
  }
}
