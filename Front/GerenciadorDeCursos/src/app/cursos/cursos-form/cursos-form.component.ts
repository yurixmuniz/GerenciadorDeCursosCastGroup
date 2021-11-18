import { LoginService } from './../../shared/login.service';
import { LogService } from './../../shared/log.service';
import { CategoriasService } from './../../shared/categorias.service';
import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/shared/cursos.service';
import { NgForm } from '@angular/forms';
import { Curso } from 'src/app/shared/cursos.model';
import { ToastrService } from 'ngx-toastr';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styles: [
  ]
})
export class CursosFormComponent implements OnInit {

  constructor(public service: CursosService, public serviceCategoria: CategoriasService, public serviceLog: LogService, public serviceLogin: LoginService,
    private toastr: ToastrService) { }

  dtHoje: any;

  ngOnInit(): void {
    this.service.refreshList();
    this.serviceCategoria.refreshList();
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.cursoId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCurso().subscribe(
      (res: any) => {
        this.service.refreshList();
        this.toastr.success('Cadastrado com Sucesso');
        this.serviceLog.formData.cursoId = res.id;
        this.serviceLog.formData.alteracao = 'criado';
        console.log(res.data);
        this.serviceLog.formData.dtInclusao = res.data;
        this.serviceLog.formData.dtAlteracao = res.data;
        this.dtHoje = res.data;
        this.serviceLog.formData.usuarioId = this.serviceLogin.usuarioLogado.usuarioId;
        this.serviceLog.postLog().subscribe();
        console.log(this.serviceLog.formData)

      },
      err => { console.log(err); this.toastr.error(JSON.stringify(err.error))}
    );
  }

  updateRecord(form: NgForm) {
    this.service.putCurso().subscribe(
      (res: any) => {
        this.serviceLog.formData.cursoId = this.service.formData.cursoId;
        this.serviceLog.formData.alteracao = 'alterado'
        this.serviceLog.formData.dtInclusao = this.serviceLog.list?.find((l: any)=> l.cursoId == this.service.formData.cursoId)?.dtInclusao;
        this.serviceLog.formData.dtAlteracao = res.data;
        this.serviceLog.formData.usuarioId = this.serviceLogin.usuarioLogado.usuarioId;
        this.serviceLog.postLog().subscribe();
        this.service.refreshList();
        this.toastr.info('Atualizado com Sucesso')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Curso();
  }

  dataExistente(dtInicio: Date){
    if(this.service.list?.find(curso => curso?.dtInicio <= dtInicio && curso?.dtTermino >= dtInicio)){

    }
  }

}
