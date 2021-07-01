export function isBlackKey(note: number): boolean {
  return BLACK_KEYS.includes(note % 12);
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const BLACK_KEYS = [1, 4, 6, 9, 11];
