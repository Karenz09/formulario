import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formUser!: FormGroup;
  successMessage = '';
  constructor(private fb: FormBuilder, private dialogo: MatDialog){

  }
  ngOnInit(): void {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      foto: ['', Validators.required],
      direccion : ['']
    });
  }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get apellido(){
    return this.formUser.get('apellido') as FormControl;
  }

  get fechaNacimiento(){
    return this.formUser.get('fechaNacimiento') as FormControl;
  }

  get telefono(){
    return this.formUser.get('telefono') as FormControl;
  }

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  get foto(){
    return this.formUser.get('foto') as FormControl;
  }

  get direccion(){
    return this.formUser.get('direccion') as FormControl;
  }


  onSubmit() {
    console.log('onSubmit llamado'); // ← Este log verifica que el método se está ejecutando
  
    if (this.formUser.valid) {
      console.log('Formulario válido'); // ← Verifica que pasó la validación
  
      this.dialogo.open(DialogoComponent, {
        data: { message: 'El formulario fue enviado correctamente.' }
      });
  
      this.formUser.reset();
    } else {
      console.log('Formulario inválido'); // ← Indica que no pasó la validación
      this.formUser.markAllAsTouched();
    }
  }
  
  
}
