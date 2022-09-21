import React, { useState } from "react";
import "./Principal.scss";

type Props = {};

const Principal = (props: Props) => {
  const [tituloHover, setTituloHover] = useState<boolean>(false);
  return (
    <div className="vista-principal">
      <h1
        className="titulo-app"
        // style={{ color: tituloHover ? "#522b2b" : "#2b2b52" }}
        onMouseEnter={() => setTituloHover(true)}
        onMouseLeave={() => setTituloHover(false)}
      >
        WordHelloWorld
      </h1>
      <div className="botonera">
        {/* <button className={`boton-inicio${tituloHover ? " rojo" : ""}`}> */}
        <button className={tituloHover ? "boton-inicio rojo" : "boton-inicio"}>
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default Principal;
