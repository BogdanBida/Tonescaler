import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CircularMenuComponent } from './components/circular-menu/circular-menu.component';
import { HelperMenuComponent } from './components/helper-menu/helper-menu.component';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { MusicboxButtonComponent } from './components/musicbox-button/musicbox-button.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    HomeComponent,
    CircularMenuComponent,
    MusicboxButtonComponent,
    HelperMenuComponent,
    MainTitleComponent,
  ],
})
export class HomeModule {}
