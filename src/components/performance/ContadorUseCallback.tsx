import React, { useCallback } from "react";

type Props = {
  contador: number;
};

const devuelveSuma = (contador: number) => {
  let suma = 0;
  for (let i = 0; i < 10000000; i++) {
    suma++;
  }
  return suma + contador;
};

const obtenFuncion = () => {
    let suma = 0;
    for (let i = 0; i < 10000000; i++) {
      suma++;
    }
    return () => console.log(`La suma es ${suma}`)
}

const ContadorUseCallback = ({ contador }: Props) => {
  const handleClick = useCallback(obtenFuncion(), [])
  return (
    <div>
      El contador vale: {contador}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default ContadorUseCallback;
