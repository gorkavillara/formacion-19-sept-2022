import React, { useRef } from "react";

const ComponenteReferencias = () => {
  // const input: HTMLElement | null = document.querySelector(
  //   "input[name=referencia]"
  // );
  // const constanteReferencia = useRef(input);
  const constanteReferencia = useRef<HTMLInputElement>(null);

  const focusFormulario = () => {
    console.log(constanteReferencia);
    console.log({ constanteReferencia });
    console.log("constanteReferencia", constanteReferencia);
    constanteReferencia.current !== null && constanteReferencia.current.focus();
    // constanteReferencia.current !== null && console.log("VALOR", constanteReferencia.current.value)
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Podemos hacer lo que queramos
    // axios para llamar a base de datos
    // modificar los datos de los estados
    // pantallas de cargando, etc
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3
          onDragStart={() => console.log("DragStart")}
          // onDrag={() => console.log("Drag")}
          onDragEnd={() => console.log("DragEnd")}
          // onMouseMove={(e) => console.log("Move")}
        >
          Componente Referencias
        </h3>
        <input
          type="text"
          ref={constanteReferencia}
          onKeyDown={(e) => console.log(e.key)}
          onKeyUp={(e) => console.log(e)}
          value=""
          onChange={(e) => console.log(e)}
        />
        <button
          onClick={focusFormulario}
          onDoubleClick={(e) => console.log(e)}
          onMouseEnter={(e) => console.log(e)}
          onMouseLeave={(e) => console.log(e)}
        >
          Rellenar Formulario
        </button>
        <div
          style={{ width: "100vw", height: 50, backgroundColor: "black" }}
          onDragEnter={(e) => console.log(e)}
          onDragLeave={(e) => console.log(e)}
          onDrop={(e) => console.log(e)}
        ></div>
      </form>
    </div>
  );
};

export default ComponenteReferencias;
