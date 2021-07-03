import { InstrumentName } from 'soundfont-player';

export interface StringedTuning {
  name: string;
  value: number[];
  instrument: InstrumentName;
}
