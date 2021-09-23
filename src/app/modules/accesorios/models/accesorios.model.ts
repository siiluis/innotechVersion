import { Time } from "@angular/common";

export interface IAccesorios {
    id_accesorios: number;
    serial_accesorio: String;
    descripcion: String;
    id_equipo: number;
    fecha_creacion: Time;
  }