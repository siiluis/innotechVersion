import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add', component: FormComponent },
      // { path: 'list', component: ListComponent },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, FormComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccesoriosModule {}
