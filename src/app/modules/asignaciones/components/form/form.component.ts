import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from 'src/app/modules/empleados/empleados.service';
import { EquiposService } from 'src/app/modules/equipos/equipos.service';
import { AsignacionesService } from '../../asignaciones.service';
import { IAsignaciones } from '../../models/asignaciones.model';

@Component({
  selector: 'add-asignaciones',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  btnAsignar = 'Asignar';

  asignacionForm = new FormGroup({
    id_empleado: new FormControl('',Validators.required),
    id_equipo: new FormControl('',Validators.required),
  });

  constructor(
    private asignacionesService: AsignacionesService,
    public empleadosService: EmpleadosService,
    public equiposService: EquiposService
  ) {}

  ngOnInit(): void {
    this.empleadosService.getEmpleados();
    this.equiposService.getEquipos();

  }

  asignar() {
  this.asignacionesService.addAsignaciones(this.asignacionForm.value);

  }
}
