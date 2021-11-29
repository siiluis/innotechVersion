import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  constructor() {}

  alertOk(titulo: string, subtitulo: string) {
    Swal.fire(titulo, subtitulo, 'success');
  }
  alertInfo() {}

  alertError(titulo: string, subtitulo: string) {
    Swal.fire(titulo, subtitulo, 'error');
  }
}
