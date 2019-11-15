import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

interface Profile {
  newRegistration: string;
  nickname: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.serviceUrl}/profiles`).subscribe((profile: Profile) => {
      if (profile.newRegistration) {
        this.message = 'Welcome to Evelyn!';
      } else {
        this.message = 'Welcome back, Evelyn missed you!';
      }
    });
  }

  logout() {
    const opts = `redirect_uri=${environment.selfUrl}`;
    window.location.href = `${environment.keycloakConfig.url}realms/${environment.keycloakConfig.realm}/protocol/openid-connect/logout?${opts}`;
  }
}
