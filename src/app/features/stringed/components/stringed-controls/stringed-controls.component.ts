import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { STRINGED_TUNINGS } from '../../constants/stringed-tunings';
import { StringedTuning } from '../../models/stringed-tuning';
import { DEFAULT_INSTRUMENT, NECK_LENGTHS } from './../../constants/stringed';
import { StringedService } from './../../services/stringed.service';

@UntilDestroy()
@Component({
  selector: 'app-stringed-controls',
  templateUrl: './stringed-controls.component.html',
  styleUrls: ['./stringed-controls.component.scss'],
})
export class StringedControlsComponent implements OnInit {
  constructor(private readonly _stringedService: StringedService) {}

  public stringedTunings: StringedTuning[] = STRINGED_TUNINGS;

  public lengths = NECK_LENGTHS;

  public form = new FormGroup({
    tuning: new FormControl(this._stringedService.selectedTuning$.value),
    neckLength: new FormControl(this._stringedService.neckLength$.value),
  });

  public customTune: number[] | null = null;

  public setCustomTune(value: number[] | null): void {
    this.customTune = value;

    if (value) {
      this._stringedService.selectedTuning$.next([...value]);
      this.form.controls.tuning.setValue(value, {
        emitEvent: false,
      });
    }
  }

  public get tuning(): number[] {
    return this.form.controls.tuning.value;
  }

  public ngOnInit(): void {
    const lengthControl = this.form.controls.neckLength;

    lengthControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((length: number) => {
        this._stringedService.neckLength$.next(length);
      });

    const tuningControl = this.form.controls.tuning;

    tuningControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((tuning: number[]) => {
        this.customTune = null;
        this._stringedService.selectedTuning$.next(tuning);

        const tuningData = this.stringedTunings.find(
          (data) => data.value === tuning
        );

        this._stringedService.selectedInstrument$.next(
          (tuningData && tuningData.instrument) || DEFAULT_INSTRUMENT
        );
      });
  }
}
