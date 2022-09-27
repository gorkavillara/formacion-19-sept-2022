import { takeLatest } from "redux-saga/effects"
import { fetchUsers } from "../features/users/usersSlice"
import { handleFetchUsers } from "./handlers/users"

export default function* watcher() {
    // Si pasa algo -> Ejecuta el handler
    yield takeLatest(fetchUsers.type, handleFetchUsers)
}
