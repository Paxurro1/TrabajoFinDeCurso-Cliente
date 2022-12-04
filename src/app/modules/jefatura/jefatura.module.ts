import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JefaturaRoutingModule } from './jefatura-routing.module';
import { VerificarFaltaComponent } from './verificar-falta/verificar-falta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialFaltasComponent } from './historial-faltas/historial-faltas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotificacionesJefaturaComponent } from './notificaciones-jefatura/notificaciones-jefatura.component';



@NgModule({
  declarations: [
    VerificarFaltaComponent,
    HistorialFaltasComponent,
    NotificacionesJefaturaComponent
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
