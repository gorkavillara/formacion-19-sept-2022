import React, { useState } from "react";

type Tarea = {
  id: number;
  texto: string;
  completada: boolean;
};

const ListaTareas = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const altaNuevaTarea = () =>
    setTareas([
      ...tareas,
      { id: tareas.length, texto: nuevaTarea, completada: false },
    ]);
  return (
    <div style={{ color: "white" }}>
      <h1>Lista de tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={altaNuevaTarea}>Añadir</button>
      <ul>
        {tareas.map((tarea: Tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
