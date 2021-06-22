import { Injectable } from '@angular/core';
import { getTuningInfo, initAudio } from '@ddlab/tuner';
import { UntilDestroy } from '@ngneat/until-destroy';
import { isNil } from 'lodash-es';
import { BehaviorSubject, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NOTES } from '../constants/notes';
import { TunerInfo } from '../models';
import { frequencyFromNote, stringToNote } from '../utils/convertors';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class TunerService {
  public info = new BehaviorSubject<TunerInfo | null>({
    noteStr: 'A#',
    cents: 0,
    isInTune: true,
  });

  public currentFrequency = this.info.pipe(
    filter((info) => !isNil(info)),
    map((info) => {
      if (info) {
        return frequencyFromNote(stringToNote(info.noteStr + '4'));
      }

      return null;
    })
  );

  public readonly isEnabled = new BehaviorSubject<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private _audioCtx: {
    getFreqData: any;
    deltaFreq: any;
  } | null = null;

  public toggleTuner(): void {
    this.isEnabled.next(!this.isEnabled.value);

    this.isEnabled.value && this._tunerLoop();
  }

  public disableTuner(): void {
    this.isEnabled.next(false);
  }

  public async initTuner(): Promise<void> {
    this._audioCtx = await initAudio();

    interval(100)
      .pipe()
      .subscribe((i) => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        const cents = Math.round(Math.random() * 100 - 50);

        this.info.next({
          noteStr: NOTES[i % 12],
          cents,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          isInTune: Math.abs(cents) < 10,
        });
      });
  }

  private _tunerLoop(): void {
    if (this._audioCtx) {
      this.info.next(
        getTuningInfo(this._audioCtx.getFreqData(), this._audioCtx.deltaFreq)
      );
      this.info.value?.noteStr !== '-' && console.log(this.info.value);

      this.isEnabled.value && requestAnimationFrame(() => this._tunerLoop());
    }
  }
}
