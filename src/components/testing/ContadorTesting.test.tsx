import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContadorTesting from "./ContadorTesting";

describe("Testeo de renderizado", () => {
  //   let valor = 0;
  //   let alumnos = [];
  beforeAll(() => {
    // valor = 10;
    // Hacer una llamada a BBDD y almacenar esos datos en alguna variable
    // alumnos = [];
  });
  test("El contador se renderiza", () => {
    render(<ContadorTesting />);
    screen.getByText("Contador Testing");
  });

  test("Se renderizan los dos botones", () => {
    render(<ContadorTesting />);
    screen.getByText("Incrementar");
    screen.getByText("Decrementar");
  });
});

describe("Testeo de funcionalidad", () => {
  test("El botón de incrementar incrementa el valor del contador", () => {
    render(<ContadorTesting />);
    // Analizar el valor inicial del contador
    // console.log(screen)
    screen.getByText("El valor del contador es: 0");
    // Hacer clic en el botón de incrementar
    // userEvent.click(screen.getAllByText("Incrementar")[0]);
    userEvent.click(screen.getByText("Incrementar"));
    // Analizar el valor final del contador
    // console.log(screen)
    screen.getByText("El valor del contador es: 1");
  });
  test("El botón de decrementar decrementa el valor del contador", () => {
    render(<ContadorTesting />);
    // Analizar el valor inicial del contador
    screen.getByText("El valor del contador es: 0");
    // Hacer clic en el botón de incrementar
    userEvent.click(screen.getByText("Decrementar"));
    // Analizar el valor final del contador
    screen.getByText("El valor del contador es: -1");
  });
});
