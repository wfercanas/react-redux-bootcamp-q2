import { LoginInput, QuantityInput } from ".";

export default {
  title: "Components / Inputs",
  components: [QuantityInput, LoginInput],
};

export const Quantity = (args) => {
  return <QuantityInput {...args} />;
};

export const Input = (args) => {
  return <LoginInput {...args} />;
};

Input.args = {
  type: "text",
  placeholder: "Username",
};
