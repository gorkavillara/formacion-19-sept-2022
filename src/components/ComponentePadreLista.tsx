import React, { useState } from "react";
import ComponenteHijoLista from "./ComponenteHijoLista";
import { Articulo } from "../models";

const ComponentePadreLista = () => {
  const marca = "mercadona";
  const [lista, setLista] = useState<Articulo[]>([
    { nombre: "Leche", cantidad: 1, comprado: false },
    { nombre: "Chocolate", cantidad: 1, comprado: false },
    { nombre: `Huevos ${marca}`, cantidad: 6, comprado: false },
  ]);

  const incluyeNuevoArticulo = (nuevoArticulo: string) => {
    if (nuevoArticulo === "") return;
    setLista([
      ...lista,
      { nombre: nuevoArticulo, cantidad: 1, comprado: false },
    ]);
  };

  console.log(lista)

  return (
    <div>
      <h1>Lista de la compra</h1>
      <ComponenteHijoLista
        lista={lista}
        incluyeNuevoArticulo={incluyeNuevoArticulo}
        setLista={setLista}
      />
      {/* <ul>
        {lista.map((articulo: Articulo, index: number) => (
          <li key={index}>
            {articulo.nombre} - {articulo.cantidad}
          </li>
        ))}
      </ul>
      <span>nuevoArticulo: {nuevoArticulo}</span>
      <input
        type="text"
        placeholder="Tu producto"
        value={nuevoArticulo}
        onChange={(evento) => setNuevoArticulo(evento.target.value)}
      />
      <button onClick={incluyeNuevoArticulo}>Añadir</button> */}
    </div>
  );
};

export default ComponentePadreLista;
