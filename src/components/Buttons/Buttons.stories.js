import {
  AddToCartButton,
  CheckoutButton,
  LoginButton,
  RemoveFromCartButton,
} from ".";

export default {
  title: "Components / Buttons",
  components: [
    AddToCartButton,
    RemoveFromCartButton,
    CheckoutButton,
    LoginButton,
  ],
};

export const AddToCart = (args) => {
  return <AddToCartButton {...args} />;
};

AddToCart.args = {};

export const RemoveFromCart = (args) => {
  return <RemoveFromCartButton {...args} />;
};

RemoveFromCart.args = {};

export const Checkout = (args) => {
  return <CheckoutButton {...args} />;
};

Checkout.args = {};

export const Login = (args) => {
  return <LoginButton {...args} />;
};

Login.args = {};
