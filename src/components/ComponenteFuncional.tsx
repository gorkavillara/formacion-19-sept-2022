import React from "react";

type PropTypes = {
  texto: string;
  valorInicial?: number;
  objeto?: any;
};

const ComponenteFuncional = ({ texto, valorInicial = 0 }: PropTypes) => {
  return (
    <div>
      <h3>{texto}</h3>
      <div>
        <button>Menos</button>
        <span>{valorInicial}</span>
        <button>Más</button>
      </div>
    </div>
  );
};

export default ComponenteFuncional;
