import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { STRINGED_TUNINGS } from './../../../core/constants/stringed-tunings';
import { NECK_LENGTHS } from './../constants/stringed';

@Injectable({
  providedIn: 'root',
})
export class StringedService {
  public selectedTune$ = new BehaviorSubject<number[]>(
    STRINGED_TUNINGS[0].value
  );

  public neckLength$ = new BehaviorSubject<number>(NECK_LENGTHS[2]);
}
