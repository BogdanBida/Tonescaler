import { FluteHoleStatus } from './../enums/flute-hole-status.enum';
export interface FluteType {
  readonly name: string;
  readonly root: number;
  readonly applicature: BFluteApplicature;
}

export type BFluteApplicature = FluteHoleStatus[][];
