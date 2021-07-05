import { AfterViewInit, Component, HostListener } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Coordinates, Position } from 'src/app/core/models';
import { WheelService } from './../../services/wheel.service';

const FULL_TURN = 360;

@UntilDestroy()
@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
  providers: [WheelService],
})
export class WheelComponent implements AfterViewInit {
  constructor(private readonly _wheelService: WheelService) {}

  public sectors$ = this._wheelService.sectors$;

  public nextItem = this._wheelService.nextItem.bind(this._wheelService);

  public prevItem = this._wheelService.prevItem.bind(this._wheelService);

  private _degree = 0;

  @HostListener('wheel', ['$event'])
  public onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.nextItem();
    } else {
      this.prevItem();
    }
  }

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
    this._wheelService.initWheel();

    this._wheelService.currentItem$
      .pipe(untilDestroyed(this))
      .subscribe((index) => {
        this._degree =
          FULL_TURN * (index / this._wheelService.sectors$.value.length);
      });
  }
}
