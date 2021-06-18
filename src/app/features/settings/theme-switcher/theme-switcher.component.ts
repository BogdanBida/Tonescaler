import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Theme } from './../../../core/enums/themes.enum';
import { ThemeService } from './../../../core/services/theme.service';

@UntilDestroy()
@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  constructor(private readonly _themeService: ThemeService) {}

  public form = new FormGroup({
    theme: new FormControl(this._themeService.selectedTheme),
  });

  public themes = [Theme.Dark, Theme.Light];

  public ngOnInit(): void {
    this.form.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
      const themeName = this.form.value.theme;

      this._themeService.setTheme(themeName);
    });
  }
}
