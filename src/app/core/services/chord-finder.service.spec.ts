/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChordFinderService } from './chord-finder.service';

describe('Service: ChordFinder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChordFinderService]
    });
  });

  it('should ...', inject([ChordFinderService], (service: ChordFinderService) => {
    expect(service).toBeTruthy();
  }));
});
