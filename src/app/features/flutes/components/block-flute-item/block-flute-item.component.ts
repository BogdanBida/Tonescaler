import { Component, Input, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/core/services';
import { FluteHoleStatus } from '../../enums/flute-hole-status.enum';
import { FluteType } from './../../models/flute-type';

@Component({
  selector: 'app-block-flute-item',
  templateUrl: './block-flute-item.component.svg',
  styleUrls: ['./block-flute-item.component.scss'],
})
export class BlockFluteItemComponent implements OnInit {
  constructor(private readonly _scaleService: ScaleService) {}

  @Input() public note!: number;

  @Input() public type: FluteType | null = null;

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  public ngOnInit(): void {}

  public getHoleColor(holeIndex: number): string {
    if (!this.type) {
      return 'none';
    }

    const index = this.note - this.type.root;
    const status = this.type.applicature[index][holeIndex];

    switch (status as FluteHoleStatus) {
      case FluteHoleStatus.N:
        return 'transparent';
      case FluteHoleStatus.O:
        return 'black';
      case FluteHoleStatus.C:
        return 'var(--main-color)';
      case FluteHoleStatus.H:
        return 'url(#halfclosed-gradient)';
    }
  }
}
