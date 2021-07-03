import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from './../../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
