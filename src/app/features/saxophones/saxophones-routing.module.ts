import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaxophonesComponent } from './saxophones.component';

const routes: Routes = [
  {
    path: '',
    component: SaxophonesComponent,
    data: { state: 'bottom' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaxophonesRoutingModule {}
