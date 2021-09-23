import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';

class Empleados {}
@Component({
  selector: 'list-empleados',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listEmpleados = [];

  constructor(private EmpleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.EmpleadosService.getEmpleados();
  }
}

