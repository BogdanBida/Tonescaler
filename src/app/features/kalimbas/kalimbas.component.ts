import { Component } from '@angular/core';
import { KALIMBA_TUNINGS } from './constants/kalimba-tunings';

@Component({
  selector: 'app-kalimbas',
  templateUrl: './kalimbas.component.html',
  styleUrls: ['./kalimbas.component.scss'],
})
export class KalimbasComponent {
  public tuning = KALIMBA_TUNINGS[0].value;
}
