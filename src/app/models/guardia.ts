import { guardiaResponse } from "./guardiaRespose";
import { Tarea } from "./tarea";


export class Guardia {

  static guardiaJSON(obj: guardiaResponse) {
    return new Guardia(
      obj['id'],
      obj['dia'],
      obj['nombre'],
      obj['apellidos'],
      obj['tareas'],
      obj['tareas2'],
    );
  }

  constructor(
    public id: number,
    public dia: Date,
    public nombre: string,
    public apellidos: string,
    public tareas: Tarea[],
    public tareas2?: Tarea[],
  ) { }

}
