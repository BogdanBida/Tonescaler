import { Injectable } from '@angular/core';
import { getTuningInfo, initAudio } from '@ddlab/tuner';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, from } from 'rxjs';
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

  private _getFreqData: any;

  private _deltaFreq: any;

  private _isEnabled = false;

  public toggleTuner(): void {
    this._isEnabled = !this._isEnabled;

    this._isEnabled && this._tunerLoop();
  }

  public disableTuner(): void {
    this._isEnabled = false;
  }

  public initTuner(): BehaviorSubject<TunerInfo> {
    from(initAudio)
      .pipe(untilDestroyed(this))
      .subscribe((data: any) => {
        this._getFreqData = data.getFreqData;
        this._deltaFreq = data.deltaFreq;
        console.log(data);
      });

    return this.info;
  }

  private _tunerLoop(): void {
    if (!this._getFreqData && !this._deltaFreq) {
      return;
    }

    const info = getTuningInfo(this._getFreqData(), this._deltaFreq);

    this.info.next(info);
    this._isEnabled && requestAnimationFrame(this._tunerLoop);
  }
}
