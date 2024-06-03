import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import GoogleAnalytics from "./GoogleAnalytics";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome</h1>
        <ProductList />
      </main>
      <Footer />
      <GoogleAnalytics />
    </div>
  );
};

export default HomePage;
