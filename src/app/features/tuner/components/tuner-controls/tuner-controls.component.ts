import { Component } from '@angular/core';
import { TunerService } from './../../../../core/services/tuner.service';

@Component({
  selector: 'app-tuner-controls',
  templateUrl: './tuner-controls.component.html',
  styleUrls: ['./tuner-controls.component.scss'],
})
export class TunerControlsComponent {
  constructor(private readonly _tunerService: TunerService) {}

  public isActive = this._tunerService.isEnabled;

  public toggle = this._tunerService.toggleTuner.bind(this._tunerService);
}
