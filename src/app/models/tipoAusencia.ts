import { TipoAusenciaResponse } from "./tipoAusenciaRespose";


export class TipoAusencia {

  static tipoAusenciaJSON(obj: TipoAusenciaResponse) {
    return new TipoAusencia(
      obj['siglas'],
      obj['descripcion']
    );
  }

  constructor(
    public siglas: string,
    public descripcion: string,
  ) { }

}
