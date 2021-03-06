import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ScalePalettes, SettingTypes, Themes } from '../enums';
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

  public get isEnabledUiAnimations(): boolean {
    return this._isEnabledUiAnimations;
  }

  public set isEnabledUiAnimations(value: boolean) {
    this._isEnabledUiAnimations = value;
    value
      ? document.documentElement.removeAttribute('data-disabled-animations')
      : document.documentElement.setAttribute(
          'data-disabled-animations',
          'true'
        );
    this._cookieService.setSetting(
      SettingTypes.IsEnabledUiAnimations,
      String(value)
    );
  }

  public get isEnabledPageTransitions(): boolean {
    return this._isEnabledPageTransitions;
  }

  public set isEnabledPageTransitions(value: boolean) {
    this._isEnabledPageTransitions = value;
    this._cookieService.setSetting(
      SettingTypes.IsEnabledPageTransitions,
      String(value)
    );
  }

  public isHomepage = this._router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => {
      return (event as NavigationEnd).urlAfterRedirects === '/home';
    })
  );

  private _isEnabledUiAnimations = true;

  private _isEnabledPageTransitions = true;

  public initApp(): void {
    this._initTheme();
    this._initAnimations();
  }

  private _initTheme(): void {
    const defaultTheme =
      this._cookieService.getSetting(SettingTypes.PreferredTheme) ||
      environment.defaultTheme;

    this._themeService.setTheme(defaultTheme as Themes);

    const defaultScalePalette =
      this._cookieService.getSetting(SettingTypes.PreferredScalePalette) ||
      environment.defaultScalePalette;

    this._themeService.setScalePalette(defaultScalePalette as ScalePalettes);
  }

  private _initAnimations(): void {
    const isEnabledPageTransitions = this._cookieService.getSetting(
      SettingTypes.IsEnabledPageTransitions
    );

    this.isEnabledPageTransitions = isEnabledPageTransitions
      ? isEnabledPageTransitions === 'true'
      : this._isEnabledPageTransitions;

    const isEnabledUiAnimations = this._cookieService.getSetting(
      SettingTypes.IsEnabledUiAnimations
    );

    this.isEnabledUiAnimations = isEnabledUiAnimations
      ? isEnabledUiAnimations === 'true'
      : this._isEnabledUiAnimations;
  }
}
