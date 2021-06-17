import { LOCATION_INITIALIZED } from '@angular/common';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

export function appInitializerFactory(
  translate: TranslateService,
  injector: Injector
): () => Promise<any> {
  return (): Promise<any> =>
    new Promise<any>((resolve: any) => {
      const locationInitialized = injector.get(
        LOCATION_INITIALIZED,
        Promise.resolve(null)
      );

      locationInitialized.then(() => {
        const langToSet = environment.defaultLang;

        translate.setDefaultLang(environment.defaultLang);
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
