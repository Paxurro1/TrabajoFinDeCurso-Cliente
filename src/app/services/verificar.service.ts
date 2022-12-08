import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tareaResponse } from '../models/tareaRespose';
import { tareaEvaluarResponse } from '../models/tareaEvaluarRespose';
import { TipoAusenciaResponse } from '../models/tipoAusenciaRespose';

@Injectable({
  providedIn: 'root'
})
export class VerificarService {
  public ruta: string = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) { }

  public getTareasEvaluar() {
    let url: string = this.ruta + 'getTareasEvaluar';
    return this.http.get<tareaEvaluarResponse[]>(url);
  }

  public aprobarTarea(id: number, tipo: string) {
    let url: string = this.ruta + 'aprobarTarea/' + id + '/' + tipo;
    return this.http.get(url);
  }

  public rechazarTarea(id: number, motivo: string) {
    let url: string = this.ruta + 'rechazarTarea/' + id + '/' + motivo;
    return this.http.get(url);
  }

  public getTiposAusencias() {
    let url: string = this.ruta + 'getTiposAusencias';
    return this.http.get<TipoAusenciaResponse[]>(url);
  }

}
