import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Principal from "../views/Principal";
import ListaTareas from "../views/ListaTareas";
import DetalleTarea from "../components/DetalleTarea";
import Formulario from "../views/Formulario";
import FormularioFormik from "../views/FormularioFormik";
import { Alumno } from "../models";
import UserProtectedRoute from "./UserProtectedRoute";
import Login from "../views/Login";
import Usuarios from "../views/Usuarios";
import Perfil from "../views/Perfil";
import { AppContext } from "../contexts/AppContextProvider";

const AppRoutes = () => {
  const { user, setUser } = useContext(AppContext)
  return (
    <Routes>
      <Route index element={<Principal />} />
      <Route path="tareas/*" element={<ListaTareas />}>
        <Route path=":id" element={<DetalleTarea />} />
      </Route>
      {/* <Route path="tareas/:id" element={<DetalleTarea />} /> */}
      <Route path="todos" element={<Navigate to="/tareas" />} />
      {/* <Route path="tareas/5" element={<DetalleTarea id={5} />} /> */}
      <Route path="form" element={<Formulario />} />
      <Route path="formik" element={<FormularioFormik />} />
      <Route
        path="perfil"
        element={
          <UserProtectedRoute user={user}>
            {user !== null ? (
              <Perfil />
            ) : (
              <h3>No hay ningún usuario</h3>
            )}
          </UserProtectedRoute>
        }
      />
      <Route path="login" element={<Login setUser={setUser} />} />
      <Route path="alumnos" element={<Usuarios />} />
      <Route path="*" element={<h3>404 no encontrado</h3>} />
    </Routes>
  );
};

export default AppRoutes;
