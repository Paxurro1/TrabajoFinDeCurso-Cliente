import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFaltaComponent } from './add-falta/add-falta.component';
import { ReenviarFaltaComponent } from './reenviar-falta/reenviar-falta.component';
import { VerFaltaComponent } from './ver-falta/ver-falta.component';
import { ElegirDiaComponent } from './elegir-dia/elegir-dia.component';
import { VerGuardiasComponent } from './ver-guardias/ver-guardias.component';
import { NotificacionesUsuarioComponent } from './notificaciones-usuario/notificaciones-usuario.component';

const routes: Routes = [
  {
    path:'add-falta',
    component: AddFaltaComponent
  },
  {
    path:'reenviar-falta',
    component: ReenviarFaltaComponent
  },
  {
    path:'ver-falta',
    component: VerFaltaComponent
  },
  {
    path:'elegir-dia',
    component: ElegirDiaComponent
  },
  {
    path:'ver-guardias',
    component: VerGuardiasComponent
  },
  {
    path:'notificaciones-usuario',
    component: NotificacionesUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
