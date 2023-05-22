import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modifica-paziente-dialog',
  templateUrl: './modifica-paziente-dialog.component.html',
  styleUrls: ['./modifica-paziente-dialog.component.css']
})
export class ModificaPazienteDialogComponent {
  paziente: any;

  constructor(
    private dialogRef: MatDialogRef<ModificaPazienteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.paziente = { ...data };
  }

  submitForm() {
    this.dialogRef.close(this.paziente);
  }

  cancel() {
    // Close the dialog without sending any result
    this.dialogRef.close();
  }
}
