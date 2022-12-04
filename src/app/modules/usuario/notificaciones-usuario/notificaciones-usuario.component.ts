import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/models/notificacion';
import { Usuario } from 'src/app/models/usuario';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notificaciones-usuario',
  templateUrl: './notificaciones-usuario.component.html',
  styleUrls: ['./notificaciones-usuario.component.scss']
})
export class NotificacionesUsuarioComponent implements OnInit {

  notificaciones: Notificacion[] = [];
  usuario?: Usuario;

  constructor(
    private notiService: NotificacionesService,
    private storageUser: LoginStorageUserService,
    private toastr: ToastrService,
  ) {
    this.usuario = storageUser.getUser();
  }

  ngOnInit(): void {
    this.getNotificacionesUsuario()
  }

  getNotificacionesUsuario() {
    this.notiService.getNotificacionesUsuario(this.usuario!.email).subscribe((response) => {
      this.notificaciones = response;
      //console.log(this.notificaciones);
    });
  }

  notificacionLeidaUsuario(i:number, id: number){
    // console.log(this.notificaciones[i].estado);
    this.notiService.notificacionLeidaUsuario(id).subscribe({
      next: (res) => {
        this.toastr.success('Notificación marcada como leída.', 'Leida');
        this.notificaciones[i].estado = '2'
      },
      error: e => {
        console.log(e);
        this.toastr.error('No se pudo marcar como leída.', 'Error');
      }
    })
  }

  notificacionBorradaUsuario(i:number, id: number){
    this.notiService.notificacionBorradaUsuario(id).subscribe({
      next: (res) => {
        this.notificaciones.splice(i,1)
        this.toastr.success('Notificación borrada.', 'Leida');
      },
      error: e => {
        console.log(e);
        this.toastr.error('No se pudo borrar.', 'Error');
      }
    })
  }

}
