import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { HarmonicasRoutingModule } from './harmonicas-routing.module';
import { HarmonicasComponent } from './harmonicas.component';

@NgModule({
  imports: [CommonModule, SharedModule, HarmonicasRoutingModule],
  declarations: [HarmonicasComponent],
})
export class HarmonicasModule {}
