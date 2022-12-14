import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { FaltaService } from 'src/app/services/falta.service';
import { ToastrService } from 'ngx-toastr';
import { guardiaResponse } from 'src/app/models/guardiaRespose';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { VerGuardiasComponent } from '../ver-guardias/ver-guardias.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Guardia } from 'src/app/models/guardia';
import { grupoResponse } from 'src/app/models/grupoRespose';
import { Tarea } from 'src/app/models/tarea';


@Component({
  selector: 'app-elegir-dia',
  templateUrl: './elegir-dia.component.html',
  styleUrls: ['./elegir-dia.component.scss']
})
export class ElegirDiaComponent implements AfterViewInit, OnDestroy, OnInit {

  guardias: guardiaResponse[] = [];
  validar: FormGroup;
  submitted: boolean = false;
  tareaVacia: Tarea = {
    id: 0,
    hora: 'NO',
    aula: '',
    grupo: '',
    suplente: '',
    actividades: '',
    estado: 0,
    apellidos: '',
    nombre: '',
    descripcion:'',
    tipo_ausencia:''
  }

  dtTrigger = new Subject<any>();
  @ViewChild(DataTableDirective, { static: false })
  dtElement?: DataTableDirective;
  dtOptions: DataTables.Settings = {};

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private faltasService: FaltaService,
    private router: Router,
    private modal: NgbModal,
  ) {
    this.validar = this.formBuilder.group({
      fecha: ['', Validators.compose([
        Validators.required])
      ]
    },
      {
        validator: [this.mayorQueHoy]
      }
    );
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(this.guardias);
  }

  ngOnInit(): void {
    $.extend(true, $.fn.dataTable.defaults, {
      "language": { "url": '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json' }
    })
  }

  rerender(): void {
    this.dtElement!.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    });
  }

  mayorQueHoy(control: AbstractControl) {
    const fechaVer = new Date(control.get('fecha')?.value);
    var fecha = new Date();
    let ayer = new Date(fecha.getTime() - 24 * 60 * 60 * 1000);
    //console.log(fechaAusencia)
    if (fechaVer < ayer) {
      control.get('fecha')?.setErrors({ mayorQueHoy: true });
    }
  }

  onSubmit() {
    //console.log('fff')
    this.submitted = true;
    if (!this.validar.valid) {
      return;
    }
    var datos = {
      'fecha': this.validar.value.fecha,
    }
    // console.log(datos.fecha)

    this.faltasService.getGuardias(datos.fecha).subscribe((response) => {
      this.guardias = response;
      //console.log(this.guardias)
      this.rellenarAux();
      this.rerender();
      this.dtTrigger.next(this.guardias);
      $.fn.dataTable.ext.errMode = 'throw';

    });
    //this.onReset();
  }

  verDetalle(g: Guardia, t:Tarea) {
    this.modal.open(VerGuardiasComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
    this.faltasService.guardiaTrigger.emit([g]);
    this.faltasService.tareaTrigger.emit([t]);
  }

  get formulario() {
    return this.validar.controls;
  }

  onReset() {
    this.submitted = false;
    this.validar.reset();
  }

  rellenarAux() {
    this.guardias.forEach(g => {
      g.tareas2 = [];
      if (g.tareas.find(t => t.hora == 'Primera')) {
        g.tareas2?.push(g.tareas.find(t => t.hora == 'Primera')!)
      } else {
        g.tareas2?.push(this.tareaVacia)
      }
      if (g.tareas.find(t => t.hora == 'Segunda')) {
        g.tareas2?.push(g.tareas.find(t => t.hora == 'Segunda')!)
      } else {
        g.tareas2?.push(this.tareaVacia)
      }
      if (g.tareas.find(t => t.hora == 'Tercera')) {
        console.log('eeeee')
        g.tareas2?.push(g.tareas.find(t => t.hora == 'Tercera')!)
      } else {
        g.tareas2?.push(this.tareaVacia)
      }
      if (g.tareas.find(t => t.hora == 'Cuarta')) {
        g.tareas2?.push(g.tareas.find(t => t.hora == 'Cuarta')!)
      } else {
        g.tareas2?.push(this.tareaVacia)
      }
      if (g.tareas.find(t => t.hora == 'Quinta')) {
        g.tareas2?.push(g.tareas.find(t => t.hora == 'Quinta')!)
      } else {
        g.tareas2?.push(this.tareaVacia)
      }
      if (g.tareas.find(t => t.hora == 'Sexta')) {
        g.tareas2?.push(g.tareas.find(t => t.hora == 'Sexta')!)
      } else {
        g.tareas2?.push(this.tareaVacia)
      }
      console.log(g.tareas2)
    });
    //console.log(this.guardias)
  }

}
