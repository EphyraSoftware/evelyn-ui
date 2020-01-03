import {TestBed} from '@angular/core/testing';

import {AppNotificationService} from './app-notification.service';

describe('AppNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppNotificationService = TestBed.get(AppNotificationService);
    expect(service).toBeTruthy();
  });
});
