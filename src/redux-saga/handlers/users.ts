import { call, put } from "redux-saga/effects"
import { setUsers } from "../../features/users/usersSlice";
import { fetchUsers } from "../requests/users";

export function* handleFetchUsers(): any {
    try {
        const response = yield call(fetchUsers)
        console.log("Ejecutando la llamada", response.data.alumnos)
        yield put(setUsers(response.data.alumnos))
    } catch(e) {
        console.error(e)
    }
}