import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from '../../accesorios.service';

class Accesorios {}
@Component({
  selector: 'list-accesorios',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listAccesorios = [];

  constructor(private AccesoriosService: AccesoriosService) {}

  ngOnInit(): void {
    this.AccesoriosService.getAccesorios();
  }
}

