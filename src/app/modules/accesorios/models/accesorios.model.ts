import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IAccesorio {
  ID?: string;
  serial_accesorio: string;
  descripcion: string;
  id_equipo: string;
  fecha_creacion?: string;
}

export class Accesorio {
  constructor(
    public ID = undefined,
    public serial_accesorio = '',
    public descripcion = '',
    public id_equipo = ''
  ) {}
}

export function createForm(accesorio: IAccesorio) {
  return new FormGroup({
    ID: new FormControl(accesorio.ID),
    serial_accesorio: new FormControl(accesorio.serial_accesorio, [
      Validators.required,
    ]),
    descripcion: new FormControl(accesorio.descripcion, [Validators.required]),
    id_equipo: new FormControl(accesorio.id_equipo, [Validators.required]),
  });
}
