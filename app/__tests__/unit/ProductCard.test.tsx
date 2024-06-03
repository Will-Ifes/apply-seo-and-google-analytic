import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../components/ProductCard";

describe("ProductCard Component", () => {
  const product = {
    id: 1,
    title: "Test Product",
    price: 99.99,
    image: "https://via.placeholder.com/150",
  };

  it("should render product details", () => {
    render(<ProductCard product={product} />);

    // Check if product title is rendered
    const title = screen.getByText(/test product/i);
    expect(title).toBeInTheDocument();

    // Check if product price is rendered
    const price = screen.getByText(/\$99\.99/i);
    expect(price).toBeInTheDocument();

    // Check if product image is rendered
    const image = screen.getByAltText(/test product/i) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(encodeURIComponent(product.image));
  });
});
