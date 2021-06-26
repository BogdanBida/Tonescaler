import { Component, OnInit } from '@angular/core';
import { ChordFinderService } from './../../core/services/chord-finder.service';

@Component({
  selector: 'app-chord-finder',
  templateUrl: './chord-finder.component.html',
  styleUrls: ['./chord-finder.component.scss'],
})
export class ChordFinderComponent implements OnInit {
  constructor(private readonly _chordFinderService: ChordFinderService) {}

  public ngOnInit(): void {}

  public onSelectedNotes(notes: number[]): void {
    this._chordFinderService.recognize(notes);
  }
}
