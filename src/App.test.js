
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
    render(<App />)
})

it("matches Snapshot", () => {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot()
})