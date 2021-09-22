import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './components/form-add/form-add.component';
import { ListComponent } from './components/list/list.component';

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
  declarations: [HomeComponent, FormAddComponent, ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EquiposModule {}
