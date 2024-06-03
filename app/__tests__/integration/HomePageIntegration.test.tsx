import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../../page";
import { initGA, logPageView } from "../../lib/analytics";

// Mocking analytics functions
jest.mock("../../lib/analytics");

describe("HomePage Integration Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call Google Analytics functions on render", () => {
    render(<HomePage />);

    // Check if the heading is rendered
    const heading = screen.getByRole("heading", {
      name: /welcome/i,
    });
    expect(heading).toBeInTheDocument();

    // Check if Google Analytics functions are called
    expect(initGA).toHaveBeenCalledTimes(1);
    expect(logPageView).toHaveBeenCalledTimes(1); // This depends on how many times you expect it to be called
  });
});
