import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { range } from 'lodash-es';
import { InstrumentName } from 'soundfont-player';
import {
  DEFAULT_INSTRUMENT,
  DEFAULT_NECK_LENGTH,
} from '../../constants/stringed';
import { NeckString } from '../../models/neck-string';
import { AudioPlayerService } from './../../../../core/services/audio-player.service';
import { ScaleService } from './../../../../core/services/scale.service';

@Component({
  selector: 'app-neck',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.scss'],
})
export class NeckComponent implements OnChanges {
  constructor(
    private readonly _scaleService: ScaleService,
    private readonly _playerService: AudioPlayerService
  ) {}

  @Input() public neckLength: number | null = DEFAULT_NECK_LENGTH;

  @Input() public tuning: number[] | null = [];

  @Input() public instrumentName: InstrumentName | null = DEFAULT_INSTRUMENT;

  public neckStrings: NeckString[] = [];

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  public ngOnChanges({ tuning, instrumentName }: SimpleChanges): void {
    if (tuning) {
      this.neckStrings = tuning.currentValue.map((neckString: number) => ({
        root: neckString,
      }));
    }

    if (instrumentName) {
      this.instrumentName &&
        this._playerService.initInstrument(this.instrumentName);
    }
  }

  public rangeByLength = (start: number, length: number): number[] =>
    range(start, start + length);

  public isDisabled(key: number): boolean {
    return this._scaleService.scale$.value ? !this.whoInScale(key) : false;
  }

  public play(note: number): void {
    this.instrumentName && this._playerService.play(this.instrumentName, note);
  }

  public stringIdentity(index: number, item: NeckString): number {
    return item.root;
  }
}
