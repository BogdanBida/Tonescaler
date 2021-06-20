import { Component, OnInit } from '@angular/core';
import { TunerInfo } from './../../../../core/models/tuner-info';
import { TunerService } from './../../../../core/services/tuner.service';

@Component({
  selector: 'app-tuner-info',
  templateUrl: './tuner-info.component.html',
  styleUrls: ['./tuner-info.component.scss'],
})
export class TunerInfoComponent implements OnInit {
  constructor(private readonly _tunerService: TunerService) {}

  public info: TunerInfo | null = null;

  public ngOnInit(): void {
    this._tunerService.info.subscribe((info) => {
      this.info = info;
    });
  }

  public get isNeedUpper(): boolean {
    return !!this.info && this.info.cents < 0;
  }

  public get isNeedLower(): boolean {
    return !!this.info && this.info.cents > 0;
  }
}
