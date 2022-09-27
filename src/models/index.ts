export type Articulo = {
  nombre: string;
  cantidad: number;
  comprado: boolean;
};

export type Alumno = {
  username: string;
  email: string;
  password?: string;
};

export const defaultAlumno: Alumno = { username: "", email: "" };

export type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
};
