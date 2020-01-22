import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppAuthGuard} from './auth/app-auth-guard.guard';
import {HomeComponent} from './home/home.component';
import {ManageProfileComponent} from './profile/manage-profile/manage-profile.component';
import {CalendarContainerComponent} from './calendar/calendar-container/calendar-container.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent,
  canActivate: [AppAuthGuard]
}, {
  path: 'profile',
  component: ManageProfileComponent,
  canActivate: [AppAuthGuard]
}, {
  path: 'calendar',
  component: CalendarContainerComponent,
  canActivate: [AppAuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
