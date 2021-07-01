import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GotohomeComponent } from './components/gotohome/gotohome.component';
import { MininavComponent } from './components/mininav/mininav.component';
import { ScaleSwitcherComponent } from './components/scale-switcher/scale-switcher.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { MouseWheelDirective } from './directives/mouse-wheel.directive';
import { NotenamePipe } from './pipes/notename.pipe';
import { StagecolorPipe } from './pipes/stagecolor.pipe';

const exports = [
  GotohomeComponent,
  MininavComponent,
  NotenamePipe,
  StagecolorPipe,
  SettingsButtonComponent,
  ScaleSwitcherComponent,
  MouseWheelDirective,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  exports,
  declarations: [...exports],
})
export class SharedModule {}
