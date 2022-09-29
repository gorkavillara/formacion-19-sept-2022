import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import ContadorPresent from "./ContadorPresent";

test("Renderiza correctamente", () => {
    let contador = 12
    render(<ContadorPresent contador={contador} setContador={() => null} />)
    screen.getByText(`El valor del contador es: ${contador}`)
})

test("Se llama a la función cuando se pulsa algún botón", () => {
    const mockFn = jest.fn()
    render(<ContadorPresent contador={1} setContador={mockFn} />)
    userEvent.click(screen.getByTestId("boton-decrementar"))
    userEvent.click(screen.getByText("Incrementar"))
    expect(mockFn).toBeCalledTimes(2)
})