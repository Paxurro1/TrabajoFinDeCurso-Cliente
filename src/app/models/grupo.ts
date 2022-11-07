import { grupoResponse } from "./grupoRespose";


export class Grupo {

  static grupoJSON(obj: grupoResponse) {
    return new Grupo(
      obj['nombre']
    );
  }

  constructor(
    public nombre: string,
  ) { }

}
