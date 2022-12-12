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

  constructor(
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
    this.imgLogo = "./assets/logo.png";
  }

  ngOnInit(): void {
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

}
