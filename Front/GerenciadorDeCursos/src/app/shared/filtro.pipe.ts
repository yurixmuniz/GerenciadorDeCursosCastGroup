import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, filtro: string){
    if (filtro == ''){
      return value;
    }

    const cursos = [];
    for(const curso of value){
      if((!curso['nome'].indexOf(filtro)) || (!curso['dtInicio'].indexOf(filtro)) || (!curso['dtTermino'].indexOf(filtro))) {
        cursos.push(curso);
      }
    }
    return cursos;
  }

}
