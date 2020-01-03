import {Injectable} from '@angular/core';

export interface AppNotification {
  title: string;
  content: string;
  autoHide?: boolean;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppNotificationService {
  notifications: AppNotification[];

  constructor() {
    this.notifications = [];
  }

  send(appNotification: AppNotification) {
    this.notifications.push(appNotification);
  }

  clearNotification(appNotification: AppNotification) {
    this.notifications = this.notifications.filter(n => n !== appNotification);
  }
}
