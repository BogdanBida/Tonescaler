import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChordFinderRoutingModule } from './chord-finder-routing.module';
import { ChordFinderComponent } from './chord-finder.component';
import { InfoComponent } from './components/info/info.component';
import { PianoKeyboardComponent } from './components/piano-keyboard/piano-keyboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ChordFinderRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ],
  declarations: [ChordFinderComponent, PianoKeyboardComponent, InfoComponent],
})
export class ChordFinderModule {}
