import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { SaxophonesRoutingModule } from './saxophones-routing.module';
import { SaxophonesComponent } from './saxophones.component';

@NgModule({
  imports: [CommonModule, SharedModule, SaxophonesRoutingModule],
  declarations: [SaxophonesComponent],
})
export class SaxophonesModule {}
