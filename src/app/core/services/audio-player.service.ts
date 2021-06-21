import { Injectable } from '@angular/core';
import {
  instrument as SFInstrument,
  InstrumentName,
  Player,
} from 'soundfont-player';
import { InstrumentCollection } from '../models/instrument-collection';
import { NoteToString } from '../utils/convertors';

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  private readonly _audioCtx = new AudioContext();

  private readonly _instruments: InstrumentCollection =
    {} as InstrumentCollection;

  public async initInstrument(instrumentName: InstrumentName): Promise<Player> {
    const instrument = await SFInstrument(this._audioCtx, instrumentName);

    this._instruments[instrumentName] = instrument;

    return instrument;
  }

  public clearInstrument(instrumentName: InstrumentName): void {
    delete this._instruments[instrumentName];
  }

  public async play(
    instrumentName: InstrumentName,
    note: number
  ): Promise<void> {
    const instrument =
      this._instruments[instrumentName] ||
      (await this.initInstrument(instrumentName));

    const noteName = NoteToString(note);

    instrument.play(noteName);
  }
}
