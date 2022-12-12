import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { PerfilService } from 'src/app/services/perfil.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  usuario?: Usuario;
  editar: FormGroup;
  submitted: boolean = false;
  public emailAntiguo?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private perfilService: PerfilService,
    private storageUser: LoginStorageUserService,
  ) {
    this.usuario = storageUser.getUser();
    this.editar = this.formBuilder.group({
      email: [this.usuario?.email, Validators.compose([
        Validators.required, Validators.email])
      ],
      nombre: [this.usuario?.nombre, Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(20)])
      ],
      apellidos: [this.usuario?.apellidos, Validators.compose([
        Validators.required, Validators.minLength(3), Validators.maxLength(30)])
      ]
    }
    );
  }

  ngOnInit(): void {
    this.emailAntiguo = this.usuario?.email;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editar.valid) {
      return;
    }
    var datos = {
      'emailAntiguo': this.emailAntiguo,
      'email': this.editar.value.email,
      'nombre': this.editar.value.nombre,
      'apellidos': this.editar.value.apellidos
    }
    this.perfilService.editarPerfil(datos).subscribe({
      next: (usuario: any) => {
        this.usuario = usuario;
        this.ponerRol();
        this.storageUser.setUser(this.usuario!)
        console.log(this.usuario)
        this.toastr.success('Perfil editado.', 'Registro');
      },
      error: e => {
        console.log(e);
        this.toastr.error('Error al editar el perfil.', 'Error');
      }
    })
    // console.log(datos);
    // this.onReset();
  }

  get formulario() {
    return this.editar.controls;
  }

  onReset() {
    this.submitted = false;
    this.editar.reset();
  }

  salir() {
    this.toastr.warning('Has cerrado sesión.', 'AVISO')
    this.storageUser.removeUser()
    window.location.href = ""
  }

  cambiarPass() {
    this.navegar('usuario/cambiar-pass', {queryParams:''})
  }

  elegirRol() {
    this.navegar('usuario/elegir-rol', {queryParams:''})
  }

  navegar(route?: string, params?: any): void {
    this.router.navigate([route], params);
  }

  public ponerRol() {
    if (this.isAdministrador()) {
      this.usuario!.rol_activo = 1
    } else if (this.isJefatura()) {
      this.usuario!.rol_activo = 2
    } else {
      this.usuario!.rol_activo = 3
    }
  }

  public isAdministrador(): boolean {
    return this.usuario!.roles!.find(rol => rol.id_rol === 1) != undefined;
  }


  public isJefatura(): boolean {
    return this.usuario!.roles!.find(rol => rol.id_rol === 2) != undefined;
  }


  public isUsuario(): boolean {
    return this.usuario!.roles?.find(rol => rol.id_rol === 3) != undefined;
  }

}
