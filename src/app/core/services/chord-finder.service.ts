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

  // todo: try to analyze chord inversions using recursion
  public recognize(notes: number[]): void {
    if (!this._isInOrder(notes)) {
      notes = notes.sort((a, b) => a - b);
    }

    this.lastSelectedNotes$.next(notes);

    if (notes.length <= 1) {
      return this.result$.next(null);
    }

    const intervals = this._getIntervals(notes);
    const result = this._chordMatching(intervals);

    if (result) {
      this.result$.next(
        noteToString(notes[0], false) +
          result.name.replace('major', '').replace('minor', 'm')
      );
    } else {
      this.result$.next('');
    }
  }

  private _getIntervals(array: number[]): number[] {
    const intervals: number[] = [];

    for (let i = 0; i < array.length - 1; i++) {
      intervals.push(array[i + 1] - array[i] - 1);
    }

    return intervals;
  }

  private _isInOrder(array: number[]): boolean {
    return array
      .slice(1, array.length)
      .every((value, index) => value > array[index]);
  }

  private _chordMatching(intervals: number[]): ChordData | null {
    for (const chord of this.chordsData$.value) {
      if (intervals.length > chord.intervals.length) {
        continue;
      }

      if (chord.intervals.every((val, index) => val === intervals[index])) {
        return chord;
      }
    }

    return null;
  }
}
