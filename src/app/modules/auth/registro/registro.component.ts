import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { registroService } from 'src/app/services/registro.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formularioConstruido: boolean = false;
  registro: FormGroup;
  submitted: boolean = false;
  grupos: Grupo[] = [];

  dtTrigger = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtOptions: DataTables.Settings = {};

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private registroService: registroService,
  ) {
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
      email: ['', Validators.compose([
        Validators.required, Validators.email])
      ],
      nombre: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(20)])
      ],
      apellidos: ['', Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(30)])
      ],
      pass1: ['', Validators.compose([
        Validators.required, Validators.minLength(8), Validators.maxLength(30), Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{8,30})')])
      ],
      pass2: ['', Validators.compose([
        Validators.required])
      ],
      // validaGrupos: this.formBuilder.array([]),
      l1: ['Lunes|Primera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l2: ['Lunes|Segunda|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l3: ['Lunes|Tercera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l4: ['Lunes|Cuarta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l5: ['Lunes|Quinta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l6: ['Lunes|Sexta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m1: ['Martes|Primera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m2: ['Martes|Segunda|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m3: ['Martes|Tercera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m4: ['Martes|Cuarta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m5: ['Martes|Quinta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m6: ['Martes|Sexta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x1: ['Miercoles|Primera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x2: ['Miercoles|Segunda|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x3: ['Miercoles|Tercera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x4: ['Miercoles|Cuarta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x5: ['Miercoles|Quinta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x6: ['Miercoles|Sexta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j1: ['Jueves|Primera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j2: ['Jueves|Segunda|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j3: ['Jueves|Tercera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j4: ['Jueves|Cuarta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j5: ['Jueves|Quinta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j6: ['Jueves|Sexta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v1: ['Viernes|Primera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v2: ['Viernes|Segunda|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v3: ['Viernes|Tercera|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v4: ['Viernes|Cuarta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v5: ['Viernes|Quinta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v6: ['Viernes|Sexta|' + this.grupos.filter((n) => n.nombre == 'No asiste')[0].nombre, Validators.compose([
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

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('pass1')?.value;
    const confirmPassword: string = control.get('pass2')?.value;
    if (password !== confirmPassword) {
      control.get('pass2')?.setErrors({ NoPassswordMatch: true });
    }
  }

  getGruposRegistro() {
    this.registroService.getGruposRegistro().subscribe((response) => {
      this.grupos = response;
      //console.log(this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre);
      this.dtTrigger.next(this.grupos);
      $.fn.dataTable.ext.errMode = 'throw';
      this.construirFormulario();
      this.formularioConstruido = true;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registro.valid) {
      return;
    }
    var datos = {
      'email': this.registro.value.email,
      'nombre': this.registro.value.nombre,
      'apellidos': this.registro.value.apellidos,
      'pass': this.registro.value.pass1,
      'horario': [this.registro.value.l1, this.registro.value.l2, this.registro.value.l3, this.registro.value.l4, this.registro.value.l5, this.registro.value.l6,
      this.registro.value.m1, this.registro.value.m2, this.registro.value.m3, this.registro.value.m4, this.registro.value.m5, this.registro.value.m6,
      this.registro.value.x1, this.registro.value.x2, this.registro.value.x3, this.registro.value.x4, this.registro.value.x5, this.registro.value.x6,
      this.registro.value.j1, this.registro.value.j2, this.registro.value.j3, this.registro.value.j4, this.registro.value.j5, this.registro.value.j6,
      this.registro.value.v1, this.registro.value.v2, this.registro.value.v3, this.registro.value.v4, this.registro.value.v5, this.registro.value.v6]
    }
    this.registroService.registro(datos).subscribe({
      next: (res) => {
        this.toastr.success('Usuario registrado.', 'Registro');
        this.onReset();
      },
      error: e => {
        // console.log(e);
        this.toastr.error('El usuario no ha podido registrarse.', 'Error');
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
