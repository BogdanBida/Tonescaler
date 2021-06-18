import { NOTES, OCTAVE_OFFSET } from '../constants/notes';

export function NoteNumToString(note: number): string {
  return NOTES[note % 12] + Math.trunc((note - OCTAVE_OFFSET) / 12) + 1;
}

export function StringToNoteNum(note: string): number {
  // TODO: try regex to validate note param
  const noteBase = note.slice(0, note.length - 1);

  const noteIndex = NOTES.indexOf(noteBase);

  if (noteIndex === -1) {
    throw new Error('Note index not found');
  }

  const octave = Number(note.substr(note.length - 1));

  if (!isFinite(octave)) {
    throw new Error('Octave is not a number');
  }

  return noteIndex + octave * 12 + 1;
}
