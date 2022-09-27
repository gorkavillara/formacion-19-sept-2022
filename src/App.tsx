/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ComponentePadreLista from "./components/ComponentePadreLista";
import ComponenteReferencias from "./components/ComponenteReferencias";
import DetalleTarea from "./components/DetalleTarea";
import GestionCicloDeVida from "./components/GestionCicloDeVida";
import { Alumno, defaultAlumno } from "./models";
import AppRoutes from "./routes/AppRoutes";
import Formulario from "./views/Formulario";
import FormularioFormik from "./views/FormularioFormik";
import ListaTareas from "./views/ListaTareas";
import Principal from "./views/Principal";

// type VRoutes = "home" | "form" | "formik" | "tareas";

function App() {
  const [user, setUser] = useState<Alumno | null>({
    username: "Alfonso",
    email: "alfonso@alfonso",
  });
  // const [user, setUser] = useState<Alumno | null>(null);
  // const [vRoute, setVRoute] = useState<VRoutes>("home");
  const activeHandler = ({ isActive }: { isActive: boolean }) =>
    isActive ? "selected" : "";
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <ul className="nav-bar">
            <li>
              {/* <button onClick={() => setVRoute("home")}>Home</button> */}
              {/* <a href="/">Home</a> */}
              <NavLink className={activeHandler} to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              {/* <button onClick={() => setVRoute("form")}>Form</button> */}
              {/* <a href="/tareas">Tareas</a> */}
              <NavLink className={activeHandler} to="/tareas">
                Tareas
              </NavLink>
            </li>
            <li>
              {/* <button onClick={() => setVRoute("formik")}>Formik</button> */}
              {user !== null ? (
                <NavLink className={activeHandler} to="/perfil">
                  Perfil
                </NavLink>
              ) : (
                <NavLink className={activeHandler} to="/login">
                  Login
                </NavLink>
              )}
            </li>
            <li>
              {/* <button onClick={() => setVRoute("tareas")}>Tareas</button> */}
            </li>
          </ul>
        </div>
        <AppRoutes user={user} setUser={setUser} />
        {/* <ComponenteClase texto="Hola soy el texto 1" /> */}
        {/* <ComponenteFuncional
        texto="Texto del funcional"
        objeto={{ nombre: "Gorka", edad: 32 }}
      /> */}
        {/* <ComponentePadreLista /> */}
        {/* <ComponenteClase /> */}
        {/* <GestionCicloDeVida /> */}
        {/* <ComponenteReferencias /> */}
        {/* {vRoute === "home" && <Principal />}
      {vRoute === "form" && <Formulario />}
      {vRoute === "formik" && <FormularioFormik />}
      {vRoute === "tareas" && <ListaTareas />} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
