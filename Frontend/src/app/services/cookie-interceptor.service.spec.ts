import { TestBed } from '@angular/core/testing';

import { CookieInterceptorService } from './cookie-interceptor.service';

describe('CookieInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieInterceptorService = TestBed.get(CookieInterceptorService);
    expect(service).toBeTruthy();
  });
});
