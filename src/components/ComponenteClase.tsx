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
      // this.setState({ contador: this.state.contador + 1 })
      this.setState(estadoPrevio => ({ contador: estadoPrevio.contador + 1 }))
      console.log("valor", this.state.contador)
  }

  nuevaFuncion = (num: number) => 2 * num

  componentDidMount(): void {
    console.log("El componente acaba de montarse")
    // Hacer llamadas a apis para inicializar el estado
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    // console.log("El componente va a actualizarse")
    return true
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log("El componente se ha actualizado")
    
  }

  componentWillUnmount(): void {
    console.log("El componente se va a desmontar")
    // Eliminar eventListeners
  }

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
