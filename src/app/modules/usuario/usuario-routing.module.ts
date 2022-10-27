import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFaltaComponent } from './add-falta/add-falta.component';

const routes: Routes = [
  {
    path:'add-falta',
    component: AddFaltaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
