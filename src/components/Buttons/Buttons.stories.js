import { AddToCartButton, RemoveFromCartButton } from ".";

export default {
  title: "Components / Buttons",
  components: [AddToCartButton, RemoveFromCartButton],
};

export const AddToCart = (args) => {
  return <AddToCartButton {...args} />;
};

AddToCart.args = {};

export const RemoveFromCart = (args) => {
  return <RemoveFromCartButton {...args} />;
};

RemoveFromCart.args = {};
