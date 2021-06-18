import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
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
    private readonly _themeService: ThemeService,
    private readonly _router: Router
  ) {}

  public isHomepage = this._router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => {
      return (event as NavigationEnd).url === '/home';
    })
  );

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
