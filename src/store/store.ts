import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice"
import usersReducer from "../features/users/usersSlice"

import createSagaMiddleware from "@redux-saga/core";
import watcher from "../redux-saga/sagas";

const sagaMiddleware = createSagaMiddleware()

const store: EnhancedStore = configureStore({
  reducer: {
    todos: todosReducer,
    users: usersReducer
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watcher)

export type RootState = ReturnType<typeof store.getState>

export default store;
