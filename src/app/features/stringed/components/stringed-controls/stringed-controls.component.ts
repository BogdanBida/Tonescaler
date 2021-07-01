import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { STRINGED_TUNINGS } from './../../../../core/constants/stringed-tunings';
import { NECK_LENGTHS } from './../../constants/stringed';
import { StringedService } from './../../services/stringed.service';

@Component({
  selector: 'app-stringed-controls',
  templateUrl: './stringed-controls.component.html',
  styleUrls: ['./stringed-controls.component.scss'],
})
export class StringedControlsComponent implements OnInit {
  constructor(private readonly _stringedService: StringedService) {}

  public stringedTunings: { name: string; value: number[] }[] =
    STRINGED_TUNINGS;

  public lengths = NECK_LENGTHS;

  public form = new FormGroup({
    tuning: new FormControl(this.stringedTunings[0].value),
    neckLength: new FormControl(this._stringedService.neckLength$.value),
  });

  public customTune: number[] | null = null;

  public setCustomTune(value: number[] | null): void {
    this.customTune = value;

    if (value) {
      this._stringedService.selectedTune$.next([...value]);
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

    lengthControl.valueChanges.subscribe((length: number) => {
      this._stringedService.neckLength$.next(length);
    });

    const tuningControl = this.form.controls.tuning;

    tuningControl.valueChanges.subscribe((tuning: number[]) => {
      this.customTune = null;
      this._stringedService.selectedTune$.next(tuning);
    });
  }
}
