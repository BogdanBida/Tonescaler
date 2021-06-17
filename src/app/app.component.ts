import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _translateService: TranslateService) {
    this._translateService.setDefaultLang(environment.defaultLang);
    this._translateService.use(environment.defaultLang);
  }

  public title = 'tonescaler';
}
