import axios from "axios";
import React, { createContext, useState } from "react";
import { Alumno, Tarea } from "../models";

type Props = {
  children: any;
};

export const AppContext = createContext<any>(null);

const url: string =
  "https://us-central1-fir-api-a3355.cloudfunctions.net/app/api/alumnos";

const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<Alumno | null>({
    username: "Alfonso",
    email: "alfonso@alfonso",
  });
  const [asignaturas, setAsignaturas] = useState<any[]>([]);
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  const fetchAlumnos = async() => {
    const response = await axios.post(url, { action: "obtenAlumnos" }) 
    setAlumnos(response.data.alumnos)
  }


  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        asignaturas,
        setAsignaturas,
        tareas,
        setTareas,
        alumnos,
        fetchAlumnos
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
