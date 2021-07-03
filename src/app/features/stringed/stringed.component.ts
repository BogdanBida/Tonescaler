import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { StringedService } from './services/stringed.service';

@UntilDestroy()
@Component({
  selector: 'app-stringed',
  templateUrl: './stringed.component.html',
  styleUrls: ['./stringed.component.scss'],
})
export class StringedComponent implements AfterViewInit, OnDestroy {
  constructor(private readonly _stringedService: StringedService) {}

  @ViewChild('controls', { read: ElementRef }) public controlsRef!: ElementRef;

  public selectedTuning$ = this._stringedService.selectedTuning$;

  public neckLength$ = this._stringedService.neckLength$;

  public maxNeckHeight = '50vh';

  public ngAfterViewInit(): void {
    this._setMaxNeckHeight();
  }

  public ngOnDestroy(): void {
    this._stringedService.resetTuning();
  }

  private _setMaxNeckHeight(): void {
    this.maxNeckHeight = `calc(100vh - ${this.controlsRef.nativeElement.clientHeight}px)`;
    console.log(this.maxNeckHeight);
  }
}
