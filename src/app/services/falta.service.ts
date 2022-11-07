import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { profesorResponse } from '../models/profesorRespose';
import { aulaResponse } from '../models/aulaRespose';
import { grupoResponse } from '../models/grupoRespose';

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

  public getProfesores(email: string) {
    let url: string = this.ruta + 'getProfesores/'+email;
    return this.http.get<profesorResponse>(url);
  }

  public getAulas() {
    let url: string = this.ruta + 'getAulas';
    return this.http.get<aulaResponse>(url);
  }

  public getGrupos() {
    let url: string = this.ruta + 'getGrupos';
    return this.http.get<grupoResponse>(url);
  }


}
