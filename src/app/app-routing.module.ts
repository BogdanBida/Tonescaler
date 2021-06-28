import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: (): any =>
          import('./features/home/home.module').then(
            (module) => module.HomeModule
          ),
      },
      {
        path: 'settings',
        loadChildren: (): any =>
          import('./features/settings/settings.module').then(
            (module) => module.SettingsModule
          ),
      },
      {
        path: 'tuner',
        loadChildren: (): any =>
          import('./features/tuner/tuner.module').then(
            (module) => module.TunerModule
          ),
      },
      {
        path: 'chord-finder',
        loadChildren: (): any =>
          import('./features/chord-finder/chord-finder.module').then(
            (module) => module.ChordFinderModule
          ),
      },
      {
        path: 'camelot-wheel',
        loadChildren: (): any =>
          import('./features/camelot-wheel/camelot-wheel.module').then(
            (module) => module.CamelotWheelModule
          ),
      },
      {
        path: 'keyboards',
        loadChildren: (): any =>
          import('./features/keyboards/keyboards.module').then(
            (module) => module.KeyboardsModule
          ),
      },
      {
        path: 'not-found',
        loadChildren: (): any =>
          import('./features/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/not-found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
