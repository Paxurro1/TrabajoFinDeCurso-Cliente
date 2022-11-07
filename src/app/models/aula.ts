import { aulaResponse } from "./aulaRespose";


export class Aula {

  static aulaJSON(obj: aulaResponse) {
    return new Aula(
      obj['nombre']
    );
  }

  constructor(
    public nombre: string,
  ) { }

}
