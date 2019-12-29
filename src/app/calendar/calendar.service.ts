import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get(`${environment.serviceUrl}/calendars/events`);
  }
}
