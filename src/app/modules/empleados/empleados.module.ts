import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './components/form/form.component';
import { ListComponent } from '../empleados/components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add', component: FormAddComponent },
      { path: 'list', component: ListComponent },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, FormAddComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EmpleadosModule {}
