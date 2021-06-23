import { Injectable } from '@angular/core';
import { isNil } from 'lodash-es';
import { range } from 'rxjs';
import { TunerService } from 'src/app/core/services';
import { noteToString } from 'src/app/core/utils/convertors';
import { TunerInfo } from './../../../core/models/tuner-info';

const NOTE_SIZE = 2;

const BOTTOM_OFFSET = 32;

const DEFAULT_BOTTOM_NOTE = 66;

const DEFAULT_TOP_NOTE = 78;

const OFFSET_OUTSIDE_NOTE = 5;

const NOTELINE_BOTTOM_OFFSET = 10;

@Injectable({
  providedIn: 'root',
})
export class TunerChartService {
  constructor(private readonly _tunerService: TunerService) {}

  private _canvas!: HTMLCanvasElement | null;

  private _ctx!: CanvasRenderingContext2D | null;

  private _cacheSize = 0;

  private _buffer: TunerInfo[] = [];

  private _bottomNote = DEFAULT_BOTTOM_NOTE;

  private _topNote = DEFAULT_TOP_NOTE;

  public get width(): number {
    return this._canvas ? this._canvas.width : 0;
  }

  public get height(): number {
    return this._canvas ? this._canvas.height : 0;
  }

  public get hasSize(): boolean {
    return !!(this.width && this.height);
  }

  public init(canvas: HTMLCanvasElement): void {
    this._canvas = canvas;
    this._ctx = canvas.getContext('2d');

    this._tunerService.info$.subscribe((tunerInfo) => {
      if (tunerInfo === null || !this.hasSize || isNil(this._ctx)) {
        // todo: check performance
        return;
      }

      this._updateBuffer(tunerInfo as TunerInfo);
      this._drawData();
      this._drawNotelist();
    });
  }

  public onDestroy(): void {
    this._buffer = [];
    this._bottomNote = DEFAULT_BOTTOM_NOTE;
    this._topNote = DEFAULT_TOP_NOTE;
    this._cacheSize = 0;
    this._ctx = null;
    this._canvas = null;
  }

  public setSize(width: number, height: number): void {
    if (this._canvas) {
      this._canvas.width = width;
      this._canvas.height = height;
      this._cacheSize = height / NOTE_SIZE;
    }
  }

  private _setCanvasStyles(): void {
    if (this._ctx) {
      this._ctx.fillStyle = '#f0f0f0';
      this._ctx.textAlign = 'center';
      this._ctx.font = 'Montseratt';
    }
  }

  private _updateBuffer(value: TunerInfo): void {
    this._buffer.unshift(value);
    this._buffer.length > this._cacheSize && this._buffer.pop();
  }

  private _drawData(): void {
    if (isNil(this._ctx)) {
      return;
    }

    this._updateBoundaries();

    this._ctx.clearRect(0, 0, this.width, this.height);
    this._setCanvasStyles();

    this._buffer.forEach((value, i) => {
      if (!this._ctx) {
        return;
      }

      this._ctx.beginPath();

      const x =
        ((value.note - this._bottomNote + value.detune / 100) /
          (this._topNote - this._bottomNote)) *
        this.width;

      this._ctx.arc(
        x,
        this.height -
          BOTTOM_OFFSET -
          (i / this._cacheSize) * (this.height - BOTTOM_OFFSET),
        NOTE_SIZE,
        0,
        Math.PI * 2
      );

      this._ctx.fill();
    });
  }

  private _drawNotelist(): void {
    range(0, this._topNote - this._bottomNote).forEach((value) => {
      const note = value + this._bottomNote;
      const x = (value / (this._topNote - this._bottomNote)) * this.width;

      this._ctx?.fillText(
        noteToString(note),
        x,
        this.height - NOTELINE_BOTTOM_OFFSET
      );
    });
  }

  private _updateBoundaries(): void {
    const notelist = this._buffer.map((value) => value.note);
    // todo: check perfomance
    const topNote = Math.max(...notelist);
    const bottomNote = Math.min(...notelist);

    this._topNote = topNote + OFFSET_OUTSIDE_NOTE;
    this._bottomNote = bottomNote - OFFSET_OUTSIDE_NOTE;
  }
}
