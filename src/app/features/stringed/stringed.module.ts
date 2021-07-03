import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from './../../shared/shared.module';
import { NeckComponent } from './components/neck/neck.component';
import { StringedControlsComponent } from './components/stringed-controls/stringed-controls.component';
import { TuneSwitcherComponent } from './components/tune-switcher/tune-switcher.component';
import { StringedRoutingModule } from './stringed-routing.module';
import { StringedComponent } from './stringed.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StringedRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  declarations: [
    StringedComponent,
    NeckComponent,
    StringedControlsComponent,
    TuneSwitcherComponent,
  ],
})
export class StringedModule {}
