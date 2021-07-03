import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KalimbasComponent } from './kalimbas.component';

const routes: Routes = [
  {
    path: '',
    component: KalimbasComponent,
    data: { state: 'top' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KalimbasRoutingModule {}
