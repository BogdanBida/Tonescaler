import { ScaleModel } from './../models';

export const SCALES: ScaleModel[] = [
  {
    name: 'Major',
    mask: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
  },
  {
    name: 'Minor',
    mask: [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
  },
];
