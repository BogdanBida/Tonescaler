import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ScaleService } from 'src/app/core/services';

const MAX_TONGUE_HEIGHT = 75;

const MIN_TONGUE_HEIGHT = 40;

@Component({
  selector: 'app-kalimba',
  templateUrl: './kalimba.component.html',
  styleUrls: ['./kalimba.component.scss'],
})
export class KalimbaComponent implements OnChanges, AfterViewInit {
  constructor(private readonly _scaleService: ScaleService) {}

  @Input() public tongues: number[] | null = [];

  public whoInScale = this._scaleService.whoInScale.bind(this._scaleService);

  public getStage = this._scaleService.getStage.bind(this._scaleService);

  private _maxNote = 0;

  private _minNote = 0;

  public ngAfterViewInit(): void {}

  public ngOnChanges({ tongues }: SimpleChanges): void {
    if (tongues) {
      this._maxNote = Math.max(...tongues.currentValue);
      this._minNote = Math.min(...tongues.currentValue);
    }
  }

  public getTongueHeight(note: number): string {
    const value = note - this._minNote;

    const maxValue = this._maxNote - this._minNote;

    return (
      MIN_TONGUE_HEIGHT +
      ((maxValue - value) / maxValue) *
        (MAX_TONGUE_HEIGHT - MIN_TONGUE_HEIGHT) +
      '%'
    );
  }
}
