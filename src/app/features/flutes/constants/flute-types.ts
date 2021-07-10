import { FluteType } from '../models/flute-type';
import { SOPRANO_APPLICATURE } from './soprano-applicature';

export const FLUTE_TYPES: FluteType[] = [
  {
    name: 'garklein',
    root: 75,
    applicature: SOPRANO_APPLICATURE,
  },
  {
    name: 'sopranino',
    root: 68,
    applicature: SOPRANO_APPLICATURE,
  },
  {
    name: 'soprano',
    root: 63,
    applicature: SOPRANO_APPLICATURE,
  },
  {
    name: 'alt',
    root: 56,
    applicature: SOPRANO_APPLICATURE,
  },
  {
    name: 'tenor',
    root: 51,
    applicature: SOPRANO_APPLICATURE,
  },
  {
    name: 'bass',
    root: 44,
    applicature: SOPRANO_APPLICATURE,
  },
];
