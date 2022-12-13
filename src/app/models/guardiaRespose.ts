import { Tarea } from "./tarea";

export interface guardiaResponse {
  id: number,
  dia: Date,
  nombre: string,
  apellidos: string,
  tareas: Tarea[],
  tareas2?: Tarea[],
}
