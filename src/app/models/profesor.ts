import { profesorResponse } from "./profesorRespose";


export class Profesor {

  static profesorJSON(obj: profesorResponse) {
    return new Profesor(
      obj['email'],
      obj['nombre'],
      obj['apellidos']
    );
  }

  constructor(
    public email: string,
    public nombre: string,
    public apellidos: string,
  ) { }

}
