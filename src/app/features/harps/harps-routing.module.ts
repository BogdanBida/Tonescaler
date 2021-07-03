import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HarpsComponent } from './harps.component';

const routes: Routes = [
  {
    path: '',
    component: HarpsComponent,
    data: { state: 'top' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarpsRoutingModule {}
