import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const DetalleTarea = () => {
  const { id } = useParams();
  const { todos } = useSelector((state: RootState) => state);

  const tarea = todos.find((todo) => todo.id === Number(id));

  console.log(tarea);
  // console.log(props.match.params)
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
