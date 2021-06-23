import { Component, OnDestroy } from '@angular/core';
import { TunerService } from 'src/app/core/services';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss'],
})
export class TunerComponent implements OnDestroy {
  constructor(private readonly _tunerService: TunerService) {}

  public ngOnDestroy(): void {
    this._tunerService.toggleTuner(false);
  }
}
