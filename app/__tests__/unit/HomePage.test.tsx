import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import HomePage from "../../page";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { initGA, logPageView } from "../../lib/analytics";
import { jest } from "@jest/globals";

jest.mock("../../lib/analytics");

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
      name: /welcome/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
