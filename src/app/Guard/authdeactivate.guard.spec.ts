import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { authdeactivateGuard } from './authdeactivate.guard';

describe('authdeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() =>
      authdeactivateGuard(...guardParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
