import {Component, OnInit} from '@angular/core';
import {AppNotification, AppNotificationService} from '../app-notification.service';

@Component({
  selector: 'app-notification-host',
  templateUrl: './notification-host.component.html',
  styleUrls: ['./notification-host.component.scss']
})
export class NotificationHostComponent implements OnInit {

  constructor(private appNotificationService: AppNotificationService) { }

  ngOnInit() {
  }

  clearNotification(appNotification: AppNotification) {
    this.appNotificationService.clearNotification(appNotification);
  }
}
