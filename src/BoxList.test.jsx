import { describe, it, expect } from 'vitest';
import { render, fireEvent, queryByText } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(getByLabelText, getByText, fireEvent) {
    // Simulate adding a new box
        fireEvent.change(getByLabelText("Background Color:"), { target: { value: "teal" } });
        fireEvent.change(getByLabelText("Width:"), { target: { value: "50px" } });
        fireEvent.change(getByLabelText("Height:"), { target: { value: "50px" } });
        fireEvent.click(getByText("Add Box"));
}
describe('BoxList', () => {
    it('renders without crashing', () => {
        render(<BoxList />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<BoxList />)
        expect(asFragment).toMatchSnapshot()
    })

    it('can add a new box', () => {
        const { getByLabelText, getByText } = render(<BoxList />);

       addBox(getByLabelText, getByText, fireEvent);

        expect(getByText("X")).toBeTruthy();
    })

    it('can remove a box', () => {
        const { getByLabelText, getByText, queryByText } = render(<BoxList />)
        
        addBox(getByLabelText, getByText, fireEvent);

        expect(getByText("X")).toBeTruthy();

        fireEvent.click(getByText("X"));
        
        expect(queryByText("X")).toBeFalsy();

    })
})