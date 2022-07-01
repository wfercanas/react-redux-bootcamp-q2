import React from "react";

import { ProductCard } from "../../components/Cards";

import {
  StyledProductsPage,
  StyledTitle,
  StyledProductsContainer,
} from "./styles";

const ProductsUI = ({ products }) => {
  return (
    <StyledProductsPage>
      <StyledTitle>Products</StyledTitle>
      <StyledProductsContainer>
        {products.data.products.items.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            name={product.name}
            categories={product.categories}
            price={product.price}
          />
        ))}
      </StyledProductsContainer>
    </StyledProductsPage>
  );
};

export { ProductsUI };
