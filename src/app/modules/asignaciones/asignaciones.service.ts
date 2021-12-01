import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAsignaciones } from './models/asignaciones.model';
import { IResponse } from 'src/app/shared/models/response.model';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AsignacionesService {
  readonly APP = 'asignaciones';
  readonly API = `${environment.URL_API}/${this.APP}`;

  asignacionesLista: IAsignaciones[] = [];

  asignacionesSelect = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addAsignaciones(asignaciones: IAsignaciones) {
    this.http
      .post<IResponse>(this.API, asignaciones)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se Asigno Equipo al empleado.');
        this.router.navigate(['/app/modules/asignaciones/list']);
        console.log(response);
      });
  }

  getAsignaciones() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);

      this.asignacionesLista = response.data;
    });
  }

  getAsignacion() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
    });
  }

  updateAsignaciones(asignaciones: IAsignaciones) {
    this.http
      .put<IResponse>(this.API, asignaciones)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  deleteAsignaciones(id: string) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }
}
