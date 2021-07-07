import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FLUTE_TYPES } from './../../constants/flute-types';
import { FluteType } from './../../models/flute-type';

@UntilDestroy()
@Component({
  selector: 'app-block-flute-controls',
  templateUrl: './block-flute-controls.component.html',
  styleUrls: ['./block-flute-controls.component.scss'],
})
export class BlockFluteControlsComponent implements OnInit {
  @Output() public typeChange = new EventEmitter<FluteType>();

  public readonly types = FLUTE_TYPES;

  public readonly form = new FormGroup({
    type: new FormControl(null),
  });

  public ngOnInit(): void {
    this.form.patchValue({
      type: this.types[2],
    });

    this.form.controls.type.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((type) => {
        this.typeChange.emit(type);
      });
  }
}
