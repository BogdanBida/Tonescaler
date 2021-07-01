import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { FretComponent } from './components/fret/fret.component';
import { StringedControlsComponent } from './components/stringed-controls/stringed-controls.component';
import { StringedRoutingModule } from './stringed-routing.module';
import { StringedComponent } from './stringed.component';

@NgModule({
  imports: [CommonModule, SharedModule, StringedRoutingModule],
  declarations: [StringedComponent, FretComponent, StringedControlsComponent],
})
export class StringedModule {}
