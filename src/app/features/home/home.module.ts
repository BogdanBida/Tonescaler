import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, TranslateModule.forChild()],
  declarations: [HomeComponent, SettingsButtonComponent],
})
export class HomeModule {}
