import { Component } from '@angular/core';
import { ConnectionDBService } from 'src/app/services/connection-db.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  selectedOption!: string;
  medicoId!: number;
  datiRepartoMedico: any[] = [];

  blocks: any[] = [
    { value: '1', label: 'Ricerca dato un medico visualizzare il reparto di appartenenza'},
    { value: '2', label: 'Ricerca Dato un paziente, visualizzare tutti gli esami e visite che ha effettuato e se è ricoverato, visualizzare il nome del reparto e il medico curante'},
    { value: '3', label: 'Ricerca per visualizzare la lista di tutti gli esami che è possibile effettuare'},
    { value: '4', label: 'Ricerca per visualizzare tutte le visite che è possibile effettuare'},
    { value: '5', label: 'Ricerca per ogni paziente consentire il download del referto relativo all esito'},
    { value: '6', label: 'Dato un intervallo temporale e un esame/ visita, visualizzare tutti i pazienti che lo hanno effettuato, data ed esito'},
  ];

  constructor(private http: ConnectionDBService) { }


  ricercaReparto() {
    this.http.ricerca1(this.medicoId).subscribe(data => {
      this.datiRepartoMedico = data;
    });
  }

  // ricercaCorsiLaurea() {
  //   this.http.query2().subscribe(data => {
  //     this.datiCorsiLaurea = data;
  //   });
  // }

  // ricercaTipoCorsi() {
  //   this.http.query3(this.id).subscribe(data => {
  //     this.datiTipoCorsi = data;
  //   });
  // }

  // ricercaCorsoProfTutor() {
  //   this.http.query4().subscribe(data => {
  //     this.datiCorsiProfTutor = data;
  //   });
  // }

  // ricercaStudenteCorso() {
  //   this.http.query5(this.matricola).subscribe(data => {
  //     this.datiStudenteCorsi = data;
  //   });
  // }

  // ricercaCorsoEsameProf() {
  //   this.http.query6(this.matricola).subscribe(data => {
  //     this.datiCorsoEsameProf = data;
  //   });
  // }

  // ngOnInit(): void {
  //   this.ricercaCorsiLaurea();
  //   this.ricercaCorsoProfTutor();
  // }
}
