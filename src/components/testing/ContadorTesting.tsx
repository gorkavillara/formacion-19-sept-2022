import React, { useState } from "react";
import ContadorPresent from "./ContadorPresent";

type Props = {};

const ContadorTesting = (props: Props) => {
  const [contador, setContador] = useState<number>(0);
  return (
    <div>
      <h3>Contador Testing</h3>
      <ContadorPresent contador={contador} setContador={setContador} />
    </div>
  );
};

export default ContadorTesting;
