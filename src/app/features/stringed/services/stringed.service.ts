import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InstrumentName } from 'soundfont-player';
import {
  DEFAULT_INSTRUMENT,
  DEFAULT_NECK_LENGTH,
  DEFAULT_TUNING,
} from './../constants/stringed';

@Injectable({
  providedIn: 'root',
})
export class StringedService {
  public selectedTuning$ = new BehaviorSubject<number[]>(DEFAULT_TUNING);

  public selectedInstrument$ = new BehaviorSubject<InstrumentName>(
    DEFAULT_INSTRUMENT
  );

  public neckLength$ = new BehaviorSubject<number>(DEFAULT_NECK_LENGTH);

  public resetTuning(): void {
    this.selectedTuning$.next(DEFAULT_TUNING);
  }
}
