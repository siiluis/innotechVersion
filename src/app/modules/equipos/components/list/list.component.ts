import { Component, OnInit } from '@angular/core';

class Equipo {
  
}
@Component({
  selector: 'list-equipo',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listEquipos = [];

  constructor() {}

  ngOnInit(): void {}
}
