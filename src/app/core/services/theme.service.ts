import { Injectable } from '@angular/core';
import { Theme } from './../enums/themes.enum';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private readonly _cookieService: AppCookieService) {}

  public selectedTheme: Theme | null = null;

  public setTheme(themeName: Theme): void {
    this.selectedTheme = themeName;
    this._cookieService.saveSelectedTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }
}
