import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFaltaComponent } from './add-falta/add-falta.component';
import { ReenviarFaltaComponent } from './reenviar-falta/reenviar-falta.component';
import { VerFaltaComponent } from './ver-falta/ver-falta.component';
import { ElegirDiaComponent } from './elegir-dia/elegir-dia.component';
import { VerGuardiasComponent } from './ver-guardias/ver-guardias.component';
import { NotificacionesUsuarioComponent } from './notificaciones-usuario/notificaciones-usuario.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { CambiarPassComponent } from './cambiar-pass/cambiar-pass.component'
import { ElegirRolComponent } from './elegir-rol/elegir-rol.component'
import { EditarHorarioComponent } from './editar-horario/editar-horario.component';

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
  {
    path:'editar-perfil',
    component: EditarPerfilComponent
  },
  {
    path:'cambiar-pass',
    component: CambiarPassComponent
  },
  {
    path:'elegir-rol',
    component: ElegirRolComponent
  },
  {
    path:'editar-horario',
    component: EditarHorarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
