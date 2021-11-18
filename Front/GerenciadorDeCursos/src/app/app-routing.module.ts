import { LogRegistroComponent } from './log-registro/log-registro.component';
import { InicialComponent } from './inicial/inicial.component';
import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';
import { CursosComponent } from './cursos/cursos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component: InicialComponent},
  {path:'cadastrar', component: CursosFormComponent},
  {path:'login', component: LoginComponent},
  {path:'cursos', component: CursosComponent},
  {path:'log', component: LogRegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
