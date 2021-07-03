import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { KalimbasRoutingModule } from './kalimbas-routing.module';
import { KalimbasComponent } from './kalimbas.component';

@NgModule({
  imports: [CommonModule, SharedModule, KalimbasRoutingModule],
  declarations: [KalimbasComponent],
})
export class KalimbasModule {}
