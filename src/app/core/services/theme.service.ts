import { Injectable } from '@angular/core';
import { Theme } from './../enums/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public setTheme(themeName: Theme): void {
    document.documentElement.setAttribute('data-theme', themeName);
  }
}
