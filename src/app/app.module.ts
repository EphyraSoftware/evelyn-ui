import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from 'src/environments/environment';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {ManageProfileComponent} from './profile/manage-profile/manage-profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateTaskComponent} from './task/create-task/create-task.component';
import {ManageTasksComponent} from './task/manage-tasks/manage-tasks.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProfileSummaryComponent} from './profile/profile-summary/profile-summary.component';
import {CalendarImportComponent} from './calendar/calendar-import/calendar-import.component';
import {CalendarManagementComponent} from './calendar/calendar-management/calendar-management.component';
import {CreateEventComponent} from './calendar/create-event/create-event.component';

const keycloakService = new KeycloakService();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageProfileComponent,
    CreateTaskComponent,
    ManageTasksComponent,
    ProfileSummaryComponent,
    CalendarImportComponent,
    CalendarManagementComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
    NgbModule
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
