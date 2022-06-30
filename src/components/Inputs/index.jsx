import React from "react";

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
        <StyledOperator>-</StyledOperator>
      </StyledButton>
      <StyledQuantityInput type="number" />
      <StyledButton>
        <StyledOperator>+</StyledOperator>
      </StyledButton>
    </StyledQuantityInputContainer>
  );
};

export { QuantityInput };
