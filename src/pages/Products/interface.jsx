import React from "react";

import { ProductCard } from "../../components/Cards";
import { Header } from "../../components/Header";

import {
  StyledProductsPage,
  StyledTitle,
  StyledProductsContainer,
} from "./styles";

const ProductsUI = ({ products }) => {
  return (
    <>
      <Header />
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
    </>
  );
};

export { ProductsUI };
