import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path:'usuario',
    loadChildren:() => import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule),
  },
  {
    path:'jefatura',
    loadChildren:() => import('./modules/jefatura/jefatura.module').then((m) => m.JefaturaModule),
  },
  {
    path:'admin',
    loadChildren:() => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
