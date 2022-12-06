import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumeroNotificaciones {

  private numeroNotificaciones = new BehaviorSubject<number>(0);

  public customNumeroNotificaciones = this.numeroNotificaciones.asObservable();

  public ruta: string = 'http://localhost:8000/api/';

  constructor() { }

  public changeNumero(numero: number): void {
    this.numeroNotificaciones.next(numero);
  }

}
