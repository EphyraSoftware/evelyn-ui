import { TestBed, async, inject } from '@angular/core/testing';

import { AppAuthGuard } from './app-auth-guard.guard';

describe('AppGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppAuthGuard]
    });
  });

  it('should ...', inject([AppAuthGuard], (guard: AppAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
