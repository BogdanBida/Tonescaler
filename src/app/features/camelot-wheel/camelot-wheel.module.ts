import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { CamelotWheelRoutingModule } from './camelot-wheel-routing.module';
import { CamelotWheelComponent } from './camelot-wheel.component';
import { WheelComponent } from './components/wheel/wheel.component';

@NgModule({
  imports: [CommonModule, SharedModule, CamelotWheelRoutingModule],
  declarations: [CamelotWheelComponent, WheelComponent],
})
export class CamelotWheelModule {}
