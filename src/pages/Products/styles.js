import styled from "styled-components";

const StyledProductsPage = styled.article`
  margin: 64px;
`;

const StyledTitle = styled.h1`
  padding-bottom: 8px;
  margin-bottom: 48px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid var(--n400);
  color: var(--n400);
`;

const StyledProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`;

export { StyledProductsPage, StyledTitle, StyledProductsContainer };
