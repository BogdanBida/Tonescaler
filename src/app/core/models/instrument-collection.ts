import { InstrumentName, Player } from 'soundfont-player';

export type InstrumentCollection = {
  [key in InstrumentName]: Player;
};
