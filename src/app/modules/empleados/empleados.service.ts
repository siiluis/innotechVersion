import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Empleados, IEmpleados } from './models/empleados.model';
import { IResponse } from 'src/app/shared/models/response.model';
import { Router } from '@angular/router';
import { NotificacionesService } from 'src/app/shared/notificaciones.service';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  readonly APP = 'empleados';
  readonly API = `${environment.URL_API}/${this.APP}`;
  empleadosLista: IEmpleados[] = [];
  empleados: Empleados = new Empleados();
  constructor(
    private http: HttpClient,
    private router: Router,
    private notificacionService: NotificacionesService
  ) {}

  addEmpleados(empleados: IEmpleados) {
    this.http.post(this.API, empleados).subscribe((response) => {
      this.notificacionService.alertOk('OK', 'Se guardo el empleado.');
      this.getEmpleados();
      this.router.navigate(['/app/modules/empleados/list']);
    });
  }

  getEmpleados() {
    this.http.get<IResponse>(this.API).subscribe((response: IResponse) => {
      console.log(response.data);
      this.empleadosLista = response.data;
    });
  }

  getEmpleado(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  updateEmpleados(empleados: IEmpleados) {
    this.http
      .put<IResponse>(this.API, empleados)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se actualizo el empleado.');
        this.router.navigate(['/app/modules/empleados/list']);
      });
  }

  deleteEmpleados(id: string | undefined) {
    this.http
      .delete<IResponse>(`${this.API}/${id}`)
      .subscribe((response: IResponse) => {
        this.notificacionService.alertOk('OK', 'Se elimino el empleado.');
        this.getEmpleados();
      });
  }
}
