import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface IEmpleado {
  ID?: string | undefined;
  nombre: string;
  cedula: string;
  email: string;
  telefono: string;
  nombresArea: string;
  fecha_creacion?: string;
}

export class Empleado {
  constructor(
    public ID = undefined,
    public nombre = '',
    public cedula = '',
    public email = '',
    public telefono = '',
    public nombresArea = ''
  ) {}
}

export function createForm(empleado: IEmpleado) {
  return new FormGroup({
    ID: new FormControl(empleado.ID),
    nombre: new FormControl(empleado.nombre, [Validators.required]),
    cedula: new FormControl(empleado.cedula, [Validators.required]),
    email: new FormControl(empleado.email, [Validators.required]),
    telefono: new FormControl(empleado.telefono, [Validators.required]),
    area: new FormControl(empleado.nombresArea, [Validators.required]),
  });
}
