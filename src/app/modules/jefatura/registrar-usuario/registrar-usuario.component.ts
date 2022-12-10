import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { registroService } from 'src/app/services/registro.service';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent implements OnInit {

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
    // const validaGrupoFormGroup = this.formBuilder.group({
    //   l1: new FormControl('', [Validators.required]),
    //   l2: new FormControl('', [Validators.required]),
    //   l3: new FormControl('', [Validators.required]),
    //   l4: new FormControl('', [Validators.required]),
    //   l5: new FormControl('', [Validators.required]),
    //   l6: new FormControl('', [Validators.required]),
    //   m1: new FormControl('', [Validators.required]),
    //   m2: new FormControl('', [Validators.required]),
    //   m3: new FormControl('', [Validators.required]),
    //   m4: new FormControl('', [Validators.required]),
    //   m5: new FormControl('', [Validators.required]),
    //   m6: new FormControl('', [Validators.required]),
    //   x1: new FormControl('', [Validators.required]),
    //   x2: new FormControl('', [Validators.required]),
    //   x3: new FormControl('', [Validators.required]),
    //   x4: new FormControl('', [Validators.required]),
    //   x5: new FormControl('', [Validators.required]),
    //   x6: new FormControl('', [Validators.required]),
    //   j1: new FormControl('', [Validators.required]),
    //   j2: new FormControl('', [Validators.required]),
    //   j3: new FormControl('', [Validators.required]),
    //   j4: new FormControl('', [Validators.required]),
    //   j5: new FormControl('', [Validators.required]),
    //   j6: new FormControl('', [Validators.required]),
    //   v1: new FormControl('', [Validators.required]),
    //   v2: new FormControl('', [Validators.required]),
    //   v3: new FormControl('', [Validators.required]),
    //   v4: new FormControl('', [Validators.required]),
    //   v5: new FormControl('', [Validators.required]),
    //   v6: new FormControl('', [Validators.required]),
    // })
    // this.validaGrupos.push(validaGrupoFormGroup);
    $.extend(true, $.fn.dataTable.defaults, {
      "language": { "url": '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json' }
    })
  }

  construirFormulario() {
    this.registro = this.formBuilder.group({
      checkArray: this.formBuilder.array([], [Validators.required]),
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
      l1: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l2: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l3: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l4: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l5: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      l6: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m1: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m2: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m3: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m4: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m5: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      m6: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x1: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x2: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x3: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x4: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x5: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      x6: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j1: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j2: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j3: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j4: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j5: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      j6: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v1: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v2: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v3: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v4: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v5: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
        Validators.required])
      ],
      v6: [this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre, Validators.compose([
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

  getGruposRegistro() {
    this.registroService.getGruposRegistro().subscribe((response) => {
      this.grupos = response;
      console.log(this.grupos.filter((n)=>n.nombre == 'No asiste')[0].nombre);
      this.dtTrigger.next(this.grupos);
      $.fn.dataTable.ext.errMode = 'throw';
      this.construirFormulario();
      this.formularioConstruido = true;
    });
  }

  onSubmit() {
    this.submitted = true;
    // if (!this.registro.valid) {
    //   return;
    // }
    var datos = {
      'email': this.registro.value.email,
      'nombre': this.registro.value.nombre,
      'apellidos': this.registro.value.apellidos,
      'pass': this.registro.value.pass1,
      'roles': this.registro.value.checkArray,
      'horario': [this.registro.value.l1, this.registro.value.l2, this.registro.value.l3, this.registro.value.l4, this.registro.value.l5, this.registro.value.l6,
      this.registro.value.m1, this.registro.value.m2, this.registro.value.m3, this.registro.value.m4, this.registro.value.m5, this.registro.value.m6,
      this.registro.value.x1, this.registro.value.x2, this.registro.value.x3, this.registro.value.x4, this.registro.value.x5, this.registro.value.x6,
      this.registro.value.j1, this.registro.value.j2, this.registro.value.j3, this.registro.value.j4, this.registro.value.j5, this.registro.value.j6,
      this.registro.value.v1, this.registro.value.v2, this.registro.value.v3, this.registro.value.v4, this.registro.value.v5, this.registro.value.v6,]
    }
    // this.registroService.addUsuario(datos).subscribe({
    //   next: (res) => {
    //     this.toastr.success('Usuario registrado.', 'Registro');
    //     this.onReset();
    //   },
    //   error: e => {
    //     console.log(e);
    //     this.toastr.error('El email o el DNI ya están en uso.', 'Error');
    //   }
    // })
    console.log(datos);
  }

  get formulario() {
    return this.registro.controls;
  }

  onReset() {
    this.submitted = false;
    this.registro.reset();
  }

}
