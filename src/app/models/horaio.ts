import { horarioResponse } from "./horarioRespose";


export class Horario {

  static horarioJSON(obj: horarioResponse) {
    return new Horario(
      obj['profesor'],
      obj['dia'],
      obj['hora'],
      obj['grupo']
    );
  }

  constructor(
    public profesor: string,
    public dia: string,
    public hora: string,
    public grupo: string,
  ) { }

}
