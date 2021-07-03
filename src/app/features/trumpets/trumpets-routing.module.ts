import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrumpetsComponent } from './trumpets.component';

const routes: Routes = [
  {
    path: '',
    component: TrumpetsComponent,
    data: { state: 'top' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrumpetsRoutingModule {}
