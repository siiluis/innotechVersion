import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../equipos.service';
import { IEquipo } from '../../models/equipo.model';

@Component({
  selector: 'add-equipo',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  btnText = 'Luis';
  equipo: IEquipo = {
    equipo_serial: 'sas309304',
    tipo_equipo: '1',
    disco: '150',
    equipo_cpu: 'i5',
    key_office: 'skifjsai8r2023',
    key_so: 'asjdsafafjsa',
    ram: '4',
    version_office: '39r838fdf',
    version_so: 'dsa9dus9aduas9su0a',
  };
  constructor(private equiposService: EquiposService) {}

  ngOnInit(): void {}

  add() {
    this.equiposService.addEquipo(this.equipo);
    console.log(this.equipo);
  }
}
