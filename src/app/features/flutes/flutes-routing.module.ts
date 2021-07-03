import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlutesComponent } from './flutes.component';

const routes: Routes = [
  {
    path: '',
    component: FlutesComponent,
    data: { state: 'top' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlutesRoutingModule {}
