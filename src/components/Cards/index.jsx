import React from "react";

import { shortenName } from "../../utils/shortenName";
import { formatCurrency } from "../../utils/formatCurrency";

import {
  AddToCartButton,
  CheckoutButton,
  RemoveFromCartButton,
} from "../Buttons";
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
  StyledSummaryCard,
  StyledSummaryTitle,
  StyledSummaryDataContainer,
  StyledSummaryData,
  StyledSummarySubtitle,
  StyledSummaryValue,
} from "./styles";

const ProductCard = ({ images = [], name, categories = [], price }) => {
  return (
    <StyledProductCard>
      <StyledProductDataContainer>
        <StyledProductImage src={images[0]} />
        <StyledProductName>{shortenName(name)}</StyledProductName>
        <StyledProductCategory>{categories[0]}</StyledProductCategory>
        <StyledProductPrice>{formatCurrency(price)}</StyledProductPrice>
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
        <StyledCartPrice>{formatCurrency(price)}</StyledCartPrice>
      </StyledCartCardDataContainer>
      <StyledCartCardInputsContainer>
        <QuantityInput quantity={quantity} />
      </StyledCartCardInputsContainer>
      <StyledCartTotalPrice>{formatCurrency(total)}</StyledCartTotalPrice>
      <StyledCartCardButtonsContainer>
        <RemoveFromCartButton />
      </StyledCartCardButtonsContainer>
    </StyledCartCard>
  );
};

const SummaryCard = ({ items, total = 0 }) => {
  return (
    <StyledSummaryCard>
      <StyledSummaryTitle>Summary</StyledSummaryTitle>
      <StyledSummaryDataContainer>
        <StyledSummaryData>
          <StyledSummarySubtitle>Items</StyledSummarySubtitle>
          <StyledSummaryValue>{items}</StyledSummaryValue>
        </StyledSummaryData>
        <StyledSummaryData>
          <StyledSummarySubtitle>Total</StyledSummarySubtitle>
          <StyledSummaryValue>{formatCurrency(total)}</StyledSummaryValue>
        </StyledSummaryData>
      </StyledSummaryDataContainer>
      <CheckoutButton />
    </StyledSummaryCard>
  );
};

export { ProductCard, CartCard, SummaryCard };
