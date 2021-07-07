import { Component, Input, OnInit } from '@angular/core';
import { ScaleService } from 'src/app/core/services';

@Component({
  selector: 'app-block-flute-item',
  templateUrl: './block-flute-item.component.svg',
  styleUrls: ['./block-flute-item.component.scss'],
})
export class BlockFluteItemComponent implements OnInit {
  constructor(private readonly _scaleService: ScaleService) {}

  @Input() public note!: number;

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  public ngOnInit(): void {}
}
