import { Component, OnInit } from '@angular/core';
import { AsignacionesService } from '../../asignaciones.service';
import { IAsignaciones } from '../../models/asignaciones.model';

@Component({
  selector: 'add-asignaciones',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  btnAsignar = 'Sara';
  asignaciones: IAsignaciones = {
    id_asignacion: 1,
    id_empleado: 1,
    id_equipo: 1,
    id_accesorio: 1,
  };
  constructor(private asignacionesService: AsignacionesService) {}

  ngOnInit(): void {}

  add() {
    this.asignacionesService.addAsignaciones(this.asignaciones);
    console.log(this.asignaciones);
  }
}
