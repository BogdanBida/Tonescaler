import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HARP_TYPES } from 'src/app/core/constants/harp-types';

@Component({
  selector: 'app-harp-controls',
  templateUrl: './harp-controls.component.html',
  styleUrls: ['./harp-controls.component.scss'],
})
export class HarpControlsComponent implements OnInit, AfterViewInit {
  @Output() public selectType = new EventEmitter<number[]>();

  public form = new FormGroup({
    tuning: new FormControl(null),
  });

  public harpTypes = HARP_TYPES;

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      console.log(data);
      this.selectType.emit(data.tuning);
    });
  }

  public ngAfterViewInit(): void {
    this.form.patchValue({
      tuning: HARP_TYPES[0].value,
    });
  }
}
