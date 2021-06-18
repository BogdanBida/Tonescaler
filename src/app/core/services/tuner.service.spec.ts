/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TunerService } from './tuner.service';

describe('Service: Tuner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TunerService]
    });
  });

  it('should ...', inject([TunerService], (service: TunerService) => {
    expect(service).toBeTruthy();
  }));
});
