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
  {
    name: 'Blues',
    mask: [1, 0, 0, 2, 0, 3, 4, 5, 0, 0, 6, 0],
  },
  {
    name: 'Major Blues',
    mask: [1, 0, 2, 3, 4, 0, 0, 5, 0, 6, 0, 0],
  },
  {
    name: 'Dorian',
    mask: [1, 0, 2, 3, 0, 4, 0, 5, 0, 6, 7, 0],
  },
  {
    name: 'Phrygian',
    mask: [1, 2, 0, 3, 0, 4, 0, 5, 6, 0, 7, 0],
  },
  {
    name: 'Lydian',
    mask: [1, 0, 2, 0, 3, 0, 4, 5, 0, 6, 0, 7],
  },
  {
    name: 'Mixolydian',
    mask: [1, 0, 2, 0, 3, 4, 0, 5, 0, 6, 7, 0],
  },
  {
    name: 'Locrian',
    mask: [1, 2, 0, 3, 0, 4, 5, 0, 6, 0, 7, 0],
  },
  {
    name: 'Arabic',
    mask: [1, 0, 2, 3, 0, 4, 5, 0, 6, 7, 0, 8],
  },
  {
    name: 'Percian',
    mask: [1, 2, 0, 0, 3, 4, 5, 0, 6, 0, 0, 7],
  },
  {
    name: 'Byzantine',
    mask: [1, 2, 0, 0, 3, 4, 0, 5, 6, 0, 0, 7],
  },
  {
    name: 'Eastern',
    mask: [1, 2, 0, 0, 3, 4, 5, 0, 0, 6, 7, 0],
  },
  {
    name: 'Japanese',
    mask: [1, 0, 2, 0, 0, 3, 0, 4, 5, 0, 0, 0],
  },
  {
    name: 'Gypsy',
    mask: [1, 0, 2, 3, 0, 0, 4, 5, 6, 0, 7, 0],
  },
  {
    name: 'Romanian',
    mask: [1, 0, 2, 3, 0, 0, 4, 5, 0, 6, 7, 0],
  },
  {
    name: 'Jewish',
    mask: [1, 2, 0, 0, 3, 4, 0, 5, 6, 0, 7, 0],
  },
];
