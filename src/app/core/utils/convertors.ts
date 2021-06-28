import { NOTES, OCTAVE_OFFSET } from '../constants/notes';
import {
  FOURTH_OCTAVE,
  FQ_OCTAVE,
  FQ_STANDART_A4,
  NOTE_REGEXP,
} from './../constants/';

export function noteToString(note: number, includeOctave = true): string {
  return (
    NOTES[note % 12] +
    (includeOctave ? String(Math.trunc((note - OCTAVE_OFFSET) / 12)) : '')
  );
}

export function stringToNote(note: string): number {
  if (!NOTE_REGEXP.test(note)) {
    throw new Error('Invalid note string');
  }

  const noteBase = note.slice(0, note.includes('#') ? 2 : 1);
  const noteIndex = NOTES.indexOf(noteBase);

  if (noteIndex === -1) {
    throw new Error('Note index not found');
  }

  const octave = Number(note.substr(note.length - 1));

  if (!isFinite(octave)) {
    throw new Error('Octave is not a number');
  }

  // ! hardcode octaves
  return noteIndex + octave * 12 - OCTAVE_OFFSET + 12 * 2;
}

export function nearestNoteByFrequency(
  freq: number,
  base: number = FQ_STANDART_A4
): number {
  const noteNum = 12 * (Math.log(freq / base) / Math.log(2));

  return Math.round(noteNum) + FOURTH_OCTAVE;
}

export function frequencyFromNote(
  note: number,
  base: number = FQ_STANDART_A4
): number {
  return base * Math.pow(2, (note - FOURTH_OCTAVE) / 12);
}

export function centsOffFromPitch(frequency: number, note: number): number {
  return Math.floor(
    (FQ_OCTAVE * Math.log(frequency / frequencyFromNote(note))) / Math.log(2)
  );
}
