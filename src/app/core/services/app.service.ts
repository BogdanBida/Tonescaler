import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Theme } from '../enums';
import { AppCookieService } from './app-cookie.service';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private readonly _translateService: TranslateService,
    private readonly _cookieService: AppCookieService,
    private readonly _themeService: ThemeService
  ) {}

  public initApp(): void {
    this._initTheme();
    this._initLang();
  }

  private _initTheme(): void {
    const defaultTheme =
      this._cookieService.getPreferredTheme() ||
      (environment.defaultTheme as Theme);

    this._themeService.setTheme(defaultTheme);
  }

  private _initLang(): void {
    const defaultLang =
      this._cookieService.getPreferredLanguage() ||
      this._translateService.getBrowserLang() ||
      environment.defaultLang;

    this._translateService.setDefaultLang(defaultLang);
    this._translateService.use(defaultLang);
  }
}
