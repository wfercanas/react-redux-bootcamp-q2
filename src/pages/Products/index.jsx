import React from "react";

import products from "../../mocks/products.json";
import { ProductsUI } from "./Products.interface";

const Products = () => {
  return <ProductsUI products={products} />;
};

export { Products };
