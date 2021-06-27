import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AudioPlayerService } from './../../../../core/services/audio-player.service';
import { ChordFinderService } from './../../../../core/services/chord-finder.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  constructor(
    private readonly _chordFinder: ChordFinderService,
    private readonly _audioPlayer: AudioPlayerService
  ) {}

  @Output() public selectChord = new EventEmitter<number[]>();

  public has$ = this._chordFinder.lastSelectedNotes$;

  public typeForm = new FormGroup({
    isStringed: new FormControl(false),
  });

  public chordSelectorForm = new FormGroup({
    chord: new FormControl(''),
  });

  public chords$ = this._chordFinder.chordsData$;

  public play(): void {
    this._chordFinder.lastSelectedNotes$.value.forEach((note) => {
      this._audioPlayer.play('acoustic_grand_piano', note);
    });
  }

  public setChord(): void {
    const tonic = this._chordFinder.firstNoteOfLastSelected;

    if (tonic === null) {
      return;
    }

    const chordIntervals: number[] =
      this.chordSelectorForm.controls.chord.value;

    const chord: number[] = [tonic];

    chordIntervals &&
      chordIntervals.forEach((value, index) =>
        chord.push(chord[index] + value + 1)
      );

    this.selectChord.emit(chord);
  }

  public ngOnInit(): void {
    this._audioPlayer.initInstrument('acoustic_grand_piano');
  }
}
