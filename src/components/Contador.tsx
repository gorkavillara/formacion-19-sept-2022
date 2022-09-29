import React from "react";

type Props = {
  contador: number;
};

const calculoLargo = () => {
  let suma = 0;
  for (let i = 0; i < 10000000; i++) {
    suma++;
  }
  return suma;
};

const Contador = React.memo(({ contador }: Props) => {
  const calculo = calculoLargo();
  return <div>El contador vale: {contador}</div>;
});

export default Contador;
