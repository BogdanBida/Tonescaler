import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [SettingsComponent, ThemeSwitcherComponent],
})
export class SettingsModule {}
