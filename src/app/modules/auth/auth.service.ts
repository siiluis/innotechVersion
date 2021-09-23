import { Injectable } from '@angular/core';
import { IAuth } from './models/auth.model';
import * as bcrypt from 'bcryptjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

function cifrarPassword(password: string): string {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly APP = 'auth';
  readonly API = `${environment.URL_API}/${this.APP}`;
  constructor(private http: HttpClient, private router: Router) {}

  actionAuth(credenciales: IAuth, accion: string) {
    if (accion === 'register') {
      this.register(credenciales.email, credenciales.password);
    } else {
      this.login(credenciales.email, credenciales.password);
    }
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(email: string, password: string) {
    this.http
      .post(`${this.API}/login`, { email, password })
      .subscribe((response: any) => {
        localStorage.setItem('token', response.data);
        this.router.navigateByUrl('app');
      });
  }

  register(email: string, password: string) {
    this.http
      .post(`${this.API}/register`, { email, password })
      .subscribe((response) => {
        console.log(response);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
  }
}
