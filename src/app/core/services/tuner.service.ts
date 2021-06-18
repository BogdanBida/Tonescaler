import { Injectable } from '@angular/core';
import { getTuningInfo, initAudio } from '@ddlab/tuner';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { TunerInfo } from '../models';

const initialTunerInfo = {
  noteStr: '',
  cents: 0,
  isInTune: false,
};

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class TunerService {
  public info: BehaviorSubject<TunerInfo> = new BehaviorSubject<TunerInfo>(
    initialTunerInfo
  );

  private _isEnabled = false;

  private _audioCtx: {
    getFreqData: any;
    deltaFreq: any;
  } | null = null;

  public toggleTuner(): void {
    this._isEnabled = !this._isEnabled;

    this._isEnabled && this._tunerLoop();
  }

  public disableTuner(): void {
    this._isEnabled = false;
  }

  public initTuner(): BehaviorSubject<TunerInfo> {
    // eslint-disable-next-line @typescript-eslint/space-before-function-paren
    document.addEventListener('keypress', async () => {
      this._audioCtx = await initAudio();
    });

    return this.info;
  }

  private _tunerLoop(): void {
    if (this._audioCtx) {
      this.info.next(
        getTuningInfo(this._audioCtx.getFreqData(), this._audioCtx.deltaFreq)
      );

      this._isEnabled && requestAnimationFrame(() => this._tunerLoop());
    }
  }
}
