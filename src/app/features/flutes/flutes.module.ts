import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from './../../shared/shared.module';
import { BlockFluteControlsComponent } from './components/block-flute-controls/block-flute-controls.component';
import { BlockFluteItemComponent } from './components/block-flute-item/block-flute-item.component';
import { FlutesRoutingModule } from './flutes-routing.module';
import { FlutesComponent } from './flutes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlutesRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  declarations: [
    FlutesComponent,
    BlockFluteItemComponent,
    BlockFluteControlsComponent,
  ],
})
export class FlutesModule {}
