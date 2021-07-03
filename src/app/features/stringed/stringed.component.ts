import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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
export class StringedComponent implements OnInit, AfterViewInit {
  constructor(private readonly _stringedService: StringedService) {}

  @ViewChild('controls', { read: ElementRef }) public controlsRef!: ElementRef;

  public selectedTuning$ = this._stringedService.selectedTune$;

  public neckLength$ = this._stringedService.neckLength$;

  public maxNeckHeight = '50vh';

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    this._setMaxNeckHeight();
  }

  private _setMaxNeckHeight(): void {
    this.maxNeckHeight = `calc(100vh - ${this.controlsRef.nativeElement.clientHeight}px)`;
    console.log(this.maxNeckHeight);
  }
}
