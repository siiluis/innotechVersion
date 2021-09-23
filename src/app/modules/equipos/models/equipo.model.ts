import { createPlatform } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IEquipo {
  ID?: string | undefined;
  tipo_equipo: string;
  equipo_serial: string;
  version_so: string;
  key_so: string;
  version_office: string;
  key_office: string;
  ram: string;
  disco: string;
  equipo_cpu: string;
  fecha_creacion?: string;
}

export class Equipo {
  constructor(
    public ID = undefined,
    public tipo_equipo = '',
    public equipo_serial = '',
    public version_so = '',
    public key_so = '',
    public version_office = '',
    public key_office = '',
    public ram = '',
    public disco = '',
    public equipo_cpu = ''
  ) {}
}

export function createForm(equipo: IEquipo) {
  return new FormGroup({
    ID: new FormControl(equipo.ID),
    tipo_equipo: new FormControl(equipo.tipo_equipo, [Validators.required]),
    equipo_serial: new FormControl(equipo.equipo_serial, [Validators.required]),
    version_so: new FormControl(equipo.version_so, [Validators.required]),
    key_so: new FormControl(equipo.key_so, [Validators.required]),
    version_office: new FormControl(equipo.version_office, [
      Validators.required,
    ]),
    key_office: new FormControl(equipo.key_office, [Validators.required]),
    ram: new FormControl(equipo.ram, [Validators.required]),
    disco: new FormControl(equipo.disco, [Validators.required]),
    equipo_cpu: new FormControl(equipo.equipo_cpu, [Validators.required]),
  });
}
