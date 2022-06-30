import React from "react";

import plus from "../../assets/icons/gray-plus.svg";
import minus from "../../assets/icons/gray-minus.svg";

import {
  StyledQuantityInputContainer,
  StyledButton,
  StyledQuantityInput,
  StyledOperator,
} from "./styles";

const QuantityInput = () => {
  return (
    <StyledQuantityInputContainer>
      <StyledButton>
        <StyledOperator src={minus} alt="decrease quantity" />
      </StyledButton>
      <StyledQuantityInput type="number" />
      <StyledButton>
        <StyledOperator src={plus} alt="increase quantity" />
      </StyledButton>
    </StyledQuantityInputContainer>
  );
};

export { QuantityInput };
