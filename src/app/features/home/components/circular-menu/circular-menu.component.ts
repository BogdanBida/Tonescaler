import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/core/services/app.service';

@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss'],
})
export class CircularMenuComponent {
  constructor(private readonly _appService: AppService) {}

  public isClosed = this._appService.circularMenuIsOpened.pipe(map((v) => !v));
}
