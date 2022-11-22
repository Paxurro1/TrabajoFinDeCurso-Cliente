import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JefaturaRoutingModule } from './jefatura-routing.module';
import { VerificarFaltaComponent } from './verificar-falta/verificar-falta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialFaltasComponent } from './historial-faltas/historial-faltas.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    VerificarFaltaComponent,
    HistorialFaltasComponent
  ],
  imports: [
    CommonModule,
    JefaturaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class JefaturaModule { }
