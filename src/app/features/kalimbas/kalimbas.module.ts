import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { KalimbaControlsComponent } from './components/kalimba-controls/kalimba-controls.component';
import { KalimbaComponent } from './components/kalimba/kalimba.component';
import { KalimbasRoutingModule } from './kalimbas-routing.module';
import { KalimbasComponent } from './kalimbas.component';

@NgModule({
  imports: [CommonModule, SharedModule, KalimbasRoutingModule],
  declarations: [KalimbasComponent, KalimbaComponent, KalimbaControlsComponent],
})
export class KalimbasModule {}
