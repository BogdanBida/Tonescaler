import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SCALE_PALETTES } from '../constants/scale-palettes';
import { ScalePalettes, SettingTypes, Themes } from './../enums';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private readonly _cookieService: AppCookieService) {}

  public selectedTheme: Themes | null = null;

  public selectedScalePalette$ = new BehaviorSubject<ScalePalettes>(
    environment.defaultScalePalette as ScalePalettes
  );

  public setTheme(themeName: Themes): void {
    this.selectedTheme = themeName;
    this._cookieService.setSetting(SettingTypes.PreferredTheme, themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }

  public setScalePalette(paletteName: ScalePalettes): void {
    this.selectedScalePalette$.next(paletteName);
    let palette = SCALE_PALETTES[this.selectedScalePalette$.value];

    if (!palette) {
      this.selectedScalePalette$.next(
        environment.defaultScalePalette as ScalePalettes
      );
      palette = SCALE_PALETTES[this.selectedScalePalette$.value];
      console.warn('Unknown palette. It was installed by default');
    }

    this._cookieService.setSetting(
      SettingTypes.PreferredScalePalette,
      this.selectedScalePalette$.value
    );
  }

  public getScalePalette(defaultColor = 'transparent'): string[] {
    return [defaultColor, ...SCALE_PALETTES[this.selectedScalePalette$.value]];
  }
}
