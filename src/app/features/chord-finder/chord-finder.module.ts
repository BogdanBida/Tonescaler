import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ChordFinderRoutingModule } from './chord-finder-routing.module';
import { ChordFinderComponent } from './chord-finder.component';
import { PianoKeyboardComponent } from './components/piano-keyboard/piano-keyboard.component';

@NgModule({
  imports: [
    CommonModule,
    ChordFinderRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [ChordFinderComponent, PianoKeyboardComponent],
})
export class ChordFinderModule {}
