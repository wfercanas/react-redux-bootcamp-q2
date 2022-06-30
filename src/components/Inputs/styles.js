import styled from "styled-components";

const StyledQuantityInputContainer = styled.div`
  display: inline-block;
  border: 1px solid var(--n60);
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 16px;
`;

const StyledQuantityInput = styled.input`
  width: 2ch;
  padding: 4px 8px;
  text-align: center;
  border: none;
  color: var(--n900);

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledOperator = styled.p`
  margin: 0;
  padding: 4px;
  font-size: 18px;
  color: var(--n400);
`;

export {
  StyledQuantityInputContainer,
  StyledButton,
  StyledQuantityInput,
  StyledOperator,
};
