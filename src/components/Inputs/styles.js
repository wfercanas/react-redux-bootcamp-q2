import styled from "styled-components";

const StyledQuantityInputContainer = styled.div`
  width: 80px;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 0;
  border: 1px solid var(--n60);
  border-radius: 4px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 4px;
  border: none;
  border-radius: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledQuantityInput = styled.input`
  width: 3ch;
  justify-self: center;
  padding: 1px 4px;
  text-align: center;
  border: none;
  color: var(--n900);
  background-color: transparent;

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

const StyledOperator = styled.img`
  margin: 0;
  transform: scale(0.8);
`;

const StyledLoginInput = styled.input`
  display: block;
  border: 1px solid var(--n40);
  padding: 8px 16px;
  width: 300px;

  &:focus {
    outline: 1px solid var(--n60);
  }
`;

export {
  StyledQuantityInputContainer,
  StyledButton,
  StyledQuantityInput,
  StyledOperator,
  StyledLoginInput,
};
