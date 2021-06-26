import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChordFinderService } from 'src/app/core/services/chord-finder.service';

@UntilDestroy()
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(private readonly _chordFinderService: ChordFinderService) {}

  public currentChord!: string | null;

  public ngOnInit(): void {
    this._chordFinderService.result$
      .pipe(untilDestroyed(this))
      .subscribe((currentChord) => {
        this.currentChord = currentChord;
      });
  }
}
