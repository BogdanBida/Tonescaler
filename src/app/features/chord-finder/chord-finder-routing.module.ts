import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordFinderComponent } from './chord-finder.component';

const routes: Routes = [
  {
    path: '',
    component: ChordFinderComponent,
    data: { state: 'left' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChordFinderRoutingModule {}
