import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';
import { IAccesorio } from '../../models/accesorios.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  btnAsignar = 'AsignarAcc';
  accesorios: IAccesorio = {
    ID: '1',
    serial_accesorio: '1',
    descripcion: '1',
    id_equipo: '2',
  };
  constructor(private accesoriosService: AccesoriosService) {}

  ngOnInit(): void {}

  add() {
    this.accesoriosService.addAccesorios(this.accesorios);
    console.log(this.accesorios);
  }
}
