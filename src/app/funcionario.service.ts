import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  uri = '/funcionario';
  constructor(private http: HttpClient) { }

  //Método resposável por adicionar um novo "Funcionário" btn 'Adicionar Funcionário'.
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    const objfuncionario = {
      nomeFuncionario: nomeFuncionario,
      cargo: cargo,
      numeroIdentificador: numeroIdentificador
    };

    console.log(objfuncionario);
    this.http.post(`${this.uri}/add`, objfuncionario).subscribe(res=> console.log('OK'));
  }
}
