import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from './../../../services/pessoa.service';
import { FormControl, Validators } from '@angular/forms';
import { Pessoas } from 'src/app/models/pessoas';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pessoa.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }
  validaCampos(): boolean{
    return this.nome.valid && this.dataDeNascimento.valid 
    && this.rg.valid && this.cpf.valid && this.telefone.valid
  }
  findById(): void{
    this.service.findById(this.pessoa.id).subscribe(resposta =>{
      this.pessoa = resposta;
    })
  }

  delete(): void{
    this.service.delete(this.pessoa.id).subscribe(() =>{
      this.router.navigate(['pessoas'])
      this.service.message('Usuario Deletado com sucesso')
    }, ex =>{
      console.log(ex)
    })
  }
  


}
