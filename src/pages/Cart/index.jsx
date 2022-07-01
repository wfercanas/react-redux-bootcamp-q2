import React from "react";

import { CartUI } from "./interface";
import products from "../../mocks/products.json";

const Cart = () => {
  const cart = products.data.products.items.splice(0, 3);
  let items = 0;
  let total = 0;

  cart.forEach((product) => {
    product.quantity = Math.floor(Math.random() * 3 + 1);
    product.total = product.quantity * product.price;
    items += product.quantity;
    total += product.total;
  });

  return <CartUI cart={cart} items={items} total={total} />;
};

export { Cart };
