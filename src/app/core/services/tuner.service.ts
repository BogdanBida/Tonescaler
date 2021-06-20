import { Injectable } from '@angular/core';
import { getTuningInfo } from '@ddlab/tuner';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject, interval } from 'rxjs';
import { TunerInfo } from '../models';

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
    // this._audioCtx = await initAudio();
    const fakeData = [
      {
        noteStr: 'A4',
        cents: 0,
        isInTune: true,
      },
      {
        noteStr: 'A4',
        cents: 20,
        isInTune: false,
      },
      {
        noteStr: 'A#4',
        cents: -20,
        isInTune: false,
      },
    ];

    interval(1000).subscribe((i) => {
      this.info.next(fakeData[i % fakeData.length]);
    });
  }

  private _tunerLoop(): void {
    if (this._audioCtx) {
      this.info.next(
        getTuningInfo(this._audioCtx.getFreqData(), this._audioCtx.deltaFreq)
      );
      console.log(this.info.value);
      this.isEnabled && requestAnimationFrame(() => this._tunerLoop());
    }
  }
}
