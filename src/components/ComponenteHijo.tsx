import React from 'react'

type Props = {
    contador: number
}

const ComponenteHijo = ({ contador }: Props) => <div>{contador}</div>

export default ComponenteHijo