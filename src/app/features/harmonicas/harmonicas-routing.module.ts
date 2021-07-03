import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarmonicasComponent } from './harmonicas.component';

const routes: Routes = [
  {
    path: '',
    component: HarmonicasComponent,
    data: { state: 'top' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarmonicasRoutingModule {}
