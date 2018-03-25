import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule, MatInputModule
  ],
  declarations: [
    RegisterComponent,
    SigninComponent,
    ConfirmComponent
  ]
})
export class LogonModule { }
