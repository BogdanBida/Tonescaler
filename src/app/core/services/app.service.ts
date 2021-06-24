import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Theme } from '../enums';
import { AppCookieService } from './app-cookie.service';
import { ThemeService } from './theme.service';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(
    private readonly _cookieService: AppCookieService,
    private readonly _themeService: ThemeService,
    private readonly _router: Router
  ) {}

  public enablePageTransition = true;

  public get isEnabledUiAnimations(): boolean {
    return this._isEnabledUiAnimations;
  }

  public isHomepage = this._router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => {
      return (event as NavigationEnd).urlAfterRedirects === '/home';
    })
  );

  private _isEnabledUiAnimations = true;

  public initApp(): void {
    this._initTheme();
  }

  public setUiAnimations(value: boolean): void {
    this._isEnabledUiAnimations = value;
    value
      ? document.documentElement.removeAttribute('data-disabled-animations')
      : document.documentElement.setAttribute(
          'data-disabled-animations',
          'true'
        );
  }

  private _initTheme(): void {
    const defaultTheme =
      this._cookieService.getPreferredTheme() ||
      (environment.defaultTheme as Theme);

    this._themeService.setTheme(defaultTheme);
  }
}
