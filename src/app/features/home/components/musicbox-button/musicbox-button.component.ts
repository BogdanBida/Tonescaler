import { Component } from '@angular/core';
import { CircularMenuService } from '../../services/circular-menu.service';

@Component({
  selector: 'app-musicbox-button',
  templateUrl: './musicbox-button.component.html',
  styleUrls: ['./musicbox-button.component.scss'],
})
export class MusicboxButtonComponent {
  constructor(private readonly _menuService: CircularMenuService) {}

  public toggleMenu = this._menuService.toggleCircularMenu.bind(
    this._menuService
  );

  public menuIsOpened$ = this._menuService.circularMenuIsOpened$;
}
