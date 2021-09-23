import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';
import { IAccesorios } from '../../models/accesorios.model';

@Component({
  selector: 'add-accesorios',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  btnAsignar = 'Asignar';
  accesorios: IAccesorios = {
    id_accesorios: 1,
    serial_accesorio: '1',
    descripcion: '1',
    id_equipo: 2,
    fecha_creacion: {
      hours: 0,
      minutes: 0
    }
  };
  constructor(private accesoriosService: AccesoriosService) {}

  ngOnInit(): void {}

  add() {
    this.accesoriosService.addAccesorios(this.accesorios);
    console.log(this.accesorios);
  }
}
