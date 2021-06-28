import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { range } from 'lodash-es';
import { STAGES } from 'src/app/core/constants';
import { noteToString } from 'src/app/core/utils/convertors';
import {
  DEFAULT_FIRST_KEY,
  DEFAULT_KEYS_AMOUNT,
  INSTRUMENT,
} from '../../constants/default';
import { AudioPlayerService } from './../../../../core/services/audio-player.service';
import { ScaleService } from './../../../../core/services/scale.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit, OnChanges {
  constructor(
    private readonly _scaleService: ScaleService,
    private readonly _playerService: AudioPlayerService
  ) {}

  @Input() public firstKey = DEFAULT_FIRST_KEY;

  @Input() public amount = DEFAULT_KEYS_AMOUNT;

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public keys!: number[];

  public ngOnInit(): void {
    this._playerService.initInstrument(INSTRUMENT);
    this._setKeys();
  }

  public ngOnChanges({ firstKey, amount }: SimpleChanges): void {
    this._setKeys();
  }

  public isBlack(key: number): boolean {
    return noteToString(key, false).includes('#');
  }

  public stage(key: number): string {
    const stage = this.whoInScale(key);

    if (!stage) {
      return '';
    }

    return STAGES[this.whoInScale(key) - 1];
  }

  public play(note: number): void {
    this._playerService.play(INSTRUMENT, note);
  }

  private _setKeys(): void {
    this.keys = range(this.amount).map((value) => value + this.firstKey);
  }
}
