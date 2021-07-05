import { InstrumentName } from 'soundfont-player';
import { Tuning } from '../../../core/models/tuning';

export interface StringedTuning extends Tuning {
  instrument: InstrumentName;
}
