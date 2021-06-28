/* eslint-disable @typescript-eslint/no-magic-numbers */
import { ScaleModel } from './../models';

export const SCALES: ScaleModel[] = [
  {
    name: 'Major',
    mask: [1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 0, 7],
  },
  {
    name: 'Minor',
    mask: [1, 0, 2, 3, 0, 4, 0, 5, 6, 0, 7, 0],
  },
];
