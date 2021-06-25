import { Injectable } from '@angular/core';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  public overrides = {
    swipe: { direction: Hammer.DIRECTION_ALL },
  } as any;
}

export const HAMMER_CONFIG_PROVIDER = {
  provide: HAMMER_GESTURE_CONFIG,
  useClass: HammerConfig,
};
