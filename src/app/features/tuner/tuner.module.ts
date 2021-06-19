import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TunerRoutingModule } from './tuner-routing.module';
import { TunerComponent } from './tuner.component';

@NgModule({
  imports: [CommonModule, TunerRoutingModule, TranslateModule.forChild()],
  declarations: [TunerComponent],
})
export class TunerModule {}
