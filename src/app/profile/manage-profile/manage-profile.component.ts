import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {AppNotificationService} from '../../app-notifications/app-notification.service';
import {catchError, timeout} from 'rxjs/operators';
import {throwError, TimeoutError} from 'rxjs';

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

  constructor(private httpClient: HttpClient,
              private appNotificationService: AppNotificationService) {
    this.profileForm = new FormGroup({
      nickname: new FormControl('')
    });
  }

  ngOnInit() {
    this.httpClient.get(`${environment.serviceUrl}/profiles`)
      .pipe(
        timeout(500),
        catchError(err => {
          if (err instanceof TimeoutError) {
            return throwError(Error('Timeout while fetching profile'));
          }

          return throwError(err);
        })
      )
      .subscribe((profile: Profile) => {
        this.profile = profile;
      }, err => {
        this.appNotificationService.send({
          title: 'Failed to get profile',
          content: err.statusText || err.message
        });
      });
  }

  saveProfile() {
    this.profile.nickname = this.profileForm.getRawValue().nickname;
    this.httpClient.put(`${environment.serviceUrl}/profiles`, this.profile).subscribe(result => {
      console.log(result);
    });
  }
}
