import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-calendar-import',
  templateUrl: './calendar-import.component.html',
  styleUrls: ['./calendar-import.component.scss']
})
export class CalendarImportComponent implements OnInit {
  calendarImportForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.calendarImportForm = this.formBuilder.group({
      calendarFile: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.calendarImportForm.get('calendarFile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('calendarFile', this.calendarImportForm.get('calendarFile').value);

    this.httpClient.post(`${environment.serviceUrl}/calendars/import`, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
