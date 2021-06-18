import { Injectable } from '@angular/core';
import { Theme } from './../enums/themes.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public selectedTheme: Theme | null = null;

  public setTheme(themeName: Theme): void {
    this.selectedTheme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
  }
}
