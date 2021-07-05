import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HARP_TYPES } from 'src/app/core/constants/harp-types';

@UntilDestroy()
@Component({
  selector: 'app-harp-controls',
  templateUrl: './harp-controls.component.html',
  styleUrls: ['./harp-controls.component.scss'],
})
export class HarpControlsComponent implements OnInit, AfterViewInit {
  @Output() public selectType = new EventEmitter<number[]>();

  @Output() public inEditMode = new EventEmitter<boolean>();

  public form = new FormGroup({
    tuning: new FormControl(null),
    inEdit: new FormControl(false),
  });

  public harpTypes = HARP_TYPES;

  public ngOnInit(): void {
    this.form.controls.tuning.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((tuning) => {
        this.selectType.emit([...tuning]); // ! destructuring saved from mutations, service is required
      });

    this.form.controls.inEdit.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((inEdit) => {
        this.inEditMode.emit(inEdit);
      });
  }

  public ngAfterViewInit(): void {
    this.form.patchValue({
      tuning: HARP_TYPES[0].value,
    });
  }
}
