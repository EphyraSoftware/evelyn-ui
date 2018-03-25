import { TestBed, inject } from '@angular/core/testing';

import { SignInGuardService } from './sign-in-guard.service';

describe('SignInGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignInGuardService]
    });
  });

  it('should be created', inject([SignInGuardService], (service: SignInGuardService) => {
    expect(service).toBeTruthy();
  }));
});
