import { Component } from '@angular/core';
import { AppService } from './../../../../core/services/app.service';

@Component({
  selector: 'app-musicbox-button',
  templateUrl: './musicbox-button.component.html',
  styleUrls: ['./musicbox-button.component.scss'],
})
export class MusicboxButtonComponent {
  constructor(private readonly _appService: AppService) {}

  public toggleMenu = this._appService.toggleCircularMenu.bind(
    this._appService
  );

  public menuIsOpened$ = this._appService.circularMenuIsOpened$;
}
