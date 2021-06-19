import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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

  public circularMenuIsOpened = new BehaviorSubject<boolean>(false);

  public initApp(): void {
    this._initTheme();
  }

  public toggleCircularMenu(value?: boolean): void {
    this.circularMenuIsOpened.next(
      value !== undefined ? value : !this.circularMenuIsOpened.value
    );
  }

  private _initTheme(): void {
    const defaultTheme =
      this._cookieService.getPreferredTheme() ||
      (environment.defaultTheme as Theme);

    this._themeService.setTheme(defaultTheme);
  }
}
