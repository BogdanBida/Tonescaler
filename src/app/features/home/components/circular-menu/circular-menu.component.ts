import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CircularMenuService } from '../../services/circular-menu.service';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss'],
})
export class CircularMenuComponent {
  constructor(private readonly _menuService: CircularMenuService) {}

  public isClosed$ = this._menuService.circularMenuIsOpened$.pipe(
    map((v) => !v)
  );
}
