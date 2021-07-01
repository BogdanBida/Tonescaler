import { Component, OnInit } from '@angular/core';
import { StringedService } from './services/stringed.service';

@Component({
  selector: 'app-stringed',
  templateUrl: './stringed.component.html',
  styleUrls: ['./stringed.component.scss'],
})
export class StringedComponent implements OnInit {
  constructor(private readonly _stringedService: StringedService) {}

  public selectedTuning$ = this._stringedService.selectedTune$;

  public ngOnInit(): void {}
}
