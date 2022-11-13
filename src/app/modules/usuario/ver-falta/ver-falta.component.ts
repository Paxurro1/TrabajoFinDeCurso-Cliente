import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { tareaAprobadaResponse } from 'src/app/models/tareaAprobadaRespose';
import { Usuario } from 'src/app/models/usuario';
import { FaltaService } from 'src/app/services/falta.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';

@Component({
  selector: 'app-ver-falta',
  templateUrl: './ver-falta.component.html',
  styleUrls: ['./ver-falta.component.scss']
})
export class VerFaltaComponent implements OnInit {

  ausencias: tareaAprobadaResponse[] = [];
  usuario?: Usuario;

  constructor(
    private toastr: ToastrService,
    private faltasService: FaltaService,
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
  }

  ngOnInit(): void {
    this.getAusenciasAprobadas();
  }

  getAusenciasAprobadas() {
    this.faltasService.getTareasAprobadas(this.usuario!.email).subscribe((response) => {
      this.ausencias = response;
      console.log(this.ausencias);
    });
  }

}
