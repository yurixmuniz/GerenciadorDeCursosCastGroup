import { LogService } from './../shared/log.service';
import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../shared/cursos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-registro',
  templateUrl: './log-registro.component.html',
  styleUrls: ['./log-registro.component.css']
})
export class LogRegistroComponent implements OnInit {

  constructor(public service: LogService, public serviceLogin: LoginService, public serviceCurso: CursosService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serviceCurso.refreshList();
    this.serviceLogin.refreshUsuariosList();
    this.service.refreshList();
  }
  getCurso(cursoId: number): any{
    return this.serviceCurso.list?.find(curso => curso.cursoId == cursoId)?.nome;
  }
  getUsuario(usuarioId: number): any{
    return this.serviceLogin.list?.find(user => user.usuarioId == usuarioId)?.nome;
  }

}
