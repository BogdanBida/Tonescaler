import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { range } from 'lodash-es';
import { NOTES } from 'src/app/core/constants';

const KEYS_AMOUNT = 20;

const START_NOTE = 3;

@Component({
  selector: 'app-piano-keyboard',
  templateUrl: './piano-keyboard.component.html',
  styleUrls: ['./piano-keyboard.component.scss'],
})
export class PianoKeyboardComponent implements OnInit {
  public form = new FormGroup({
    keys: new FormArray([]),
  });

  public get keys(): FormArray {
    return this.form.controls.keys as FormArray;
  }

  public getNote(index: number): string {
    return NOTES[(index + START_NOTE) % 12];
  }

  public isBlack(index: number): boolean {
    return this.getNote(index).includes('#');
  }

  public ngOnInit(): void {
    range(KEYS_AMOUNT).forEach((_, index) => {
      this.keys.push(new FormControl(false));
    });

    this.form.valueChanges.subscribe((formValues) => {
      const data = formValues.keys
        .map((v, i) => (v ? i + START_NOTE : false))
        .filter(Boolean);

      console.log(data);
    });
  }
}
