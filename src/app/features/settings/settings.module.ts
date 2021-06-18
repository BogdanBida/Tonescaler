import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [SettingsComponent, ThemeSwitcherComponent],
})
export class SettingsModule {}
