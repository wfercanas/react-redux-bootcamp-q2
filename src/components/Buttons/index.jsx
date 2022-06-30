import React from "react";

import trash from "../../assets/icons/grey-trash.svg";

import {
  StyledAddToCartButton,
  StyledRemoveFromCartButton,
  StyledIcon,
  StyledLabel,
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

export { AddToCartButton, RemoveFromCartButton };
