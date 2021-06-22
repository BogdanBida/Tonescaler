import { Component, HostListener, OnInit } from '@angular/core';
import { AppTunerService } from 'src/app/core/services';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss'],
})
export class TunerComponent implements OnInit {
  constructor(private readonly _tunerService: AppTunerService) {}

  @HostListener('keypress')
  public anyKey(): void {
    // this._tunerService.initTuner();
  }

  public ngOnInit(): void {
    // this._tunerService.initTuner();
  }
}
