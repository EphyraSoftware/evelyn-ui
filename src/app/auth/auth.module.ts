import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInGuardService } from './sign-in-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SignInGuardService
  ]
})
export class AuthModule { }
