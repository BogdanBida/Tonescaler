import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FQ_STANDART_A4 } from './../../../../core/constants/musictheory';
import { TunerService } from './../../../../core/services/tuner.service';

const NOTE_SIZE = 8;

const BOTTOM_OFFSET = 32;

@Component({
  selector: 'app-tuner-chart',
  templateUrl: './tuner-chart.component.html',
  styleUrls: ['./tuner-chart.component.scss'],
})
export class TunerChartComponent implements AfterViewInit {
  constructor(
    private readonly _self: ElementRef,
    private readonly _tunerService: TunerService
  ) {}

  @ViewChild('canv') public canv!: ElementRef;

  public frequency = 0;

  private _canvWidth!: number;

  private _canvHeight!: number;

  private _ctx!: CanvasRenderingContext2D;

  private _cacheSize = 0;

  private readonly _lastValues: number[] = [];

  @HostListener('window:resize')
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

    this._tunerService.currentFrequency.subscribe((freq) => {
      if (!this._canvWidth && !this._canvHeight) {
        return;
      }

      this.frequency = freq as number;
      console.log(freq);

      // todo: group
      this._lastValues.unshift(freq as number);
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
