import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { STRINGED_TUNINGS } from './../../../../core/constants/stringed-tunings';
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

  public form = new FormGroup({
    tuning: new FormControl(this.stringedTunings[0].value),
  });

  public customTune: number[] | null = null;

  public setCustomTune(value: number[] | null): void {
    this.customTune = value;

    if (value) {
      this._stringedService.selectedTune$.next([...value]);
      this.form.patchValue(
        {
          tuning: value,
        },
        {
          emitEvent: false,
        }
      );
    }
  }

  public get tuning(): number[] {
    return this.form.controls.tuning.value;
  }

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.customTune = null;
      this._stringedService.selectedTune$.next(data.tuning);
    });
  }
}
