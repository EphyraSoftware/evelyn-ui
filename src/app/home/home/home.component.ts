import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private value$: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  send() {
    this.value$ = this.httpClient.get(`${environment.serviceUrl}/test`);
  }
}
