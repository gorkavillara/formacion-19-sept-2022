import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Principal from "../views/Principal";
import ListaTareas from "../views/ListaTareas";
import DetalleTarea from "../components/DetalleTarea";
import Formulario from "../views/Formulario";
import FormularioFormik from "../views/FormularioFormik";
import { Alumno } from "../models";
import UserProtectedRoute from "./UserProtectedRoute";

const AppRoutes = ({ user }: { user: Alumno }) => {
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
            <h3>Tu usuario es: {user.username}</h3>
          </UserProtectedRoute>
        }
      />
      <Route path="*" element={<h3>404 no encontrado</h3>} />
    </Routes>
  );
};

export default AppRoutes;
