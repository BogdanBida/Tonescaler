import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TunerService } from 'src/app/core/services';
import { TunerSettingsComponent } from './components/tuner-settings/tuner-settings.component';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss'],
})
export class TunerComponent implements OnDestroy {
  constructor(
    private readonly _tunerService: TunerService,
    private readonly _dialog: MatDialog
  ) {}

  public openSettingsDialog(): void {
    this._dialog.open(TunerSettingsComponent);
  }

  public ngOnDestroy(): void {
    this._tunerService.toggleTuner(false);
  }
}
