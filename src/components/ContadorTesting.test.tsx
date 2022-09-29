import ContadorTesting from "./ContadorTesting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

describe("Test unitario del componente contador", () => {
    test("Renderiza correctamente", () => {
        render(<ContadorTesting contador={0} setContador={() => null} />)
    })
    test("Muestra lo que tiene que mostrar", () => {
        render(<ContadorTesting contador={12} setContador={() => null} />)
        screen.getByText("El contador vale: 12")
    })
    test("Muestra los dos botones", () => {
        render(<ContadorTesting contador={12} setContador={() => null} />)
        screen.getByText("Incrementar")
        screen.getByText("Decrementar")
    })
    test("Los botones funcionan", () => {
        const mockHandler = jest.fn()
        render(<ContadorTesting contador={12} setContador={mockHandler} />)
        userEvent.click(screen.getByText("Incrementar"))
        userEvent.click(screen.getByText("Incrementar"))
        console.log(mockHandler.mock.calls.length)
        expect(mockHandler).toBeCalledTimes(2)
    })
})