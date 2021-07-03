import { StringedTuning } from '../models/stringed-tuning';

/* eslint-disable @typescript-eslint/no-magic-numbers */
export const STRINGED_TUNINGS: StringedTuning[] = [
  {
    name: 'standart',
    value: [55, 50, 46, 41, 36, 31],
    instrument: 'acoustic_guitar_steel',
  },
  {
    name: 'violin',
    value: [67, 60, 53, 46],
    instrument: 'violin',
  },
  {
    name: '8x',
    value: [55, 50, 46, 41, 36, 31, 26, 21],
    instrument: 'electric_guitar_clean',
  },
  {
    name: 'bass',
    value: [34, 29, 24, 19],
    instrument: 'electric_bass_pick',
  },
  {
    name: 'balalaika',
    value: [60, 55, 55],
    instrument: 'banjo',
  },
  {
    name: 'ukulele',
    value: [60, 55, 51, 70],
    instrument: 'acoustic_guitar_nylon',
  },
  {
    name: 'dadgad',
    value: [53, 48, 46, 41, 36, 29],
    instrument: 'acoustic_guitar_steel',
  },
  {
    name: 'opend',
    value: [53, 48, 45, 41, 36, 29],
    instrument: 'acoustic_guitar_steel',
  },
  {
    name: 'crafty',
    value: [58, 55, 48, 41, 34, 27],
    instrument: 'acoustic_guitar_steel',
  },
  {
    name: 'sitar',
    value: [60, 46, 48, 43, 36, 31],
    instrument: 'sitar',
  },
];
