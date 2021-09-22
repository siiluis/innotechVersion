import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';

class Accesorios {}
@Component({
  selector: 'list-accesorios',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listAsignaciones = [];

  constructor(private AsignacionesService: AccesoriosService) {}

  ngOnInit(): void {
    this.AsignacionesService.getAccesorios();
  }
}

