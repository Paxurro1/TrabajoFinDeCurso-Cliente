import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { AddFaltaComponent } from './add-falta/add-falta.component';
import { VerFaltaComponent } from './ver-falta/ver-falta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddFaltaComponent,
    VerFaltaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsuarioModule { }
