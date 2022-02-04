import { Pessoas } from './../models/pessoas';
import { environment } from './../../environments/environment';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

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

  listTodos(request) {
    const endpoint = API_CONFIG.baseUrl;
    const params = request;
    return this.http.get(endpoint, { params });
  }
}
