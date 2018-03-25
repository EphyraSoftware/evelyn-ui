import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

class ConfirmModel {
  email: string;
  password: string;
  confirmKey: string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  private token: string;
  model: ConfirmModel;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.model = new ConfirmModel();
  }

  ngOnInit() {
    this.route.queryParams
      .filter(param => param.token)
      .subscribe(params => {
        this.token = params.token;
      });
  }

  hasValidToken(): boolean {
    return !!this.token;
  }

  signIn() {
    const payload = this.model;
    payload.confirmKey = this.token;
    this.http.post(environment.serverUrl + '/users/confirm', payload).subscribe(data => {
      console.log(data);
      // TODO this needs to be a token from the server.
      localStorage.setItem('token', 'loggedon');
      this.router.navigate(['/dashboard']);
    });
  }
}
