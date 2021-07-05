import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SECTORS } from './../constants/camelot-wheel';
import { WheelSector } from './../models/wheel-sector';

const OUTTER_RADIUS = 50;

const INNER_RADIUS = 35;

const CENTER = 50;

const OFFSET_FROM_BOUNDARIES = 10;

@Injectable()
export class WheelService {
  public currentItem$ = new BehaviorSubject<number>(0);

  public sectors$ = new BehaviorSubject<WheelSector[]>([]);

  public nextItem(): void {
    this.currentItem$.next(this.currentItem$.value + 1);
  }

  public prevItem(): void {
    this.currentItem$.next(this.currentItem$.value - 1);
  }

  public initWheel(): void {
    const amount = SECTORS.length;

    const sectors = SECTORS.map((sector: number[], sectorIndex) => {
      const res = sector.map((item, isMinor) => {
        const startOffset = this.currentItem$.value / amount / 100;

        const value =
          startOffset * Math.PI - 2 * (1 / amount) * sectorIndex * Math.PI;

        const r =
          (isMinor ? INNER_RADIUS : OUTTER_RADIUS) - OFFSET_FROM_BOUNDARIES;
        const x = CENTER - r * Math.cos(value);
        const y = CENTER + r * Math.sin(value);

        return {
          note: item,
          position: {
            x,
            y,
          },
        };
      });

      return { major: res[0], minor: res[1] };
    });

    this.sectors$.next(sectors);
  }
}
