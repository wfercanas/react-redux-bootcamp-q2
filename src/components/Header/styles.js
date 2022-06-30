import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  background-color: var(--n900);
  color: var(--n10);
`;

const StyledHeader = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  padding: 8px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.p`
  margin: 0;
  font-weight: bold;
`;

const StyledNav = styled.nav``;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  gap: 16px;
`;

const StyledListItem = styled.li``;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

export {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
};
