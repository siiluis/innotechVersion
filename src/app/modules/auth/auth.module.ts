import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ModulesModule } from 'src/app/shared/modules/modules.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterformComponent } from './components/registerform/registerform.component';
@NgModule({
  declarations: [HomeComponent, LoginFormComponent, RegisterformComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ModulesModule,

  ],
})
export class AuthModule {}
