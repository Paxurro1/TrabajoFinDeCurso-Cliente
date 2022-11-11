import { tareaResponse } from "./tareaRespose";


export class Tarea {

  static tareaJSON(obj: tareaResponse) {
    return new Tarea(
      obj['id'],
      obj['hora'],
      obj['aula'],
      obj['grupo'],
      obj['suplente'],
      obj['actividades'],
      obj['estado']
    );
  }

  constructor(
    public id: number,
    public hora: string,
    public aula: string,
    public grupo: string,
    public suplente: string,
    public actividades: string,
    public estado: number,
  ) { }

}
