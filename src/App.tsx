import React from "react";
import "./App.css";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFuncional from "./components/ComponenteFuncional";

function App() {
  return (
    <>
      <ComponenteClase texto="Hola soy el texto 1" />
      <ComponenteFuncional
        texto="Texto del funcional"
        objeto={{ nombre: "Gorka", edad: 32 }}
      />
    </>
  );
}

export default App;
