import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

class RegisterModel {
  email: string;
  handle: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel;

  constructor(private http: HttpClient) {
    this.model = new RegisterModel();
  }

  ngOnInit() {
  }

  register() {
    this.http.post(environment.serverUrl + '/users/register', this.model)
    .subscribe(data => {
      console.log(data);
    });
  }
}
