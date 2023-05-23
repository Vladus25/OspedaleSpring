import { HttpClient, HttpResponse } from '@angular/common/http';
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

  ricerca1(medicoId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/medico/find/ricerca1/${medicoId}`);
  }

  ricerca2(pazienteId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/paziente/dati/${pazienteId}`);
  }

  ricerca3(): Observable<any> {
    return this.http.get(`${this.baseUrl}/esame/all`);
  }

  ricerca4(): Observable<any> {
    return this.http.get(`${this.baseUrl}/visita/all`);
  }

  getPazientiEsameData(nomeEsame: string, dataInizio: string, dataFine: string) {
    return this.http.get<any[]>(`${this.baseUrl}/paziente/esami/per-data`, {
      params: {
        nomeEsame,
        dataInizio,
        dataFine
      }
    });
  }

  uploadPdf(id: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`${this.baseUrl}/paziente/upload-pdf/${id}`, formData);
  }

  downloadPdf(id: number): Observable<HttpResponse<Blob>> {
    const url = `${this.baseUrl}/paziente/download-pdf/${id}`;
    return this.http.get(url, {
      responseType: 'blob',
      observe: 'response'
    });
  }

}
