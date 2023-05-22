import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionDBService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPazienti(): Observable<any> {
    return this.http.get(`${this.baseUrl}/paziente/all`);
  }

  addPaziente(paziente: any):Observable<any> {
    return this.http.post(`${this.baseUrl}/paziente/add`, paziente);
  }

  deletePaziente(id: number){
    return this.http.delete<any>(`${this.baseUrl}/paziente/delete/${id}`).pipe(
      tap(response => {
        console.log(response.message);
      })
    );
  }

  modificaPaziente(id:number, paziente: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/paziente/update/${id}`, paziente);
  }

}
