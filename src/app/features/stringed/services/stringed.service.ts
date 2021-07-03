import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_NECK_LENGTH, DEFAULT_TUNING } from './../constants/stringed';

@Injectable({
  providedIn: 'root',
})
export class StringedService {
  public selectedTune$ = new BehaviorSubject<number[]>(DEFAULT_TUNING);

  public neckLength$ = new BehaviorSubject<number>(DEFAULT_NECK_LENGTH);

  public resetTuning(): void {
    this.selectedTune$.next(DEFAULT_TUNING);
  }
}
