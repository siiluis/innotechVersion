import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../empleados.service';
import { createForm, Empleados } from '../../models/empleados.model';

@Component({
  selector: 'add-empleados',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  idEmpleados: string | undefined = undefined;
  empleadosForm: FormGroup;
  btnText: string = 'Guardar';

  constructor(
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.idEmpleados = params.id;
        this.btnText = 'Actualizar';
      }
    });
    this.empleadosForm = createForm(new Empleados());
  }

  ngOnInit(): void {
    if (this.idEmpleados) {
      this.empleadosService
        .getEmpleados()
        .subscribe((response: any) => {
          this.empleadosForm = createForm(response.data);
        });
    }
  }

  add() {
    if (this.idEmpleados) {
      this.empleadosService.updateEmpleados(this.empleadosForm.value);
    } else {
      this.empleadosService.addEmpleados(this.empleadosForm.value);
    }
  }
}
