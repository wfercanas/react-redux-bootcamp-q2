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
`;

export {
  StyledAddToCartButton,
  StyledRemoveFromCartButton,
  StyledIcon,
  StyledLabel,
};
