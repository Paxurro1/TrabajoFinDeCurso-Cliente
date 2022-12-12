import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { PerfilService } from 'src/app/services/perfil.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Grupo } from 'src/app/models/grupo';
import { Horario } from 'src/app/models/horaio';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-editar-horario',
  templateUrl: './editar-horario.component.html',
  styleUrls: ['./editar-horario.component.scss']
})
export class EditarHorarioComponent implements OnInit {

  formularioConstruido: boolean = false;
  registro: FormGroup;
  submitted: boolean = false;
  grupos: Grupo[] = [];
  horario: Horario[] = [];
  usuario?: Usuario;

  dtTrigger = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtOptions: DataTables.Settings = {};

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private perfilService: PerfilService,
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
    this.registro = this.formBuilder.group({

    }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(this.grupos);
  }

  ngOnInit(): void {
    this.getGruposRegistro();

    $.extend(true, $.fn.dataTable.defaults, {
      "language": { "url": '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json' }
    })
  }

  construirFormulario() {
    this.registro = this.formBuilder.group({
      l1: ['Lunes|Primera|' + this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Primera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      l2: ['Lunes|Segunda|' + this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Segunda')[0].grupo, Validators.compose([
        Validators.required])
      ],
      l3: ['Lunes|Tercera|' + this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Tercera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      l4: ['Lunes|Cuarta|' + this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Cuarta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      l5: ['Lunes|Quinta|' + this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Quinta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      l6: ['Lunes|Sexta|' + this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Sexta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      m1: ['Martes|Primera|' + this.horario.filter((n)=>n.dia == 'Martes' && n.hora == 'Primera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      m2: ['Martes|Segunda|' + this.horario.filter((n)=>n.dia == 'Martes' && n.hora == 'Segunda')[0].grupo, Validators.compose([
        Validators.required])
      ],
      m3: ['Martes|Tercera|' + this.horario.filter((n)=>n.dia == 'Martes' && n.hora == 'Tercera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      m4: ['Martes|Cuarta|' + this.horario.filter((n)=>n.dia == 'Martes' && n.hora == 'Cuarta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      m5: ['Martes|Quinta|' + this.horario.filter((n)=>n.dia == 'Martes' && n.hora == 'Quinta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      m6: ['Martes|Sexta|' + this.horario.filter((n)=>n.dia == 'Martes' && n.hora == 'Sexta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      x1: ['Miercoles|Primera|' + this.horario.filter((n)=>n.dia == 'Miercoles' && n.hora == 'Primera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      x2: ['Miercoles|Segunda|' + this.horario.filter((n)=>n.dia == 'Miercoles' && n.hora == 'Segunda')[0].grupo, Validators.compose([
        Validators.required])
      ],
      x3: ['Miercoles|Tercera|' + this.horario.filter((n)=>n.dia == 'Miercoles' && n.hora == 'Tercera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      x4: ['Miercoles|Cuarta|' + this.horario.filter((n)=>n.dia == 'Miercoles' && n.hora == 'Cuarta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      x5: ['Miercoles|Quinta|' + this.horario.filter((n)=>n.dia == 'Miercoles' && n.hora == 'Quinta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      x6: ['Miercoles|Sexta|' + this.horario.filter((n)=>n.dia == 'Miercoles' && n.hora == 'Sexta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      j1: ['Jueves|Primera|' + this.horario.filter((n)=>n.dia == 'Jueves' && n.hora == 'Primera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      j2: ['Jueves|Segunda|' + this.horario.filter((n)=>n.dia == 'Jueves' && n.hora == 'Segunda')[0].grupo, Validators.compose([
        Validators.required])
      ],
      j3: ['Jueves|Tercera|' + this.horario.filter((n)=>n.dia == 'Jueves' && n.hora == 'Tercera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      j4: ['Jueves|Cuarta|' + this.horario.filter((n)=>n.dia == 'Jueves' && n.hora == 'Cuarta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      j5: ['Jueves|Quinta|' + this.horario.filter((n)=>n.dia == 'Jueves' && n.hora == 'Quinta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      j6: ['Jueves|Sexta|' + this.horario.filter((n)=>n.dia == 'Jueves' && n.hora == 'Sexta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      v1: ['Viernes|Primera|' + this.horario.filter((n)=>n.dia == 'Viernes' && n.hora == 'Primera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      v2: ['Viernes|Segunda|' + this.horario.filter((n)=>n.dia == 'Viernes' && n.hora == 'Segunda')[0].grupo, Validators.compose([
        Validators.required])
      ],
      v3: ['Viernes|Tercera|' + this.horario.filter((n)=>n.dia == 'Viernes' && n.hora == 'Tercera')[0].grupo, Validators.compose([
        Validators.required])
      ],
      v4: ['Viernes|Cuarta|' + this.horario.filter((n)=>n.dia == 'Viernes' && n.hora == 'Cuarta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      v5: ['Viernes|Quinta|' + this.horario.filter((n)=>n.dia == 'Viernes' && n.hora == 'Quinta')[0].grupo, Validators.compose([
        Validators.required])
      ],
      v6: ['Viernes|Sexta|' + this.horario.filter((n)=>n.dia == 'Viernes' && n.hora == 'Sexta')[0].grupo, Validators.compose([
        Validators.required])
      ],
    },
    {
      validator: [this.passwordMatchValidator]
    }
    );
  }

  get validaGrupos() {
    return this.registro.get('validaGrupos') as FormArray;
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.registro.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('pass1')?.value;
    const confirmPassword: string = control.get('pass2')?.value;
    if (password !== confirmPassword) {
      control.get('pass2')?.setErrors({ NoPassswordMatch: true });
    }
  }

  getHorario() {
    this.perfilService.getHorario(this.usuario!.email).subscribe((response) => {
      this.horario = response;
      //console.log(this.horario.filter((n)=>n.dia == 'Lunes' && n.hora == 'Primera')[0].grupo)
      this.construirFormulario();
      this.formularioConstruido = true;
      //console.log(this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre);
    });
  }

  getGruposRegistro() {
    this.perfilService.getGruposRegistro().subscribe((response) => {
      this.grupos = response;
      //console.log(this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre);
      this.dtTrigger.next(this.grupos);
      $.fn.dataTable.ext.errMode = 'throw';
      this.getHorario();
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registro.valid) {
      return;
    }
    var datos = {
      'email': this.usuario?.email,
      'horario': [this.registro.value.l1, this.registro.value.l2, this.registro.value.l3, this.registro.value.l4, this.registro.value.l5, this.registro.value.l6,
      this.registro.value.m1, this.registro.value.m2, this.registro.value.m3, this.registro.value.m4, this.registro.value.m5, this.registro.value.m6,
      this.registro.value.x1, this.registro.value.x2, this.registro.value.x3, this.registro.value.x4, this.registro.value.x5, this.registro.value.x6,
      this.registro.value.j1, this.registro.value.j2, this.registro.value.j3, this.registro.value.j4, this.registro.value.j5, this.registro.value.j6,
      this.registro.value.v1, this.registro.value.v2, this.registro.value.v3, this.registro.value.v4, this.registro.value.v5, this.registro.value.v6]
    }
    this.perfilService.editarHorario(datos).subscribe({
      next: (res) => {
        this.toastr.success('Horario editado.', 'Registro');
      },
      error: e => {
        console.log(e);
        this.toastr.error('No se pudo editar el horario.', 'Error');
      }
    })
    console.log(datos);
  }

  get formulario() {
    return this.registro.controls;
  }

  onReset() {
    this.submitted = false;
    this.registro.reset();
    this.construirFormulario();
  }

}
