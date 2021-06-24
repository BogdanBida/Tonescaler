import { LOCATION_INITIALIZED } from '@angular/common';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SettingTypes } from './core/enums';
import { AppCookieService } from './core/services';

export function appInitializerFactory(
  translate: TranslateService,
  cookieService: AppCookieService,
  injector: Injector
): () => Promise<any> {
  return (): Promise<any> =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );

      locationInitialized.then(() => {
        const langToSet =
          cookieService.getSetting(SettingTypes.PreferredLang) ||
          translate.getBrowserLang() ||
          environment.defaultLang;

        translate.setDefaultLang(langToSet);

        translate.use(langToSet).subscribe({
          next: () => null,
          error: () => {
            console.error(
              `Problem with '${langToSet}' language initialization.'`
            );
          },
          complete: () => {
            resolve(null);
          },
        });
      });
    });
}
