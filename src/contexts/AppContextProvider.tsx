import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { Alumno, Tarea } from "../models";
import alumnosReducer, {
  actions,
  addAlumnos,
} from "../reducers/alumnosReducer";

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
  // const [alumnos, alumnosDispatch] = useReducer(alumnosReducer, []);

  const fetchAlumnos = async () => {
    const response = await axios.post(url, { action: "obtenAlumnos" });
    setAlumnos(response.data.alumnos);
    // const action = addAlumnos(response.data.alumnos);
    // const dispatchAction = {
    // type: actions.SET_ALUMNOS,
    // payload: response.data.alumnos,
    // };
    // alumnosDispatch(dispatchAction);
  };

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
        fetchAlumnos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
