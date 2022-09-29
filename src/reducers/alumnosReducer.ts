import { Alumno } from "../models";

const setAlumnos = (alumnos: Alumno[]) => alumnos;

export const actions = {
  SET_ALUMNOS: "SET_ALUMNOS",
  ADD_ALUMNO: "ADD_ALUMNO",
};

const alumnosReducer = (state: Alumno[] = [], action?: any) => {
  if (action.type === actions.SET_ALUMNOS) {
    return setAlumnos(action.payload);
    // return [...action.payload]
  }
  if (action.type === actions.SET_ALUMNOS) {
    return [...state, action.payload];
  }
  return state;
};

export const addAlumnos = (alumnos: Alumno[]) => {
  return {
    type: actions.SET_ALUMNOS,
    payload: alumnos,
  };
};

export default alumnosReducer;
