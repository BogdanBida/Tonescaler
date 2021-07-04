/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Tuning } from '../models/tuning';

export const HARP_TYPES: Tuning[] = [
  {
    name: 'lyre_19f',
    value: [
      44, 46, 48, 50, 51, 53, 55, 56, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74,
      75,
    ],
  },
  {
    name: 'lyre_10e',
    value: [55, 56, 58, 60, 62, 63, 65, 67, 68, 70],
  },
  {
    name: 'lyre_7d',
    value: [53, 55, 58, 60, 62, 65, 67],
  },
];
