import React from "react";
import { LoginButton } from "../Buttons";

import { LoginInput } from "../Inputs";
import { StyledLoginForm } from "./styles";

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <LoginInput type="text" placeholder="Username" required={true} />
      <LoginInput type="password" placeholder="Password" required={true} />
      <LoginButton />
    </StyledLoginForm>
  );
};

export { LoginForm };
