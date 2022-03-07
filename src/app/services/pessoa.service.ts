import { Pessoas } from './../models/pessoas';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient,
    private snack: MatSnackBar
    ) { }

  findById(id: any): Observable<Pessoas>{
    return this.http.get<Pessoas>(`${API_CONFIG.baseUrl}/id/${id}`)
  }

  findAll(): Observable<Pessoas[]>{
    return this.http.get<Pessoas[]>(`${API_CONFIG.baseUrl}`);
  }

  create(pessoa: Pessoas): Observable<Pessoas> {
    return this.http.post<Pessoas>(`${API_CONFIG.baseUrl}`, pessoa);
  }
  update(pessoa: Pessoas, id: any): Observable<Pessoas> {
    return this.http.put<Pessoas>(`${API_CONFIG.baseUrl}/${id}`, pessoa);
  }
  delete(id: any): Observable<Pessoas> {
    return this.http.delete<Pessoas>(`${API_CONFIG.baseUrl}/${id}`);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top', 
      duration: 4000
    })
  }

  listTodos(request) {
    const endpoint = API_CONFIG.baseUrl;
    const params = request;
    return this.http.get(endpoint, { params });
  }
}
