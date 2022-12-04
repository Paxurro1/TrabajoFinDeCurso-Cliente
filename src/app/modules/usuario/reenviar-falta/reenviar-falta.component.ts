import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { TareaRechazada } from 'src/app/models/tareaRechazada';
import { Usuario } from 'src/app/models/usuario';
import { FaltaService } from 'src/app/services/falta.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';

@Component({
  selector: 'app-reenviar-falta',
  templateUrl: './reenviar-falta.component.html',
  styleUrls: ['./reenviar-falta.component.scss']
})
export class ReenviarFaltaComponent implements OnInit {

  aulas: any = [];
  grupos: any = [];
  profesores: any = [];
  tareas: TareaRechazada[] = [];
  usuario?: Usuario;
  falta: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private faltasService: FaltaService,
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
    this.falta = this.formBuilder.group({
      ausencias: this.formBuilder.array([]),
    },
    );
  }

  ngOnInit(): void {
    this.getProfesores();
    this.getAulas();
    this.getGrupos();
    this.getTareasRechazadas();
  }

  getProfesores() {
    this.faltasService.getProfesores(this.usuario!.email).subscribe((response) => {
      this.profesores = response;
      //console.log(this.profesores);
    });
  }

  getAulas() {
    this.faltasService.getAulas().subscribe((response) => {
      this.aulas = response;
      //console.log(this.aulas);
    });
  }

  getGrupos() {
    this.faltasService.getGrupos().subscribe((response) => {
      this.grupos = response;
      //console.log(this.grupos);
    });
  }

  get ausencias() {
    return this.falta.get('ausencias') as FormArray;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.falta.valid) {
      return;
    }
    var datos = {
      'email': this.usuario?.email,
      'ausencias': this.falta.value.ausencias
    }
    //console.log(datos)
    this.faltasService.reenviarFaltas(datos).subscribe({
      next: (res) => {
        this.toastr.success('Faltas actualizadas.', 'Registro');
        this.tareas = [];
        this.onReset();
      },
      error: e => {
        console.log(e);
        this.toastr.error('La falta no ha podido actualizarse.', 'Error');
      }
    })
  }

  getTareasRechazadas() {
    this.faltasService.getTareasRechazadas(this.usuario?.email!).subscribe((response) => {
      this.tareas = response;
      //console.log(this.tareas);
      this.addAusencia(this.tareas.length)
    });
  }

  public addAusencia(i: number) {
    while (i > 0) {
      const ausenciaFormGroup = this.formBuilder.group({
        id: new FormControl(this.tareas[i - 1].id),
        hora: new FormControl(this.tareas[i - 1].hora),
        aula: new FormControl(this.tareas[i - 1].aula),
        grupo: new FormControl(this.tareas[i - 1].grupo),
        profesor: new FormControl(this.tareas[i - 1].suplente),
        actividades: new FormControl(this.tareas[i - 1].actividades, [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
        motivo: new FormControl(this.tareas[i - 1].motivo),
      })
      this.ausencias.push(ausenciaFormGroup);
      i--;
    }
  }

  onReset() {
    this.submitted = false;
    this.falta.reset();
  }

}
