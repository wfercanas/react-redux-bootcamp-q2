import styled from "styled-components";

const StyledAddToCartButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: var(--y200);
  color: var(--n900);
`;

const StyledRemoveFromCartButton = styled.button`
  display: flex;
  gap: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledIcon = styled.img``;

const StyledLabel = styled.p`
  color: var(--n400);
  margin: 0;
`;

const StyledCheckoutButton = styled.button`
  border: none;
  padding: 12px 100px;
  background-color: var(--y200);
  cursor: pointer;
`;

const StyledLoginButton = styled.button`
  color: var(--n10);
  background-color: var(--n900);
  border: none;
  padding: 8px 16px;
  width: 300px;
  cursor: pointer;
`;

export {
  StyledAddToCartButton,
  StyledRemoveFromCartButton,
  StyledIcon,
  StyledLabel,
  StyledCheckoutButton,
  StyledLoginButton,
};
