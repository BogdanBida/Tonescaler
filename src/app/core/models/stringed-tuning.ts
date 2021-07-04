import { InstrumentName } from 'soundfont-player';
import { Tuning } from './tuning';

export interface StringedTuning extends Tuning {
  instrument: InstrumentName;
}
