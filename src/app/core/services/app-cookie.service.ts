import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SettingTypes } from './../enums';

const PREFIX = 'tonescaler-setting-';

@Injectable({
  providedIn: 'root',
})
export class AppCookieService {
  constructor(private readonly _cookieService: CookieService) {}

  public setSetting(type: SettingTypes, value: string): void {
    this._cookieService.set(PREFIX + type, value as string);
  }

  public getSetting(type: SettingTypes): string | null {
    return this._cookieService.check(PREFIX + type)
      ? this._cookieService.get(PREFIX + type)
      : null;
  }

  public saveData(data: any): void {
    Object.entries(data).forEach(([key, value]) => {
      this._cookieService.set(PREFIX + key, value as string);
    });
  }
}
