import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFaltaComponent } from './verificar-falta/verificar-falta.component';
import { HistorialFaltasComponent } from './historial-faltas/historial-faltas.component';
import { NotificacionesJefaturaComponent } from './notificaciones-jefatura/notificaciones-jefatura.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  {
    path:'verificar-falta',
    component: VerificarFaltaComponent
  },
  {
    path:'historial-faltas',
    component: HistorialFaltasComponent
  },
  {
    path:'notificaciones-jefatura',
    component: NotificacionesJefaturaComponent
  },
  {
    path:'registrar-usuario',
    component: RegistrarUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JefaturaRoutingModule { }
