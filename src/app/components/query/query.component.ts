import { HttpResponse } from '@angular/common/http';
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

  pazienteId!: number;
  datiEsamiVisiteRepartoMedico: any[] = [];

  datiEsami: any[] = [];
  datiVisite: any[] = [];

  datiPazienteEsameData: any[] = [];
  nomeEsame!:string;
  dataInizio!:string;
  dataFine!:string;

  selectedFile!: File;


  blocks: any[] = [
    { value: '1', label: 'Ricerca dato un medico visualizzare il reparto di appartenenza'},
    { value: '2', label: 'Ricerca Dato un paziente, visualizzare tutti gli esami e visite che ha effettuato e se id recovero e presente, visualizzare il nome del reparto e il medico curante'},
    { value: '3', label: 'Ricerca per visualizzare la lista di tutti gli esami che è possibile effettuare'},
    { value: '4', label: 'Ricerca per visualizzare tutte le visite che è possibile effettuare'},
    { value: '5', label: 'Ricerca per ogni paziente consentire il download del referto relativo all esito'},
    { value: '6', label: 'Dato un intervallo temporale e un esame/visita, visualizzare tutti i pazienti che lo hanno effettuato, data ed esito'},
  ];

  constructor(private http: ConnectionDBService) { }

  ngOnInit(): void {
    this.ricercaEsami();
    this.ricercaVisite();
  }

  ricercaReparto() {
    this.http.ricerca1(this.medicoId).subscribe(data => {
      this.datiRepartoMedico = data;
    });
  }

  ricercaEsamiVisiteRepartoMedico() {
    this.http.ricerca2(this.pazienteId).subscribe(data => {
      this.datiEsamiVisiteRepartoMedico = data;
    });
  }

  ricercaEsami() {
    this.http.ricerca3().subscribe(data => {
      this.datiEsami = data;
    });
  }

  ricercaVisite() {
    this.http.ricerca4().subscribe(data => {
      this.datiVisite = data;
    });
  }

  getPazientiEsameData(nomeEsame: string, dataInizio: string, dataFine: string) {
    this.http.getPazientiEsameData(nomeEsame, dataInizio, dataFine).subscribe(
      data => {
        this.datiPazienteEsameData = data;
        console.log(this.datiPazienteEsameData);
      },
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPdf(pazienteId: number) {
    this.http.uploadPdf(pazienteId, this.selectedFile).subscribe(
      () => {
        console.log('File PDF caricato con successo');
      },
      error => {
        console.error('Errore durante il caricamento del file PDF', error);
      }
    );
  }

  downloadPdf(): void {
    this.http.downloadPdf(this.pazienteId)
      .subscribe(response => {
        this.savePdf(response);
      }, error => {
        console.error('Error downloading PDF:', error);
      });
  }

  private savePdf(response: HttpResponse<Blob>): void {
    const filename = 'Esito-Paziente.pdf';
    const blobPart: BlobPart = response.body as any;

    if (blobPart !== null) {
      const blob = new Blob([blobPart], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    } else {
      console.error('PDF not found.');
    }
  }
}
