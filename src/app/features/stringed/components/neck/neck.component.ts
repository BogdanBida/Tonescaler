import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_FRET_AMOUNTS } from '../../constants/stringed';

@Component({
  selector: 'app-neck',
  templateUrl: './neck.component.html',
  styleUrls: ['./neck.component.scss'],
})
export class NeckComponent implements OnInit {
  @Input() public fretAmounts = DEFAULT_FRET_AMOUNTS;

  @Input() public tuning = [];

  // constructor() { }

  public ngOnInit(): void {}
}
