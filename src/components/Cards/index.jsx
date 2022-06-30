import React from "react";

import { shortenName } from "../../utils/shortenName";

import { AddToCartButton, RemoveFromCartButton } from "../Buttons";
import { QuantityInput } from "../Inputs";

import {
  StyledProductCard,
  StyledProductDataContainer,
  StyledProductImage,
  StyledProductName,
  StyledProductCategory,
  StyledProductPrice,
  StyledProductButtonsContainer,
  StyledCartCard,
  StyledCartImageContainer,
  StyledCartImage,
  StyledCartCardDataContainer,
  StyledCartName,
  StyledCartPrice,
  StyledCartCardInputsContainer,
  StyledCartTotalPrice,
  StyledCartCardButtonsContainer,
} from "./styles";

const ProductCard = ({ images = [], name, categories = [], price }) => {
  return (
    <StyledProductCard>
      <StyledProductDataContainer>
        <StyledProductImage src={images[0]} />
        <StyledProductName>{shortenName(name)}</StyledProductName>
        <StyledProductCategory>{categories[0]}</StyledProductCategory>
        <StyledProductPrice>
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </StyledProductPrice>
      </StyledProductDataContainer>
      <StyledProductButtonsContainer>
        <AddToCartButton />
      </StyledProductButtonsContainer>
    </StyledProductCard>
  );
};

const CartCard = ({ images = [], name, price, total, quantity }) => {
  return (
    <StyledCartCard>
      <StyledCartImageContainer>
        <StyledCartImage src={images[0]} alt="" />
      </StyledCartImageContainer>
      <StyledCartCardDataContainer>
        <StyledCartName>{shortenName(name)}</StyledCartName>
        <StyledCartPrice>
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </StyledCartPrice>
      </StyledCartCardDataContainer>
      <StyledCartCardInputsContainer>
        <QuantityInput quantity={quantity} />
      </StyledCartCardInputsContainer>
      <StyledCartTotalPrice>
        {new Intl.NumberFormat("en-EN", {
          style: "currency",
          currency: "USD",
        }).format(total)}
      </StyledCartTotalPrice>
      <StyledCartCardButtonsContainer>
        <RemoveFromCartButton />
      </StyledCartCardButtonsContainer>
    </StyledCartCard>
  );
};

export { ProductCard, CartCard };
