import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

describe("Counter", () => {
  it("increments count when button is clicked", () => {
    render(<Counter />);
    const buttonElement = screen.getByText(/increment/i);
    const countElement = screen.getByText(/count: 0/i);

    fireEvent.click(buttonElement);

    expect(countElement).toHaveTextContent("Count: 1");
  });
});
