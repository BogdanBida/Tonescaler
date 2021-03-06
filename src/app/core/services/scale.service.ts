import { Injectable } from '@angular/core';
import { range } from 'lodash-es';
import { BehaviorSubject } from 'rxjs';
import { STAGES } from '../constants';
import { ScaleModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  public readonly tonic$ = new BehaviorSubject<number>(0);

  public readonly scale$ = new BehaviorSubject<ScaleModel | null>(null);

  public whoInScale(note: number): number {
    const scale = this.scale$.value;

    if (scale === null) {
      return 0;
    }

    const id = (note + 12 - this.tonic$.value) % 12;

    return scale.mask[id];
  }

  public getStage(note: number): string {
    const stageNumber = this.whoInScale(note);

    if (!stageNumber) {
      return '';
    }

    return STAGES[stageNumber - 1];
  }

  public getNotesInScaleByRange(from: number, to: number): number[] {
    console.log(range(from, to).map((num) => this.whoInScale(num)));

    return range(from, to).filter((num) => this.whoInScale(num) !== 0);
  }
}
