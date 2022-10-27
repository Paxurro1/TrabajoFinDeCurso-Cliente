import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FaltaService } from 'src/app/services/falta.service';

@Component({
  selector: 'app-add-falta',
  templateUrl: './add-falta.component.html',
  styleUrls: ['./add-falta.component.scss']
})
export class AddFaltaComponent implements OnInit {

  falta: FormGroup;
  submitted: boolean = false;
  formulario2: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private faltasService: FaltaService,
  ) {
    this.falta = this.formBuilder.group({
      f_ausencia: ['', Validators.compose([
        Validators.required])
      ],
      motivo: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)])
      ],
      hora: ['', Validators.compose([
        Validators.required])
      ],
      aula: ['', Validators.compose([
        Validators.required])
      ],
      grupo: ['', Validators.compose([
        Validators.required])
      ],
      profesor: ['', Validators.compose([
        Validators.required])
      ],
      actividades: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(100)])
      ],
      hora2: ['', Validators.compose([
        Validators.required])
      ],
      aula2: ['', Validators.compose([
        Validators.required])
      ],
      grupo2: ['', Validators.compose([
        Validators.required])
      ],
      profesor2: ['', Validators.compose([
        Validators.required])
      ],
      actividades2: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(100)])
      ],
      ausencias: this.formBuilder.array([]),
    },
      {
        validator: [this.mayorQueHoy]
      }
    );
  }

  ngOnInit(): void {
  }

  get ausencias(){
    return this.falta.get('ausencias') as FormArray;
  }

  mayorQueHoy(control: AbstractControl) {
    const fechaAusencia = new Date(control.get('f_ausencia')?.value);
    var fecha = new Date();
    let ayer = new Date(fecha.getTime() - 24 * 60 * 60 * 1000);
    //console.log(fechaAusencia)
    if (fechaAusencia < ayer) {
      control.get('f_ausencia')?.setErrors({ mayorQueHoy: true });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (!this.falta.valid) {
      return;
    }
    var datos = {
      'f_ausencia': this.falta.value.descripcion,
      'motivo': this.falta.value.dificultad,
      'hora': this.falta.value.hora,
      'aula': this.falta.value.aula,
      'grupo': this.falta.value.grupo,
      'profesor': this.falta.value.profesor,
      'actividades': this.falta.value.actividades,
      'hora2': this.falta.value.hora2,
      'aula2': this.falta.value.aula2,
      'grupo2': this.falta.value.grupo2,
      'profesor2': this.falta.value.profesor2,
      'actividades2': this.falta.value.actividades2,
      // 'ausencias': this.falta.value.ausencias
    }
    console.log(datos)

    // this.faltasService.addFalta(datos).subscribe({
    //   next: (res) => {
    //     this.toastr.success('Tarea registrada.', 'Registro');
    //   },
    //   error: e => {
    //     console.log(e);
    //     this.toastr.error('La tarea no ha podido registrarse.', 'Error');
    //   }
    // })
    // console.log(datos);
    this.onReset();
  }

  public addAusencia() {
    this.formulario2 = true;
    // const ausenciaFormGroup = this.formBuilder.group({
    //   hora: ['', Validators.compose([
    //     Validators.required])
    //   ],
    //   aula: ['', Validators.compose([
    //     Validators.required])
    //   ],
    //   grupo: ['', Validators.compose([
    //     Validators.required])
    //   ],
    //   profesor: ['', Validators.compose([
    //     Validators.required])
    //   ],
    //   actividades: ['', Validators.compose([
    //     Validators.required, Validators.minLength(5), Validators.maxLength(100)])
    //   ],
    // })
    // this.ausencias.push(ausenciaFormGroup);
  }

  public deleteAusencia() {
    // this.ausencias.removeAt(this.ausencias.length - 1)
    this.formulario2 = false;
  }

  get formulario() {
    return this.falta.controls;
  }

  onReset() {
    this.submitted = false;
    this.falta.reset();
  }

}
