import { Component, OnInit } from '@angular/core';
import { EquiposService } from '../../equipos.service';

class Equipo {}
@Component({
  selector: 'list-equipo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listEquipos = [];

  constructor(private equiposService: EquiposService) {}

  ngOnInit(): void {
    this.equiposService.getEquipos();
  }
}
