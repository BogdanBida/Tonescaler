import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChordFinderService } from './../../../../core/services/chord-finder.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  constructor(private readonly _chordFinder: ChordFinderService) {}

  public typeForm = new FormGroup({
    isStringed: new FormControl(false),
  });

  public chordSelectorForm = new FormGroup({
    chord: new FormControl(''),
  });

  public chords$ = this._chordFinder.chordsDataAsArray$;

  public ngOnInit(): void {}
}
