import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { FlutesRoutingModule } from './flutes-routing.module';
import { FlutesComponent } from './flutes.component';

@NgModule({
  imports: [CommonModule, SharedModule, FlutesRoutingModule],
  declarations: [FlutesComponent],
})
export class FlutesModule {}
