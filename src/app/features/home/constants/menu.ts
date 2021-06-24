export const MENU_ITEMS = [
  {
    name: 'Keyboards',
    iconUrl: 'assets/icons/keyboards.svg',
    route: 'keyboards',
  },
  {
    name: 'Stringed',
    iconUrl: 'assets/icons/stringed.svg',
    route: 'stringed',
  },
  {
    name: 'Block Flute',
    iconUrl: 'assets/icons/block-flute.svg',
    route: 'block-flute',
  },
  {
    name: 'Kalimbas',
    iconUrl: 'assets/icons/kalimba.svg',
    route: 'kalimba',
  },
  {
    name: 'Saxophone',
    iconUrl: 'assets/icons/saxophone.svg',
    route: 'saxophone',
  },
  {
    name: 'Trumpets',
    iconUrl: 'assets/icons/trumpet.svg',
    route: 'trumpets',
  },
  {
    name: 'Lyra',
    iconUrl: 'assets/icons/saxophone.svg',
    route: 'lyra',
  },
  {
    name: 'Harmonica',
    iconUrl: 'assets/icons/harmonica.svg',
    route: 'harmonica',
  },
];

export const OFFSET_FROM_BOUNDARIES = 15;
/**
 * radius in percents of container height.
 *
 * 50 = 100% of height
 */
export const RADIUS = 50;
/**
 * percents from top left corner
 */
export const CENTER = 50;

/**
 * 0 - 0deg (top)
 *
 * 0.5 - 90 deg (right)
 *
 * 1 - 180 deg (bottom)
 *
 * -0.5 - 270 deg (left)
 */
export const PERCENTS_OF_START_OFFSET = -0.25;
