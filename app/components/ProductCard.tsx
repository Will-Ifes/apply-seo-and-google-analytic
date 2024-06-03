import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
          fetchPriority="high" // Definindo a prioridade alta de fetch
          decoding="async" // Decodificação assíncrona
        />
      </div>
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
