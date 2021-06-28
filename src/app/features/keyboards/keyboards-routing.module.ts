import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardsComponent } from './keyboards.component';

const routes: Routes = [
  {
    path: '',
    component: KeyboardsComponent,
    data: { state: 'center' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeyboardsRoutingModule {}
