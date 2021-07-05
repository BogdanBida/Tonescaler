import { AfterViewInit, Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { Coordinates, Position } from '../../../../core/models';
import { CircularMenuService } from '../../services/circular-menu.service';

const FULL_TURN = 360;

@UntilDestroy()
@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss'],
  providers: [CircularMenuService],
})
export class CircularMenuComponent implements AfterViewInit {
  constructor(private readonly _menuService: CircularMenuService) {}

  public isClosed$ = this._menuService.circularMenuIsOpened$.pipe(
    map((v) => !v)
  );

  public items$ = this._menuService.menuItems$;

  public nextItem = this._menuService.nextItem.bind(this._menuService);

  public prevItem = this._menuService.prevItem.bind(this._menuService);

  private _degree = 0;

  public getStyleFromItemPosition(
    position: Coordinates,
    item: HTMLElement
  ): Position {
    return {
      top: `calc(${position.y}% - ${item.clientHeight / 2}px)`,
      left: `calc(${position.x}% - ${item.clientWidth / 2}px)`,
    };
  }

  public get degree(): string {
    return this._degree + 'deg';
  }

  public get negativeDegree(): string {
    return -this._degree + 'deg';
  }

  public ngAfterViewInit(): void {
    this._menuService.initMenu();

    this._menuService.currentItem$
      .pipe(untilDestroyed(this))
      .subscribe((index) => {
        this._degree =
          FULL_TURN * (index / this._menuService.menuItems$.value.length);
      });
  }
}
