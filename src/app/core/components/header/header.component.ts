import { Component, OnInit } from '@angular/core';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario;
  public imgLogo: string;
  public isMobileLayout = false;

  constructor(
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
    this.imgLogo = "./assets/logo.png";
  }

  ngOnInit(): void {
    window.onresize = () => this.isMobileLayout = window.innerWidth <= 991;
  }

  public irInicio() {
    if (this.usuario!.rol_activo == 1) {
      window.location.href = "admin/crud-usuarios"
    } else if (this.usuario!.rol_activo == 2) {
      window.location.href = "jefatura/verificar-falta"
    } else if (this.usuario!.rol_activo == 3) {
      window.location.href = "usuario/add-falta"
    }
  }

  isMobile(){
    console.log('eeeeee')
    console.log(document.body.offsetWidth)
    if (document.body.offsetWidth < 360) {
      return true;
    }
    return false;
  }

}
