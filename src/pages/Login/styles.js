import styled from "styled-components";

const StyledLogin = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 3fr;
`;

const StyledLoginGreetingContainer = styled.div`
  height: inherit;
  width: 100%;
  background-color: var(--t200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 50%;
`;

const StyledGreeting = styled.p`
  color: var(--n10);
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const StyledLoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLoginTitle = styled.h1`
  width: 300px;
  color: var(--n400);
`;

export {
  StyledLogin,
  StyledLoginGreetingContainer,
  StyledImage,
  StyledGreeting,
  StyledLoginFormContainer,
  StyledLoginTitle,
};
