import { Pessoas } from './../models/pessoas';
import { API_CONFIG } from './../config/api.config';
import { HttpClient, HttpRequest } from '@angular/common/http';
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
  upload(files: Set<File>): Observable<any>{
    const url = API_CONFIG.baseUrl+"/upload"
    const formData = new FormData();
    files.forEach(file=> formData.append('file', file, file.name))
    const request = new HttpRequest('POST', url, formData)
    return this.http.request(request);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`, 'ok', {
      horizontalPosition: 'center',
      verticalPosition: 'top', 
      duration: 7000
    })
  }

  listTodos(request) {
    const endpoint = API_CONFIG.baseUrl;
    const params = request;
    return this.http.get(endpoint, { params });
  }
}
