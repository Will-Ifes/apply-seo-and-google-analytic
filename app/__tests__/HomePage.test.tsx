import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import HomePage from "../page";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { initGA, logPageView } from "../lib/analytics";
import { jest } from "@jest/globals";

jest.mock("../lib/analytics");

describe("HomePage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("renders a heading", () => {
    render(<HomePage />);
    const heading = screen.getByRole("heading", {
      name: /welcome to my next\.js app/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("calls Google Analytics functions on render", () => {
    render(<HomePage />);
    expect(initGA).toHaveBeenCalledTimes(1);
    expect(logPageView).toHaveBeenCalledTimes(2);
  });
});
