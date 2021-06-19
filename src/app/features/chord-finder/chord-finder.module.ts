import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChordFinderRoutingModule } from './chord-finder-routing.module';
import { ChordFinderComponent } from './chord-finder.component';

@NgModule({
  imports: [CommonModule, ChordFinderRoutingModule, TranslateModule.forChild()],
  declarations: [ChordFinderComponent],
})
export class ChordFinderModule {}
