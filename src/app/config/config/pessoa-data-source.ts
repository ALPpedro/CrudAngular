import { PessoaService } from '../../services/pessoa.service';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { Pessoas, TodoListResponse } from 'src/app/models/pessoas';
import { CollectionViewer } from '@angular/cdk/collections';


export class PessoaDataSource  implements DataSource<Pessoas>{

  private todoSubject = new BehaviorSubject<Pessoas[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private countSubject = new BehaviorSubject<number>(0);
    public counter$ = this.countSubject.asObservable();

  constructor(private pessoaService: PessoaService) { }

  connect(collectionViewer: CollectionViewer): Observable<Pessoas[]> {
    return this.todoSubject.asObservable();
}

disconnect(collectionViewer: CollectionViewer): void {
  this.todoSubject.complete();
  this.loadingSubject.complete();
  this.countSubject.complete();
}

loadTodos(pageNumber = 0, pageSize = 10, nome= '', dataDeNascimento='', telefone='') {
  this.loadingSubject.next(true);
  this.pessoaService.listTodos({ page: pageNumber, size: pageSize,nome: nome,dataDeNascimento: dataDeNascimento, telefone:telefone })
      .pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((result: TodoListResponse ) => {
          this.todoSubject.next(result.content);
          this.countSubject.next(result.totalElements);
      }
      );
}




}