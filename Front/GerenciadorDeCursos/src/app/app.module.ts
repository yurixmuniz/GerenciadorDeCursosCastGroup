import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosComponent } from './cursos/cursos.component';
import { CursosFormComponent } from './cursos/cursos-form/cursos-form.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InicialComponent } from './inicial/inicial.component';
import { LogRegistroComponent } from './log-registro/log-registro.component';
import { FiltroPipe } from './shared/filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosFormComponent,
    LoginComponent,
    NavBarComponent,
    InicialComponent,
    LogRegistroComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
