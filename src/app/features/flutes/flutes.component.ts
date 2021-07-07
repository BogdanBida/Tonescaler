import { Component, OnInit } from '@angular/core';
import { range } from 'lodash-es';
import { ScaleService } from 'src/app/core/services';
import { FLUTE_TYPES } from './constants/flute-types';
import { FluteType } from './models/flute-type';

@Component({
  selector: 'app-flutes',
  templateUrl: './flutes.component.html',
  styleUrls: ['./flutes.component.scss'],
})
export class FlutesComponent implements OnInit {
  constructor(private readonly _scaleService: ScaleService) {}

  public selectedType: FluteType = FLUTE_TYPES[2];

  public getNotes(): number[] {
    const root = this.selectedType.root;
    const topNote = root + this.selectedType.range;

    return this._scaleService.scale$.value
      ? this._scaleService.getNotesInScaleByRange(root, topNote)
      : range(root, topNote);
  }

  public ngOnInit(): void {}
}
