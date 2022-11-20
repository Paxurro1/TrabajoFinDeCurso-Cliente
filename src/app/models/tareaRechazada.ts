import { tareaRechazadaResponse } from "./tarearechazadaRespose";


export class TareaRechazada {

  static tareaRechazadaJSON(obj: tareaRechazadaResponse) {
    return new TareaRechazada(
      obj['id'],
      obj['dia'],
      obj['hora'],
      obj['aula'],
      obj['grupo'],
      obj['suplente'],
      obj['actividades'],
      obj['estado'],
      obj['motivo']
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
    public motivo: string,
  ) { }

}
