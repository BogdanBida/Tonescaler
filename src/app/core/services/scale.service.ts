import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScaleModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  public readonly tonic$ = new BehaviorSubject<number>(0);

  public readonly scale$ = new BehaviorSubject<ScaleModel | null>(null);
}
