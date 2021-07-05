import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { KALIMBA_TUNINGS } from './../../constants/kalimba-tunings';

@UntilDestroy()
@Component({
  selector: 'app-kalimba-controls',
  templateUrl: './kalimba-controls.component.html',
  styleUrls: ['./kalimba-controls.component.scss'],
})
export class KalimbaControlsComponent implements OnInit, AfterViewInit {
  @Output() public selectTuning = new EventEmitter<number[]>();

  @Output() public inEditMode = new EventEmitter<boolean>();

  public form = new FormGroup({
    tuning: new FormControl(null),
    inEdit: new FormControl(false),
  });

  public kalimbaTunings = KALIMBA_TUNINGS;

  public ngOnInit(): void {
    this.form.controls.tuning.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((tuning) => {
        this.selectTuning.emit([...tuning]); // ! destructuring saved from mutations, service is required
      });

    this.form.controls.inEdit.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((inEdit) => {
        this.inEditMode.emit(inEdit);
      });
  }

  public ngAfterViewInit(): void {
    this.form.patchValue({
      tuning: KALIMBA_TUNINGS[0].value,
    });
  }
}
