import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GotohomeComponent } from './components/gotohome/gotohome.component';
import { MininavComponent } from './components/mininav/mininav.component';
import { NotenamePipe } from './pipes/notename.pipe';

const exports = [GotohomeComponent, MininavComponent, NotenamePipe];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports,
  declarations: [...exports],
})
export class SharedModule {}
