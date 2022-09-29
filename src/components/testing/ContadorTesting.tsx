import React, { useState } from 'react'

type Props = {}

const ContadorTesting = (props: Props) => {
    const [contador, setContador] = useState<number>(0)
  return (
    <div>
        <h3>Contador Testing</h3>
        <span>El valor del contador es: {contador}</span>
        <button onClick={() => setContador(valor => valor - 1)}>Decrementar</button>
        <button onClick={() => setContador(valor => valor + 1)}>Incrementar</button>
    </div>
  )
}

export default ContadorTesting