import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usuarioResponse } from '../models/usuarioRespose';

@Injectable({
  providedIn: 'root'
})
export class FaltaService {
  public ruta: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  public addFalta(datos: object) {
    let url: string = this.ruta + "addFalta";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, datos, { headers: headers });
  }


}
