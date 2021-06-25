import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AudioPlayerService } from './../../core/services/audio-player.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements AfterViewInit {
  constructor(
    private readonly _self: ElementRef,
    private readonly _audioPlayerService: AudioPlayerService
  ) {}

  public freenotes: any[] = [];

  public playNote(index: number): void {
    this._audioPlayerService.play('alto_sax', this.freenotes[index].note);
  }

  public ngAfterViewInit(): void {
    this._audioPlayerService.initInstrument('alto_sax');
    const { clientWidth, clientHeight } = this._self.nativeElement;

    const amount = 20;

    // TODO: Brownian motion
    // range(amount).forEach((_) => {
    //   this.freenotes.push({
    //     note: 12 + Math.round(Math.random() * amount),
    //     style: {
    //       top: `${Math.random() * clientHeight - 44}px`,
    //       left: `${Math.random() * clientWidth - 44}px`,
    //       'animation-duration': 10 + Math.random() * 20 + 's',
    //     },
    //     initialDegree: Math.random() * 360,
    //   });
    // });
  }
}
