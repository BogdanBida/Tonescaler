import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScaleModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  public readonly tonic$ = new BehaviorSubject<number>(0);

  public readonly scale$ = new BehaviorSubject<ScaleModel | null>(null);

  public whoInScale(key: number): number {
    const scale = this.scale$.value;

    if (scale === null) {
      return 0;
    }

    const id = (key + 12 - this.tonic$.value) % 12;

    return scale.mask[id];
  }
}
