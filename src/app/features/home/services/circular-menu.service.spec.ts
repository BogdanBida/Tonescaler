/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CircularMenuService } from './circular-menu.service';

describe('Service: CircularMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircularMenuService]
    });
  });

  it('should ...', inject([CircularMenuService], (service: CircularMenuService) => {
    expect(service).toBeTruthy();
  }));
});
