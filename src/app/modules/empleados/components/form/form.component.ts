import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../empleados.service';
import { Area } from '../../models/areas.mode';
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
    public empleadosService: EmpleadosService,
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
          this.empleadoForm = createForm(response.data[0]);
          const id_area = response.data[0].id_area;
          this.empleadoForm.patchValue({id_area: id_area})

        });
    }
    this.empleadoForm.get('id_area')?.valueChanges.subscribe(id =>{
      this.empleadoForm.controls['id_area'].setValue(id);

    })
    this.empleadosService.getAreas();
  }

  add() {
    if (this.idEmpleado) {
      this.empleadosService.updateEmpleados(this.empleadoForm.value);
    } else {
      this.empleadosService.addEmpleados(this.empleadoForm.value);
    }
  }
}
