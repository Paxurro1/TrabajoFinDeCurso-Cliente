import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { grupoResponse } from '../models/grupoRespose';

@Injectable({
  providedIn: 'root'
})
export class registroService {
  public ruta: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  public addUsuario(datos: object) {
    let url: string = this.ruta + "addUsuario";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, datos, { headers: headers });
  }

  public getGruposRegistro() {
    let url: string = this.ruta + 'getGruposRegistro';
    return this.http.get<grupoResponse[]>(url);
  }

}
