import { createSlice } from "@reduxjs/toolkit";
import { Tarea } from "../../models";

const initialState: Tarea[] = [
  { id: 0, texto: "Hacer la compra", completada: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      const { texto } = action.payload;
      //   state.push({
      //     id: state.length,
      //     texto,
      //     completada: false,
      //   });
      return [
        ...state,
        {
          id: state.length,
          texto,
          completada: false,
        },
      ];
    },
    // removeTodo: () => null,
    completeTodo: (state, action) => {
      console.log("complete todo");
      const { id } = action.payload;
      const newState = state.map((todo) =>
        todo.id === id ? { ...todo, completada: !todo.completada } : todo
      );
      return newState;
    },
    resetTodos: () => [],
    // incrementaContador: (state) => state + 1
  },
});

// export const todosActions = todosSlice.actions
export const { addTodo, resetTodos, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
