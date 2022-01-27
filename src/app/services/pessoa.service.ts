import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from '../models/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Pessoas[]>{
    return this.http.get<Pessoas[]>(`${API_CONFIG.baseUrl}`);
  }
}
