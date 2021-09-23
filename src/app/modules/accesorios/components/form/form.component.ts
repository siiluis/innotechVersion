import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';
import { IAccesorios } from '../../models/accesorios.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  btnAsignar = 'AsignarAcc';
  accesorios: IAccesorios = {
    id_accesorios: 1,
    serial_accesorio: '1',
    descripcion: '1',
    id_equipo: 2,
  };
  constructor(private accesoriosService: AccesoriosService) {}

  ngOnInit(): void {}

  add() {
    this.accesoriosService.addAccesorios(this.accesorios);
    console.log(this.accesorios);
  }
}
