import React, { useState, useEffect } from 'react'

type Props = {
    estadoInicial?: boolean
}

const GestionCicloDeVida = ({ estadoInicial = false }: Props) => {
    const [toggle, setToggle] = useState<boolean>(estadoInicial)
    const [otroValor, setOtroValor] = useState<string>("hola")

    useEffect(() => {
        console.log("Componente montado por primera vez")
    }, [])
    useEffect(() => {
        console.log("He renderizado")
        // setToggle(true)
        // hago la llamada a la api
        // actualizo el estado
        // se renderiza de nuevo
    })
    useEffect(() => {
        console.log("Toggle ha cambiado")
    }, [toggle, otroValor])
    useEffect(() => {
        return () => console.log("Voy a desmontar")
    }, [])

  return (<>
    <div>GestionCicloDeVida</div>
    <button onClick={() => setToggle(prevStatus => !prevStatus)}>{toggle ? "On" : "Off"}</button>
    </>
  )
}

export default GestionCicloDeVida