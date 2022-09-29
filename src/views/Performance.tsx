import React, { useState } from "react";
import Contador from "../components/Contador";
import ContadorUseMemo from "../components/performance/ContadorUseMemo";
import ContadorUseCallback from "../components/performance/ContadorUseCallback";
import ContadorTesting from "../components/ContadorTesting";

const Performance = () => {
  const [contador, setContador] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div>
      <h3>Analizando la Performance</h3>
      {/* <Contador contador={contador} /> */}
      {/* <ContadorUseCallback contador={contador} /> */}
      <ContadorTesting contador={contador} setContador={setContador} />
      {/* <button onClick={() => setContador((cont) => cont - 1)}>
        Decrementar
      </button>
      <button onClick={() => setContador((cont) => cont + 1)}>
        Incrementar
      </button> */}
      <br />
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "On" : "Off"}
      </button>
    </div>
  );
};

export default Performance;
