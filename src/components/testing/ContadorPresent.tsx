import React from "react";

type Props = {
  contador: number;
  setContador: React.Dispatch<React.SetStateAction<number>>;
};

const ContadorPresent = ({ contador, setContador }: Props) => {
  return (
    <>
      <span>El valor del contador es: {contador}</span>
      <button
        data-testid="boton-decrementar"
        onClick={() => setContador((valor) => valor - 1)}
      >
        Decrementar
      </button>
      <button onClick={() => setContador((valor) => valor + 1)}>
        Incrementar
      </button>
    </>
  );
};

export default ContadorPresent;
