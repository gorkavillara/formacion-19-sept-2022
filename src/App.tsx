/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { createContext, useContext, useState } from "react";
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
import AppContextProvider from "./contexts/AppContextProvider";
import { Alumno, defaultAlumno } from "./models";
import AppRoutes from "./routes/AppRoutes";
import Formulario from "./views/Formulario";
import FormularioFormik from "./views/FormularioFormik";
import ListaTareas from "./views/ListaTareas";
import Principal from "./views/Principal";

function App() {
  const activeHandler = ({ isActive }: { isActive: boolean }) =>
    isActive ? "selected" : "";
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="App">
          <ul className="nav-bar">
            <li>
              <NavLink className={activeHandler} to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} to="/tareas">
                Tareas
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} to="/form">
                Formulario
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} to="/alumnos">
                Alumnos
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} to="/contador">
                Contador
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} to="/perfil">
                Perfil
              </NavLink>
            </li>
            <li>
              <NavLink className={activeHandler} to="/login">
                Login
              </NavLink>
            </li>
          </ul>
          <AppRoutes />
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
          <span>Entorno: {process.env.NODE_ENV}</span>
          <span>Usuario por defecto: {process.env.REACT_APP_USUARIO_POR_DEFECTO}</span>
        </div>
        {/* Compras */}
        {/* <ComprasContextProvider> */}
        {/* Componentes de compras */}
        {/* </ComprasContextProvider> */}
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
