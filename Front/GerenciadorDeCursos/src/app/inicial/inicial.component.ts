import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor(public service: LoginService) { }

  ngOnInit(): void {
    this.service.refreshUsuariosList();
  }

}
