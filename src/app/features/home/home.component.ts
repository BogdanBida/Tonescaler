import { Component, OnInit } from '@angular/core';
import { TunerInfo } from './../../core/models/tuner-info';
import { AudioPlayerService, TunerService } from './../../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly _audioPlayer: AudioPlayerService,
    private readonly _tunerService: TunerService
  ) {}

  public info: TunerInfo | null = null;

  public ngOnInit(): void {
    this._audioPlayer.initInstrument('acoustic_grand_piano');
    this._tunerService.initTuner().subscribe((info) => {
      this.info = info;
    });
  }

  public play(note: number): void {
    this._audioPlayer.play('acoustic_grand_piano', note);
  }

  public toggleTuner(): void {
    this._tunerService.toggleTuner();
  }
}
