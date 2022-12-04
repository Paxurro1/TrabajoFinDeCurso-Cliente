import { notificacionResponse } from "./notificacionRespose";


export class Notificacion {

  static notifiacionJSON(obj: notificacionResponse) {
    return new Notificacion(
      obj['id'],
      obj['id_notificacion'],
      obj['email'],
      obj['nombre'],
      obj['apellidos'],
      obj['descripcion'],
      obj['estado']
    );
  }

  constructor(
    public id: number,
    public id_notificacion: number,
    public email: string,
    public nombre: string,
    public apellidos: string,
    public descripcion: string,
    public estado: string,
  ) { }

}
