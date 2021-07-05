import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { StringedService } from './services/stringed.service';

@UntilDestroy()
@Component({
  selector: 'app-stringed',
  templateUrl: './stringed.component.html',
  styleUrls: ['./stringed.component.scss'],
  providers: [StringedService],
})
export class StringedComponent implements AfterViewInit {
  constructor(private readonly _stringedService: StringedService) {}

  @ViewChild('controls', { read: ElementRef }) public controlsRef!: ElementRef;

  public selectedTuning$ = this._stringedService.selectedTuning$;

  public selectedInstrument$ = this._stringedService.selectedInstrument$;

  public neckLength$ = this._stringedService.neckLength$;

  public maxNeckHeight!: string;

  public ngAfterViewInit(): void {
    this._setMaxNeckHeight();
  }

  private _setMaxNeckHeight(): void {
    this.maxNeckHeight = `calc(100vh - ${this.controlsRef.nativeElement.clientHeight}px - 2.5em)`;
  }
}
