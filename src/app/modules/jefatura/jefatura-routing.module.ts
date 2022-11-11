import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificarFaltaComponent } from './verificar-falta/verificar-falta.component';

const routes: Routes = [
  {
    path:'verificar-falta',
    component: VerificarFaltaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JefaturaRoutingModule { }
