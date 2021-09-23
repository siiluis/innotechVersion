import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAccesorio } from './models/accesorios.model';
import { IResponse } from 'src/app/shared/models/response.model';

@Injectable({
  providedIn: 'root',
})
export class AccesoriosService {
  readonly APP = 'accesorios';
  readonly API = `${environment.URL_API}/${this.APP}`;

  accesoriosLista: IAccesorio[] = [];
  asignacionesSelect = '';
  constructor(private http: HttpClient) {}

  addAccesorios(accesorios: IAccesorio) {
    this.http
      .post<IResponse>(this.API, accesorios)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  getAccesorios() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.accesoriosLista = response.data;
    });
  }

  getAccesorio() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
    });
  }

  updateAccesorios(asignaciones: IAccesorio) {
    this.http
      .put<IResponse>(this.API, asignaciones)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  deleteAccesorios(id: string) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }
}
