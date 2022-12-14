import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { FaltaService } from 'src/app/services/falta.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';

@Component({
  selector: 'app-add-falta',
  templateUrl: './add-falta.component.html',
  styleUrls: ['./add-falta.component.scss']
})
export class AddFaltaComponent implements OnInit {

  aulas: any = [];
  grupos: any = [];
  profesores: any = [];
  falta: FormGroup;
  usuario?: Usuario;
  submitted: boolean = false;
  formularios: number = 1;
  horas = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta'];
  horasSeleccionadas: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private faltasService: FaltaService,
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
    this.falta = this.formBuilder.group({
      f_ausencia: ['', Validators.compose([
        Validators.required])
      ],
      motivo: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)])
      ],
      ausencias: this.formBuilder.array([]),
    },
      {
        validator: [this.mayorQueHoy]
      }
    );
  }

  ngOnInit(): void {
    this.getProfesores();
    this.getAulas();
    this.getGrupos();
    const ausenciaFormGroup = this.formBuilder.group({
      hora: new FormControl('', [Validators.required]),
      aula: new FormControl('', [Validators.required]),
      grupo: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      actividades: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
    })
    this.ausencias.push(ausenciaFormGroup);
  }

  get ausencias(){
    return this.falta.get('ausencias') as FormArray;
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
      'email': this.usuario?.email,
      'f_ausencia': this.falta.value.f_ausencia,
      'motivo': this.falta.value.motivo,
      'ausencias': this.falta.value.ausencias
    }
    console.log(datos)

    this.faltasService.addFalta(datos).subscribe({
      next: (res) => {
        this.toastr.success('Falta registrada.', 'Registro');
        console.log(res)
        this.onReset();
      },
      error: e => {
        console.log(e);
        this.toastr.error('La falta no ha podido registrarse.', 'Error');
      }
    })

  }

  public addAusencia() {
    this.formularios ++;
    const ausenciaFormGroup = this.formBuilder.group({
      hora: new FormControl('', [Validators.required]),
      aula: new FormControl('', [Validators.required]),
      grupo: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      actividades: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
    })
    this.ausencias.push(ausenciaFormGroup);
  }

  public deleteAusencia(i: number) {
    this.ausencias.removeAt(i)
    this.formularios --;
  }

  get formulario() {
    return this.falta.controls;
  }

  onReset() {
    this.submitted = false;
    this.falta.reset();
    this.ausencias.clear();
    const ausenciaFormGroup = this.formBuilder.group({
      hora: new FormControl('', [Validators.required]),
      aula: new FormControl('', [Validators.required]),
      grupo: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required]),
      actividades: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
    })
    this.ausencias.push(ausenciaFormGroup);
    this.formularios = 1;
  }

  showHora(hora: string) {
    //console.log(this.horas)
    let bandera: boolean = false;
    this.ausencias.controls.forEach(c => {
      // console.log(c.get('hora')?.value)
      if (c.get('hora')?.value == hora) {
        bandera = true;
      }
    });
    return bandera;
  }

}
