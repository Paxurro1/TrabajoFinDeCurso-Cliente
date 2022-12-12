import { guardiaResponse } from "./guardiaRespose";


export class Guardia {

  static guardiaJSON(obj: guardiaResponse) {
    return new Guardia(
      obj['id'],
      obj['dia'],
      obj['nombre'],
      obj['apellidos'],
      obj['hora'],
      obj['grupo'],
      obj['aula'],
      obj['tipo_ausencia'],
      obj['descripcion'],
      obj['actividades'],
      obj['nombreSuplente'],
      obj['apellidosSuplente'],
    );
  }

  constructor(
    public id: number,
    public dia: Date,
    public nombre: string,
    public apellidos: string,
    public hora: string,
    public grupo: string,
    public aula: string,
    public tipo_ausencia: string,
    public descripcion: string,
    public actividades: string,
    public nombreSuplente: string,
    public apellidosSuplente: string,
  ) { }

}
