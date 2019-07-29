import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home/home.component';

const keycloakService = new KeycloakService();


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    console.log('doing bootstrap');

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
