import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
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
    TranslateModule.forChild(),
  ],
  declarations: [KeyboardsComponent, KeyboardComponent],
})
export class KeyboardsModule {}
