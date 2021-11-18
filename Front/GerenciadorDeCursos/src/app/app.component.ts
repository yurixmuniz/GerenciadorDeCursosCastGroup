import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   constructor(public service: LoginService) { }

  ngOnInit(): void {
    this.service.refreshUsuariosList();
  }
  title = 'Gerenciador de Cursos';
}
