import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { ChordFinderRoutingModule } from './chord-finder-routing.module';
import { ChordFinderComponent } from './chord-finder.component';
import { ControlsComponent } from './components/controls/controls.component';
import { InfoComponent } from './components/info/info.component';
import { PianoKeyboardComponent } from './components/piano-keyboard/piano-keyboard.component';

@NgModule({
  imports: [
    CommonModule,
    ChordFinderRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    ChordFinderComponent,
    PianoKeyboardComponent,
    InfoComponent,
    ControlsComponent,
  ],
})
export class ChordFinderModule {}
