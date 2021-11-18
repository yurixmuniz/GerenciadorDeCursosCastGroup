import { CursosService } from './../shared/cursos.service';
import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public serviceLogin: LoginService, public service: CursosService) { }

  ngOnInit(): void {
    this.serviceLogin.refreshUsuariosList();

  }



}
