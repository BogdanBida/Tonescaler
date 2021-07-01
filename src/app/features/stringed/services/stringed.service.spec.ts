/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StringedService } from './stringed.service';

describe('Service: Stringed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringedService]
    });
  });

  it('should ...', inject([StringedService], (service: StringedService) => {
    expect(service).toBeTruthy();
  }));
});
