import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';
import { IEmpleados } from '../../models/empleados.model';

@Component({
  selector: 'add-empleados',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormAddComponent implements OnInit {

  btnText = 'Enviar';
    empleados: IEmpleados = {
    id_empleado: 4,
    nombre: 'Alexandra Triviño',
    cedula: '11010101020',
    email: 'alexandra@email.com',
    telefono: 3133434232,
    area: 'TI',
    fecha_creacion: {
      hours: 0,
      minutes: 0
    }
  };
  constructor(private empleadosService: EmpleadosService) {}
  
  ngOnInit(): void {
  }

  add() {
    this.empleadosService.addEmpleados(this.empleados);
    console.log(this.empleados);
  }

}
