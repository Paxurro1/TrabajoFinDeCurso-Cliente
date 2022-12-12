import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrudUsuariosComponent } from './crud-usuarios/crud-usuarios.component';


@NgModule({
  declarations: [
    CrudUsuariosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
