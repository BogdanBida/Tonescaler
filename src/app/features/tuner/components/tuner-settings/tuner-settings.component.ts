import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TunerService } from 'src/app/core/services';
import { PitchDetectors } from './../../../../core/enums/pitch-detectors.enum';

const OPTIONS = [
  { value: PitchDetectors.Yin, name: 'YIN' },
  { value: PitchDetectors.Amdf, name: 'AMDF' },
  { value: PitchDetectors.DynamicWavelet, name: 'Dynamic Wavelet' },
  { value: PitchDetectors.Simple, name: 'Simple' },
];

const INITIAL_ALGORITHM = PitchDetectors.Yin;

@Component({
  selector: 'app-tuner-settings',
  templateUrl: './tuner-settings.component.html',
  styleUrls: ['./tuner-settings.component.scss'],
})
export class TunerSettingsComponent implements OnInit {
  constructor(private readonly _tunerService: TunerService) {}

  public options = OPTIONS;

  public formGroup = new FormGroup({
    algorithm: new FormControl(INITIAL_ALGORITHM),
  });

  public ngOnInit(): void {
    this._tunerService.setPitchDetector(INITIAL_ALGORITHM);

    this.formGroup.valueChanges.subscribe(() => {
      this._tunerService.setPitchDetector(
        this.formGroup.controls.algorithm.value
      );
    });
  }
}
