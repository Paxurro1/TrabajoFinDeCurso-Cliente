import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { AddFaltaComponent } from './add-falta/add-falta.component';
import { VerFaltaComponent } from './ver-falta/ver-falta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReenviarFaltaComponent } from './reenviar-falta/reenviar-falta.component';


@NgModule({
  declarations: [
    AddFaltaComponent,
    VerFaltaComponent,
    ReenviarFaltaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsuarioModule { }
