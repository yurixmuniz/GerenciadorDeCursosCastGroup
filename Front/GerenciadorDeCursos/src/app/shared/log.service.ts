import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from './log.model';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/Logs'
  formData: Log = new Log();
  list: Log[];

  postLog() {
    console.log(this.formData)
    return this.http.post(this.baseURL, this.formData);
  }

  putLog() {
    return this.http.put(`${this.baseURL}/${this.formData.cursoId}`, this.formData);
  }

  deleteLog(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Log[]);
  }
}
