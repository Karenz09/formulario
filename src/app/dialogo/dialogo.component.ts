import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-dialogo',
  template: ``,
  imports: [],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  constructor(
  public dialogRef: MatDialogRef<DialogoComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { message: string }
) {}

closeDialog() {
  this.dialogRef.close();
}
}
