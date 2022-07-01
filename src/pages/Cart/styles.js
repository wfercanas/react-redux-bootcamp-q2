import styled from "styled-components";

const StyledCartPage = styled.article`
  max-width: 1000px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const StyledTitle = styled.h1`
  grid-column: 1 / span 2;
  padding-bottom: 8px;
  margin-bottom: 48px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid var(--n400);
  color: var(--n400);
`;

const StyledCartProductsContainer = styled.div``;

const StyledCartSummaryContainer = styled.div``;

export {
  StyledCartPage,
  StyledTitle,
  StyledCartProductsContainer,
  StyledCartSummaryContainer,
};
