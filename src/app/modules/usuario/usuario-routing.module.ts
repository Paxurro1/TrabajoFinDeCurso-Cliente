import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFaltaComponent } from './add-falta/add-falta.component';
import { ReenviarFaltaComponent } from './reenviar-falta/reenviar-falta.component';
import { VerFaltaComponent } from './ver-falta/ver-falta.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
