import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieKeys } from '../enums';
import { Language } from '../enums/languages.enum';
import { Theme } from './../enums/themes.enum';

const PREFIX = 'tonescaler-';

@Injectable({
  providedIn: 'root',
})
export class AppCookieService {
  constructor(private readonly _cookieService: CookieService) {}

  public saveSelectedLanguage(lang: Language): void {
    this._cookieService.set(CookieKeys.PreferredLang, lang);
  }

  public saveSelectedTheme(themeName: Theme): void {
    this._cookieService.set(CookieKeys.PreferredTheme, themeName);
  }

  public getPreferredLanguage(): Language | null {
    return this._cookieService.check(CookieKeys.PreferredLang)
      ? (this._cookieService.get(CookieKeys.PreferredLang) as Language)
      : null;
  }

  public getPreferredTheme(): Theme | null {
    return this._cookieService.check(CookieKeys.PreferredTheme)
      ? (this._cookieService.get(CookieKeys.PreferredTheme) as Theme)
      : null;
  }

  public saveData(data: any): void {
    Object.entries(data).forEach(([key, value]) => {
      this._cookieService.set(PREFIX + key, value as string);
    });
  }
}
