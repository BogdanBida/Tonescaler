import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { SharedModule } from 'src/app/shared/shared.module';
import { KeyboardControlsComponent } from './components/keyboard-controls/keyboard-controls.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyboardsRoutingModule } from './keyboards-routing.module';
import { KeyboardsComponent } from './keyboards.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    KeyboardsRoutingModule,
    MatSliderModule,
  ],
  declarations: [
    KeyboardsComponent,
    KeyboardComponent,
    KeyboardControlsComponent,
  ],
})
export class KeyboardsModule {}
