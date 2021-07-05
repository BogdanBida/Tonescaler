import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { range } from 'lodash-es';
import { NOTES } from 'src/app/core/constants';

const KEYS_AMOUNT = 24;

const DEFAULT_START_NOTE = 27; // C;

@UntilDestroy()
@Component({
  selector: 'app-piano-keyboard',
  templateUrl: './piano-keyboard.component.html',
  styleUrls: ['./piano-keyboard.component.scss'],
})
export class PianoKeyboardComponent implements OnInit, OnChanges {
  @Input() public startNote = DEFAULT_START_NOTE;

  @Input() public selectedNotes: number[] = [];

  @Output() public selectNotes = new EventEmitter<number[]>();

  public form = new FormGroup({
    keys: new FormArray([]),
  });

  public get keys(): FormArray {
    return this.form.controls.keys as FormArray;
  }

  public getNote(index: number): string {
    return NOTES[(index + this.startNote) % 12];
  }

  public isBlack(index: number): boolean {
    return this.getNote(index).includes('#');
  }

  public ngOnInit(): void {
    range(KEYS_AMOUNT).forEach((_, index) => {
      this.keys.push(new FormControl(false));
    });

    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((formValues) => {
      const data = formValues.keys
        .map((v, i) => (v ? i + this.startNote : false))
        .filter(Boolean);

      this.selectNotes.emit(data);
    });
  }

  public ngOnChanges({ selectedNotes }: SimpleChanges): void {
    if (selectedNotes) {
      const val = selectedNotes.currentValue;

      this.keys.controls.forEach((value, index) => {
        value.patchValue(val.includes(index + this.startNote));
      });
    }
  }
}
