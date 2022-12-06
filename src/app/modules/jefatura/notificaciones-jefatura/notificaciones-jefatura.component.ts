import { Component, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/models/notificacion';
import { Usuario } from 'src/app/models/usuario';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { ToastrService } from 'ngx-toastr';
import { NumeroNotificaciones } from 'src/app/services/numeroNotificaciones.service';


@Component({
  selector: 'app-notificaciones-jefatura',
  templateUrl: './notificaciones-jefatura.component.html',
  styleUrls: ['./notificaciones-jefatura.component.scss']
})
export class NotificacionesJefaturaComponent implements OnInit {

  notificaciones: Notificacion[] = [];
  usuario?: Usuario;
  numeroNotificaciones: number = 0;

  constructor(
    private notiService: NotificacionesService,
    private storageUser: LoginStorageUserService,
    private toastr: ToastrService,
    private numero: NumeroNotificaciones,
  ) {
    this.usuario = storageUser.getUser();
  }

  ngOnInit(): void {
    this.getNotificacionesJefatura();
    this.numero.customNumeroNotificaciones.subscribe(numero => this.numeroNotificaciones = numero);
  }

  getNotificacionesJefatura() {
    this.notiService.getNotificacionesJefatura(this.usuario!.email).subscribe((response) => {
      this.notificaciones = response;
      console.log(this.notificaciones);
    });
  }

  notificacionLeidaJefatura(i:number, id: number){
    // console.log(this.notificaciones[i].estado);
    this.notiService.notificacionLeidaJefatura(id).subscribe({
      next: (res) => {
        this.toastr.success('Notificación marcada como leída.', 'Leida');
        this.notificaciones[i].estado = '2'
        this.numeroNotificaciones = this.notificaciones.filter((n)=>n.estado == '1').length;
        this.changeNumber()
      },
      error: e => {
        console.log(e);
        this.toastr.error('No se pudo marcar como leída.', 'Error');
      }
    })
  }

  notificacionBorradaJefatura(i:number, id: number){
    this.notiService.notificacionBorradaJefatura(id).subscribe({
      next: (res) => {
        this.notificaciones.splice(i,1)
        this.toastr.success('Notificación borrada.', 'Leida');
        this.numeroNotificaciones = this.notificaciones.filter((n)=>n.estado == '1').length;
        this.changeNumber()
      },
      error: e => {
        console.log(e);
        this.toastr.error('No se pudo borrar.', 'Error');
      }
    })
  }

  changeNumber() {
    this.numero.changeNumero(this.numeroNotificaciones);
    console.log(this.numeroNotificaciones);
  }

}
