import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";

// Carregamento dinâmico do GoogleAnalytics e ProductList
const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), {
  ssr: false,
});
const ProductList = dynamic(() => import("./components/ProductList"), {
  ssr: false,
});

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
