import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { MenuItemModel } from '../models/menu-item-model';
import {
  CENTER,
  MENU_ITEMS,
  OFFSET_FROM_BOUNDARIES,
  PERCENTS_OF_START_OFFSET,
  RADIUS,
} from './../constants/menu';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class CircularMenuService {
  constructor(private readonly _router: Router) {
    this._router.events.pipe(untilDestroyed(this)).subscribe(() => {
      this.circularMenuIsOpened$.next(false);
    });
  }

  public circularMenuIsOpened$ = new BehaviorSubject<boolean>(false);

  public currentItem$ = new BehaviorSubject<number>(0);

  public menuItems$ = new BehaviorSubject<MenuItemModel[]>([]);

  public nextItem(): void {
    this.currentItem$.next(this.currentItem$.value + 1);
  }

  public prevItem(): void {
    this.currentItem$.next(this.currentItem$.value - 1);
  }

  public toggleCircularMenu(value?: boolean): void {
    this.circularMenuIsOpened$.next(
      value !== undefined ? value : !this.circularMenuIsOpened$.value
    );
  }

  public initMenu(): void {
    const amount = MENU_ITEMS.length;

    const menuItems = MENU_ITEMS.map((data, index) => {
      const startOffset =
        PERCENTS_OF_START_OFFSET + this.currentItem$.value / amount / 100;

      const value = startOffset * Math.PI - 2 * (1 / amount) * index * Math.PI;

      const r = RADIUS - OFFSET_FROM_BOUNDARIES;
      const x = CENTER - r * Math.cos(value);
      const y = CENTER + r * Math.sin(value);

      return Object.assign(
        {
          position: {
            x,
            y,
          },
        },
        data
      );
    });

    this.menuItems$.next(menuItems);
  }
}
