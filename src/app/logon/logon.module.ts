import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatInputModule
  ],
  declarations: [
    RegisterComponent,
    SigninComponent,
    ConfirmComponent
  ]
})
export class LogonModule { }
