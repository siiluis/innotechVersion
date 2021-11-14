import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquiposService } from '../../equipos.service';

class Equipo {}
@Component({
  selector: 'list-equipo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public equiposService: EquiposService, private router: Router) {}

  ngOnInit(): void {
    this.equiposService.getEquipos();
  }
}
