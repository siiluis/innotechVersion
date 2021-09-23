import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEmpleados } from './models/empleados.model';
import { IResponse } from 'src/app/shared/models/response.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  readonly APP = 'empleados';
  readonly API = `${environment.URL_API}/${this.APP}`;

  empleadosLista: IEmpleados[] = [];
  empleadosSelect = '';
  constructor(private http: HttpClient) {}

  addEmpleados(empleados: IEmpleados) {
    this.http
      .post<IResponse>(this.API, empleados)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  getEmpleados() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      this.empleadosLista = response.data;
    });
  }

  getEmpleado() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
    });
  }

  updateEmpleados(empleados: IEmpleados) {
    this.http
      .put<IResponse>(this.API, empleados)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }

  deleteEmpleados(id: string) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        console.log(response.data);
      });
  }
}
