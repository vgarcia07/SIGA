import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-duca-rg',
  templateUrl: './duca-rg.component.html',
})
export class DucaRgComponent {
  ducaForm: FormGroup;

  // Listas en duro
  aduanas = ['001- ADUANA LA MESA', '002- ADUANA TOCNCONTIN'];
  regimenesAduaneros = ['4000-IMPORTACION DEFINITIVA CANCELA TITULO DE TRANSPORTE'];
  paises = ['AD - ANDORRA', 'AF - AFGANISTAN', 'CN - CHINA', 'HN - HONDURAS'];
  formasPago = ['BP - CHEQUE BANCARIO', 'CC - CARTA DE CREDITO', 'EF - EFECTIVO', 'GB - GIRO BANCARIO', 'OT - OTRO', 'TB - TRANSFERENCIA BANCARIA'];
  condicionesEntrega = ['FOB - LIBRE PUESTA A BORDO'];

  constructor(private fb: FormBuilder) {
    this.ducaForm = this.fb.group({
      numeroDuca: ['', [Validators.required, Validators.minLength(6)]],
      tipo: ['', Validators.required],
      paisOrigen: ['', Validators.required],
      paisDestino: ['', Validators.required],
      descripcionMercancia: ['', [Validators.required, Validators.maxLength(500)]],
      declarante: [{ value: 'USUARIO AUTENTICADO', disabled: true }],
      aduanaDespacho: ['', Validators.required],
      regimenAduanero: ['', Validators.required],
      rtnImportadorExportador: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      importadorExportador: [{ value: '', disabled: true }],
      rtnAgenciaAduanera: ['', [Validators.pattern(/^\d{14}$/)]],
      agenciaAduanera: [{ value: '', disabled: true }],
      idManifiestoEntregaRapida: [''],
      nombreProveedorDestinatario: [''],
      contratoProveedorDestinatario: [''],
      domicilioProveedor: [''],
      numeroPreimpreso: [''],
      entidadMediacion: [''],
      depositoAlmacenamiento: [''],
      aduanaIngresoSalida: ['', Validators.required],
      formaPago: ['', Validators.required],
      condicionEntrega: ['', Validators.required],
      modalidadEspecial: [''],
      aduanaTransitoDestino: ['', Validators.required],
      depositoAduanaTransito: [''],
      plazoDiasMeses: ['', [Validators.pattern(/^\d+$/)]],
      rutaTransito: [''],
      motivoOperacionSuspensiva: [''],
      observaciones: ['', Validators.maxLength(300)]
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