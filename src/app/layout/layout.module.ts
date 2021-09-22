import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes:Routes = [

  {
    path:"", component: HomeComponent,
    children:[
       {
        path:"modules",
        loadChildren:()=>import('../modules/modules.module').then(m =>m.ModulesModule)
      } 
    ]
      
  }

 
]

@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LayoutModule { }
