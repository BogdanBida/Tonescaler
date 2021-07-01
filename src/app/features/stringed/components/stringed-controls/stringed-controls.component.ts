import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { STRINGED_TUNINGS } from './../../../../core/constants/stringed-tunings';

@Component({
  selector: 'app-stringed-controls',
  templateUrl: './stringed-controls.component.html',
  styleUrls: ['./stringed-controls.component.scss'],
})
export class StringedControlsComponent implements OnInit {
  @Output() public tuningChange = new EventEmitter<number[]>();

  public stringedTunings: { name: string; value: number[] }[] =
    STRINGED_TUNINGS;

  public form = new FormGroup({
    tuning: new FormControl(this.stringedTunings[0].value),
  });

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      this.tuningChange.emit(data.tuning);
    });
  }
}
