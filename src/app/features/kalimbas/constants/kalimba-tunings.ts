/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Tuning } from '../../../core/models/tuning';

export const KALIMBA_TUNINGS: Tuning[] = [
  {
    name: '17',
    value: [77, 74, 70, 67, 63, 60, 56, 53, 51, 55, 58, 62, 65, 68, 72, 75, 79], // D6 C4 E6
  },
  {
    name: '15',
    value: [68, 65, 62, 58, 55, 51, 48, 46, 50, 53, 56, 60, 63, 67, 70], // F5 G3 G6
  },
  {
    name: '10',
    value: [67, 63, 60, 56, 53, 51, 55, 58, 62, 65], // E5 C4 D5
  },
];
