import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Equipo, IEquipo } from './models/equipo.model';
import { IResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  readonly APP = 'equipos';
  readonly API = `${environment.URL_API}/${this.APP}`;
  equiposLista: IEquipo[] = [];
  equipo: Equipo = new Equipo();
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addEquipo(equipo: IEquipo) {
    this.http.post(this.API, equipo).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el equipo.');
      this.getEquipos();
      this.router.navigate(['/app/modules/equipos/list']);
    });
  }

  getEquipos() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
      this.equiposLista = response.data;
    });
  }

  getEquipo(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  updateEquipo(equipo: IEquipo) {
    this.http
      .put<IResponse>(this.API, equipo)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo el equipo.');
        this.router.navigate(['/app/modules/equipos/list']);
      });
  }

  deleteEquipo(id: string | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino el equipo.');
        this.getEquipos();
      });
  }
}
