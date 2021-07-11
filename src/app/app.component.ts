import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';
import { routeAnimations } from './core/constants/animations';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent implements AfterViewInit {
  constructor(
    private readonly _appService: AppService,
    private readonly _renderer: Renderer2
  ) {
    this._appService.initApp();
  }

  public title = 'tonescaler';

  public isNotHomepage = this._appService.isHomepage.pipe(
    map((value) => !value)
  );

  public ngAfterViewInit(): void {
    const loader = this._renderer.selectRootElement('#loader');

    this._renderer.setStyle(loader, 'display', 'none');
  }

  public getAnimationData(
    outlet: RouterOutlet
  ): RouterOutlet | Data | string | null {
    return this._appService.isEnabledPageTransitions
      ? outlet && outlet.activatedRouteData && outlet.activatedRouteData.state
      : null;
  }
}
