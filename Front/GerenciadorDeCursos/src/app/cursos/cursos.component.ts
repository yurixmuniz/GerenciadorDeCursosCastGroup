import { LoginService } from './../shared/login.service';
import { LogService } from './../shared/log.service';
import { FiltroPipe } from './../shared/filtro.pipe';
import { CategoriasService } from './../shared/categorias.service';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../shared/cursos.service';
import { Curso } from '../shared/cursos.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [
  ]
})
export class CursosComponent implements OnInit {

  constructor(public service: CursosService, public serviceCategoria: CategoriasService, public serviceLog: LogService,
     public serviceLogin: LoginService,private toastr: ToastrService, public router: Router) { }

  filtro: string = '';

  ngOnInit(): void {
    this.service.refreshList();
    this.serviceCategoria.refreshList();
    this.serviceLog.refreshList();
  }

  populateForm(selectedRecord: Curso) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.router.navigateByUrl('cadastrar');

  }

  onDelete(id: number) {
    if (confirm('Tem certeza de que deseja excluir o registro?')) {
      this.service.deleteCurso(id)
        .subscribe(
          (res: any) => {
            this.toastr.error('Excluido com Sucesso')
            this.service.refreshList();
            this.serviceLog.formData.cursoId = this.service.formData.cursoId;
            this.serviceLog.formData.alteracao = 'excluido';
            this.serviceLog.formData.dtInclusao = this.serviceLog.list?.find((l: any)=> l.cursoId == this.service.formData.cursoId)?.dtInclusao;
            this.serviceLog.formData.dtAlteracao = res.data;
            this.serviceLog.formData.usuarioId = this.serviceLogin.usuarioLogado.usuarioId;
            console.log(this.serviceLog.formData);
            this.serviceLog.postLog().subscribe();

            this.serviceLog.refreshList()
          },
          err => { console.log(err), this.toastr.error(JSON.stringify(err.error)) }
        )
    }
  }

  getCategoria(categoriaId: number): any{
    return this.serviceCategoria.list?.find(categoria => categoria.categoriaId == categoriaId)?.nome;
  }

}
