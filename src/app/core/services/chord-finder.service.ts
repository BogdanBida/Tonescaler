import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { noteToString } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ChordFinderService {
  public result$ = new BehaviorSubject<string | null>(null);

  public recognize(notes: number[]): void {
    if (!notes.length) {
      this.result$.next(null);
    }

    if (!this._isOrder(notes)) {
      notes = notes.sort((a, b) => a - b);
    }

    console.log(notes);

    this.result$.next(notes.map(noteToString).join(' '));
  }

  private _isOrder(array: number[]): boolean {
    return array
      .slice(1, array.length)
      .every((value, index) => value > array[index]);
  }
}
