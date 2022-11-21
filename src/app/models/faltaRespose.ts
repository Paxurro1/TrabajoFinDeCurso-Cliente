import { Tarea } from "./tarea";

export interface faltaResponse {
  id: number,
  dia: Date,
  nombre: string,
  apellidos: string,
  motivo: string,
  tareas?: Tarea[];
}
