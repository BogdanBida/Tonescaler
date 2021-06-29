import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Languages, Themes } from 'src/app/core/enums';
import { LanguageService, ThemeService } from 'src/app/core/services';
import { AppService } from 'src/app/core/services/app.service';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(
    private readonly _themeService: ThemeService,
    private readonly _languageService: LanguageService,
    private readonly _appSerivce: AppService
  ) {}

  public commonSettingsForm = new FormGroup({
    theme: new FormControl(this._themeService.selectedTheme),
    lang: new FormControl(this._languageService.currentLang),
  });

  public animSettingsForm = new FormGroup({
    enablePageTransitions: new FormControl(
      this._appSerivce.isEnabledPageTransitions
    ),
    enableUiAnimations: new FormControl(this._appSerivce.isEnabledUiAnimations),
  });

  public themes = [Themes.Dark, Themes.Light];

  public langs = [Languages.En, Languages.Ru];

  public ngOnInit(): void {
    this.commonSettingsForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this._themeService.setTheme(data.theme);
        this._languageService.use(data.lang);
      });

    this.animSettingsForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this._appSerivce.isEnabledPageTransitions = data.enablePageTransitions;
        this._appSerivce.isEnabledUiAnimations = data.enableUiAnimations;
      });
  }
}
