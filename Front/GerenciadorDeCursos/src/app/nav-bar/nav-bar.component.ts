import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public service: LoginService) { }

  ngOnInit(): void {
    this.service.refreshUsuariosList();
    this.service.usuarioLogado = localStorage.getItem('usuarioLogado')
  }





}
