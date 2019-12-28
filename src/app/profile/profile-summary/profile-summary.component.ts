import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';

interface Profile {
  newRegistration: string;
  nickname: string;
}

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss']
})
export class ProfileSummaryComponent implements OnInit {
  profile: Profile;
  message: string;

  constructor(private profileService: ProfileService) {
    this.profile = {
      nickname: '',
      newRegistration: ''
    };
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
      if (profile.newRegistration) {
        this.message = 'Welcome to Evelyn!';
      } else {
        this.message = 'Welcome back, Evelyn missed you!';
      }
    });
  }
}
