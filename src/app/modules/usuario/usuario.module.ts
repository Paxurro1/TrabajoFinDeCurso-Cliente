import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { AddFaltaComponent } from './add-falta/add-falta.component';
import { VerFaltaComponent } from './ver-falta/ver-falta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReenviarFaltaComponent } from './reenviar-falta/reenviar-falta.component';
import { ElegirDiaComponent } from './elegir-dia/elegir-dia.component';
import { VerGuardiasComponent } from './ver-guardias/ver-guardias.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { NotificacionesUsuarioComponent } from './notificaciones-usuario/notificaciones-usuario.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CambiarPassComponent } from './cambiar-pass/cambiar-pass.component';
import { ElegirRolComponent } from './elegir-rol/elegir-rol.component';


@NgModule({
  declarations: [
    AddFaltaComponent,
    VerFaltaComponent,
    ReenviarFaltaComponent,
    ElegirDiaComponent,
    VerGuardiasComponent,
    NotificacionesUsuarioComponent,
    EditarPerfilComponent,
    CambiarPassComponent,
    ElegirRolComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
  ]
})
export class UsuarioModule { }
