import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TunerChartComponent } from './components/tuner-chart/tuner-chart.component';
import { TunerControlsComponent } from './components/tuner-controls/tuner-controls.component';
import { TunerInfoComponent } from './components/tuner-info/tuner-info.component';
import { TunerSettingsComponent } from './components/tuner-settings/tuner-settings.component';
import { TunerRoutingModule } from './tuner-routing.module';
import { TunerComponent } from './tuner.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TunerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    TunerComponent,
    TunerControlsComponent,
    TunerInfoComponent,
    TunerChartComponent,
    TunerSettingsComponent,
  ],
})
export class TunerModule {}
