import React, { SetStateAction, Dispatch } from "react";

type Props = {
  contador: number;
  setContador: Dispatch<SetStateAction<number>>;
};

const ContadorTesting = ({ contador, setContador }: Props) => {
  return (
    <div>
      <h3>El contador vale: {contador}</h3>
      <button onClick={() => setContador((cont) => cont - 1)}>
        Decrementar
      </button>
      <button onClick={() => setContador((cont) => cont + 1)}>
        Incrementar
      </button>
    </div>
  );
};

export default ContadorTesting;
