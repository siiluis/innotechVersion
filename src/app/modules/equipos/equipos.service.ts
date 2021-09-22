import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEquipo } from './models/equipo.model';
import { IResponse } from 'src/app/shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  readonly APP = 'equipos';
  readonly API = `${environment.URL_API}/${this.APP}`;

  equiposLista: IEquipo[] = [];
  equiposSelect = '';
  constructor(private http: HttpClient) {}

  addEquipo(equipo: IEquipo) {
    this.http
      .post<IResponse>(this.API, equipo)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  getEquipos() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.equiposLista = response.data;
    });
  }

  getEquipo() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
    });
  }

  updateEquipo(equipo: IEquipo) {
    this.http
      .put<IResponse>(this.API, equipo)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  deleteEquipo(id: string) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }
}
