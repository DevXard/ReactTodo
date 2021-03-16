import { render } from "@testing-library/react";
import Todo from "./Todo";

it("render Without crushing", () => {
    render(<Todo />)
}) 

it('matches snapshot', () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot()
})

