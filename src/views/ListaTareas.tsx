import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Tarea } from "../models";
import { AppContext } from "../contexts/AppContextProvider";

const ListaTareas = () => {
  const { tareas, setTareas } = useContext(AppContext);
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const limpiarTareas = () => {
    // Lógica para limpiar (tener un estado con un array vacío)
    setTareas && setTareas([]);
  };

  const altaNuevaTarea = () => {
    setTareas &&
      setTareas((tareas: Tarea[]) => [
        ...tareas,
        { id: tareas.length, texto: nuevaTarea, completada: false },
      ]);
  };

  const toggleTarea = (id: number) => {
    setTareas &&
      setTareas((tareas: Tarea[]) =>
        tareas.map((tarea: Tarea) =>
          tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        )
      );
  };

  return (
    <div style={{ color: "white" }}>
      <Outlet />
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={altaNuevaTarea}>Añadir</button>
      <button onClick={limpiarTareas}>Limpiar</button>
      {tareas && (
        <ul>
          {tareas.map((tarea: Tarea) => (
            <li
              key={tarea.id}
              style={{ textDecoration: tarea.completada ? "line-through" : "" }}
            >
              <span onClick={() => toggleTarea(tarea.id)}>{tarea.texto}</span>
              <Link to={`/tareas/${tarea.id}`}>Ver detalles</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTareas;
