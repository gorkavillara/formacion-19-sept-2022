import React, { useState } from "react";
import { Articulo } from "../models";

type Props = {
  lista: Articulo[];
  incluyeNuevoArticulo: (nuevoArticulo: string) => void;
  setLista: React.Dispatch<React.SetStateAction<Articulo[]>>;
};

const ComponenteHijoLista = ({
  lista,
  incluyeNuevoArticulo,
  setLista,
}: Props) => {
  const [listaHijo, setListaHijo] = useState(lista);

  const [nuevoArticulo, setNuevoArticulo] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(1);

  const [articuloCompra, setArticuloCompra] = useState<Articulo>({
    nombre: "",
    cantidad: 0,
    comprado: false,
  });

  const nuevoProducto = () => {
    incluyeNuevoArticulo(nuevoArticulo);
    // setListaHijo([
    //   ...listaHijo,
    //   { nombre: nuevoArticulo, cantidad: 1, comprado: false },
    // ]);
  };

  const nuevoProductoSetOriginal = () => {
    setLista([
      ...lista,
      { nombre: nuevoArticulo, cantidad: 1, comprado: false },
    ]);
  };

  return (
    <>
      <ul>
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
        value={articuloCompra.nombre}
        onChange={(evento) =>
          setArticuloCompra({
            nombre: evento.target.value,
            cantidad: articuloCompra.cantidad,
            comprado: false,
          })
        }
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={articuloCompra.cantidad}
        onChange={(evento) =>
          setArticuloCompra({
            ...articuloCompra,
            cantidad: Number(evento.target.value),
          })
        }
      />
      <button onClick={nuevoProductoSetOriginal}>Añadir</button>
    </>
  );
};

export default ComponenteHijoLista;
