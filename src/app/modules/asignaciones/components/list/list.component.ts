import { Component, OnInit } from '@angular/core';
import { AsignacionesService } from '../../asignaciones.service';

class Asignaciones {}
@Component({
  selector: 'list-asignaciones',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listAsignaciones = [];

  constructor(public AsignacionesService: AsignacionesService) {}

  ngOnInit(): void {
    this.AsignacionesService.getAsignaciones();
  }
}

