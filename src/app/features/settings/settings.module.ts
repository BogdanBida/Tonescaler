import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './../../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
