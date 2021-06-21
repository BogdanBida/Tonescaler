import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GotohomeComponent } from './components/gotohome/gotohome.component';
import { MininavComponent } from './components/mininav/mininav.component';

const exports = [GotohomeComponent, MininavComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports,
  declarations: [...exports],
})
export class SharedModule {}
