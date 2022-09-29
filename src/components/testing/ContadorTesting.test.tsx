import { render, screen } from "@testing-library/react"
import ContadorTesting from "./ContadorTesting"

test("El contador se renderiza", () => {
    render(<ContadorTesting />)
    screen.getByText("Contador Testing")
})