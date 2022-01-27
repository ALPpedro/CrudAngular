import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  nome: FormControl = new FormControl(null, Validators.minLength(3))
  dataDeNascimento: FormControl = new FormControl(null, Validators.required)
  rg: FormControl = new FormControl(null, Validators.required)
  cpf: FormControl = new FormControl(null, Validators.required)
  telefone: FormControl = new FormControl(null, Validators.minLength(3))

  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.nome.valid && this.dataDeNascimento.valid 
    && this.rg.valid && this.cpf.valid && this.telefone.valid
  }

}
