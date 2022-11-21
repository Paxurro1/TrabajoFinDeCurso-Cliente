import { faltaResponse } from "./faltaRespose";
import { Tarea } from "./tarea";


export class Falta {

  static faltaJSON(obj: faltaResponse) {
    return new Falta(
      obj['id'],
      obj['dia'],
      obj['nombre'],
      obj['apellidos'],
      obj['motivo'],
      obj['tareas']
    );
  }

  constructor(
    public id: number,
    public dia: Date,
    public nombre: string,
    public apellidos: string,
    public motivo: string,
    public tareas?: Tarea[],
  ) { }

}
