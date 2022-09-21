/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import "./App.css";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ComponentePadreLista from "./components/ComponentePadreLista";
import ComponenteReferencias from "./components/ComponenteReferencias";
import GestionCicloDeVida from "./components/GestionCicloDeVida";
import Formulario from "./views/Formulario";
import Principal from "./views/Principal";

function App() {
  const [vRoute, setVRoute] = useState<"home" | "form">("form")
  return (
    <>
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
    </>
  );
}

export default App;
