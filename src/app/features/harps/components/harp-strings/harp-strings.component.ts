import { Component, Input } from '@angular/core';
import { InstrumentName } from 'soundfont-player';
import { AudioPlayerService } from './../../../../core/services/audio-player.service';
import { ScaleService } from './../../../../core/services/scale.service';

const INSTRUMENT: InstrumentName = 'harpsichord';

@Component({
  selector: 'app-harp-strings',
  templateUrl: './harp-strings.component.html',
  styleUrls: ['./harp-strings.component.scss'],
})
export class HarpStringsComponent {
  constructor(
    private readonly _scaleService: ScaleService,
    private readonly _audioPlayerService: AudioPlayerService
  ) {
    this._audioPlayerService.initInstrument(INSTRUMENT);
  }

  @Input() public notes: number[] | null = [];

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  public play(note: number): void {
    this._audioPlayerService.play(INSTRUMENT, note);
  }
}
