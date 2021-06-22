/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppTunerService } from './app-tuner.service';

describe('Service: AppTuner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppTunerService]
    });
  });

  it('should ...', inject([AppTunerService], (service: AppTunerService) => {
    expect(service).toBeTruthy();
  }));
});
