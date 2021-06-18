import { Component } from '@angular/core';
import { AppService } from './core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly _appService: AppService) {
    this._appService.initApp();
  }

  public title = 'tonescaler';
}
