import { Component } from '@angular/core';
import { DEFAULT_KEYS_AMOUNT } from './constants/default';

@Component({
  selector: 'app-keyboards',
  templateUrl: './keyboards.component.html',
  styleUrls: ['./keyboards.component.scss'],
})
export class KeyboardsComponent {
  public keysAmount = DEFAULT_KEYS_AMOUNT;
}
