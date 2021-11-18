import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login.model';
import { Router, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, public toastr: ToastrService, public router: Router) { }

  readonly baseURLUsuarios = 'https://localhost:5001/api/Usuarios';
  formData: Login = new Login();
  usuarioLogado: any | undefined;
  model: any = {};
  list: Login[];

  refreshUsuariosList() {
    this.http.get(this.baseURLUsuarios)
    .toPromise()
    .then(res => this.list = res as Login[]);
  }

  login(form: NgForm): any {
    // this.usuarioLogado = this.listUsuarios.find(u => u.login == this.model.login && u.senha == this.model.senha);
    this.list?.forEach(u => {
      if(u.login == this.model.login && u.senha == this.model.senha){
        this.usuarioLogado = u;
      }
    });
    if(this.usuarioLogado !== null){
      localStorage.setItem('usuarioLogado', JSON.stringify(this.usuarioLogado))
    }
    else{
      this.toastr.error('Usuário ou senha invalidos')
    }
    console.log(this.usuarioLogado)
    this.resetForm(form);
  }

  logout(){
    this.usuarioLogado=null;
    localStorage.removeItem('usuarioLogado')
    console.log(this.usuarioLogado);
    this.router.navigateByUrl('');
  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new Login();
  }
}
