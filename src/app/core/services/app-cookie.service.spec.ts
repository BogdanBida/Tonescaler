/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { AppCookieService } from './app-cookie.service';

describe('Service: Cookie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCookieService],
    });
  });

  it('should ...', inject([AppCookieService], (service: AppCookieService) => {
    expect(service).toBeTruthy();
  }));
});
