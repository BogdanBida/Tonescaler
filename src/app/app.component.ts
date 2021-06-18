import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { routeAnimations } from './core/constants/animations';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  constructor(private readonly _appService: AppService) {
    this._appService.initApp();
  }

  public title = 'tonescaler';

  public getAnimationData(outlet: RouterOutlet): RouterOutlet | Data | string {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.state
    );
  }
}
