import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from 'src/app/shared/shared.module';
import { KalimbaControlsComponent } from './components/kalimba-controls/kalimba-controls.component';
import { KalimbaComponent } from './components/kalimba/kalimba.component';
import { KalimbasRoutingModule } from './kalimbas-routing.module';
import { KalimbasComponent } from './kalimbas.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    KalimbasRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  declarations: [KalimbasComponent, KalimbaComponent, KalimbaControlsComponent],
})
export class KalimbasModule {}
