import { AfterViewInit, OnDestroy, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudAdministradoresService } from 'src/app/services/crud-administradores.service';
import { LoginStorageUserService } from 'src/app/services/login.storageUser.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario';
import { ModificarUsuarioComponent } from '../modificar-usuario/modificar-usuario.component';

@Component({
  selector: 'app-crud-usuarios',
  templateUrl: './crud-usuarios.component.html',
  styleUrls: ['./crud-usuarios.component.scss']
})
export class CrudUsuariosComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement?: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();

  public usuarios: any = [];
  usuario;
  email?: string;

  constructor(
    private adminService: CrudAdministradoresService,
    private router: Router,
    private toastr: ToastrService,
    private storageUser: LoginStorageUserService,
    private modal: NgbModal,
  ) {
    this.usuario = storageUser.getUser();
    this.email = this.usuario?.email
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(this.usuarios);
  }

  ngOnInit(): void {
    this.getUsuarios();
    $.extend(true, $.fn.dataTable.defaults, {
      "language": { "url": '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json' }
    })

  }

  rerender(): void {
    this.dtElement!.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
    });
  }

  getUsuarios() {
    this.adminService.getUsuarios().subscribe((response) => {
      this.usuarios = response;
      console.log(this.usuarios);
      this.rerender();
      this.dtTrigger.next(this.usuarios);
      $.fn.dataTable.ext.errMode = 'throw';
    });
  }

  editarUsuario(usuario: Usuario) {
    this.modal.open(ModificarUsuarioComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
    this.adminService.usuarioTrigger.emit([usuario]);
  }

  borrarUsuario(emailUsuario: string) {
    this.adminService.borrarUsuario(emailUsuario).subscribe({
      next: (res) => {
        this.toastr.success('Usuario eliminado.', 'Eliminado');
        this.getUsuarios();
      },
      error: e => {
        console.log(e);
        this.toastr.error('El usuario no ha podido ser eliminado.', 'Error');
      }
    })
  }

  public addUsuario() {
    this.router.navigate(['admin/registro-usuarios']);
  }

}
