import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NOTES } from 'src/app/core/constants';
import { SCALES } from './../../../core/constants/scales';
import { ScaleService } from './../../../core/services/scale.service';

@UntilDestroy()
@Component({
  selector: 'app-scale-switcher',
  templateUrl: './scale-switcher.component.html',
  styleUrls: ['./scale-switcher.component.scss'],
})
export class ScaleSwitcherComponent implements OnInit {
  constructor(private readonly _scaleService: ScaleService) {}

  public form = new FormGroup({
    tonic: new FormControl(this._scaleService.tonic$.value),
    scale: new FormControl(this._scaleService.scale$.value),
  });

  public notes = NOTES;

  public scales = SCALES;

  public ngOnInit(): void {
    this.form.controls.tonic.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((tonic) => this._scaleService.tonic$.next(tonic));

    this.form.controls.scale.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((scale) => this._scaleService.scale$.next(scale));
  }
}
