import { PessoaService } from './../../../services/pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pessoas } from 'src/app/models/pessoas';
import { PessoaDataSource } from 'src/app/config/config/pessoa-data-source';
import { tap } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  ELEMENT_DATA: Pessoas[] = []
  
    nome: ''
    dataDeNascimento: any
    telefone: ''

    nomeform: FormControl = new FormControl(null)
    dataDeNascimentoform: FormControl = new FormControl()
    telefoneform: FormControl = new FormControl();


  displayedColumns: string[] = ['id', 'nome', 'dataDeNascimento', 'rg','cpf','telefone', 'acoes'];
  //dataSource = new MatTableDataSource<Pessoas>(this.ELEMENT_DATA);
  dataSource: PessoaDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: PessoaService) { }

  ngOnInit(): void {
    this.dataSource = new PessoaDataSource(this.service);
    this.dataSource.loadTodos();
  }

  ngAfterViewInit() {
    this.dataSource.counter$
      .pipe(
        tap((count) => {
          this.paginator.length = count;
        })
      )
      .subscribe();
 
    this.paginator.page
      .pipe(
        tap(() => this.loadTodos())
      )
      .subscribe();
  }
 
  loadTodos() {
    this.dataSource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize, this.nome, this.dataDeNascimento, this.telefone);

  }

  voltar(){
    this.nome = ''
    this.dataDeNascimento = ''
    this.telefone= ''
    this.loadTodos()
    
  }
 
 /**  findAll(){
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Pessoas>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
   }
*/
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const dataSour = new MatTableDataSource<Pessoas>(this.ELEMENT_DATA).filter = filterValue.trim().toLowerCase();
   }
   

}

