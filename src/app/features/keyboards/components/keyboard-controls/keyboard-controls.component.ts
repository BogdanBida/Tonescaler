import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { MAX_KEYS, MIN_KEYS } from '../../constants/default';
import { DEFAULT_KEYS_AMOUNT } from './../../constants/default';

@Component({
  selector: 'app-keyboard-controls',
  templateUrl: './keyboard-controls.component.html',
  styleUrls: ['./keyboard-controls.component.scss'],
})
export class KeyboardControlsComponent implements OnInit {
  @Output() public keysAmountEvent = new EventEmitter<number>();

  @Input() public maxKeys = MAX_KEYS;

  @Input() public minKeys = MIN_KEYS;

  public set keysAmount(value: number) {
    this._keysAmount = value;
    this.keysAmountEvent.emit(value);
  }

  public get keysAmount(): number {
    return this._keysAmount;
  }

  private _keysAmount = DEFAULT_KEYS_AMOUNT;

  public ngOnInit(): void {
    this.keysAmountEvent.emit(this.keysAmount);
  }

  public updateKeyAmount(event: MatSliderChange): void {
    this.keysAmountEvent.emit(event.value || DEFAULT_KEYS_AMOUNT);
  }
}
