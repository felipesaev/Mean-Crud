import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import {FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})
export class FuncAddComponent implements OnInit {

  adicionarFuncionarioForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) {
    this.createForm();
  }
  // Método responsavel por tratar as validações do Form que criará um novo Funcionario.
  createForm() {
    this.adicionarFuncionarioForm = this.formBuilder.group({
      nomeFuncionario:['', Validators.required],
      cargo: ['', Validators.required],
      numeroIdentificador: ['', Validators.required]
    });
  }

  //Método responsavel por adicionar um novo 'Funcionario' com ação do btn 'adicionar funcionario'

  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    this.funcionarioService.adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador);
    }

  ngOnInit() {
  }

}
