import { Inject, Injectable } from '@angular/core';
import { NAVIGATOR, WINDOW } from '@ng-web-apis/common';
import Pitchfinder from 'pitchfinder';
import { BehaviorSubject } from 'rxjs';
import {
  BUFFER_LENGTH,
  FFT_SIZE,
  MEDIA_STREAM_CONSTRAINTS,
} from '../constants';
import { TunerInfo } from '../models/tuner-info';
import { autoCorrelate } from '../utils';
import { centsOffFromPitch, nearestNoteByFrequency } from '../utils/convertors';
import { PitchDetectors } from './../enums/pitch-detectors.enum';

@Injectable({
  providedIn: 'root',
})
export class TunerService {
  constructor(
    @Inject(NAVIGATOR) private readonly _navigator: Navigator,
    @Inject(WINDOW) private readonly _window: Window
  ) {
    this._analyser.fftSize = FFT_SIZE;
  }

  public isEnabled$ = new BehaviorSubject<boolean>(false);

  public info$ = new BehaviorSubject<TunerInfo | null>(null);

  private _pitchDetector!: (stream: Float32Array) => number | null;

  private readonly _audioContext = new AudioContext();

  private readonly _analyser = this._audioContext.createAnalyser();

  private _mediaStreamSource!: MediaStreamAudioSourceNode;

  private readonly _buffer = new Float32Array(BUFFER_LENGTH);

  private _rafID = 0;

  public setPitchDetector(type: PitchDetectors): void {
    const pitchDetectors = [
      Pitchfinder.YIN(),
      Pitchfinder.AMDF(),
      Pitchfinder.DynamicWavelet(),
      (buffer: Float32Array): number =>
        autoCorrelate(buffer, this._audioContext.sampleRate),
    ];

    this._pitchDetector = pitchDetectors[type];
  }

  public toggleTuner(value?: boolean): void {
    this.isEnabled$.next(value === undefined ? !this.isEnabled$.value : value);

    if (this.isEnabled$.value) {
      if (this._pitchDetector === undefined) {
        this.setPitchDetector(PitchDetectors.Yin);
      }

      this._getUserMedia(MEDIA_STREAM_CONSTRAINTS, (stream) =>
        this._gotStream(stream)
      );
    } else {
      this._detachAudio();
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

  private _detachAudio(): void {
    this._mediaStreamSource &&
      this._mediaStreamSource.mediaStream
        .getAudioTracks()
        .forEach((track) => (track.enabled = false));
  }

  private _gotStream(stream: MediaStream): void {
    // Create an AudioNode from the stream.
    this._mediaStreamSource =
      this._audioContext.createMediaStreamSource(stream);

    // Connect it to the destination.
    this._mediaStreamSource.connect(this._analyser);
    this._updatePitch();
  }

  private _updatePitch(): void {
    this._analyser && this._analyser.getFloatTimeDomainData(this._buffer);

    const pitch = this._pitchDetector(this._buffer);

    if (pitch !== -1 && pitch !== null) {
      const note = nearestNoteByFrequency(pitch);

      this.info$.next({
        pitch: Math.round(pitch),
        note,
        detune: centsOffFromPitch(pitch, note),
      });
    }

    if (this.isEnabled$.value) {
      this._rafID = this._window.requestAnimationFrame(() =>
        this._updatePitch()
      );
    }
  }
}
