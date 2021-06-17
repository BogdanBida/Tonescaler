import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, TranslateModule.forChild()],
  declarations: [HomeComponent],
})
export class HomeModule {}
