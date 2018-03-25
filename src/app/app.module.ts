import { SigninComponent } from './logon/signin/signin.component';
import { LogonModule } from './logon/logon.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './logon/register/register.component';
import { ConfirmComponent } from './logon/confirm/confirm.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatButtonModule } from '@angular/material';
import { AuthModule } from './auth/auth.module';
import { SignInGuardService as SignInGuard } from './auth/sign-in-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/logon'
  },
  {
    path: 'logon',
    component: SigninComponent
  },
  {
    path: 'logon/register',
    component: RegisterComponent
  },
  {
    path: 'logon/confirm',
    component: ConfirmComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [SignInGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LogonModule,
    DashboardModule,
    AuthModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
