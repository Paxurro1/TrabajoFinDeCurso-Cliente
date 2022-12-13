import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { VerificarService } from 'src/app/services/verificar.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { TareaEvaluar } from 'src/app/models/tareaEvaluar';
import { FaltaService } from 'src/app/services/falta.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { Usuario } from 'src/app/models/usuario';
import { TipoAusencia } from 'src/app/models/tipoAusencia';

@Component({
  selector: 'app-verificar-falta',
  templateUrl: './verificar-falta.component.html',
  styleUrls: ['./verificar-falta.component.scss']
})
export class VerificarFaltaComponent implements OnInit {

  ausencias: TareaEvaluar[] = [];
  tiposAusencias: TipoAusencia[] = [];
  falta: FormGroup;
  rechazo: boolean = false;
  tipoMotivo: boolean = false;
  profesores: any = [];

  constructor(
    private toastr: ToastrService,
    private verificarService: VerificarService,
    private formBuilder: FormBuilder,
    private faltasService: FaltaService,
  ) {
    this.falta = this.formBuilder.group({
      motivos: this.formBuilder.array([]),
      tipos: this.formBuilder.array([]),
    },
    );
  }

  ngOnInit(): void {
    this.getTareasEvaluar();
    this.getTiposAusencias();
  }

  get motivos() {
    return this.falta.get('motivos') as FormArray;
  }

  get tipos() {
    return this.falta.get('tipos') as FormArray;
  }

  getTiposAusencias() {
    this.verificarService.getTiposAusencias().subscribe((response) => {
      this.tiposAusencias = response;
      //console.log(this.tiposAusencias);
    });
  }

  getTareasEvaluar() {
    this.verificarService.getTareasEvaluar().subscribe((response) => {
      this.ausencias = response;
      //console.log(this.ausencias);
      this.addAusencia(this.ausencias.length)
    });
  }

  public aprobarTarea(i: number, id: number) {
    this.tipoMotivo = true;
    if (!this.tipos.at(i).valid) {
      return;
    }
    let tipo = this.tipos.at(i).value.tipo;
    this.ausencias.splice(i,1)
    this.tipos.removeAt(i)
    this.motivos.removeAt(i)
    console.log(tipo);
    this.verificarService.aprobarTarea(id, tipo).subscribe((response) => {
      //console.log(this.ausencias);
      this.toastr.success('Falta aprobada.', 'Aprobada');
      this.tipoMotivo = false;
    });
  }

  public rechazarTarea(i: number, id: number) {
    this.rechazo = true;
    if (!this.motivos.at(i).valid) {
      return;
    }
    let motivo = this.motivos.at(i).value.motivo;
    this.ausencias.splice(i,1)
    this.motivos.removeAt(i)
    this.tipos.removeAt(i)
    console.log(motivo)
    this.verificarService.rechazarTarea(id, motivo).subscribe((response) => {
      //console.log(this.ausencias);
      this.toastr.info('Falta rechazada.', 'Rechazada');
      this.rechazo = false;
    });
  }

  public addAusencia(i: number) {
    while (i > 0) {
      const motivoFormGroup = this.formBuilder.group({
        motivo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      })
      this.motivos.push(motivoFormGroup);
      const tiposFormGroup = this.formBuilder.group({
        tipo: new FormControl('', [Validators.required]),
      })
      this.tipos.push(tiposFormGroup);
      i--;
      //console.log(i);
    }
  }

}
