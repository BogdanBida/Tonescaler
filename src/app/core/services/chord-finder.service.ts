import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { noteToString } from '../utils';

interface ChordData {
  name: string;
  intervals: number[];
}

@Injectable({
  providedIn: 'root',
})
export class ChordFinderService {
  constructor(private readonly _http: HttpClient) {
    this._http.get('assets/json/chords.json').subscribe((data) => {
      this.chordsData$.next(data as ChordData[]);
    });
  }

  public readonly chordsData$ = new BehaviorSubject<ChordData[]>([]);

  public result$ = new BehaviorSubject<string | null>(null);

  public lastSelectedNotes$ = new BehaviorSubject<number[]>([]);

  public get firstNoteOfLastSelected(): number | null {
    return this.lastSelectedNotes$.value[0] ?? null;
  }

  public recognize(notes: number[]): void {
    if (!this._isOrder(notes)) {
      notes = notes.sort((a, b) => a - b);
    }

    this.lastSelectedNotes$.next(notes);

    if (notes.length <= 1) {
      this.result$.next(null);

      return;
    }

    const intervals = this._getIntervals(notes);

    const chordsData = this.chordsData$.value;

    if (!chordsData) {
      return;
    }

    let result = '';

    for (const chord of chordsData) {
      if (intervals.length > chord.intervals.length) {
        continue;
      }

      if (chord.intervals.every((val, index) => val === intervals[index])) {
        result =
          noteToString(notes[0], false) +
          chord.name.replace('major', '').replace('minor', 'm');

        break;
      }
    }

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
