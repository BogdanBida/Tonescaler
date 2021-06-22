import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  ViewChild,
} from '@angular/core';
import {
  ResizeObserverService,
  RESIZE_OPTION_BOX,
} from '@ng-web-apis/resize-observer';
import { FQ_STANDART_A4 } from 'src/app/core/constants';
import { TunerService } from 'src/app/core/services';

const NOTE_SIZE = 8;

const BOTTOM_OFFSET = 32;

@Component({
  selector: 'app-tuner-chart',
  templateUrl: './tuner-chart.component.html',
  styleUrls: ['./tuner-chart.component.scss'],
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      useValue: 'border-box',
    },
  ],
})
export class TunerChartComponent implements AfterViewInit {
  constructor(
    private readonly _self: ElementRef,
    @Inject(ResizeObserverService)
    private readonly _entries$: ResizeObserverService,
    private readonly _tunerService: TunerService
  ) {
    this._entries$.subscribe((entries) => {
      this.onResize();
    });
  }

  @ViewChild('canv') public canv!: ElementRef;

  public currentFrequency = 0;

  private _canvWidth!: number;

  private _canvHeight!: number;

  private _ctx!: CanvasRenderingContext2D;

  private _cacheSize = 0;

  private readonly _lastValues: number[] = [];

  public onResize(): void {
    const { clientHeight, clientWidth } = this._self.nativeElement;

    this._canvHeight = clientHeight;
    this._canvWidth = clientWidth;

    this._cacheSize = this._canvHeight / NOTE_SIZE;

    if (this.canv) {
      this.canv.nativeElement.width = clientWidth;
      this.canv.nativeElement.height = clientHeight;
    }
  }

  public ngAfterViewInit(): void {
    this._ctx = this.canv.nativeElement.getContext('2d');
    this.onResize();

    this._tunerService.currentFrequency$.subscribe((freq) => {
      if (!this._canvWidth && !this._canvHeight) {
        return;
      }

      this.currentFrequency = freq as number;

      // todo: group
      this._lastValues.unshift(this.currentFrequency);
      this._lastValues.length > this._cacheSize && this._lastValues.pop();

      const MAX_FQ = 522;

      this._ctx.clearRect(0, 0, this._canvWidth, this._canvHeight);
      this._lastValues.forEach((value, i) => {
        this._ctx?.fillRect(
          ((Number(value) - FQ_STANDART_A4) / MAX_FQ) * this._canvWidth,
          this._canvHeight -
            BOTTOM_OFFSET -
            (i / this._cacheSize) * (this._canvHeight - BOTTOM_OFFSET),
          NOTE_SIZE,
          NOTE_SIZE
        );
      });
    });
  }
}
