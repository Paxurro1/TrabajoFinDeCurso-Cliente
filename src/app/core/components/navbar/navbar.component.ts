import { Component, Input, OnInit } from '@angular/core';
import { Notificacion } from 'src/app/models/notificacion';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { NotificacionesService } from 'src/app/services/notificaciones.service';
import { NumeroNotificaciones } from 'src/app/services/numeroNotificaciones.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuario;

  notificaciones: Notificacion[] = [];
  @Input()numeroNotificaciones?: Number;

  constructor(
    private storageUser: LoginStorageUserService,
    private notiService: NotificacionesService,
    private numero: NumeroNotificaciones,
  ) {
    this.usuario = storageUser.getUser();
  }

  ngOnInit(): void {
    console.log(this.usuario)
    this.numero.customNumeroNotificaciones.subscribe(numero => this.numeroNotificaciones = numero);
    if (this.usuario?.rol_activo == 2) {
      this.getNotificacionesJefatura()
    } else if (this.usuario?.rol_activo == 3) {
      this.getNotificacionesUsuario()
    }

  }

  getNotificacionesJefatura() {
    this.notiService.getNotificacionesJefatura(this.usuario!.email).subscribe((response) => {
      this.notificaciones = response;
      // console.log('soy jefatura')
      //console.log(this.notificaciones);
      // console.log('AAAAAAAAAAAA')
      this.notificacionSinLeer()
    });
  }

  getNotificacionesUsuario() {
    this.notiService.getNotificacionesUsuario(this.usuario!.email).subscribe((response) => {
      this.notificaciones = response;
      //console.log(this.notificaciones);
      this.notificacionSinLeer()
    });
  }

  notificacionSinLeer(){
    this.numeroNotificaciones = this.notificaciones.filter((n)=>n.estado == '1').length;
  }


}
