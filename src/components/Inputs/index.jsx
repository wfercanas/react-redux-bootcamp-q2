import React from "react";

import plus from "../../assets/icons/gray-plus.svg";
import minus from "../../assets/icons/gray-minus.svg";

import {
  StyledQuantityInputContainer,
  StyledButton,
  StyledQuantityInput,
  StyledOperator,
  StyledLoginInput,
} from "./styles";

const QuantityInput = ({ quantity = 1 }) => {
  return (
    <StyledQuantityInputContainer>
      <StyledButton>
        <StyledOperator src={minus} alt="decrease quantity" />
      </StyledButton>
      <StyledQuantityInput type="number" value={quantity} disabled />
      <StyledButton>
        <StyledOperator src={plus} alt="increase quantity" />
      </StyledButton>
    </StyledQuantityInputContainer>
  );
};

const LoginInput = ({ type = "text", placeholder = "", required = false }) => {
  return (
    <StyledLoginInput
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export { QuantityInput, LoginInput };
