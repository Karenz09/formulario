import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-dialogo',
  template: `
    <h2 mat-dialog-title>Registro exitoso</h2>
    <mat-dialog-content>
      <p>{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Aceptar</button>
    </mat-dialog-actions>
  `,
  imports: [],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
