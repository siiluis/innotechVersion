import { Injectable } from '@angular/core';
import { IAuth } from './models/auth.model';
import * as bcrypt from 'bcryptjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/shared/models/response.model';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

function cifrarPassword(password: string): string {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly APP = 'auth';
  readonly API = `${environment.URL_API}/${this.APP}`;
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(email: string, password: string) {
    this.http
      .post<IResponse>(`${this.API}/login`, { email, password })
      .subscribe(
        (response: IResponse) => {
          localStorage.setItem('token', response.data);
          this.router.navigateByUrl('app');
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.notificacionService.alertError("Error Ingreso",error.error.msg)
          }
        }
      );
  }

  register(newUser:any) {
   this.http
      .post(`${this.API}/register`, newUser)
      .subscribe((response) => {
        this.notificacionService.alertOk("Registrado","Email registrado con exito.")
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400) {
          this.notificacionService.alertError("El email ya se encuentra registrado",error.error.msg)
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
  }
}
