import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("should render without crashing", () => {
    render(<TodoList />)
})

it("matches the snapshot", () => {
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})

it("Should add new item", () => {
    const { queryByText, getByLabelText } = render(<TodoList />)
    const input = getByLabelText("Todo")
    const btn = queryByText("Add Todo")
    expect(queryByText("Get Milk")).not.toBeInTheDocument()

    fireEvent.change(input, {target: {value: "Get Milk"}})
    fireEvent.click(btn);
    expect(queryByText("Get Milk")).toBeInTheDocument()
})