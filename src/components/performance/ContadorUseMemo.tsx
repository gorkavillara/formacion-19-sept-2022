import React, { useMemo } from "react";

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

const devuelveSuma = (contador: number) => {
  let suma = 0;
  for (let i = 0; i < 10000000; i++) {
    suma++;
  }
  return suma + contador;
};

const ContadorUseMemo = ({ contador }: Props) => {
  const calculo = useMemo(() => devuelveSuma(contador), [contador]);
  return (
    <div>
      El contador vale: {contador} y el calculo: {calculo}
    </div>
  );
};

export default ContadorUseMemo;
