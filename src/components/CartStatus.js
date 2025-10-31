import React from "react";
import { useCartContext } from "../contexts/cartContext";

const CartStatus = () => {
  const { cart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <h2>Status ({totalItems})</h2>
    </div>
  );
};

export default CartStatus;
