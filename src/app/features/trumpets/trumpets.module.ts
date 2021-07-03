import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { TrumpetsRoutingModule } from './trumpets-routing.module';
import { TrumpetsComponent } from './trumpets.component';

@NgModule({
  imports: [CommonModule, SharedModule, TrumpetsRoutingModule],
  declarations: [TrumpetsComponent],
})
export class TrumpetsModule {}
