import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-duca-rg',
  templateUrl: './duca-rg.component.html',
  styleUrls: ['./duca-rg.component.scss']
})
export class DucaRgComponent {
  ducaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ducaForm = this.fb.group({
      numeroDuca: ['', [Validators.required, Validators.minLength(6)]],
      tipo: ['', Validators.required],
      paisOrigen: ['', Validators.required],
      paisDestino: ['', Validators.required],
      descripcionMercancia: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  submitForm() {
    if (this.ducaForm.valid) {
      console.log('DUCA Enviada:', this.ducaForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}