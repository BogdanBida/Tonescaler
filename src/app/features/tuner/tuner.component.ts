import { Component, HostListener, OnInit } from '@angular/core';
import { TunerService } from 'src/app/core/services';

@Component({
  selector: 'app-tuner',
  templateUrl: './tuner.component.html',
  styleUrls: ['./tuner.component.scss'],
})
export class TunerComponent implements OnInit {
  constructor(private readonly _tunerService: TunerService) {}

  @HostListener('keypress')
  public anyKey(): void {
    // this._tunerService.initTuner();
  }

  public ngOnInit(): void {
    // this._tunerService.initTuner();
  }
}
