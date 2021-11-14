import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*  {
    path: 'asignaciones',
    loadChildren: () =>
      import('./asignaciones/asignaciones.module').then(
        (m) => m.AsignacionesModule
      ),
  }, */
  {
    path: 'equipos',
    loadChildren: () =>
      import('./equipos/equipos.module').then((m) => m.EquiposModule),
  },
  {
    path: 'accesorios',
    loadChildren: () =>
      import('./accesorios/accesorios.module').then((m) => m.AccesoriosModule),
  },
  {
    path: 'empleados',
    loadChildren: () =>
      import('./empleados/empleados.module').then((m) => m.EmpleadosModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ModulesModule {}
