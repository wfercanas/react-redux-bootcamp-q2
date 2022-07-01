import React from "react";

import products from "../../mocks/products.json";
import { ProductsUI } from "./interface";

const Products = () => {
  return <ProductsUI products={products} />;
};

export { Products };
