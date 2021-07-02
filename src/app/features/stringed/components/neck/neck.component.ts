import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { range } from 'lodash-es';
import { DEFAULT_NECK_LENGTH } from '../../constants/stringed';
import { NeckString } from '../../models/neck-string';
import { AudioPlayerService } from './../../../../core/services/audio-player.service';
import { ScaleService } from './../../../../core/services/scale.service';

const INSTRUMENT = 'acoustic_guitar_steel';

@Component({
  selector: 'app-neck',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.scss'],
})
export class NeckComponent implements OnInit, OnChanges {
  constructor(
    private readonly _scaleService: ScaleService,
    private readonly _playerService: AudioPlayerService
  ) {}

  @Input() public neckLength: number | null = DEFAULT_NECK_LENGTH;

  @Input() public tuning: number[] | null = [];

  public neckStrings: NeckString[] = [];

  public range = range;

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  public ngOnInit(): void {
    this._playerService.initInstrument(INSTRUMENT);
  }

  public ngOnChanges({ tuning }: SimpleChanges): void {
    if (tuning) {
      this.neckStrings = tuning.currentValue.map((neckString: number) => ({
        root: neckString,
      }));
    }
  }

  public isDisabled(key: number): boolean {
    return this._scaleService.scale$.value ? !this.whoInScale(key) : false;
  }

  public play(note: number): void {
    this._playerService.play(INSTRUMENT, note);
  }
}
