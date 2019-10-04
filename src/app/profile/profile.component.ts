import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

interface Profile {
  newRegistration: string;
  nickname: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private profile: Profile;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`${environment.profileServiceUrl}/profiles`).subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

  saveProfile() {
    this.httpClient.put(`${environment.profileServiceUrl}/profiles`, this.profile).subscribe(result => {
      console.log(result);
    });
  }
}
