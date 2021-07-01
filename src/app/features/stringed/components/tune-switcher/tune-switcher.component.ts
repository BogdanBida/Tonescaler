import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MAX_STRINGS, MIN_STRINGS } from '../../constants/stringed';

@Component({
  selector: 'app-tune-switcher',
  templateUrl: './tune-switcher.component.html',
  styleUrls: ['./tune-switcher.component.scss'],
})
export class TuneSwitcherComponent implements OnInit, OnChanges {
  @Input() public defaultTuning: number[] = [];

  @Output() public tuningChange = new EventEmitter<number[]>();

  public tuning: number[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (
      !this.tuning.length ||
      this.tuning.some((value, index) => value !== this.defaultTuning[index])
    ) {
      this.tuning = [...this.defaultTuning];
    }
  }

  public ngOnInit(): void {}

  public addString(): void {
    const len = this.tuning.length;

    if (len < MAX_STRINGS) {
      this.tuning.push(this.tuning[len - 1]);
      this.tuningChange.emit(this.tuning);
    }
  }

  public removeString(): void {
    if (this.tuning.length > MIN_STRINGS) {
      this.tuning.pop();
      this.tuningChange.emit(this.tuning);
    }
  }

  public increasePin(id: number): void {
    this.tuning[id]++;
    this.tuningChange.emit(this.tuning);
  }

  public decreasePin(id: number): void {
    this.tuning[id]--;
    this.tuningChange.emit(this.tuning);
  }
}
