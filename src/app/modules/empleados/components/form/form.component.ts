import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../empleados.service';
import { createForm, Empleado } from '../../models/empleados.model';

@Component({
  selector: 'add-empleados',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormAddComponent implements OnInit {
  idEmpleado: string | undefined = undefined;
  empleadoForm: FormGroup;
  btnText: string = 'Guardar';

  constructor(
    private empleadosService: EmpleadosService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      if (params.id) {
        this.idEmpleado = params.id;
        this.btnText = 'Actualizar';
      }
    });
    this.empleadoForm = createForm(new Empleado());
  }

  ngOnInit(): void {
    if (this.idEmpleado) {
      this.empleadosService
        .getEmpleado(this.idEmpleado)
        .subscribe((response: any) => {
          this.empleadoForm = createForm(response.data);
        });
    }
  }

  add() {
    if (this.idEmpleado) {
      this.empleadosService.updateEmpleados(this.empleadoForm.value);
    } else {
      this.empleadosService.addEmpleados(this.empleadoForm.value);
    }
  }
}
