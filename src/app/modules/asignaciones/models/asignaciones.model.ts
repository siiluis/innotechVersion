import { Time } from "@angular/common";

export interface IAsignaciones {
    id_asignacion: number;
    id_empleado: number;
    id_equipo: number;
    id_accesorio: number;
    fecha_creacion: Time;
  }