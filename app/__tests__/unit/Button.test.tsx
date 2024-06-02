import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button", () => {
  it("renders with correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly with different labels", () => {
    render(<Button label="Submit" onClick={() => {}} />);
    expect(screen.getByText(/submit/i)).toBeInTheDocument();

    render(<Button label="Cancel" onClick={() => {}} />);
    expect(screen.getByText(/cancel/i)).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("calls onClick handler when clicked multiple times", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
