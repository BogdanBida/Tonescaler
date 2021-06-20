import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TunerChartComponent } from './components/tuner-chart/tuner-chart.component';
import { TunerControlsComponent } from './components/tuner-controls/tuner-controls.component';
import { TunerInfoComponent } from './components/tuner-info/tuner-info.component';
import { TunerRoutingModule } from './tuner-routing.module';
import { TunerComponent } from './tuner.component';

@NgModule({
  imports: [CommonModule, TunerRoutingModule, TranslateModule.forChild()],
  declarations: [
    TunerComponent,
    TunerControlsComponent,
    TunerInfoComponent,
    TunerChartComponent,
  ],
})
export class TunerModule {}
