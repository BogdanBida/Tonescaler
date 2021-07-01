import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringedComponent } from './stringed.component';

const routes: Routes = [
  {
    path: '',
    component: StringedComponent,
    data: { state: 'top' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StringedRoutingModule {}
