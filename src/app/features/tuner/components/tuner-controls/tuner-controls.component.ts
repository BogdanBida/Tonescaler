import { Component, HostBinding } from '@angular/core';
import { AppTunerService } from 'src/app/core/services/app-tuner.service';

@Component({
  selector: 'app-tuner-controls',
  templateUrl: './tuner-controls.component.html',
  styleUrls: ['./tuner-controls.component.scss'],
})
export class TunerControlsComponent {
  constructor(private readonly _tunerService: AppTunerService) {}

  @HostBinding('class.isActive') public get isActive(): boolean {
    return this._tunerService.isEnabled.value;
  }

  public toggle = this._tunerService.toggleTuner.bind(this._tunerService);
}
