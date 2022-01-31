import { PessoaService } from './../../../services/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Pessoas } from 'src/app/models/pessoas';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoas ={
    id: '',
    nome: '',
    dataDeNascimento: '',
    rg: '',
    cpf: '',
    telefone: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3))
  dataDeNascimento: FormControl = new FormControl(null, Validators.required)
  rg: FormControl = new FormControl(null, Validators.required)
  cpf: FormControl = new FormControl(null, Validators.required)
  telefone: FormControl = new FormControl(null, Validators.minLength(3))

  constructor(
    private service: PessoaService,
  ) { }

  ngOnInit(): void {
  }
  validaCampos(): boolean{
    return this.nome.valid && this.dataDeNascimento.valid 
    && this.rg.valid && this.cpf.valid && this.telefone.valid
  }

  create(): void{
    this.service.create(this.pessoa).subscribe(resposta =>{
      console.log("oi", resposta)
    }, ex =>{
      console.log(ex)
    })
  }

}
