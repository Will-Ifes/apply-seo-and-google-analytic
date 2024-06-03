import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "../../components/ProductList";
import { fetchProducts } from "../../service/api-service";

// Mocking fetchProducts function
jest.mock("../../service/api-service");

describe("ProductList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render products", async () => {
    const products = [
      {
        id: 1,
        title: "Test Product 1",
        price: 99.99,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Test Product 2",
        price: 79.99,
        image: "https://via.placeholder.com/150",
      },
    ];

    (fetchProducts as jest.Mock).mockResolvedValue(products);

    render(<ProductList />);

    await waitFor(() => {
      const productCards = screen.getAllByRole("img");
      expect(productCards.length).toBe(products.length);
    });

    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(
        screen.getByText(`$${product.price.toFixed(2)}`)
      ).toBeInTheDocument();
    });
  });

  it("should display loading message while fetching products", () => {
    render(<ProductList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display error message if fetching products fails", async () => {
    (fetchProducts as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch products")
    );

    render(<ProductList />);

    await waitFor(() => {
      expect(
        screen.getByText(/error: failed to fetch products/i)
      ).toBeInTheDocument();
    });
  });
});
