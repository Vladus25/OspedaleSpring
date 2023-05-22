import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-paziente-dialog',
  templateUrl: './add-paziente-dialog.component.html',
  styleUrls: ['./add-paziente-dialog.component.css']
})
export class AddPazienteDialogComponent {
  paziente: any = {
    nome: '',
    cognome: '',
    dataN: '',
    luogoN: '',
    sesso: '',
    codFis: '',
    dataRicovero: '',
    idReparto: { id: null }
  };

  constructor(
    private dialogRef: MatDialogRef<AddPazienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  submitForm() {
    const nuovoPaziente = { ...this.paziente };

    // Invia il risultato al componente padre
    this.dialogRef.close(nuovoPaziente);
  }

  cancel() {
    this.dialogRef.close();
  }

}
