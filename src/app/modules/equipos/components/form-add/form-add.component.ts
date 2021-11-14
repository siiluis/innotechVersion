import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EquiposService } from '../../equipos.service';
import { createForm, Equipo } from '../../models/equipo.model';

@Component({
  selector: 'add-equipo',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css'],
})
export class FormAddComponent implements OnInit {
  idEquipo: string | undefined = undefined;
  equipoForm: FormGroup;
  btnText: string = 'Guardar';

  constructor(
    private equiposService: EquiposService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.idEquipo = params.id;
        this.btnText = 'Actualizar';
      }
    });
    this.equipoForm = createForm(new Equipo());
  }

  ngOnInit(): void {
    if (this.idEquipo) {
      this.equiposService
        .getEquipo(this.idEquipo)
        .subscribe((response: any) => {
          this.equipoForm = createForm(response.data);
        });
    }
  }

  add() {
    if (this.idEquipo) {
      this.equiposService.updateEquipo(this.equipoForm.value);
    } else {
      this.equiposService.addEquipo(this.equipoForm.value);
    }
  }
}
