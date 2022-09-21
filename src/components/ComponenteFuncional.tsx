import React, { useState } from "react";
import ComponenteHijo from "./ComponenteHijo"
import GestionCicloDeVida from "./GestionCicloDeVida";

type PropTypes = {
  texto: string;
  valorInicial?: number;
  objeto?: any;
};

const ComponenteFuncional = ({ texto, valorInicial = 0 }: PropTypes) => {
  // const state = useState("Hola")
  // const [valor, funcion] = useState(1)
  // console.log(valor) // valor
  // console.log(funcion) // función seteadora

  const [contador, setContador] = useState<number>(valorInicial);

  const decrementar = () => {
    // setContador(contador - 1)
    let array = []
    array.push({ nombre: "Gorka", ciudad: "San Sebastián" })
    setContador((prevContador) => prevContador - 1);
  };
  const incrementar = () => setContador(prevContador => prevContador + 1) //eslint-disable-line

  return (
    <div>
      <h3>{texto}</h3>
      <div>
        {/* <button onClick={decrementar}>Menos</button> */}
        <button onClick={decrementar}>Menos</button>
        <ComponenteHijo contador={contador} />
        {/* <span>{contador}</span> */}
        <button onClick={() => setContador((prevContador) => prevContador + 1)}>
          Más
        </button>
      </div>
      {contador < 5 && <GestionCicloDeVida estadoInicial />}
    </div>
  );
};

export default ComponenteFuncional;
