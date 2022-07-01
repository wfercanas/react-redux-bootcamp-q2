import React from "react";

import { LoginForm } from "../../components/Forms";

import greetingImage from "../../assets/images/shopping.png";

import {
  StyledLogin,
  StyledLoginGreetingContainer,
  StyledImage,
  StyledGreeting,
  StyledLoginFormContainer,
  StyledLoginTitle,
} from "./styles";

const LoginUI = () => {
  return (
    <StyledLogin>
      <StyledLoginGreetingContainer>
        <StyledImage src={greetingImage} alt="Girl with a shopping cart" />
        <StyledGreeting>Welcome to Wizestore!</StyledGreeting>
      </StyledLoginGreetingContainer>
      <StyledLoginFormContainer>
        <StyledLoginTitle>Access</StyledLoginTitle>
        <LoginForm />
      </StyledLoginFormContainer>
    </StyledLogin>
  );
};

export { LoginUI };
