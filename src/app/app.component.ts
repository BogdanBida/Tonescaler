import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';
import { AppCookieService } from './core/services/app-cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly _translateService: TranslateService,
    private readonly _cookieService: AppCookieService
  ) {
    const defaultLang =
      this._cookieService.getPreferredLanguage() ||
      this._translateService.getBrowserLang() ||
      environment.defaultLang;

    this._translateService.setDefaultLang(defaultLang);
    this._translateService.use(defaultLang);
  }

  public title = 'tonescaler';
}
