import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

interface Profile {
  newRegistration: string;
  nickname: string;
}

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {
  private profileForm: FormGroup;
  private profile: Profile;

  constructor(private httpClient: HttpClient) {
    this.profileForm = new FormGroup({
      nickname: new FormControl('')
    });
  }

  ngOnInit() {
    this.httpClient.get(`${environment.serviceUrl}/profiles`).subscribe((profile: Profile) => {
      this.profile = profile;
    });
  }

  saveProfile() {
    this.profile.nickname = this.profileForm.getRawValue().nickname;
    this.httpClient.put(`${environment.serviceUrl}/profiles`, this.profile).subscribe(result => {
      console.log(result);
    });
  }
}
