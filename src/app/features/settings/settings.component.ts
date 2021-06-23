import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { Theme } from 'src/app/core/enums';
import { ThemeService } from 'src/app/core/services';
import { AppService } from 'src/app/core/services/app.service';
import { Language } from './../../core/enums/languages.enum';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(
    private readonly _themeService: ThemeService,
    private readonly _translateService: TranslateService,
    private readonly _appSerivce: AppService
  ) {}

  public form = new FormGroup({
    theme: new FormControl(this._themeService.selectedTheme),
    lang: new FormControl(this._translateService.currentLang),
    enablePageTransitions: new FormControl(
      this._appSerivce.enablePageTransition
    ),
    enableUiAnimations: new FormControl(this._appSerivce.isEnabledUiAnimations),
  });

  public themes = [Theme.Dark, Theme.Light];

  public langs = [Language.En, Language.Ru];

  public ngOnInit(): void {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe((data) => {
      const { theme, lang, enablePageTransitions, enableUiAnimations } = data;

      this._themeService.setTheme(theme);
      this._translateService.use(lang);
      this._appSerivce.enablePageTransition = !!enablePageTransitions;
      this._appSerivce.setUiAnimations(enableUiAnimations);
    });
  }
}
