import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HarpsRoutingModule } from './harps-routing.module';
import { HarpsComponent } from './harps.component';

@NgModule({
  imports: [CommonModule, SharedModule, HarpsRoutingModule],
  declarations: [HarpsComponent],
})
export class HarpsModule {}
