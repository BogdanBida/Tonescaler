import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

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

  public toggleCircularMenu(value?: boolean): void {
    this.circularMenuIsOpened$.next(
      value !== undefined ? value : !this.circularMenuIsOpened$.value
    );
  }
}
