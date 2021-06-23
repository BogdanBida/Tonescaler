/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TunerChartService } from './tuner-chart.service';

describe('Service: TunerChart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TunerChartService]
    });
  });

  it('should ...', inject([TunerChartService], (service: TunerChartService) => {
    expect(service).toBeTruthy();
  }));
});
