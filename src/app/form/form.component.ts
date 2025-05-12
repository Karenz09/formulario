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
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/) ]],
      email: ['', [Validators.required, Validators.email]],
      foto: ['', Validators.required],
      calle : [''],
      numExt : [''],
      colonia : [''],
      ciudad : [''],
      cp : ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
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

  get calle(){
    return this.formUser.get('calle') as FormControl;
  }

  get numExt(){
    return this.formUser.get('numExt') as FormControl;
  }

  get colonia(){
    return this.formUser.get('colonia') as FormControl;
  }

  get ciiudad(){
    return this.formUser.get('ciudad') as FormControl;
  }

  get cp(){
    return this.formUser.get('cp') as FormControl;
  }

  onPhotoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (allowedTypes.includes(file.type)) {
      this.foto.setValue(file);
      this.foto.setErrors(null);
    } else {
      this.foto.setValue(null);
      this.foto.setErrors({ invalidExtension: true });
    }
    this.foto.markAsTouched();
  }

  onSubmit() {
    if (this.formUser.valid) {
      this.dialogo.open(DialogoComponent, {
        data: { message: 'El formulario fue enviado correctamente.' }
      });
      this.formUser.reset();
    } else {
      this.formUser.markAllAsTouched();
    }

  }
  
  
}
