import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Tarea } from "../models";
import { RootState } from "../store/store";
import {
  resetTodos,
  addTodo,
  completeTodo,
} from "../features/todos/todosSlice";

const ListaTareas = () => {
  const todos = useSelector((state: RootState) => state.todos);
  // console.log(todos);

  const dispatch = useDispatch();

  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const limpiarTareas = () => {
    // Lógica para limpiar (tener un estado con un array vacío)
    dispatch(resetTodos());
  };

  // const altaNuevaTarea = () => // Gestión local del estado
  //   setTareas([
  //     ...tareas,
  //     { id: tareas.length, texto: nuevaTarea, completada: false },
  //   ]);

  const altaNuevaTarea = () => {
    dispatch(addTodo({ texto: nuevaTarea }));
  };

  console.log(todos);
  // localStorage.setItem("primerTodo", JSON.stringify(todos[0]));
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
      <ul>
        {todos.map((tarea: Tarea) => (
          <li
            key={tarea.id}
            style={{ textDecoration: tarea.completada ? "line-through" : "" }}
          >
            <span onClick={() => dispatch(completeTodo({ id: tarea.id }))}>
              {tarea.texto}
            </span>
            <Link to={`/tareas/${tarea.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
