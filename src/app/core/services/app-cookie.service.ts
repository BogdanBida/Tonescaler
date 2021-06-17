import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Language } from '../enums/languages.enum';

enum CookieKeys {
  PreferredLang = 'preferred_language',
}

@Injectable({
  providedIn: 'root',
})
export class AppCookieService {
  constructor(private readonly _cookieService: CookieService) {}

  public saveSelectedLanguage(lang: Language): void {
    this._cookieService.set(CookieKeys.PreferredLang, lang);
  }

  public getPreferredLanguage(): Language | null {
    return this._cookieService.check(CookieKeys.PreferredLang)
      ? (this._cookieService.get(CookieKeys.PreferredLang) as Language)
      : null;
  }
}
