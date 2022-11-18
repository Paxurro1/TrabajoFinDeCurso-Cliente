import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { VerificarService } from 'src/app/services/verificar.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-verificar-falta',
  templateUrl: './verificar-falta.component.html',
  styleUrls: ['./verificar-falta.component.scss']
})
export class VerificarFaltaComponent implements OnInit {

  ausencias: Tarea[] = [];
  falta: FormGroup;
  submitted: boolean = false;

  constructor(
    private toastr: ToastrService,
    private verificarService: VerificarService,
    private formBuilder: FormBuilder,
  ) {
    this.falta = this.formBuilder.group({
      motivos: this.formBuilder.array([]),
    },
    );
  }

  ngOnInit(): void {
    this.getTareasEvaluar();
  }

  get motivos() {
    return this.falta.get('motivos') as FormArray;
  }

  getTareasEvaluar() {
    this.verificarService.getTareasEvaluar().subscribe((response) => {
      this.ausencias = response;
      //console.log(this.ausencias);
      this.addAusencia(this.ausencias.length)
    });
  }

  public aprobarTarea(i: number, id: number) {
    this.ausencias.splice(i,1)
    this.motivos.removeAt(i)
    this.verificarService.aprobarTarea(id).subscribe((response) => {
      //console.log(this.ausencias);
      this.toastr.success('Falta aprobada.', 'Aprobada');
    });
  }

  public rechazarTarea(i: number, id: number) {
    if (!this.motivos.at(i).valid) {
      return;
    }
    let motivo = this.motivos.at(i).value.motivo;
    this.ausencias.splice(i,1)
    this.motivos.removeAt(i)
    //console.log(this.motivos.length)
    this.verificarService.rechazarTarea(id, motivo).subscribe((response) => {
      //console.log(this.ausencias);
      this.toastr.info('Falta rechazada.', 'Rechazada');
    });
  }

  public addAusencia(i: number) {
    while (i > 0) {
      const motivoFormGroup = this.formBuilder.group({
        motivo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      })
      this.motivos.push(motivoFormGroup);
      i--;
      //console.log(i);
    }
  }

}
