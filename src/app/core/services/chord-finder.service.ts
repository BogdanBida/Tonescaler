import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { noteToString } from '../utils';

interface ChordsData {
  [key: string]: number[];
}

@Injectable({
  providedIn: 'root',
})
export class ChordFinderService {
  constructor(private readonly _http: HttpClient) {
    this._http.get('assets/json/chords.json').subscribe((data) => {
      this.chordsData$.next(data as ChordsData);
    });
  }

  public readonly chordsData$ = new BehaviorSubject<ChordsData | null>(null);

  public result$ = new BehaviorSubject<string | null>(null);

  public recognize(notes: number[]): void {
    if (notes.length <= 1) {
      this.result$.next(null);

      return;
    }

    if (!this._isOrder(notes)) {
      notes = notes.sort((a, b) => a - b);
    }

    const intervals = this._getIntervals(notes);

    const chordsData = this.chordsData$.value;

    if (!chordsData) {
      return;
    }

    let result = '';

    Object.keys(chordsData).forEach((key) => {
      const chord = chordsData[key];

      if (intervals.length > chord.length) {
        return;
      }

      if (chord.every((val, index) => val === intervals[index])) {
        result = noteToString(notes[0], false) + key.replace('_', '');

        return;
      }
    });

    this.result$.next(result);
  }

  private _getIntervals(array: number[]): number[] {
    const intervals: number[] = [];

    for (let i = 0; i < array.length - 1; i++) {
      intervals.push(array[i + 1] - array[i] - 1);
    }

    return intervals;
  }

  private _isOrder(array: number[]): boolean {
    return array
      .slice(1, array.length)
      .every((value, index) => value > array[index]);
  }
}
