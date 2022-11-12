import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { VerificarService } from 'src/app/services/verificar.service';

@Component({
  selector: 'app-verificar-falta',
  templateUrl: './verificar-falta.component.html',
  styleUrls: ['./verificar-falta.component.scss']
})
export class VerificarFaltaComponent implements OnInit {

  ausencias: Tarea[] = [];

  constructor(
    private toastr: ToastrService,
    private verificarService: VerificarService,
  ) { }

  ngOnInit(): void {
    this.getTareasEvaluar();
  }

  getTareasEvaluar() {
    this.verificarService.getTareasEvaluar().subscribe((response) => {
      this.ausencias = response;
      console.log(this.ausencias);
    });
  }

  public aprobarTarea(i: number, id: number) {
    this.ausencias.splice(i,1)
    this.verificarService.aprobarTarea(id).subscribe((response) => {
      //console.log(this.ausencias);
      this.toastr.success('Falta aprobada.', 'Aprobada');
    });
  }

  public rechazarTarea(i: number, id: number) {
    this.ausencias.splice(i,1)
    this.verificarService.rechazarTarea(id).subscribe((response) => {
      //console.log(this.ausencias);
      this.toastr.info('Falta rechazada.', 'Rechazada');
    });
  }

}
