/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WheelService } from './wheel.service';

describe('Service: Wheel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WheelService]
    });
  });

  it('should ...', inject([WheelService], (service: WheelService) => {
    expect(service).toBeTruthy();
  }));
});
