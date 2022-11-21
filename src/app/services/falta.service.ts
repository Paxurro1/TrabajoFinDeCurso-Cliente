import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { profesorResponse } from '../models/profesorRespose';
import { aulaResponse } from '../models/aulaRespose';
import { grupoResponse } from '../models/grupoRespose';
import { tareaResponse } from '../models/tareaRespose';
import { tareaAprobadaResponse } from '../models/tareaAprobadaRespose';
import { tareaRechazadaResponse } from '../models/tareaRechazadaRespose';
import { tareaEvaluarResponse } from '../models/tareaEvaluarRespose';
import { faltaResponse } from '../models/faltaRespose';

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

  public getTareasRechazadas(email: string) {
    let url: string = this.ruta + 'getTareasRechazadas/'+email;
    return this.http.get<tareaRechazadaResponse[]>(url);
  }

  public reenviarFaltas(datos: object) {
    let url: string = this.ruta + "reenviarFaltas";
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, datos, { headers: headers });
  }

  public getTareasAprobadas(email: string) {
    let url: string = this.ruta + 'getTareasAprobadas/'+email;
    return this.http.get<tareaAprobadaResponse[]>(url);
  }

  public getHistorialTareas() {
    let url: string = this.ruta + 'getHistorialTareas';
    return this.http.get<faltaResponse[]>(url);
  }

}
