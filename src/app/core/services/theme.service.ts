import { Injectable } from '@angular/core';
import { SettingTypes, Themes } from './../enums';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private readonly _cookieService: AppCookieService) {}

  public selectedTheme: Themes | null = null;

  public setTheme(themeName: Themes): void {
    this.selectedTheme = themeName;
    this._cookieService.setSetting(SettingTypes.PreferredTheme, themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }
}
