import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../empleados.service';

class Empleados {}
@Component({
  selector: 'list-empleados',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public empleadosService: EmpleadosService, private router: Router) {}

  ngOnInit(): void {
    this.empleadosService.getEmpleados();
  }
}

