import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  ResizeObserverService,
  RESIZE_OPTION_BOX,
} from '@ng-web-apis/resize-observer';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TunerChartService } from '../../services/tuner-chart.service';

@UntilDestroy()
@Component({
  selector: 'app-tuner-chart',
  templateUrl: './tuner-chart.component.html',
  styleUrls: ['./tuner-chart.component.scss'],
  providers: [
    ResizeObserverService,
    {
      provide: RESIZE_OPTION_BOX,
      useValue: 'border-box',
    },
  ],
})
export class TunerChartComponent implements AfterViewInit, OnDestroy {
  constructor(
    private readonly _self: ElementRef,
    @Inject(ResizeObserverService)
    private readonly _entries$: ResizeObserverService,
    private readonly _tunerChartService: TunerChartService
  ) {
    this._entries$.pipe(untilDestroyed(this)).subscribe((entries) => {
      this.onResize();
    });
  }

  @ViewChild('canv') public canv!: ElementRef;

  public currentFrequency = 0;

  public onResize(): void {
    const { clientWidth, clientHeight } = this._self.nativeElement;

    this.canv && this._tunerChartService.setSize(clientWidth, clientHeight);
  }

  public ngAfterViewInit(): void {
    this._tunerChartService.init(this.canv.nativeElement);

    this.onResize();
  }

  public ngOnDestroy(): void {
    this._tunerChartService.onDestroy();
  }
}
