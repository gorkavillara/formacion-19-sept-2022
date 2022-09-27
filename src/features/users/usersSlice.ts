import { createSlice } from "@reduxjs/toolkit"
import { Alumno } from "../../models"

const initialState: Alumno[] = [{ username: "Gorka", email: "gorka@gorka" }]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchUsers: () => [],
        resetUsers: () => [],
        setUsers: (state, action) => action.payload
    }
})

export const { resetUsers, setUsers, fetchUsers } = usersSlice.actions

export default usersSlice.reducer