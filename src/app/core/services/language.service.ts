import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages, SettingTypes } from 'src/app/core/enums';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private readonly _translateService: TranslateService,
    private readonly _cookieService: AppCookieService
  ) {}

  public get currentLang(): Languages {
    return this._translateService.currentLang as Languages;
  }

  public use(lang: Languages): void {
    this._translateService.use(lang);
    this._cookieService.setSetting(SettingTypes.PreferredLang, lang);
  }
}
