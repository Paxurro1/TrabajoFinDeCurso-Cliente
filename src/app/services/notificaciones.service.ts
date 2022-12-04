import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { notificacionResponse } from '../models/notificacionRespose';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  public ruta: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  public getNotificacionesJefatura(email: string) {
    let url: string = this.ruta + 'getNotificacionesJefatura/' + email;
    return this.http.get<notificacionResponse[]>(url);
  }

  public notificacionLeidaJefatura(id: number) {
    let url: string = this.ruta + 'notificacionLeidaJefatura/' + id;
    return this.http.get(url);
  }

  public notificacionBorradaJefatura(id: number) {
    let url: string = this.ruta + 'notificacionBorradaJefatura/' + id;
    return this.http.get(url);
  }

  public getNotificacionesUsuario(email: string) {
    let url: string = this.ruta + 'getNotificacionesUsuario/' + email;
    return this.http.get<notificacionResponse[]>(url);
  }

  public notificacionLeidaUsuario(id: number) {
    let url: string = this.ruta + 'notificacionLeidaUsuario/' + id;
    return this.http.get(url);
  }

  public notificacionBorradaUsuario(id: number) {
    let url: string = this.ruta + 'notificacionBorradaUsuario/' + id;
    return this.http.get(url);
  }

}
