import { Time } from "@angular/common";

export interface IEquipo {
  tipoEquipo: string;
  serial: string;
  version_so: string;
  key_so: string;
  version_office: string;
  key_office: string;
  ram: string;
  disco: string;
  equipo_cpu: string;
  fecha_creacion: Time;
}
