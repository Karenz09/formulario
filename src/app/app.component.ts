import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatSlideToggleModule,
    ReactiveFormsModule, 
    FormComponent, 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formulario';
}
