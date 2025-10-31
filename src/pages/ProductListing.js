import React from "react";
import { useCartContext } from "../contexts/cartContext";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductListing = () => {
  const { addToCart } = useCartContext();

  return (
    <div className="container py-4">
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
