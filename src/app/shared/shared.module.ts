import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GotohomeComponent } from './components/gotohome/gotohome.component';

const exports = [GotohomeComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports,
  declarations: [...exports],
})
export class SharedModule {}
