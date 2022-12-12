import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { grupoResponse } from '../models/grupoRespose';
import { horarioResponse } from '../models/horarioRespose';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  public ruta: string = "http://localhost:8000/api/";
  constructor(private http: HttpClient,) { }

  public editarPerfil(datos: object) {
    let url: string = this.ruta + "editarPerfil";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, datos, { headers: headers });
  }

  public camibiarPass(datos: object) {
    let url: string = this.ruta + "cambiarPass";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, datos, { headers: headers });
  }

  public getGruposRegistro() {
    let url: string = this.ruta + 'getGruposRegistro';
    return this.http.get<grupoResponse[]>(url);
  }

  public getHorario(email: string) {
    let url: string = this.ruta + 'getHorario' + '/' + email;
    return this.http.get<horarioResponse[]>(url);
  }

  public editarHorario(datos: object) {
    let url: string = this.ruta + "editarHorario";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, datos, { headers: headers });
  }
}
