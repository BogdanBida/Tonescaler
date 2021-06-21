import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-tuner-chart',
  templateUrl: './tuner-chart.component.html',
  styleUrls: ['./tuner-chart.component.scss'],
})
export class TunerChartComponent implements AfterViewInit {
  constructor(private readonly _self: ElementRef) {}

  @ViewChild('canv') public canv!: ElementRef;

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    const { clientHeight, clientWidth } = this._self.nativeElement;

    if (this.canv) {
      this.canv.nativeElement.width = clientWidth;
      this.canv.nativeElement.height = clientHeight;
    }
  }

  public ngAfterViewInit(): void {}
}
