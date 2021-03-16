import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("Should render without crasshing", () => {
    render(<NewTodoForm />)
})

it("Matches snapshot", () => {
    const{asFragment} = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot()
})