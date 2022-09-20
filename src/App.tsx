/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import "./App.css";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";
import ComponentePadreLista from "./components/ComponentePadreLista";
import GestionCicloDeVida from "./components/GestionCicloDeVida";

function App() {
  return (
    <>
      {/* <ComponenteClase texto="Hola soy el texto 1" /> */}
      <ComponenteFuncional
        texto="Texto del funcional"
        objeto={{ nombre: "Gorka", edad: 32 }}
      />
      {/* <ComponentePadreLista /> */}
      {/* <ComponenteClase /> */}
      {/* <GestionCicloDeVida /> */}
    </>
  );
}

export default App;
