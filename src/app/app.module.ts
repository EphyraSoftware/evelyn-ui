import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from 'src/environments/environment';
import {HomeComponent} from './home/home/home.component';
import {HttpClientModule} from '@angular/common/http';

const keycloakService = new KeycloakService();


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [{
    provide: KeycloakService,
    useValue: keycloakService
  }],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(app) {
    keycloakService
      .init({
        config: environment.keycloakConfig,
        enableBearerInterceptor: true
      })
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');

        app.bootstrap(AppComponent);
      })
      .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  }
}
