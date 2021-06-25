import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { HAMMER_CONFIG_PROVIDER } from './app-hammer-config';
import { appInitializerFactory } from './app-initializer-factory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCookieService } from './core/services';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
    }),
    SharedModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, AppCookieService, Injector],
      multi: true,
    },
    HAMMER_CONFIG_PROVIDER,
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
