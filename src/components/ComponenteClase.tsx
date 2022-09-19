import React, { Component } from "react";

type Props = {
  texto?: string;
};

type State = {
    contador: number
};

export default class ComponenteClase extends Component<Props, State> {
  state = {
    contador: 0
  };

  incrementaContador = () => {

      console.log("incrementando")
      // contador++
      this.setState({ contador: this.state.contador + 1 })
      console.log("valor", this.state.contador)
  }

  nuevaFuncion = (num: number) => 2 * num

  render() {
    // const texto = this.props.texto
    const { texto } = this.props;
    const { contador } = this.state;

    // if (texto) {
    //   return <div>{texto}</div>;
    // }
    // return <div>Componente sin texto</div>;

    // return texto ? <div>{texto}</div> : <div>Componente sin texto</div>

    // return <div>{texto ? texto : "Sin texto"}</div>

    // let contador = 3

    return <div>
        <h3>{texto ? texto : "Componente sin título"}</h3>
        <div>
            <button onClick={() => this.setState({ contador: contador - 1 })}>Menos</button>
            <span>{contador}</span>
            <button onClick={this.incrementaContador}>Más</button>
        </div>
    </div>
  }
}
