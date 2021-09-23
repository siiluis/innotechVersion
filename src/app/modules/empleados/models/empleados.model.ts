import { Time } from "@angular/common";

export interface IEmpleados {
    id_empleado: number;
    nombre: String;
    cedula: String;
    email: String;
    telefono: number;
    area: String;
    fecha_creacion: Time;
  }