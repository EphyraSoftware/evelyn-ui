import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignInGuardService } from '../../auth/sign-in-guard.service';

class SIgnInModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {
  model: SIgnInModel;

  constructor(private http: HttpClient, private router: Router) {
    this.model = new SIgnInModel();
  }

  ngOnInit() {
  }

  signIn() {
    this.http.post(environment.serverUrl + '/users/signIn', this.model)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/dashboard']);
    });
  }
}
