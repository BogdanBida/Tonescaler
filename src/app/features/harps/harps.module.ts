import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';
import { HarpControlsComponent } from './components/harp-controls/harp-controls.component';
import { HarpStringsComponent } from './components/harp-strings/harp-strings.component';
import { HarpsRoutingModule } from './harps-routing.module';
import { HarpsComponent } from './harps.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HarpsRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  declarations: [HarpsComponent, HarpStringsComponent, HarpControlsComponent],
})
export class HarpsModule {}
