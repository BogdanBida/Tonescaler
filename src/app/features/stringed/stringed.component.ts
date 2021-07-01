import { Component, OnInit } from '@angular/core';
import { STRINGED_TUNINGS } from './../../core/constants/stringed-tunings';

@Component({
  selector: 'app-stringed',
  templateUrl: './stringed.component.html',
  styleUrls: ['./stringed.component.scss'],
})
export class StringedComponent implements OnInit {
  public selectedTuning = STRINGED_TUNINGS[0].value;

  public ngOnInit(): void {}
}
