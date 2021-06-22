import { Inject, Injectable } from '@angular/core';
import { NAVIGATOR, WINDOW } from '@ng-web-apis/common';
import { BehaviorSubject } from 'rxjs';
import { BUFFER_LENGTH, MEDIA_STREAM_CONSTRAINTS } from '../constants';
import { OCTAVE_OFFSET } from '../constants/notes';
import { TunerInfo } from '../models/tuner-info';
import { autoCorrelate } from '../utils';
import { centsOffFromPitch, nearestNoteByFrequency } from '../utils/convertors';

@Injectable({
  providedIn: 'root',
})
export class TunerService {
  constructor(
    @Inject(NAVIGATOR) private readonly _navigator: Navigator,
    @Inject(WINDOW) private readonly _window: Window
  ) {}

  public isEnabled = new BehaviorSubject<boolean>(false);

  public info = new BehaviorSubject<TunerInfo | null>(null);

  private readonly _audioContext = new AudioContext();

  private _analyser!: AnalyserNode | null;

  private _mediaStreamSource!: MediaStreamAudioSourceNode;

  private readonly _buffer = new Float32Array(BUFFER_LENGTH);

  private _rafID = 0;

  public initTuner(): void {
    console.log('todo: implement this method');
  }

  public detachTuner(): void {
    this._analyser = null;
  }

  public toggleTuner(): void {
    this.isEnabled.next(!this.isEnabled.value);

    if (this.isEnabled.value) {
      this._getUserMedia(MEDIA_STREAM_CONSTRAINTS, (stream) =>
        this._gotStream(stream)
      );
    } else {
      this._analyser = null;
      this._window.cancelAnimationFrame(this._rafID);
    }
  }

  private _getUserMedia(
    streamConstraints: MediaStreamConstraints,
    callback: (stream: MediaStream) => void
  ): void {
    try {
      this._navigator.mediaDevices
        .getUserMedia(streamConstraints)
        .then(callback)
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error('getUserMedia threw exception :' + error);
    }
  }

  private _gotStream(stream: MediaStream): void {
    // Create an AudioNode from the stream.
    this._mediaStreamSource =
      this._audioContext.createMediaStreamSource(stream);

    // Connect it to the destination.
    this._analyser = this._audioContext.createAnalyser();
    this._analyser.fftSize = 2048;
    this._mediaStreamSource.connect(this._analyser);
    this._updatePitch();
  }

  private _updatePitch(): void {
    this._analyser && this._analyser.getFloatTimeDomainData(this._buffer);

    const pitch = autoCorrelate(this._buffer, this._audioContext.sampleRate);

    if (pitch !== -1) {
      const note = nearestNoteByFrequency(pitch);

      this.info.next({
        pitch: Math.round(pitch),
        note: note + OCTAVE_OFFSET,
        detune: centsOffFromPitch(pitch, note),
      });
    }

    if (this.isEnabled.value) {
      this._rafID = this._window.requestAnimationFrame(() =>
        this._updatePitch()
      );
    }
  }
}
