/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import "./App.scss";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ComponentePadreLista from "./components/ComponentePadreLista";
import ComponenteReferencias from "./components/ComponenteReferencias";
import GestionCicloDeVida from "./components/GestionCicloDeVida";
import Formulario from "./views/Formulario";
import FormularioFormik from "./views/FormularioFormik";
import ListaTareas from "./views/ListaTareas";
import Principal from "./views/Principal";

type VRoutes = "home" | "form" | "formik" | "tareas"

function App() {
  const [vRoute, setVRoute] = useState<VRoutes>("tareas");
  return (
    <div className="App">
      {/* <ComponenteClase texto="Hola soy el texto 1" /> */}
      {/* <ComponenteFuncional
        texto="Texto del funcional"
        objeto={{ nombre: "Gorka", edad: 32 }}
      /> */}
      {/* <ComponentePadreLista /> */}
      {/* <ComponenteClase /> */}
      {/* <GestionCicloDeVida /> */}
      {/* <ComponenteReferencias /> */}
      {vRoute === "home" && <Principal />}
      {vRoute === "form" && <Formulario />}
      {vRoute === "formik" && <FormularioFormik />}
      {vRoute === "tareas" && <ListaTareas />}
    </div>
  );
}

export default App;
