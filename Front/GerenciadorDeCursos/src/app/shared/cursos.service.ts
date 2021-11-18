import { Injectable } from '@angular/core';
import { Curso } from './cursos.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/Cursos'
  formData: Curso = new Curso();
  list: Curso[];
  cursos: any = [];
  private _filtroLista: string = '';
  cursosFiltrados: Curso[];

  public get filtroLista(): string{
    return this._filtroLista;
  }

  postCurso() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCurso() {
    return this.http.put(`${this.baseURL}/${this.formData.cursoId}`, this.formData);
  }

  deleteCurso(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Curso[]);
  }

}
