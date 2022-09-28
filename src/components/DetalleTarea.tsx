import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Tarea } from "../models";
import { AppContext } from "../contexts/AppContextProvider";

const DetalleTarea = () => {
  const { id } = useParams();
  const { tareas } = useContext(AppContext)

  const tarea = tareas.find((tarea: Tarea) => tarea.id === Number(id));

  return (
    <div>
      {tarea ? (
        <>
          <h3>{tarea.texto}</h3>
          <p>id: {id}</p>
          <p>Completada: {tarea.completada ? "Sí" : "No"}</p>
        </>
      ) : (
        <h3>No existe la tarea con id {id}</h3>
      )}
    </div>
  );
};

export default DetalleTarea;
