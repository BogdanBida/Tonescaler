import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { DEFAULT_KEYS_AMOUNT, MAX_KEYS, MIN_KEYS } from './constants/default';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss'],
})
export class KeyboardsComponent implements OnInit {
  public keysAmount = DEFAULT_KEYS_AMOUNT;

  public maxKeys = MAX_KEYS;

  public minKeys = MIN_KEYS;

  public ngOnInit(): void {}

  public updateKeyAmount(event: MatSliderChange): void {
    this.keysAmount = event.value || DEFAULT_KEYS_AMOUNT;
  }
}
