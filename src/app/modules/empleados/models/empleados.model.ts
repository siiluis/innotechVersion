import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IEmpleados {
    ID?: string | undefined;
    nombre: String;
    cedula: String;
    email: String;
    telefono: String;
    area: String;
    fecha_creacion?: string;
  }

export class Empleados {
  constructor(
    public ID = undefined,
    public nombre = '',
    public cedula = '',
    public email: '',
    public telefono = '',
    public area = '',
  ) {}
}

export function createForm(empleados: IEmpleados) {
  return new FormGroup({
    ID: new FormControl(empleados.ID),
    nombre: new FormControl(empleados.nombre, [Validators.required]),
    cedula: new FormControl(empleados.cedula, [Validators.required]),
    email: new FormControl(empleados.email, [Validators.required]),
    telefono: new FormControl(empleados.telefono, []),
    area: new FormControl(empleados.area, [Validators.required]),
  });
}


  