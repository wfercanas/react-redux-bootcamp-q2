import React from "react";

import trash from "../../assets/icons/grey-trash.svg";

import {
  StyledAddToCartButton,
  StyledRemoveFromCartButton,
  StyledIcon,
  StyledLabel,
  StyledCheckoutButton,
} from "./styles";

const AddToCartButton = () => {
  return <StyledAddToCartButton>Add To Cart</StyledAddToCartButton>;
};

const RemoveFromCartButton = () => {
  return (
    <StyledRemoveFromCartButton>
      <StyledIcon src={trash} alt="trash" />
      <StyledLabel>Remove</StyledLabel>
    </StyledRemoveFromCartButton>
  );
};

const CheckoutButton = () => {
  return <StyledCheckoutButton>Checkout</StyledCheckoutButton>;
};

export { AddToCartButton, RemoveFromCartButton, CheckoutButton };
