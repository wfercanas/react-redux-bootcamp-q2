import React from "react";

import { CartCard, SummaryCard } from "../../components/Cards";
import { Header } from "../../components/Header";

import {
  StyledCartPage,
  StyledTitle,
  StyledCartProductsContainer,
  StyledCartSummaryContainer,
} from "./styles";

const CartUI = ({ cart, items, total }) => {
  return (
    <>
      <Header />
      <StyledCartPage>
        <StyledTitle>Cart</StyledTitle>
        <StyledCartProductsContainer>
          {cart.map((product) => (
            <CartCard
              key={product.id}
              name={product.name}
              price={product.price}
              images={product.images}
              total={product.total}
              quantity={product.quantity}
            />
          ))}
        </StyledCartProductsContainer>
        <StyledCartSummaryContainer>
          <SummaryCard items={items} total={total} />
        </StyledCartSummaryContainer>
      </StyledCartPage>
    </>
  );
};

export { CartUI };
