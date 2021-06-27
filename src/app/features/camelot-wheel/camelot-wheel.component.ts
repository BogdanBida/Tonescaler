import { Component, OnInit } from '@angular/core';
import { SECTORS } from './constants/camelot-wheel';

@Component({
  selector: 'app-camelot-wheel',
  templateUrl: './camelot-wheel.component.html',
  styleUrls: ['./camelot-wheel.component.scss'],
})
export class CamelotWheelComponent implements OnInit {
  public sectors = SECTORS;

  public ngOnInit(): void {}
}
