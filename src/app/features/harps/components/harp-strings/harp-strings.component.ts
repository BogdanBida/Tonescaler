import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { InstrumentName } from 'soundfont-player';
import { AudioPlayerService } from './../../../../core/services/audio-player.service';
import { ScaleService } from './../../../../core/services/scale.service';

const INSTRUMENT: InstrumentName = 'harpsichord';

@Component({
  selector: 'app-harp-strings',
  templateUrl: './harp-strings.component.html',
  styleUrls: ['./harp-strings.component.scss'],
})
export class HarpStringsComponent implements OnChanges {
  constructor(
    private readonly _scaleService: ScaleService,
    private readonly _audioPlayerService: AudioPlayerService
  ) {
    this._audioPlayerService.initInstrument(INSTRUMENT);
  }

  @Input() public notes: number[] | null = [];

  public heightsOfNotes: number[] = [];

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  public ngOnChanges({ notes }: SimpleChanges): void {
    notes && this._calculateHeightForStrings();
  }

  public play(note: number): void {
    this._audioPlayerService.play(INSTRUMENT, note);
  }

  public trackByIdentity(item: number, index: number): number {
    return item;
  }

  private _calculateHeightForStrings(): void {
    const notesAmount = this.notes?.length;

    if (this.notes && notesAmount) {
      const max = Math.pow(notesAmount + notesAmount / 2, Math.E);

      this.heightsOfNotes = this.notes.map((_, index) => {
        if (this.notes && notesAmount) {
          const value = Math.pow(index, Math.E);

          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          return 90 - (100 * value) / max;
        }

        return 0;
      });
    }
  }
}
