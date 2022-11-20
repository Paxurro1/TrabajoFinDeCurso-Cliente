import { tareaEvaluarResponse } from "./tareaEvaluarRespose";


export class TareaEvaluar {

  static tareaEvaluarJSON(obj: tareaEvaluarResponse) {
    return new TareaEvaluar(
      obj['id'],
      obj['ausente'],
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
    public ausente: string,
    public hora: string,
    public aula: string,
    public grupo: string,
    public suplente: string,
    public actividades: string,
    public estado: number,
  ) { }

}
