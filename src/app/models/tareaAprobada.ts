import { tareaAprobadaResponse } from "./tareaAprobadaRespose";


export class TareaAprobada {

  static tareaAprobadaJSON(obj: tareaAprobadaResponse) {
    return new TareaAprobada(
      obj['id'],
      obj['dia'],
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
    public dia: Date,
    public hora: string,
    public aula: string,
    public grupo: string,
    public suplente: string,
    public actividades: string,
    public estado: number,
  ) { }

}
