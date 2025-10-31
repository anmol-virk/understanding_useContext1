import React from "react";
import { useCartContext } from "../contexts/cartContext";

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <div className="container py-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
